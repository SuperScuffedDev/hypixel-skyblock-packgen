import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { headModel, humanoidModel, leggingsModel } from "../state_manager";

var canvasHead: HTMLCanvasElement,
canvasHumanoid: HTMLCanvasElement,
canvasLeggings: HTMLCanvasElement;

var ctxHead: CanvasRenderingContext2D,
ctxHumanoid: CanvasRenderingContext2D,
ctxLeggings: CanvasRenderingContext2D;

var scene: THREE.Scene,
camera: THREE.Camera,
renderer: THREE.WebGLRenderer,
controls: any;

export function init(container: HTMLDivElement): [
    THREE.Scene,
    HTMLCanvasElement,
    HTMLCanvasElement,
    HTMLCanvasElement,
    CanvasRenderingContext2D,
    CanvasRenderingContext2D,
    CanvasRenderingContext2D,
] {
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

    container.appendChild( renderer.domElement );

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true
    controls.enablePan = false;
    controls.minDistance = 2;
    controls.maxDistance = 20;

    camera.position.z = 10;
    function animate() {
        controls.update()
        renderer.render( scene, camera );
    }
    renderer.setAnimationLoop( animate );

    canvasHead = document.createElement("canvas")
    canvasHead.width = 64
    canvasHead.height = 64

    canvasHumanoid = document.createElement("canvas")
    canvasHumanoid.width = 64
    canvasHumanoid.height = 32

    canvasLeggings = document.createElement("canvas")
    canvasLeggings.width = 64
    canvasLeggings.height = 32

    ctxHead = canvasHead.getContext("2d") as CanvasRenderingContext2D;
    ctxHead.imageSmoothingEnabled = false
    if (headModel) {
        ctxHead.putImageData(headModel, 0,0)
    }

    ctxHumanoid = canvasHumanoid.getContext("2d") as CanvasRenderingContext2D;
    ctxHumanoid.imageSmoothingEnabled = false
    if (humanoidModel) {
        ctxHumanoid.putImageData(humanoidModel, 0,0)
    }

    ctxLeggings = canvasLeggings.getContext("2d") as CanvasRenderingContext2D;
    ctxLeggings.imageSmoothingEnabled = false
    if (leggingsModel) {
        ctxLeggings.putImageData(leggingsModel, 0,0)
    }

    return [
        scene,
        canvasHead,
        canvasHumanoid,
        canvasLeggings,
        ctxHead,
        ctxHumanoid,
        ctxLeggings
    ]
}