import './App.css'
import logo from "./assets/images/logo.png"

function App(props: any) {
    return (
        <>
            <div class='header' style={
                {
                    "background-color": "#00031d",
                    "display": "flex",
                    "flex-direction": "column",
                    "width": "100vw",
                    "height": "82px"
                }
            }>
                <div style={
                    {
                        "display": "flex",
                        "width": "100%",
                        "height": "81px",
                        "padding": "16px"
                    }
                }>
                    {/* <img id='logo' src={logo} height='65' style={
                        {
                            "width": "300px",
                            "height": "50px"
                        }
                    }></img> */}
                    <h1 style={
                        {
                            "color": "#ffffff",
                            "font-size": "40px" 
                        }
                    }>PACKGEN</h1>
                </div>
            </div>
            <div class='divider'></div>
            {props.children}
        </>
    )
}
export default App
