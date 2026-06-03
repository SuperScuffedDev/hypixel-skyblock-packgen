import "reinvented-color-wheel/css/reinvented-color-wheel.min.css"
import ReinventedColorWheel from "reinvented-color-wheel";
import { onCleanup, onMount } from "solid-js"

import color_picker_icon from "../assets/images/color-picker.svg"
import { setColor, setTool } from "../utils/canvas-painter";

var colorWheel: any;

type Props = {
    color: () => string;
    setColor: any;
    tool: () => string;
    setTool: any; 
    buttonActiveColor: string;
    buttonInactiveColor: string;
}

function ColorWheel(props: Props) {
    var containerRef!: HTMLDivElement;

    onMount(
        () => {
            colorWheel = new ReinventedColorWheel(
                {
                    appendTo: containerRef,
                    rgb: [255, 0, 0],
                    wheelDiameter: 300,
                    wheelThickness: 30,
                    handleDiameter: 24,
                    wheelReflectsSaturation: false,

                    onChange: function(color) {
                        props.setColor([color.rgb[0], color.rgb[1], color.rgb[2]])
                        setColor([color.rgb[0], color.rgb[1], color.rgb[2]])
                    }
                }
            )
        }
    )

    onCleanup(() => {
    })

    return(
        <div id="color-wheel" ref={containerRef}>
            <div class="color-configs">
                <div class="current-color" style={
                    {
                        "background-color": `rgb(${props.color()[0]},${props.color()[1]},${props.color()[2]})`
                    }
                }></div>
                <button class="color-picker" style={
                    {
                        "background-color": props.tool() === "color-picker" ? props.buttonActiveColor : props.buttonInactiveColor
                    }
                } onClick={
                    () => {
                        props.setTool(props.tool() === "color-picker" ? "none" : "color-picker")
                        setTool(props.tool())
                    }
                }>
                    <img src={color_picker_icon} width="32px" height="32px"></img>
                </button>
                <button></button>
            </div>
        </div>
    )
}

export default ColorWheel
export { colorWheel }