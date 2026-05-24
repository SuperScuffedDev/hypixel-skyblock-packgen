import { onCleanup, onMount } from "solid-js"
import { arrayIsEqual } from "../utils/Compare";
import { colorWheel } from "./ColorWheel";

var canvasRef!: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;

var currentImage: CanvasImageData

type Props = {
    color: () => number[];
    setColor: any;
    tool: () => string;
    setTool: any; 
}

function viewport(props: Props) {
    onMount(
        () => {
            ctx = canvasRef.getContext("2d") as CanvasRenderingContext2D;
            ctx.imageSmoothingEnabled = false
            if (currentImage) {
                ctx.putImageData(currentImage, 0,0)
            }
        }
    );

    onCleanup(()=>{})

    return (
        <>
            <div class="canvas-container">
                <canvas id="canvas" width={16} height={16} ref={canvasRef} draggable={false} onMouseDown={
                    (e) => {
                        switch (e.button) {
                            case 0:
                                enableTool(props.color())
                                useTool(e, props)
                                break;
                        }
                    }
                } onMouseUp={
                    () => {
                        disableTool()
                    }
                } onMouseMove={
                    (e) => {
                        useTool(e, props)
                    }
                } onMouseLeave={
                    () => {
                        disableTool()
                    }
                }>

                </canvas>
            </div>
        </>
    );
};

var toolEnabled = false

function enableTool(color: number[]) {
    ctx.fillStyle = `rgb(${color[0]},${color[1]},${color[2]})`;
    toolEnabled = true
}
function disableTool() {
    toolEnabled = false
}

type RGBA = {r: number, g: number, b: number, a: number}

function floodFill(start: {x: number, y: number}, target: RGBA) {
    const width = canvasRef.width
    const height = canvasRef.height
    const stringTarget = JSON.stringify(target)

    function checkInBounds(nodePos: number[]) {
        if (
            nodePos[0] + 1 > width ||
            nodePos[0] < 0 ||
            nodePos[1] + 1 > height ||
            nodePos[1] < 0
        ) {
            return false
        }
        return true
    }

    function flood(nodePos: {x: number, y: number}) {
        var nodes = [
                [nodePos.x, nodePos.y + 1,],
                [nodePos.x, nodePos.y - 1,],
                [nodePos.x - 1, nodePos.y],
                [nodePos.x + 1, nodePos.y]
        ]

        for (let node of nodes) {
            if (!checkInBounds(node)) {
                continue
            }
            const imgData = ctx.getImageData(
                node[0],
                node[1],
                1,1
            )
            const pixel = imgData.data
            const rgba: RGBA = {
                r: pixel[0],
                g: pixel[1],
                b: pixel[2],
                a: pixel[3],
            }
            
            if (JSON.stringify(rgba) === stringTarget) {
                ctx.fillRect(
                    node[0],
                    node[1],
                    1,1
                );

                flood({x: node[0], y: node[1]})
            }
        }
        return
    }
    ctx.fillRect(
        start.x,
        start.y,
        1,1
    );
    flood(start)
}

function useTool(e: MouseEvent, props: Props) {
    if (!toolEnabled) {
        return
    }

    currentImage = ctx.getImageData(0,0, canvasRef.width, canvasRef.height)

    const rect = canvasRef.getBoundingClientRect();
    const scaleX = canvasRef.width / rect.width;
    const scaleY = canvasRef.height / rect.height;

    const canvasX = (e.clientX - rect.left) * scaleX;
    const canvasY = (e.clientY - rect.top) * scaleY;
    const floorX = Math.floor(canvasX)
    const floorY = Math.floor(canvasY)
    const imgData = ctx.getImageData(
        floorX,
        floorY,
        1,1
    )
    const pixel = imgData.data
    const rgba = {
        r: pixel[0],
        g: pixel[1],
        b: pixel[2],
        a: pixel[3],
    }

    switch (props.tool()) {
        case "color-picker":
            if (rgba.a === 0) {
                return
            }
            colorWheel.rgb = [rgba.r, rgba.g, rgba.b];
            colorWheel.redraw();
            props.setTool("brush")
            break;
        case "brush":
            ctx.fillRect(
                floorX,
                floorY,
                1,1
            );
            break;
        case "erase":
            ctx.clearRect(
                floorX,
                floorY,
                1,1
            );
            break;
        case "fill":
            if (arrayIsEqual([rgba.r, rgba.g, rgba.b], props.color())) {
                return
            }

            floodFill(
                {
                    x: floorX,
                    y: floorY,
                }, 
                rgba
            )
            break;
    }
}

export default viewport