import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

var scene: THREE.Scene,
camera: THREE.PerspectiveCamera,
renderer: THREE.WebGLRenderer,
controls: any;

export function init(container: HTMLDivElement): [THREE.Scene, THREE.WebGLRenderer, THREE.PerspectiveCamera, any] {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        75,
        500 / 1000,
        0.1,
        1000
    );
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0xffffff, 0)
    renderer.setSize( 500, 1000 );

    container.appendChild( renderer.domElement );

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true
    controls.enablePan = false;
    controls.minDistance = 2;
    controls.maxDistance = 20;

    camera.position.z = 10;

    return [scene, renderer, camera, controls]
}