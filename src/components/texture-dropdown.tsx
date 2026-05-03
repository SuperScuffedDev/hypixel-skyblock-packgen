type props = {
    catagory: string
}

function TextureDropdown(props: props) {
    return (
        <>
            <div class="dropdown" style={
                {
                
                    "display": "flex",
                    "flex-direction": "column",
                    "background-color": "#332f39",
                    "width": "100%",
                    "height": "10%",
                    "border": "2px solid white"
                }
            }>
                <h3 style={
                    {
                        "color": "#fffff",
                        "text-align": "center",
                        "font-size": "20px",
                        "width": "100%",
                        "height": "100%",
                    }
                }>
                    {props.catagory}
                </h3>
            </div>
        </>
    )
}

export default TextureDropdown