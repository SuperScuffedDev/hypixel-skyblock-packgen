import * as THREE from "three";

export function bodyGeometry(scene: THREE.Scene) {
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