import { onCleanup, onMount } from "solid-js";
import { init } from "../utils/threejs/builder";
import { chestplateModel, headModel, playerModel } from "../utils/threejs/modelRenderer"

var containerRef!: HTMLDivElement;

function viewport() {
    onMount(
           () => {
                const [
                    scene,
                    canvasHead,
                    canvasHumanoid,
                    canvasLeggings,
                    ctxHead,
                    ctxHumanoid,
                    ctxLeggings
                ] = init(containerRef)

                playerModel(scene)
                headModel(scene, canvasHead)
                chestplateModel(scene, canvasHumanoid)
           }
       );
   
       onCleanup(()=>{})
   
       return (
           <>
               <div class="canvas-container" ref={containerRef} style={
                {
                    "width": "1000px",
                    "height": "1000px",
                    "border": "8px solid red",
                    "overflow": "hidden"
                }
               }>
               </div>
           </>
       );
}

export default viewport
