import * as THREE from "three";


export function playerModel(scene: THREE.Scene){
    const material = new THREE.MeshBasicMaterial( { color: 0x220022, wireframe: true  } );

    function head() {
        const geometry = new THREE.BoxGeometry(2, 2, 2);
        const object = new THREE.Mesh( geometry, material );
        object.position.set(0, 2.5, 0)
        scene.add( object );
    }

    function torso() {
        const geometry = new THREE.BoxGeometry( 2, 3, 1 );
        const object = new THREE.Mesh( geometry, material );
        object.position.set(0, 0, 0)
        scene.add( object );
    }

    function leftArm() {
        const geometry = new THREE.BoxGeometry( 1, 3, 1 );
        const object = new THREE.Mesh( geometry, material );
        object.position.set(-1.5, 0, 0)
        scene.add( object );
    }

    function rightArm() {
        const geometry = new THREE.BoxGeometry( 1, 3, 1  );
        const object = new THREE.Mesh( geometry, material );
        object.position.set(1.5, 0, 0)
        scene.add( object );
    }
    
    function leftLeg() {
        const geometry = new THREE.BoxGeometry( 1, 3, 1  );
        const object = new THREE.Mesh( geometry, material );
        object.position.set(-0.5, -3, 0)
        scene.add( object );
    }

    function rightLeg() {
        const geometry = new THREE.BoxGeometry( 1, 3, 1  );
        const object = new THREE.Mesh( geometry, material );
        object.position.set(0.5, -3, 0)
        scene.add( object );
    }
    head()
    torso()
    leftArm()
    rightArm()
    leftLeg()
    rightLeg()
}


export function headModel(scene: THREE.Scene, canvas: HTMLCanvasElement) {
    return

    const textureCanvas = new  THREE.CanvasTexture(canvas)
    textureCanvas.magFilter = THREE.NearestFilter
    textureCanvas.colorSpace = THREE.SRGBColorSpace;

    const uW = 0.125
    const uH = 0.125
    const material = new THREE.MeshBasicMaterial(
        {
            map: textureCanvas,
            transparent: true,
            side: THREE.DoubleSide
        }
    );

    const [headPosX, headPosY, headPosZ] = [0, 2.5, 0];

    function set(uvAttribute: any, vertexIndex: number, index: number, atlasTiles: any[]) {
        uvAttribute.setX(vertexIndex, atlasTiles[index]["uX"]);
        uvAttribute.setY(vertexIndex, atlasTiles[index]["uY"]);

        uvAttribute.setX(vertexIndex + 1, atlasTiles[index]["uX"] + uW);
        uvAttribute.setY(vertexIndex + 1, atlasTiles[index]["uY"]);

        uvAttribute.setX(vertexIndex + 2, atlasTiles[index]["uX"]);
        uvAttribute.setY(vertexIndex + 2, atlasTiles[index]["uY"] - uH);

        uvAttribute.setX(vertexIndex + 3, atlasTiles[index]["uX"] + uW);
        uvAttribute.setY(vertexIndex + 3, atlasTiles[index]["uY"] - uH);
    }

    function altSet(uvAttribute: any, vertexIndex: number, index: number, atlasTiles: any[]) {
        uvAttribute.setX(vertexIndex, atlasTiles[index]["uX"]);
        uvAttribute.setY(vertexIndex, atlasTiles[index]["uY"]);

        uvAttribute.setX(vertexIndex + 1, atlasTiles[index]["uX"] + uW);
        uvAttribute.setY(vertexIndex + 1, atlasTiles[index]["uY"]);

        uvAttribute.setX(vertexIndex + 2, atlasTiles[index]["uX"]);
        uvAttribute.setY(vertexIndex + 2, atlasTiles[index]["uY"] + uH);

        uvAttribute.setX(vertexIndex + 3, atlasTiles[index]["uX"] + uW);
        uvAttribute.setY(vertexIndex + 3, atlasTiles[index]["uY"] + uH);
    }

    function innerLayer() {
        const atlasTiles = [
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
        
        const geometry = new THREE.BoxGeometry(2.01, 2.01, 2.01);
        const uvAttribute = geometry.attributes.uv;

        for (let i=0; i<6; i++) {
            if (i = 3) {
                altSet(uvAttribute, i*4, i, atlasTiles)
                continue
            }
            set(uvAttribute, i*4, i, atlasTiles)
        }

        uvAttribute.needsUpdate = true
        const object = new THREE.Mesh( geometry, material );
        object.position.set(headPosX, headPosY, headPosZ)
        scene.add( object );
    }

    function outerLayer() {
        const atlasTiles = [
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
        const geometry = new THREE.BoxGeometry(2.06, 2.06, 2.06);
        const uvAttribute = geometry.attributes.uv;

        for (let i=0; i<6; i++) {
            if (i = 3) {
                altSet(uvAttribute, i*4, i, atlasTiles)
                continue
            }
            set(uvAttribute, i*4, i, atlasTiles)
        }

        uvAttribute.needsUpdate = true
        const object = new THREE.Mesh( geometry, material );
        object.position.set(headPosX, headPosY, headPosZ)
        scene.add( object );
    }
    innerLayer()
    outerLayer()
}

//THIS DO THIS
export function chestplateModel(scene: THREE.Scene, canvas: HTMLCanvasElement) {
    const textureCanvas = new  THREE.CanvasTexture(canvas)
    textureCanvas.magFilter = THREE.NearestFilter
    textureCanvas.colorSpace = THREE.SRGBColorSpace;

    const uW = 0.0625
    const uH = 0.125
    const material = new THREE.MeshBasicMaterial(
        {
            map: textureCanvas,
            transparent: true,
            side: THREE.DoubleSide
        }
    );

    function torso() {
        const atlasTiles = [
            {
                "uX": 0.4375,
                "uY": 0.375,
            }, // left
            {
                "uX": 0.25,
                "uY": 0.375,
            }, // right
            {
                "uX": 0.3125,
                "uY": 0.5,
            }, // top
            {
                "uX": 0.5,
                "uY": 0.375,
            }, // bottom
            {
                "uX": 0.3125,
                "uY": 0.375,
            }, // front
            {
                "uX": 0.5,
                "uY": 0.375,
            }, // back
        ]

        const geometry = new THREE.BoxGeometry(2.2, 3.2, 1.2);
        const uvAttribute = geometry.attributes.uv;

        function wrap() {
            var index = 0
            var vertexIndex = index * 4
            //left
            uvAttribute.setX(vertexIndex, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 1, atlasTiles[index]["uX"] + uW);
            uvAttribute.setY(vertexIndex + 1, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 2, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex + 2, atlasTiles[index]["uY"] - uH*3);

            uvAttribute.setX(vertexIndex + 3, atlasTiles[index]["uX"] + uW);
            uvAttribute.setY(vertexIndex + 3, atlasTiles[index]["uY"] - uH*3);

            //right
            var index = 1
            var vertexIndex = index * 4
            uvAttribute.setX(vertexIndex, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 1, atlasTiles[index]["uX"] + uW);
            uvAttribute.setY(vertexIndex + 1, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 2, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex + 2, atlasTiles[index]["uY"] - uH*3);

            uvAttribute.setX(vertexIndex + 3, atlasTiles[index]["uX"] + uW);
            uvAttribute.setY(vertexIndex + 3, atlasTiles[index]["uY"] - uH*3);

            //top
            var index = 2
            var vertexIndex = index * 4
            uvAttribute.setX(vertexIndex, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 1, atlasTiles[index]["uX"] + uW*2);
            uvAttribute.setY(vertexIndex + 1, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 2, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex + 2, atlasTiles[index]["uY"] - uH);

            uvAttribute.setX(vertexIndex + 3, atlasTiles[index]["uX"] + uW*2);
            uvAttribute.setY(vertexIndex + 3, atlasTiles[index]["uY"] - uH);

            //no bottom
            var index = 3
            var vertexIndex = index * 4
            uvAttribute.setX(vertexIndex, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 1, atlasTiles[index]["uX"] + uW*2);
            uvAttribute.setY(vertexIndex + 1, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 2, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex + 2, atlasTiles[index]["uY"] + uH);

            uvAttribute.setX(vertexIndex + 3, atlasTiles[index]["uX"] + uW*2);
            uvAttribute.setY(vertexIndex + 3, atlasTiles[index]["uY"] + uH);
            
            //front
            var index = 4
            var vertexIndex = index * 4
            uvAttribute.setX(vertexIndex, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 1, atlasTiles[index]["uX"] + uW*2);
            uvAttribute.setY(vertexIndex + 1, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 2, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex + 2, atlasTiles[index]["uY"] - uH*3);

            uvAttribute.setX(vertexIndex + 3, atlasTiles[index]["uX"] + uW*2);
            uvAttribute.setY(vertexIndex + 3, atlasTiles[index]["uY"] - uH*3);

            //back
            var index = 5
            var vertexIndex = index * 4
            uvAttribute.setX(vertexIndex, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 1, atlasTiles[index]["uX"] + uW*2);
            uvAttribute.setY(vertexIndex + 1, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 2, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex + 2, atlasTiles[index]["uY"] - uH*3);

            uvAttribute.setX(vertexIndex + 3, atlasTiles[index]["uX"] + uW*2);
            uvAttribute.setY(vertexIndex + 3, atlasTiles[index]["uY"] - uH*3);
        }
        wrap()

        uvAttribute.needsUpdate = true
        const object = new THREE.Mesh( geometry, material );
        object.position.set(0, 0, 0)
        scene.add( object );
    }

    function leftArm() {
        const atlasTiles = [
            {
                "uX": 0.6875,
                "uY": 0.375,
            }, // left
            {
                "uX": 0.8125,
                "uY": 0.375,
            }, // right
            {
                "uX": 0.75,
                "uY": 0.5,
            }, // top
            {
                "uX": 0.8125,
                "uY": 0.5,
            }, // bottom
            {
                "uX": 0.75,
                "uY": 0.375,
            }, // front
            {
                "uX": 0.875,
                "uY": 0.375,
            }, // back
        ]

        const geometry = new THREE.BoxGeometry(1.2, 3.2, 1.2);
        const uvAttribute = geometry.attributes.uv;

        function wrap() {
            var index = 0
            var vertexIndex = index * 4
            //left
            uvAttribute.setX(vertexIndex, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 1, atlasTiles[index]["uX"] - uW);
            uvAttribute.setY(vertexIndex + 1, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 2, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex + 2, atlasTiles[index]["uY"] - uH*3);

            uvAttribute.setX(vertexIndex + 3, atlasTiles[index]["uX"] - uW);
            uvAttribute.setY(vertexIndex + 3, atlasTiles[index]["uY"] - uH*3);

            //right
            var index = 1
            var vertexIndex = index * 4
            uvAttribute.setX(vertexIndex, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 1, atlasTiles[index]["uX"] - uW);
            uvAttribute.setY(vertexIndex + 1, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 2, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex + 2, atlasTiles[index]["uY"] - uH*3);

            uvAttribute.setX(vertexIndex + 3, atlasTiles[index]["uX"] - uW);
            uvAttribute.setY(vertexIndex + 3, atlasTiles[index]["uY"] - uH*3);

            //top
            var index = 2
            var vertexIndex = index * 4
            uvAttribute.setX(vertexIndex, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 1, atlasTiles[index]["uX"] - uW);
            uvAttribute.setY(vertexIndex + 1, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 2, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex + 2, atlasTiles[index]["uY"] - uH);

            uvAttribute.setX(vertexIndex + 3, atlasTiles[index]["uX"] - uW);
            uvAttribute.setY(vertexIndex + 3, atlasTiles[index]["uY"] - uH);

            //no bottom
            var index = 3
            var vertexIndex = index * 4
            uvAttribute.setX(vertexIndex, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 1, atlasTiles[index]["uX"] - uW);
            uvAttribute.setY(vertexIndex + 1, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 2, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex + 2, atlasTiles[index]["uY"] + uH);

            uvAttribute.setX(vertexIndex + 3, atlasTiles[index]["uX"] - uW);
            uvAttribute.setY(vertexIndex + 3, atlasTiles[index]["uY"] + uH);
            
            //front
            var index = 4
            var vertexIndex = index * 4
            uvAttribute.setX(vertexIndex, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 1, atlasTiles[index]["uX"] - uW);
            uvAttribute.setY(vertexIndex + 1, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 2, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex + 2, atlasTiles[index]["uY"] - uH*3);

            uvAttribute.setX(vertexIndex + 3, atlasTiles[index]["uX"] - uW);
            uvAttribute.setY(vertexIndex + 3, atlasTiles[index]["uY"] - uH*3);

            //back
            var index = 5
            var vertexIndex = index * 4
            uvAttribute.setX(vertexIndex, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 1, atlasTiles[index]["uX"] - uW);
            uvAttribute.setY(vertexIndex + 1, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 2, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex + 2, atlasTiles[index]["uY"] - uH*3);

            uvAttribute.setX(vertexIndex + 3, atlasTiles[index]["uX"] - uW);
            uvAttribute.setY(vertexIndex + 3, atlasTiles[index]["uY"] - uH*3);
        }
        wrap()

        uvAttribute.needsUpdate = true
        const object = new THREE.Mesh( geometry, material );
        object.position.set(1.5, 0, 0)
        scene.add( object );
    }

    function rightArm() {
        const atlasTiles = [
            {
                "uX": 0.75,
                "uY": 0.375,
            }, // left
            {
                "uX": 0.625,
                "uY": 0.375,
            }, // right
            {
                "uX": 0.6875,
                "uY": 0.5,
            }, // top
            {
                "uX": 0.75,
                "uY": 0.5,
            }, // bottom
            {
                "uX": 0.6875,
                "uY": 0.375,
            }, // front
            {
                "uX": 0.8125,
                "uY": 0.375,
            }, // back
        ]

        const geometry = new THREE.BoxGeometry(1.2, 3.2, 1.2);
        const uvAttribute = geometry.attributes.uv;

        function wrap() {
            var index = 0
            var vertexIndex = index * 4
            //left
            uvAttribute.setX(vertexIndex, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 1, atlasTiles[index]["uX"] + uW);
            uvAttribute.setY(vertexIndex + 1, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 2, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex + 2, atlasTiles[index]["uY"] - uH*3);

            uvAttribute.setX(vertexIndex + 3, atlasTiles[index]["uX"] + uW);
            uvAttribute.setY(vertexIndex + 3, atlasTiles[index]["uY"] - uH*3);

            //right
            var index = 1
            var vertexIndex = index * 4
            uvAttribute.setX(vertexIndex, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 1, atlasTiles[index]["uX"] + uW);
            uvAttribute.setY(vertexIndex + 1, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 2, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex + 2, atlasTiles[index]["uY"] - uH*3);

            uvAttribute.setX(vertexIndex + 3, atlasTiles[index]["uX"] + uW);
            uvAttribute.setY(vertexIndex + 3, atlasTiles[index]["uY"] - uH*3);

            //top
            var index = 2
            var vertexIndex = index * 4
            uvAttribute.setX(vertexIndex, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 1, atlasTiles[index]["uX"] + uW);
            uvAttribute.setY(vertexIndex + 1, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 2, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex + 2, atlasTiles[index]["uY"] - uH);

            uvAttribute.setX(vertexIndex + 3, atlasTiles[index]["uX"] + uW);
            uvAttribute.setY(vertexIndex + 3, atlasTiles[index]["uY"] - uH);

            //no bottom
            var index = 3
            var vertexIndex = index * 4
            uvAttribute.setX(vertexIndex, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 1, atlasTiles[index]["uX"] + uW);
            uvAttribute.setY(vertexIndex + 1, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 2, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex + 2, atlasTiles[index]["uY"] + uH);

            uvAttribute.setX(vertexIndex + 3, atlasTiles[index]["uX"] + uW);
            uvAttribute.setY(vertexIndex + 3, atlasTiles[index]["uY"] + uH);
            
            //front
            var index = 4
            var vertexIndex = index * 4
            uvAttribute.setX(vertexIndex, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 1, atlasTiles[index]["uX"] + uW);
            uvAttribute.setY(vertexIndex + 1, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 2, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex + 2, atlasTiles[index]["uY"] - uH*3);

            uvAttribute.setX(vertexIndex + 3, atlasTiles[index]["uX"] + uW);
            uvAttribute.setY(vertexIndex + 3, atlasTiles[index]["uY"] - uH*3);

            //back
            var index = 5
            var vertexIndex = index * 4
            uvAttribute.setX(vertexIndex, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 1, atlasTiles[index]["uX"] + uW);
            uvAttribute.setY(vertexIndex + 1, atlasTiles[index]["uY"]);

            uvAttribute.setX(vertexIndex + 2, atlasTiles[index]["uX"]);
            uvAttribute.setY(vertexIndex + 2, atlasTiles[index]["uY"] - uH*3);

            uvAttribute.setX(vertexIndex + 3, atlasTiles[index]["uX"] + uW);
            uvAttribute.setY(vertexIndex + 3, atlasTiles[index]["uY"] - uH*3);
        }
        wrap()

        uvAttribute.needsUpdate = true
        const object = new THREE.Mesh( geometry, material );
        object.position.set(-1.5, 0, 0)
        scene.add( object );
    }
    torso()
    leftArm()
    rightArm()
}