import { onCleanup, onMount } from "solid-js";
import { init } from "../utils/threejs/builder";
import { bootsModel, chestplateModel, headModel, playerModel } from "../utils/threejs/modelRenderer"

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
                headModel(scene, canvasHumanoid)
                chestplateModel(scene, canvasHumanoid)
                bootsModel(scene, canvasHumanoid)
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
