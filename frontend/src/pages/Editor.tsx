import { createSignal } from "solid-js";
import Canvas from "../components/Canvas"
import EditorTools from "../components/EditorTools"
import TexturePanel from "../components/TexturePanel"

var buttonActiveColor = "#b7ffc1";
var buttonInactiveColor = "#ffb7b7";

type Props = {}

function Editor(props: Props) {
    const [color, setColor] = createSignal("#ff0000");
    const [tool, setTool] = createSignal("brush")

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
                <Canvas 
                    color={color}
                    setColor={setColor}
                    tool={tool}
                    setTool={setTool} 
                ></Canvas>
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
                <EditorTools
                    color={color}
                    setColor={setColor}
                    tool={tool}
                    setTool={setTool} 
                    buttonActiveColor={buttonActiveColor}
                    buttonInactiveColor={buttonInactiveColor}
                ></EditorTools>
            </div>
        </div>
        </>
    )
}

export default Editor