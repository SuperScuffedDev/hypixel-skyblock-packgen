import { onCleanup, onMount } from "solid-js";
import { init } from "../utils/threejs/builder";
import { bootsModel, chestplateModel, headModel, leggingsModel, playerModel } from "../utils/threejs/modelRenderer"
import { headImage, humanoidImage, leggingsImage, setHumanoidCanvas, setLeggingsCanvas } from "../utils/state_manager";
import * as THREE from "three";
import { disableTool, mouseDown, mouseMove } from "../utils/canvas-painter";
import dowload_icon from "../assets/images/download.svg";
import upload_icon from "../assets/images/upload.svg";

var scene: THREE.Scene

var sceneContainerRef!: HTMLDivElement;
var humanoidCanvasRef!: HTMLCanvasElement,
leggingsCanvasRef!: HTMLCanvasElement;

var ctxHumanoid: CanvasRenderingContext2D,
ctxLeggings: CanvasRenderingContext2D;

function viewport() {
    onMount(
           () => {
                var [threeScene, renderer, camera, controls ] = init(sceneContainerRef)
                scene = threeScene

                playerModel(scene)
                var headTexture = headModel(scene, humanoidCanvasRef)
                var chestplateTexture = chestplateModel(scene, humanoidCanvasRef)
                var bootsTexture = bootsModel(scene, humanoidCanvasRef)
                var leggingsTexture = leggingsModel(scene, leggingsCanvasRef)

                function animate() {
                    controls.update()
                    renderer.render( scene, camera );
                    headTexture.needsUpdate = true
                    chestplateTexture.needsUpdate = true
                    bootsTexture.needsUpdate = true
                    leggingsTexture.needsUpdate = true
                }
                renderer.setAnimationLoop( animate );

                ctxHumanoid = humanoidCanvasRef.getContext("2d") as CanvasRenderingContext2D;
                ctxHumanoid.imageSmoothingEnabled = false
                if (humanoidImage) {
                    ctxHumanoid.putImageData(humanoidImage, 0,0)
                }
                ctxLeggings = leggingsCanvasRef.getContext("2d") as CanvasRenderingContext2D;
                ctxLeggings.imageSmoothingEnabled = false
                if (leggingsImage) {
                    ctxLeggings.putImageData(leggingsImage, 0,0)
                }
           }
       );
   
       onCleanup(()=>{})
   
       return (
            <>
                <div id="model-grid">
                    <div class="scene" ref={sceneContainerRef} style={
                        {
                            "width": "500px",
                            "height": "1000px",
                            "overflow": "hidden"
                        }
                    }>
                    </div>
                    <div style={
                        {
                            "position": "relative",
                            "width": "1000px",
                            "height": "500px",
                        }
                    }>
                        <canvas classList={
                            {
                                "humanoid": true,
                                "canvas": true
                            }
                        } width={64} height={32} ref={humanoidCanvasRef} draggable={false} style={
                            {
                                "width": "1000px",
                                "height": "500px",
                                "border": "8px solid #6b6b6b",
                            }
                        } onMouseDown={
                            (e) => {
                                mouseDown(e)
                            }
                        } onMouseUp={
                            () => {
                                disableTool()
                            }
                        } onMouseMove={
                            (e) => {
                                mouseMove(e)
                            }
                        } onMouseLeave={
                            () => {
                                disableTool()
                            }
                        }>
                        </canvas>
                        <div style={
                            {
                                "width": "100px",
                                "height": "50px",
                                "position": "absolute",
                                "top": "8px",
                                "right": "8px",
                                "display": "flex",
                                "margin": "8px",
                                "gap": "8px"
                            }
                        }>
                            <button classList={
                                {
                                    "upload": true,
                                }
                            } style={
                                {    
                                    "width": "50px",
                                    "height": "50px",
                                    "border": "2px solid #6b6b6b",
                                    "border-radius": "16px",
                                    "display": "flex",
                                    "justify-content": "center",
                                    "align-items": "center"
                                }
                            } onClick={
                                () => {
                                    upload(scene, humanoidCanvasRef, ctxHumanoid, setHumanoidCanvas)
                                }
                            }>
                                <img src={upload_icon} width="45px" height="45px"></img>
                            </button>
                            <button classList={
                                {
                                    "download": true,
                                }
                            } style={
                                {    
                                    "width": "50px",
                                    "height": "50px",
                                    "border": "2px solid #6b6b6b",
                                    "border-radius": "16px",
                                    "display": "flex",
                                    "justify-content": "center",
                                    "align-items": "center"
                                }
                            } onClick={
                                () => {
                                    download(humanoidCanvasRef)
                                }
                            }>
                                <img src={dowload_icon} width="45px" height="45px"></img>
                            </button>
                        </div>
                        
                    </div>
                    <div style={
                        {
                            "position": "relative",
                            "width": "1000px",
                            "height": "500px",
                        }
                    }>
                        <canvas classList={
                            {
                                "leggings": true,
                                "canvas": true
                            }
                        } width={64} height={32} ref={leggingsCanvasRef} draggable={false} style={
                            {
                                "width": "1000px",
                                "height": "500px",
                                "border": "8px solid #6b6b6b",
                            }
                        } onMouseDown={
                            (e) => {
                                mouseDown(e)
                            }
                        } onMouseUp={
                            () => {
                                disableTool()
                            }
                        } onMouseMove={
                            (e) => {
                                mouseMove(e)
                            }
                        } onMouseLeave={
                            () => {
                                disableTool()
                            }
                        }>
                        </canvas>
                        <div style={
                            {
                                "width": "108px",
                                "height": "50px",
                                "position": "absolute",
                                "top": "8px",
                                "right": "8px",
                                "display": "flex",
                                "margin": "8px",
                                "gap": "8px"
                            }
                        }>
                            <button classList={
                                {
                                    "upload": true,
                                }
                            } style={
                                {    
                                    "width": "50px",
                                    "height": "50px",
                                    "border": "2px solid #6b6b6b",
                                    "border-radius": "16px",
                                    "display": "flex",
                                    "justify-content": "center",
                                    "align-items": "center"
                                }
                            } onClick={
                                () => {
                                    upload(scene, leggingsCanvasRef, ctxLeggings, setLeggingsCanvas)
                                }
                            }>
                                <img src={upload_icon} width="45px" height="45px"></img>
                            </button>
                            <button classList={
                                {
                                    "download": true,
                                }
                            } style={
                                {    
                                    "width": "50px",
                                    "height": "50px",
                                    "border": "2px solid #6b6b6b",
                                    "border-radius": "16px",
                                    "display": "flex",
                                    "justify-content": "center",
                                    "align-items": "center"
                                }
                            } onClick={
                                () => {
                                    download(leggingsCanvasRef)
                                }
                            }>
                                <img src={dowload_icon} width="45px" height="45px"></img>
                            </button>
                        </div>
                    </div>
                </div>
                
            </>
       );
}

function upload(scene: THREE.Scene, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, setter: any) {
    const input = document.createElement("input");
    input.type = "file";
    input.onchange = (e) => {
        const target = e.target as HTMLInputElement
        const files: FileList | null = target.files;
        const reader = new FileReader();
        if (!files) return

        const img = files[0]
        reader.onload = (ee) => {
            const img = new Image()
            img.onload = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height)
                ctx.drawImage(img, 0, 0)
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
                setter(imageData)
            }
            img.src = ee.target?.result as string;
        }
        reader.readAsDataURL(img)
    }
    input.click()
    input.remove()
}

function download(canvas: HTMLCanvasElement) {
    const imgURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imgURL
    link.download = "texture.png"

    link.click()
    link.remove()
}

export default viewport
