import { getItemData } from "../api/item-data"
import { For, Suspense } from "solid-js"
import { setHumanoidCanvas } from "../utils/state_manager";

let categories = [
    "ALL",
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

var items = [
    "a",
    "b",
    "c"
]

getItemData()

function TexturePanel() {
    return (
        <>
        <div class="listing-options">
            <label for="texture-catagory">Catagory</label>
            <select id="texture-catagory">
                <For each={categories}>
                    {(item) =>
                        <option value={item}>{item.replace("_", " ")}</option>
                    }
                </For>
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
        <div class="texture-list">
            <Suspense fallback={
                <div>Loading Items...</div>
            }>
                <For each={items}>
                    {(item) =>
                        <button classList={{
                            "listed-item": true
                        }}>{item}</button>
                    }
                </For>
            </Suspense>
        </div>
        <div class="texture-options">
            <button class="upload" onClick={
                () => {
                    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
                    const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;
                    const input = document.createElement("input");
                    input.type = "file";
                    input.onchange = (e) => {
                        const target = e.target as HTMLInputElement
                        const files: FileList | null = target.files;
                        const reader = new FileReader();
                        if (!files) return

                        const img = files[0]
                        reader.onload = (ee) => {
                            const img = new Image()
                            img.onload = () => {
                                ctx.clearRect(0, 0, canvas.width, canvas.height)
                                ctx.drawImage(img, 0, 0)
                                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
                                setHumanoidCanvas(imageData)
                            }
                            img.src = ee.target?.result as string;
                        }
                        reader.readAsDataURL(img)
                    }
                    input.click()
                    input.remove()
                }
            }>
                upload
            </button>
            <button class="download" onClick={
                () => {
                    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
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