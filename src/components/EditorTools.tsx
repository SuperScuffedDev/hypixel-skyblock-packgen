import ColorWheel from "./ColorWheel"

import brush_icon from "../assets/images/brush.svg"
import eraser_icon from "../assets/images/eraser.svg"
import fill_icon from "../assets/images/fill.svg"
import { setTool } from "../utils/canvas-painter"

type Props = {
    color: any;
    setColor: any;
    tool: () => string;
    setTool: any; 
    buttonActiveColor: any;
    buttonInactiveColor: any;
    viewport: () => string;
    setViewport: any; 
}

function EditorTools(props: Props) {
    return (
        <>
            <div style={
                {
                    "width": "100%",
                    "height": "64px",
                    "margin-bottom": "8px",
                    "padding": "8px",
                    "display": "flex",
                    "justify-content": "space-evenly",
                    "gap": "8px"
                }
            }>
                <button style={
                    {
                        "flex": 1,
                        "border-radius": "8px",
                        "background-color": props.viewport() === "2d" ? props.buttonActiveColor : props.buttonInactiveColor
                    }
                } onClick={
                    (e) => {
                        props.setViewport(props.tool() === "2d" ? "none" : "2d")
                    }
                }>Texture</button>
                <button style={
                    {
                        "flex": 1,
                        "border-radius": "8px",
                        "background-color": props.viewport() === "3d" ? props.buttonActiveColor : props.buttonInactiveColor
                    }
                } onClick={
                    (e) => {
                        props.setViewport(props.tool() === "3d" ? "none" : "3d")
                    }
                }>Model</button>
            </div>
            <ColorWheel
                color={props.color}
                setColor={props.setColor}
                tool={props.tool}
                setTool={props.setTool} 
                buttonActiveColor={props.buttonActiveColor}
                buttonInactiveColor={props.buttonInactiveColor}
            ></ColorWheel>
            <button classList={
                {
                    "editor-tool": true,
                    "brush": true,
                }
            } style={
                {
                    "background-color": props.tool() === "brush" ? props.buttonActiveColor : props.buttonInactiveColor
                }
            } onClick={
                (e) => {
                    props.setTool(props.tool() === "brush" ? "none" : "brush")
                    setTool(props.tool())
                }
            }>
                <img src={brush_icon} width="50px" height="50px"></img>
            </button>
            <button classList={
                {
                    "editor-tool": true,
                    "erase": true,
                }
            } style={
                {
                    "background-color": props.tool() === "erase" ? props.buttonActiveColor : props.buttonInactiveColor
                }
            } onClick={
                (e) => {
                    props.setTool(props.tool() === "erase" ? "none" : "erase")
                    setTool(props.tool())
                }
            }>
                <img src={eraser_icon} width="50px" height="50px"></img>
            </button>
            <button classList={
                {
                    "editor-tool": true,
                    "fill": true,
                }
            } style={
                {
                    "background-color": props.tool() === "fill" ? props.buttonActiveColor : props.buttonInactiveColor
                }
            } onClick={
                (e) => {
                    props.setTool(props.tool() === "fill" ? "none" : "fill")
                    setTool(props.tool())
                }
            }>
                <img src={fill_icon} width="50px" height="50px"></img>
            </button>
        </>
    )
}

export default EditorTools