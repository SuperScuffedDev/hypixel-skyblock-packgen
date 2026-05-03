import { createSignal } from 'solid-js'
import './App.css'
import TextureDropdown from './components/texture-dropdown'

function App() {
    const [count, setCount] = createSignal(0)

    return (
        <>
            <div class="background" style={
                {
                    "position": "absolute",
                    "background-color": "#121317",
                    "width": "100vw",
                    "height": "100vh",
                    "z-index": -1,
                }
            }>

            </div>
            <div class="topbar" style={
                {
                    "background-color": "#16171d",
                    "width": "100vw",
                    "height": "10vh",
                }
            }>

            </div>
            <div class="sidebar" style={
                {
                    "display": "flex",
                    "background-color": "#110d17",
                    "width": "20vw",
                    "height": "90vh",
                    "justify-content": "center",
                    "align-items": "center",
                }
            }>
                <div class="items" style={
                    {
                        "display": "flex",
                        "flex-direction": "column",
                        "background-color": "#15101d",
                        "width": "90%",
                        "height": "95%",
                    }
                }>
                    <h2 class="textures" style={
                        {
                            "background-color": "#1c1717",
                            "width": "100%",
                            "height": "8%",
                            "color": "#ffffff",
                            "text-align": "center"
                        }
                    }>
                        Textures
                    </h2>
                    

                    <div style={
                        {
                            "background-color": "#151111",
                            "width": "100%",
                            "height": "92%",
                        }
                    }>
                        <TextureDropdown catagory="Accessories"/>
                        <TextureDropdown catagory="Armor"/>
                        <TextureDropdown catagory="Misc"/>
                        <TextureDropdown catagory="Tools"/>
                        <TextureDropdown catagory="UI"/>
                        <TextureDropdown catagory="Weapons"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default App
