import ColorWheel from "./ColorWheel"

import brush_icon from "../assets/images/brush.svg"
import eraser_icon from "../assets/images/eraser.svg"
import fill_icon from "../assets/images/fill.svg"

type Props = {
    color: any;
    setColor: any;
}

function EditorTools(props: Props) {
    return (
        <>
            <ColorWheel color={props.color} setColor={props.setColor}></ColorWheel>
            <button classList={
                {
                    "editor-tool": true,
                    "brush": true,
                }
            }>
                <img src={brush_icon} width="50px" height="50px"></img>
            </button>
            <button classList={
                {
                    "editor-tool": true,
                }
            }>
                <img src={eraser_icon} width="50px" height="50px"></img>
            </button>
            <button classList={
                {
                    "editor-tool": true,
                }
            }>
                <img src={fill_icon} width="50px" height="50px"></img>
            </button>
        </>
    )
}

export default EditorTools