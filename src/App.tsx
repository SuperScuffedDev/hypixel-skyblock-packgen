import './App.css'
import './Styles.css'
import logo from "./assets/images/logo.png"

function App(props: any) {
    return (
        <>
            <div class='header'>
                <div>
                    <img id='logo' src={logo} height='65'></img>
                </div>
            </div>
            <div class='divider'></div>
            {props.children}
        </>
    )
}
export default App
