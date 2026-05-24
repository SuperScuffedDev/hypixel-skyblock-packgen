import { onCleanup, onMount } from "solid-js"
import { render } from "solid-js/web";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

var containerRef!: HTMLDivElement;
var ctx: CanvasRenderingContext2D;

var scene: any;
var camera: any;
var renderer: any;
var controls: any;

type Props = {}

function bodyGeometry() {
    const headGeometry = new THREE.BoxGeometry( 2, 2, 2 );
    const headMaterial = new THREE.MeshBasicMaterial( { color: 0x220022, wireframe: true } );
    const head = new THREE.Mesh( headGeometry, headMaterial );
    head.position.set(0,2.5,0)
    scene.add( head );

    const bodyGeometry = new THREE.BoxGeometry( 2, 3, 1 );
    const bodyMaterial = new THREE.MeshBasicMaterial( { color: 0x220022, wireframe: true } );
    const body = new THREE.Mesh( bodyGeometry, bodyMaterial );
    scene.add( body );

    const leftArmGeometry = new THREE.BoxGeometry( 1, 3, 1 );
    const leftArmMaterial = new THREE.MeshBasicMaterial( { color: 0x220022, wireframe: true } );
    const leftArm = new THREE.Mesh( leftArmGeometry, leftArmMaterial );
    scene.add( leftArm );
    leftArm.position.set(-1.5,0,0)

    const rightArmGeometry = new THREE.BoxGeometry( 1, 3, 1 );
    const rightArmMaterial = new THREE.MeshBasicMaterial( { color: 0x220022, wireframe: true } );
    const rightArm = new THREE.Mesh( rightArmGeometry, rightArmMaterial );
    scene.add( rightArm );
    rightArm.position.set(1.5,0,0)

    const leftLegGeometry = new THREE.BoxGeometry( 1, 3, 1 );
    const leftLegMaterial = new THREE.MeshBasicMaterial( { color: 0x220022, wireframe: true } );
    const leftLeg = new THREE.Mesh( leftLegGeometry, leftLegMaterial );
    scene.add( leftLeg );
    leftLeg.position.set(-0.5,-3,0)

    const rightLegGeometry = new THREE.BoxGeometry( 1, 3, 1 );
    const rightLegMaterial = new THREE.MeshBasicMaterial( { color: 0x220022, wireframe: true } );
    const rightLeg = new THREE.Mesh( rightLegGeometry, rightLegMaterial );
    scene.add( rightLeg );
    rightLeg.position.set(0.5,-3,0)
}

function armorGeometry() {
    const helmetGeometry = new THREE.BoxGeometry( 2.1, 2.1, 2.1 );
    const helmetMaterial = new THREE.MeshBasicMaterial( { color: 0x220022, wireframe: true } );
    const helmet = new THREE.Mesh( helmetGeometry, helmetMaterial );
    helmet.position.set(0,2.5,0)
    scene.add( helmet );

    const chestplateGeometry = new THREE.BoxGeometry( 2.2, 3.2, 1.2 );
    const chestplateMaterial = new THREE.MeshBasicMaterial( { color: 0x220022, wireframe: true } );
    const chestplate = new THREE.Mesh( chestplateGeometry, chestplateMaterial );
    scene.add( chestplate );

    const leftPauldronGeometry = new THREE.BoxGeometry( 1.2, 1.2, 1.2 );
    const leftPauldronMaterial = new THREE.MeshBasicMaterial( { color: 0x220022, wireframe: true } );
    const leftPauldron = new THREE.Mesh( leftPauldronGeometry, leftPauldronMaterial );
    leftPauldron.position.set(1.5,1 ,0)
    scene.add( leftPauldron );

    const rightPauldronGeometry = new THREE.BoxGeometry( 1.2, 1.2, 1.2 );
    const rightPauldronMaterial = new THREE.MeshBasicMaterial( { color: 0x220022, wireframe: true } );
    const rightPauldron = new THREE.Mesh( rightPauldronGeometry, rightPauldronMaterial );
    rightPauldron.position.set(-1.5,1 ,0)
    scene.add( rightPauldron );

    const waistGeometry = new THREE.BoxGeometry( 2.1, 1.1, 1.1 );
    const waistMaterial = new THREE.MeshBasicMaterial( { color: 0x220022, wireframe: true } );
    const waist = new THREE.Mesh( waistGeometry, waistMaterial );
    waist.position.set(0,-1 ,0)
    scene.add( waist );

    const leftLeggingGeometry = new THREE.BoxGeometry( 1.1, 2.26, 1.1 );
    const leftLeggingMaterial = new THREE.MeshBasicMaterial( { color: 0x220022, wireframe: true } );
    const leftLegging = new THREE.Mesh( leftLeggingGeometry, leftLeggingMaterial );
    leftLegging.position.set(0.5,-2.75 ,0)
    scene.add( leftLegging );

    const rightLeggingGeometry = new THREE.BoxGeometry( 1.1, 2.26, 1.1 );
    const rightLeggingMaterial = new THREE.MeshBasicMaterial( { color: 0x220022, wireframe: true } );
    const rightLegging = new THREE.Mesh( rightLeggingGeometry, rightLeggingMaterial );
    rightLegging.position.set(-0.5,-2.75 ,0)
    scene.add( rightLegging );

    const leftBootGeometry = new THREE.BoxGeometry( 1.2, 1.2, 1.2 );
    const leftBootMaterial = new THREE.MeshBasicMaterial( { color: 0x220022, wireframe: true } );
    const leftBoot = new THREE.Mesh( leftBootGeometry, leftBootMaterial );
    leftBoot.position.set(0.5,-4 ,0)
    scene.add( leftBoot );

    const rightBootGeometry = new THREE.BoxGeometry( 1.2, 1.2, 1.2 );
    const rightBootMaterial = new THREE.MeshBasicMaterial( { color: 0x220022, wireframe: true } );
    const rightBoot = new THREE.Mesh( rightBootGeometry, rightBootMaterial );
    rightBoot.position.set(-0.5,-4 ,0)
    scene.add( rightBoot );
    
}

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

                controls.enableDamping = true;
                controls.enablePan = false;
                controls.minDistance = 2;
                controls.maxDistance = 8;

                bodyGeometry()

                armorGeometry()

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
                    "height": "1000px"
                }
               }>
               </div>
           </>
       );
}

export default viewport
