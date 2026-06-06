import { For, Suspense } from "solid-js"

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
    "Fermento Armor",
    "Hyperion",
    "Dark Claymore"
]

function TexturePanel() {
    return (
        <>
        <div class="listing-options" style={
            {
                "display": "flex",
                "justify-content": "space-evenly",
                "gap": "8px",
                "width": "100%",
                "height": "50px",
                "margin-bottom": "8px",
            }
        }>
            <label for="texture-catagory" style={
                {
                    "text-align": "center",
                    "font-size": "24px",
                    "color": "#ffffff",
                }
            }>Catagory</label>
            <select id="texture-catagory" style={
                {
                    "text-align": "center",
                    "font-size": "24px",
                    "color": "#ffffff",
                    "border": "1px solid #1d2d53",
                    "border-radius": "16px",
                    "background-color": "#111183",
                    "flex": 1,
                    "width": "100%",
                    "height": "50px",
                }
            }>
                <For each={categories}>
                    {(item) =>
                        <option value={item}>{item.replace("_", " ")}</option>
                    }
                </For>
            </select>
            <label for="texture-sorting" style={
                {
                    "text-align": "center",
                    "font-size": "24px",
                    "color": "#ffffff",
                }
            }>Sorting</label>
            <select id="texture-sorting" style={
                {
                    "text-align": "center",
                    "font-size": "24px",
                    "color": "#ffffff",
                    "border": "1px solid #1d2d53",
                    "border-radius": "16px",
                    "background-color": "#111183",
                    "flex": 1,
                    "width": "100%",
                    "height": "50px",
                }
            }>
                <option value="alphabet" selected>A-Z</option>
                <option value="reverse">Z-A</option>
                <option value="skill">SKILL</option>
                <option value="finished">FINISHED</option>
                <option value="inprog">IN PROGRESS</option>
                <option value="notexture">NO TEXTURE</option>
            </select>
        </div>
        <div class="texture-list" style={
            {
                "background-color": "#030226",
                "border": "1px solid #1d2d53",
                "border-radius": "16px",
                "overflow": "auto",
                "flex": 1,
            }
        }>
            <Suspense fallback={
                <div>Loading Items...</div>
            }>
                <For each={items}>
                    {(item) =>
                        <button classList={{
                            "listed-item": true
                        }} style={
                            {
                                "width": "100%",
                                "height": "40px",
                                "color": "#ffffff",
                                "font-size": "24px",
                                "border": "1px solid #1d2d53",
                                "background-color": "#111183",
                            }
                        }>{item}</button>
                    }
                </For>
            </Suspense>
        </div>
        <div class="texture-options" style={
            {
                "display": "flex",
                "justify-content": "space-evenly",
                "gap": "8px",
                "width": "100%",
                "height": "50px",
                "margin-bottom": "8px"
            }
        }>
        </div>
        </>
    )
}

export default TexturePanel