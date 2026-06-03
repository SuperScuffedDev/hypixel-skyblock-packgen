import { colorWheel } from "../components/ColorWheel";
import { arrayIsEqual } from "./Compare";

var tool: string = "brush";
var color: number[] = [255, 0, 0];
export function setTool(newTool: string) {
    tool = newTool
}
export function setColor(newColor: number[]) {
    color = newColor
}

var ctx: CanvasRenderingContext2D,
canvas: HTMLCanvasElement;

var isToolActive = false;

type RGBA = [number, number, number, number];

export function mouseMove(e: MouseEvent) {
    const target = e.target as HTMLCanvasElement;
    const classList = target.classList;
    if (!classList.contains("canvas") || !(target instanceof HTMLCanvasElement) || !isToolActive) {
        return
    };
    use(e)
}

export function disableTool() {
    isToolActive = false
}

export function mouseDown(e: MouseEvent) {
    canvas = e.target as HTMLCanvasElement;
    const classList = canvas.classList;

    if (!classList.contains("canvas") || !(canvas instanceof HTMLCanvasElement)) {
        return
    };
    ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    ctx.fillStyle = `rgb(${color[0]},${color[1]},${color[2]})`
    isToolActive = true

    use(e)
}

function use(e: MouseEvent) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const canvasX = (e.clientX - rect.left) * scaleX;
    const canvasY = (e.clientY - rect.top) * scaleY;

    const floorX = Math.floor(canvasX);
    const floorY = Math.floor(canvasY);

    const imgData = ctx.getImageData(
        floorX,
        floorY,
        1,1
    );

    const pixel = imgData.data
    const rgba: RGBA = [
        pixel[0],
        pixel[1],
        pixel[2],
        pixel[3],
    ];

    switch(tool) {
        case "brush":
            draw(ctx, [floorX, floorY])
            break;
        case "erase":
            erase(ctx, [floorX, floorY])
            break;
        case "color-picker":
            pickColor(rgba)
            break;
        case "fill":
            if (arrayIsEqual([rgba[0], rgba[1], rgba[2]], color)) {
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

function floodFill(
    start: {x: number, y: number},
    target: RGBA,
) {
    const width = canvas.width
    const height = canvas.height
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
            const rgba = {
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
};

function pickColor(rgba: RGBA) {
    if (rgba[3] === 0) {
        return
    }
    colorWheel.rgb = [rgba[0], rgba[1], rgba[2]];
    colorWheel.redraw();
    setTool("brush")
}

function draw(ctx: CanvasRenderingContext2D, coords: [number, number]) {
    ctx.fillRect(
        coords[0],
        coords[1],
        1,1
    );
};

function erase(ctx: CanvasRenderingContext2D, coords: [number, number]) {
    ctx.clearRect(
        coords[0],
        coords[1],
        1,1
    );
};