import "reinvented-color-wheel/css/reinvented-color-wheel.min.css"
import ReinventedColorWheel from "reinvented-color-wheel";
import { createSignal, onCleanup, onMount } from "solid-js"

import color_picker_icon from "../assets/images/color-picker.svg"

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
    var colorWheel;

    onMount(
        () => {
            colorWheel = new ReinventedColorWheel(
                {
                    appendTo: containerRef,
                    hex: props.color(),
                    wheelDiameter: 300,
                    wheelThickness: 30,
                    handleDiameter: 24,
                    wheelReflectsSaturation: false,

                    onChange: function(color) {
                        props.setColor(color.hex)
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
                        "background-color": props.color()
                    }
                }></div>
                <button class="color-picker" style={
                    {
                        "background-color": props.tool() === "color-picker" ? props.buttonActiveColor : props.buttonInactiveColor
                    }
                } onClick={
                    (e) => {
                        props.setTool(props.tool() === "color-picker" ? "none" : "color-picker")
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