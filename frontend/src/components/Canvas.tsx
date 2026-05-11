import { createSignal, onCleanup, onMount } from "solid-js"

var canvasRef!: HTMLCanvasElement;
var dragging = false;
var ctx: CanvasRenderingContext2D;

function dragHandler(e: MouseEvent) {
    dragging = true
}

function endDrag() {
    if (dragging) {
        dragging = false
    }
};

type Props = {
    color: any;
    setColor: any;
    tool: () => string;
    setTool: any; 
}

function Canvas(props: Props) {
    onMount(
        () => {
            ctx = canvasRef.getContext("2d") as CanvasRenderingContext2D;
            ctx.imageSmoothingEnabled = false
        }
    );

    onCleanup(()=>{})

    return (
        <>
            <div class="canvas-container" onMouseDown={
                (e) => {
                    switch (e.button) {
                        case 1:
                            dragHandler(e)
                            break;
                    }
                }
            } onMouseUp={
                (e) => {
                    switch (e.button) {
                        case 1:
                            endDrag()
                            break;
                    }
                }
            }>
                <canvas id="canvas" width={16} height={16} ref={canvasRef} onMouseDown={
                    (e) => {
                        switch (e.button) {
                            case 0:
                                enableTool(props.color())
                                useTool(e, props)
                                break;
                        }
                    }
                } onMouseUp={
                    (e) => {
                        disableTool()
                    }
                } onMouseMove={
                    (e) => {
                        useTool(e, props)
                    }
                } onMouseLeave={
                    (e) => {
                        disableTool()
                    }
                }>

                </canvas>
            </div>
        </>
    );
};

var toolEnabled = false

function enableTool(color: string) {
    ctx.fillStyle = color;
    toolEnabled = true
}
function disableTool() {
    toolEnabled = false
}

function useTool(e: MouseEvent, props: {tool: () => string}) {
    if (!toolEnabled) {
        return
    }
    
    const rect = canvasRef.getBoundingClientRect();
    const scaleX = canvasRef.width / rect.width;
    const scaleY = canvasRef.height / rect.height;

    const canvasX = (e.clientX - rect.left) * scaleX;
    const canvasY = (e.clientY - rect.top) * scaleY;

    switch (props.tool()) {
        case "brush":
            ctx.fillRect(
                Math.floor(canvasX),
                Math.floor(canvasY),
                1,1
            );
            break;
        case "erase":
            ctx.clearRect(
                Math.floor(canvasX),
                Math.floor(canvasY),
                1,1
            );
            break;
    }
}

export default Canvas