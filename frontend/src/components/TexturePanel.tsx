var canvas

type Props = {}

function TexturePanel(props: Props) {
    return (
        <>
        <div class="listing-options">
            <label for="texture-catagory">Catagory</label>
            <select id="texture-catagory">
                <option value="accessories">ACCESSORIES</option>
                <option value="armor">ARMOR</option>
                <option value="tools">TOOLS</option>
                <option value="weapons" selected>WEAPONS</option>
                <option value="ui">UI</option>
                <option value="misc">Misc</option>
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