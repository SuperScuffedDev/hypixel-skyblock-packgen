import { createSignal, For, Show } from "solid-js";

const temppacks = [
    {
        "name": "pack1",
        "description": "pack1 desc"
    }, {
        "name": "pack2",
        "description": "pack2 desc"
    }, {
        "name": "pack3",
        "description": "pack3 desc"
    }, {
        "name": "pack4",
        "description": "pack4 desc"
    }, {
        "name": "pack5",
        "description": "pack5 desc"
    }, {
        "name": "pack21",
        "description": "pack21 desc"
    }, {
        "name": "pack22",
        "description": "pack22 desc"
    }, {
        "name": "pack23",
        "description": "pack23 desc"
    }, {
        "name": "pack24",
        "description": "pack24 desc"
    }
]

function Packs() {
    const [createOpen, setCreateOpen] = createSignal(false)

    return (
        <>
        <div style={
            {
                "background-color": "#000020",
                "width": "100vw",
                "height": "calc(100vh - 82px)",
                "display": "flex",
                "flex-direction": "column",
            }
        }>
            <div style={
                {
                    "background-color": "#000020",
                    "width": "100vw",
                    "height": "200px",
                    "display": "flex",
                    "justify-content": "center"
                }
            }>
                <h1 style={
                    {
                        "color": "#ffffff",
                        "font-size": "48px",
                    }
                }>Your Packs</h1>
            </div>
            <div id="packs-grid" style={
                {
                    "background-color": "#000020",
                    "width": "100vw",
                    "height": "calc(100vh - 148px)",
                    "overflow": "hidden",
                    "padding": "32px"
                }
            }>
                <For each={temppacks}>
                    {(item) =>
                        <div attr:pack-name={item["name"]} style={
                            {
                                "width": "450px",
                                "height": "250px",
                                "color": "#ffffff",
                                "font-size": "24px",
                                "text-align": "center",
                                "border": "1px solid #1d2d53",
                                "border-radius": "16px",
                                "background-color": "#030226"
                            }
                        }>
                            <h2>{item["name"]}</h2>
                        </div>
                    }
                </For>
            </div>
        </div>
        </>
    )
}

export default Packs