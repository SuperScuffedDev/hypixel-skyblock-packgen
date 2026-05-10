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
                                enableTool()
                                useTool(e, props.color)
                                break;
                        }
                    }
                } onMouseUp={
                    (e) => {
                        disableTool()
                    }
                } onMouseMove={
                    (e) => {
                        useTool(e, props.color())
                    }
                }>

                </canvas>
            </div>
        </>
    );
};

var toolEnabled = false

function enableTool() {
    toolEnabled = true
}
function disableTool() {
    toolEnabled = false
}

function useTool(e: MouseEvent, color: string) {
    if (!toolEnabled) {
        return
    }
    ctx.fillStyle = color;
    
    const rect = canvasRef.getBoundingClientRect();
    const scaleX = canvasRef.width / rect.width;
    const scaleY = canvasRef.height / rect.height;

    const canvasX = (e.clientX - rect.left) * scaleX;
    const canvasY = (e.clientY - rect.top) * scaleY;

    console.log(`${Math.floor(canvasX)}, ${Math.floor(canvasY)}`)
    ctx.fillRect(
        Math.floor(canvasX),
        Math.floor(canvasY),
        1,1
    );
}

export default Canvas