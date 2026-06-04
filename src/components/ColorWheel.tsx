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
        <div id="color-wheel" ref={containerRef} style={
            {
                "display": "flex",
                "width": "100%",
                "height": "300px",
                "background-color": "#ffffff",
                "border-radius": "16px",
                "margin-bottom": "10px"
            }
        }>
            <div class="color-configs" style={
                {
                    "display": "flex",
                    "flex-direction": "column",
                    "gap": "16px",
                    "justify-content": "space-around",
                    "align-items": "center",
                    "width": "100%",
                    "height": "300px",
                    "padding-block": "50px",
                    "padding-inline": "25px",
                    "border-radius": "16px"
                }
            }>
                <div class="current-color" style={
                    {
                        "background-color": `rgb(${props.color()[0]},${props.color()[1]},${props.color()[2]})`,
                        "flex-grow": 1,
                        "width": "100%",
                        "border-radius": "16px"
                    }
                }></div>
                <button class="color-picker" style={
                    {
                        "background-color": props.tool() === "color-picker" ? props.buttonActiveColor : props.buttonInactiveColor,
                        "flex-grow": 1,
                        "width": "100%",
                        "border-radius": "16px"
                    }
                } onClick={
                    () => {
                        props.setTool(props.tool() === "color-picker" ? "none" : "color-picker")
                        setTool(props.tool())
                    }
                }>
                    <img src={color_picker_icon} width="32px" height="32px" style={
                        {
                            "height": "100%"
                        }
                    }></img>
                </button>
                <button style={
                    {
                        "flex-grow": 1,
                        "width": "100%",
                        "border-radius": "16px"
                    }
                }></button>
            </div>
        </div>
    )
}

export default ColorWheel
export { colorWheel }