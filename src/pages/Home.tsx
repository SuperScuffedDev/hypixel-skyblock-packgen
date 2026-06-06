import { For } from "solid-js"
import placeholder from "../assets/images/landing/placeholder.png"
import placeholder_2 from "../assets/images/landing/placeholder2.png"

type Props = {}

var images = [
    placeholder,
    placeholder_2
]

function Home(props: Props) {
    return (
        <>
            <div style={
                {
                    "display": "flex",
                    "width": "100vw",
                    "height": "calc(100vh - 82px)",
                }
            }>
                <div style={
                    {
                        "background-color": "#000020",
                        "width": "300px",
                        "height": "calc(100vh - 82px)"
                    }
                }></div>
                <span class="divider"></span>
                <div style={
                    {
                        "background-color": "#14144f",
                        "height": "calc(100vh - 82px)",
                        "flex": 1,
                        "display": "flex",
                        "flex-direction": "column",
                    }
                }>
                    <div style={
                        {
                            "background-color": "#0b0b30",
                            "width": "100%",
                            "height": "500px",
                            "display": "flex",
                            "justify-content": "center",
                            "align-items": "center",
                            "gap": "16px"
                        }
                    }>
                        <For each={images}>
                            {(item) =>
                                <img src={item} width={1280} height={720} style={
                                    {
                                        "border-radius": "16px",
                                        "border": "1px solid #ffffff",
                                        "aspect-ratio": "16/9",
                                        "width": "auto",
                                        "height": "90%"
                                    }
                                }>

                                </img>
                            }
                        </For>
                    </div>
                    <div class="divider">
                    </div>
                </div>
                <span class="divider"></span>
                <div style={
                    {
                        "background-color": "#000020",
                        "width": "300px",
                        "height": "calc(100vh - 82px)"
                    }
                }></div>
            </div>
        </>
    )
}

export default Home