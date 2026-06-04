export class Texture {
    readonly item_id: string
    readonly skyblock_id: string

    constructor(item_id: string, skyblock_id: string) {
        this.item_id = item_id
        this.skyblock_id = skyblock_id
    }
}

export class pack {
    readonly name: string
    readonly textures: object
    
    constructor(name: string) {
        this.name = name
        this.textures = {
            armors: {},
            items: {}
        }
    }
}
