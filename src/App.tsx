import './App.css'

function App(props: any) {
    return (
        <>
            <div class='header'>
                <div>
                    <img id='logo' src='../../assets/logo.png' width='374' height='65'></img>
                </div>
            </div>
            <div class='divider'></div>
            {props.children}
        </>
    )
}
export default App
