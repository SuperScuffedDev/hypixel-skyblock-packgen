type Props = {
    catagory: string
}

function printer(props: Props) {
    console.log(props.catagory)
}

function TextureCatagory(props: Props) {
    return (
        <>
            <div onClick={[printer, props]} class="dropdown" style={
                {
                
                    "display": "flex",
                    "flex-direction": "column",
                    "background-color": "#332f39",
                    "width": "100%",
                    "height": "50px",
                    "border": "2px solid white"
                }
            }>
                <h3 style={
                    {
                        "color": "#fffff",
                        "text-align": "center",
                        "font-size": "30px",
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

export default TextureCatagory
