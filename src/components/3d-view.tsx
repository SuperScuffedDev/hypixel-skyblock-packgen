import { onCleanup, onMount } from "solid-js";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { canvasState } from "../utils/canvas_state";

import { bodyGeometry } from "../utils/threejs/player_model";
import { armorGeometry } from "../utils/threejs/armor"

var containerRef!: HTMLDivElement;

var scene: THREE.Scene,
camera: THREE.Camera,
renderer: THREE.WebGLRenderer,
controls: any;

type Props = {}

function viewport(props: Props) {
    onMount(
           () => {
                scene = new THREE.Scene();
                camera = new THREE.PerspectiveCamera(
                    75,
                    1000 / 1000,
                    0.1,
                    1000
                );
                renderer = new THREE.WebGLRenderer();

                renderer.setClearColor(0xffffff, 0)

                renderer.setSize( 1000, 1000 );
                containerRef.appendChild( renderer.domElement );

                controls = new OrbitControls(camera, renderer.domElement);

                controls.enableDamping = true
                controls.enablePan = false;
                controls.minDistance = 2;
                controls.maxDistance = 8;

                // bodyGeometry(scene)
                
                var canvas = document.createElement("canvas")
                canvas.width = 48
                canvas.height = 64
                var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
                ctx.imageSmoothingEnabled = false
                ctx.putImageData(canvasState, 0,0)

                const headCanvas = new  THREE.CanvasTexture(canvas)
                headCanvas.magFilter = THREE.NearestFilter
                const headGeometry = new THREE.BoxGeometry( 1,1,1);
                
                const atlasTiles = [
                    {
                        "uX": (1 / 3) * 2,
                        "uY": 0.25,
                    }, // right
                    {
                        "uX": 0,
                        "uY": 0.25,
                    }, // left
                    {
                        "uX": (1 / 3),
                        "uY": 0.5,
                    }, // top
                    {
                        "uX": (1 / 3),
                        "uY": 0,
                    }, // bottom
                    {
                        "uX": (1 / 3),
                        "uY": 0.25,
                    }, // front
                    {
                        "uX": 1 / 3,
                        "uY": 0.75,
                    }, // back
                ]

                const uW = 1 / 3
                const uH = 0.25
                const uvAttribute = headGeometry.attributes.uv;

                for (let i = 0; i < atlasTiles.length; i++) {
                    const startVertexIndex = i * 4;

                    uvAttribute.setX(startVertexIndex, atlasTiles[i]["uX"]);
                    uvAttribute.setY(startVertexIndex, atlasTiles[i]["uY"]);

                    uvAttribute.setX(startVertexIndex + 1, atlasTiles[i]["uX"] + uW);
                    uvAttribute.setY(startVertexIndex + 1, atlasTiles[i]["uY"]);

                    uvAttribute.setX(startVertexIndex + 2, atlasTiles[i]["uX"]);
                    uvAttribute.setY(startVertexIndex + 2, atlasTiles[i]["uY"] + uH);

                    uvAttribute.setX(startVertexIndex + 3, atlasTiles[i]["uX"] + uW);
                    uvAttribute.setY(startVertexIndex + 3, atlasTiles[i]["uY"] + uH);
                }

                uvAttribute.needsUpdate = true

                const headMaterial = new THREE.MeshBasicMaterial( { map: headCanvas, transparent: true } );
                const head = new THREE.Mesh( headGeometry, headMaterial );
                head.position.set(0,0,0)
                scene.add( head );
                camera.position.z = 10;

                function animate( time ) {
                    controls.update()
                    renderer.render( scene, camera );
                }

                renderer.setAnimationLoop( animate );
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
