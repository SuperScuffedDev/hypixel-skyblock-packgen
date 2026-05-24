import { createSignal, Show } from "solid-js";
import Canvas from "../components/2d-view"
import CanvasModel from "../components/3d-view"
import EditorTools from "../components/EditorTools"
import TexturePanel from "../components/TexturePanel"

var buttonActiveColor = "#b7ffc1";
var buttonInactiveColor = "#ffb7b7";

type Props = {}

function Editor(props: Props) {
    const [color, setColor] = createSignal([255,0,0]);
    const [tool, setTool] = createSignal("brush");
    const [viewport, setViewport] = createSignal("2d");

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
            <div class="viewport" style={
                {
                    "display": "flex",
                    "justify-content": "center",
                    "align-items": "center",
                    "background-color": "#dadada"
                }
            }>
                <Show when={viewport() == "2d"}>
                    <Canvas 
                        color={color}
                        setColor={setColor}
                        tool={tool}
                        setTool={setTool} 
                    ></Canvas>
                </Show>
                <Show when={viewport() == "3d"}>
                    <CanvasModel>

                    </CanvasModel>
                </Show>
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
                    viewport={viewport}
                    setViewport={setViewport} 
                ></EditorTools>
            </div>
        </div>
        </>
    )
}

export default Editor