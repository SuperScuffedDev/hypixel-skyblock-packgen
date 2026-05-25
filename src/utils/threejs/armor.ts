import * as THREE from "three";

export function armorGeometry(scene: THREE.Scene) {
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