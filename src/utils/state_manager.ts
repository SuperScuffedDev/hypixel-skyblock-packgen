export var textureImage: ImageData
export var headModel: ImageData
export var humanoidModel: ImageData
export var leggingsModel: ImageData

export function setTextureCanvas(data: ImageData) {
    textureImage = data
}

export function setHeadCanvas(data: ImageData) {
    headModel = data
}

export function setHumanoidCanvas(data: ImageData) {
    humanoidModel = data
}

export function setLeggingsCanvas(data: ImageData) {
    leggingsModel = data
}