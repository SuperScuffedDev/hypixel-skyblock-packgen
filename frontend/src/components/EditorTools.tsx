import ColorWheel from "./ColorWheel"

import brush_icon from "../assets/images/brush.svg"
import eraser_icon from "../assets/images/eraser.svg"
import fill_icon from "../assets/images/fill.svg"

type Props = {
    color: any;
    setColor: any;
    tool: () => string;
    setTool: any; 
    buttonActiveColor: any;
    buttonInactiveColor: any;
}

function EditorTools(props: Props) {
    return (
        <>
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
                }
            }>
                <img src={fill_icon} width="50px" height="50px"></img>
            </button>
        </>
    )
}

export default EditorTools