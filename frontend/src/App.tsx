import { A } from '@solidjs/router'
import './App.css'

function App() {
    return (
        <>
            <div class='header'>
                <div>
                    <img id='logo' src='../../assets/logo.png' width='374' height='65'></img>
                </div>
            </div>
            <div class='divider'></div>
            <nav>
                <A href='/'>home</A>
                <A href='editor'>editor</A>
            </nav>
        </>
    )
}
export default App
