import { createSignal } from "solid-js";
import Canvas from "../components/Canvas"
import EditorTools from "../components/EditorTools"
import TexturePanel from "../components/TexturePanel"

type Props = {}

function Editor(props: Props) {
    const [color, setColor] = createSignal("#ff0000");

    return (
        <>
        <div id="editor">
            <div class="textures" style={
                {
                    "z-index": 2
                }
            }>
                <TexturePanel></TexturePanel>
            </div>
            <span class="divider" style={
                {
                    "z-index": 3
                }
            }></span>
            <div class="viewport">
                <Canvas  color={color} setColor={setColor}></Canvas>
            </div>
            <span class="divider" style={
                {
                    "z-index": 3
                }
            }></span>
            <div class="tools" style={
                {
                    "z-index": 2
                }
            }>
                <EditorTools color={color} setColor={setColor}></EditorTools>
            </div>
        </div>
        </>
    )
}

export default Editor