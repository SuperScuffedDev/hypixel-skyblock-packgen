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
                canvas.width = 64
                canvas.height = 64
                var ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
                ctx.imageSmoothingEnabled = false
                ctx.putImageData(canvasState, 0,0)

                const textureCanvas = new  THREE.CanvasTexture(canvas)
                
                textureCanvas.magFilter = THREE.NearestFilter
                textureCanvas.colorSpace = THREE.SRGBColorSpace;
                const innerGeometry = new THREE.BoxGeometry( 1,1,1);
                const outerGeometry = new THREE.BoxGeometry( 1.05,1.05,1.05);
                
                const innerAtlasTiles = [
                    {
                        "uX": 0.25,
                        "uY": 0.875,
                    }, // left
                    {
                        "uX": 0,
                        "uY": 0.875,
                    }, // right
                    {
                        "uX": 0.125,
                        "uY": 1,
                    }, // top
                    {
                        "uX": 0.25,
                        "uY": 0.875,
                    }, // bottom
                    {
                        "uX": 0.125,
                        "uY": 0.875,
                    }, // front
                    {
                        "uX": 0.375,
                        "uY": 0.875,
                    }, // back
                ]

                const outerAtlasTiles = [
                    {
                        "uX": 0.75,
                        "uY": 0.875,
                    }, // left
                    {
                        "uX": 0.5,
                        "uY": 0.875,
                    }, // right
                    {
                        "uX": 0.625,
                        "uY": 1,
                    }, // top
                    {
                        "uX": 0.75,
                        "uY": 0.875,
                    }, // bottom
                    {
                        "uX": 0.625,
                        "uY": 0.875,
                    }, // front
                    {
                        "uX": 0.875,
                        "uY": 0.875,
                    }, // back
                ]

                const uW = 0.125
                const uH = 0.125
                const uvAttributeInner = innerGeometry.attributes.uv;
                const uvAttributeOuter = outerGeometry.attributes.uv;

                function wrapInner() {

                    var startVertexIndex = 0 * 4;

                    uvAttributeInner.setX(startVertexIndex, innerAtlasTiles[0]["uX"]);
                    uvAttributeInner.setY(startVertexIndex, innerAtlasTiles[0]["uY"]);

                    uvAttributeInner.setX(startVertexIndex + 1, innerAtlasTiles[0]["uX"] + uW);
                    uvAttributeInner.setY(startVertexIndex + 1, innerAtlasTiles[0]["uY"]);

                    uvAttributeInner.setX(startVertexIndex + 2, innerAtlasTiles[0]["uX"]);
                    uvAttributeInner.setY(startVertexIndex + 2, innerAtlasTiles[0]["uY"] - uH);

                    uvAttributeInner.setX(startVertexIndex + 3, innerAtlasTiles[0]["uX"] + uW);
                    uvAttributeInner.setY(startVertexIndex + 3, innerAtlasTiles[0]["uY"] - uH);

                    var startVertexIndex = 1 * 4;

                    uvAttributeInner.setX(startVertexIndex, innerAtlasTiles[1]["uX"]);
                    uvAttributeInner.setY(startVertexIndex, innerAtlasTiles[1]["uY"]);

                    uvAttributeInner.setX(startVertexIndex + 1, innerAtlasTiles[1]["uX"] + uW);
                    uvAttributeInner.setY(startVertexIndex + 1, innerAtlasTiles[1]["uY"]);

                    uvAttributeInner.setX(startVertexIndex + 2, innerAtlasTiles[1]["uX"]);
                    uvAttributeInner.setY(startVertexIndex + 2, innerAtlasTiles[1]["uY"] - uH);

                    uvAttributeInner.setX(startVertexIndex + 3, innerAtlasTiles[1]["uX"] + uW);
                    uvAttributeInner.setY(startVertexIndex + 3, innerAtlasTiles[1]["uY"] - uH);

                    var startVertexIndex = 2 * 4;

                    uvAttributeInner.setX(startVertexIndex, innerAtlasTiles[2]["uX"]);
                    uvAttributeInner.setY(startVertexIndex, innerAtlasTiles[2]["uY"]);

                    uvAttributeInner.setX(startVertexIndex + 1, innerAtlasTiles[2]["uX"] + uW);
                    uvAttributeInner.setY(startVertexIndex + 1, innerAtlasTiles[2]["uY"]);

                    uvAttributeInner.setX(startVertexIndex + 2, innerAtlasTiles[2]["uX"]);
                    uvAttributeInner.setY(startVertexIndex + 2, innerAtlasTiles[2]["uY"] - uH);

                    uvAttributeInner.setX(startVertexIndex + 3, innerAtlasTiles[2]["uX"] + uW);
                    uvAttributeInner.setY(startVertexIndex + 3, innerAtlasTiles[2]["uY"] - uH);

                    var startVertexIndex = 3 * 4;

                    uvAttributeInner.setX(startVertexIndex, innerAtlasTiles[3]["uX"]);
                    uvAttributeInner.setY(startVertexIndex, innerAtlasTiles[3]["uY"]);

                    uvAttributeInner.setX(startVertexIndex + 1, innerAtlasTiles[3]["uX"] + uW);
                    uvAttributeInner.setY(startVertexIndex + 1, innerAtlasTiles[3]["uY"]);

                    uvAttributeInner.setX(startVertexIndex + 2, innerAtlasTiles[3]["uX"]);
                    uvAttributeInner.setY(startVertexIndex + 2, innerAtlasTiles[3]["uY"] + uH);

                    uvAttributeInner.setX(startVertexIndex + 3, innerAtlasTiles[3]["uX"] + uW);
                    uvAttributeInner.setY(startVertexIndex + 3, innerAtlasTiles[3]["uY"] + uH);

                    var startVertexIndex = 4 * 4;

                    uvAttributeInner.setX(startVertexIndex, innerAtlasTiles[4]["uX"]);
                    uvAttributeInner.setY(startVertexIndex, innerAtlasTiles[4]["uY"]);

                    uvAttributeInner.setX(startVertexIndex + 1, innerAtlasTiles[4]["uX"] + uW);
                    uvAttributeInner.setY(startVertexIndex + 1, innerAtlasTiles[4]["uY"]);

                    uvAttributeInner.setX(startVertexIndex + 2, innerAtlasTiles[4]["uX"]);
                    uvAttributeInner.setY(startVertexIndex + 2, innerAtlasTiles[4]["uY"] - uH);

                    uvAttributeInner.setX(startVertexIndex + 3, innerAtlasTiles[4]["uX"] + uW);
                    uvAttributeInner.setY(startVertexIndex + 3, innerAtlasTiles[4]["uY"] - uH);


                    startVertexIndex = 5 * 4;

                    uvAttributeInner.setX(startVertexIndex, innerAtlasTiles[5]["uX"]);
                    uvAttributeInner.setY(startVertexIndex, innerAtlasTiles[5]["uY"]);

                    uvAttributeInner.setX(startVertexIndex + 1, innerAtlasTiles[5]["uX"] + uW);
                    uvAttributeInner.setY(startVertexIndex + 1, innerAtlasTiles[5]["uY"]);

                    uvAttributeInner.setX(startVertexIndex + 2, innerAtlasTiles[5]["uX"]);
                    uvAttributeInner.setY(startVertexIndex + 2, innerAtlasTiles[5]["uY"] - uH);
                    
                    uvAttributeInner.setX(startVertexIndex + 3, innerAtlasTiles[5]["uX"] + uW);
                    uvAttributeInner.setY(startVertexIndex + 3, innerAtlasTiles[5]["uY"] - uH);
                }

                 function wrapOuter() {

                    var startVertexIndex = 0 * 4;

                    uvAttributeOuter.setX(startVertexIndex, outerAtlasTiles[0]["uX"]);
                    uvAttributeOuter.setY(startVertexIndex, outerAtlasTiles[0]["uY"]);

                    uvAttributeOuter.setX(startVertexIndex + 1, outerAtlasTiles[0]["uX"] + uW);
                    uvAttributeOuter.setY(startVertexIndex + 1, outerAtlasTiles[0]["uY"]);

                    uvAttributeOuter.setX(startVertexIndex + 2, outerAtlasTiles[0]["uX"]);
                    uvAttributeOuter.setY(startVertexIndex + 2, outerAtlasTiles[0]["uY"] - uH);

                    uvAttributeOuter.setX(startVertexIndex + 3, outerAtlasTiles[0]["uX"] + uW);
                    uvAttributeOuter.setY(startVertexIndex + 3, outerAtlasTiles[0]["uY"] - uH);

                    var startVertexIndex = 1 * 4;

                    uvAttributeOuter.setX(startVertexIndex, outerAtlasTiles[1]["uX"]);
                    uvAttributeOuter.setY(startVertexIndex, outerAtlasTiles[1]["uY"]);

                    uvAttributeOuter.setX(startVertexIndex + 1, outerAtlasTiles[1]["uX"] + uW);
                    uvAttributeOuter.setY(startVertexIndex + 1, outerAtlasTiles[1]["uY"]);

                    uvAttributeOuter.setX(startVertexIndex + 2, outerAtlasTiles[1]["uX"]);
                    uvAttributeOuter.setY(startVertexIndex + 2, outerAtlasTiles[1]["uY"] - uH);

                    uvAttributeOuter.setX(startVertexIndex + 3, outerAtlasTiles[1]["uX"] + uW);
                    uvAttributeOuter.setY(startVertexIndex + 3, outerAtlasTiles[1]["uY"] - uH);

                    var startVertexIndex = 2 * 4;

                    uvAttributeOuter.setX(startVertexIndex, outerAtlasTiles[2]["uX"]);
                    uvAttributeOuter.setY(startVertexIndex, outerAtlasTiles[2]["uY"]);

                    uvAttributeOuter.setX(startVertexIndex + 1, outerAtlasTiles[2]["uX"] + uW);
                    uvAttributeOuter.setY(startVertexIndex + 1, outerAtlasTiles[2]["uY"]);

                    uvAttributeOuter.setX(startVertexIndex + 2, outerAtlasTiles[2]["uX"]);
                    uvAttributeOuter.setY(startVertexIndex + 2, outerAtlasTiles[2]["uY"] - uH);

                    uvAttributeOuter.setX(startVertexIndex + 3, outerAtlasTiles[2]["uX"] + uW);
                    uvAttributeOuter.setY(startVertexIndex + 3, outerAtlasTiles[2]["uY"] - uH);

                    var startVertexIndex = 3 * 4;

                    uvAttributeOuter.setX(startVertexIndex, outerAtlasTiles[3]["uX"]);
                    uvAttributeOuter.setY(startVertexIndex, outerAtlasTiles[3]["uY"]);

                    uvAttributeOuter.setX(startVertexIndex + 1, outerAtlasTiles[3]["uX"] + uW);
                    uvAttributeOuter.setY(startVertexIndex + 1, outerAtlasTiles[3]["uY"]);

                    uvAttributeOuter.setX(startVertexIndex + 2, outerAtlasTiles[3]["uX"]);
                    uvAttributeOuter.setY(startVertexIndex + 2, outerAtlasTiles[3]["uY"] + uH);

                    uvAttributeOuter.setX(startVertexIndex + 3, outerAtlasTiles[3]["uX"] + uW);
                    uvAttributeOuter.setY(startVertexIndex + 3, outerAtlasTiles[3]["uY"] + uH);

                    var startVertexIndex = 4 * 4;

                    uvAttributeOuter.setX(startVertexIndex, outerAtlasTiles[4]["uX"]);
                    uvAttributeOuter.setY(startVertexIndex, outerAtlasTiles[4]["uY"]);

                    uvAttributeOuter.setX(startVertexIndex + 1, outerAtlasTiles[4]["uX"] + uW);
                    uvAttributeOuter.setY(startVertexIndex + 1, outerAtlasTiles[4]["uY"]);

                    uvAttributeOuter.setX(startVertexIndex + 2, outerAtlasTiles[4]["uX"]);
                    uvAttributeOuter.setY(startVertexIndex + 2, outerAtlasTiles[4]["uY"] - uH);

                    uvAttributeOuter.setX(startVertexIndex + 3, outerAtlasTiles[4]["uX"] + uW);
                    uvAttributeOuter.setY(startVertexIndex + 3, outerAtlasTiles[4]["uY"] - uH);


                    startVertexIndex = 5 * 4;

                    uvAttributeOuter.setX(startVertexIndex, outerAtlasTiles[5]["uX"]);
                    uvAttributeOuter.setY(startVertexIndex, outerAtlasTiles[5]["uY"]);

                    uvAttributeOuter.setX(startVertexIndex + 1, outerAtlasTiles[5]["uX"] + uW);
                    uvAttributeOuter.setY(startVertexIndex + 1, outerAtlasTiles[5]["uY"]);

                    uvAttributeOuter.setX(startVertexIndex + 2, outerAtlasTiles[5]["uX"]);
                    uvAttributeOuter.setY(startVertexIndex + 2, outerAtlasTiles[5]["uY"] - uH);
                    
                    uvAttributeOuter.setX(startVertexIndex + 3, outerAtlasTiles[5]["uX"] + uW);
                    uvAttributeOuter.setY(startVertexIndex + 3, outerAtlasTiles[5]["uY"] - uH);
                }

                wrapInner()
                wrapOuter()

                uvAttributeInner.needsUpdate = true
                uvAttributeOuter.needsUpdate = true

                const material = new THREE.MeshBasicMaterial( { map: textureCanvas, transparent: true, side: THREE.DoubleSide } );
                const inner = new THREE.Mesh( innerGeometry, material );
                const outer = new THREE.Mesh( outerGeometry, material );
                inner.position.set(0,0,0)
                outer.position.set(0,0,0)
                scene.add( inner );
                scene.add( outer );
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
