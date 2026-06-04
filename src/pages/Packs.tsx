import { createSignal, Show } from "solid-js";

function Packs() {
    const [createOpen, setCreateOpen] = createSignal(false)

    return (
        <>
        <div style={
            {
                
            }
        }>
            <button onClick={
                (e) => {
                    
                }
            }>
                new pack
            </button>
        </div>
        </>
    )
}

export default Packs