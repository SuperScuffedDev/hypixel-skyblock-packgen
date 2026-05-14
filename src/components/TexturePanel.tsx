var canvas

type Props = {}

let categories = [
        "REFORGE_STONE",
        "SWORD",
        "GLOVES",
        "BOOTS",
        "BELT",
        "NECKLACE",
        "HELMET",
        "CHESTPLATE",
        "ACCESSORY",
        "CLOAK",
        "LEGGINGS",
        "FARMING_TOOL",
        "COSMETIC",
        "MEMENTO",
        "AXE",
        "FISHING_ROD_PART",
        "PET_ITEM",
        "BAIT",
        "BRACELET",
        "FISHING_ROD",
        "TRAVEL_SCROLL",
        "DEPLOYABLE",
        "CONSUMABLE",
        "NONE",
        "SPADE",
        "WAND",
        "PORTAL",
        "BOW",
        "DUNGEON_PASS",
        "ARROW",
        "CARNIVAL_MASK",
        "PICKAXE",
        "DRILL",
        "SHEARS",
        "LONGSWORD",
        "GAUNTLET",
        "ARROW_POISON",
        "CHISEL",
        "BOOSTER",
        "VACUUM",
        "GARDEN_CHIP",
        "MUTATION",
        "WATERING_CAN",
        "TRAP",
        "FISHING_NET",
        "LASSO",
        "SALT"
    ]

function TexturePanel(props: Props) {
    return (
        <>
        <div class="listing-options">
            <label for="texture-catagory">Catagory</label>
            <select id="texture-catagory">
                <option value="REFORGE_STONE">REFORGE STONE</option>
                <option value="SWORD">SWORD</option>
                <option value="GLOVES">GLOVES</option>
                <option value="BOOTS">BOOTS</option>
                <option value="BELT">BELT</option>
                <option value="NECKLACE">NECKLACE</option>
                <option value="CHESTPLATE">CHESTPLATE</option>
                <option value="ACCESSORY">ACCESSORY</option>
                <option value="CLOAK">CLOAK</option>
                <option value="LEGGINGS">LEGGINGS</option>
                <option value="FARMING_TOOL">FARMING TOOL</option>
                <option value="CLOAK">CLOAK</option>
                <option value="CLOAK">CLOAK</option>
                <option value="CLOAK">CLOAK</option>
                <option value="CLOAK">CLOAK</option>
                <option value="CLOAK">CLOAK</option>
                <option value="CLOAK">CLOAK</option>
                <option value="CLOAK">CLOAK</option>
                <option value="CLOAK">CLOAK</option>
                <option value="CLOAK">CLOAK</option>
                <option value="CLOAK">CLOAK</option>
            </select>
            <label for="texture-catagory">Sorting</label>
            <select id="texture-sorting">
                <option value="alphabet" selected>A-Z</option>
                <option value="reverse">Z-A</option>
                <option value="skill">SKILL</option>
                <option value="finished">FINISHED</option>
                <option value="inprog">IN PROGRESS</option>
                <option value="notexture">NO TEXTURE</option>
            </select>
        </div>
        <div class="texture-list"></div>
        <div class="texture-options">
            <button class="upload" onClick={
                (e) => {
                    
                }
            }>
                upload
            </button>
            <button class="download" onClick={
                (e) => {
                    canvas = document.getElementById("canvas") as HTMLCanvasElement;
                    const imgURL = canvas.toDataURL("image/png");
                    const link = document.createElement("a");
                    link.href = imgURL
                    link.download = "texture.png"

                    link.click()
                    link.remove()
                }
            }>
                download
            </button>
        </div>
        </>
    )
}

export default TexturePanel