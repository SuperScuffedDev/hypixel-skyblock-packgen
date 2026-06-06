function Packs() {
    function packSubmit(e: SubmitEvent) {
        e.preventDefault();
        const form = e.currentTarget as HTMLFormElement
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())
        console.log(data)
    }

    return (
        <>
        <div style={
            {
                "background-color": "#000020",
                "width": "100vw",
                "height": "calc(100vh - 82px)",
                "display": "flex",
                "justify-content": "center"
            }
        }>
            <span class="divider"></span>
            <div style={
                {
                    "background-color": "#14144f",
                    "width": "50vw",
                    "height": "calc(100vh - 82px)",
                    "display": "flex",
                    "justify-content": "center"
                }
            }>
                <form onSubmit={packSubmit} style={
                    {
                        "width": "50vw",
                        "height": "calc(100vh - 82px)",
                        "display": "flex",
                        "flex-direction": "column",
                        "justify-content": "start"
                    }
                } action={""} method="get">
                    <h2 style={
                        {
                            "color": "#ffffff",
                            "font-size": "48px",
                            "display": "flex",
                            "justify-content": "center",
                            "align-items": "center",
                            "gap": "16px",
                            "margin-top": "200px"
                        }
                    }>Create Pack</h2>
                    <div style={
                        {
                            "display": "flex",
                            "justify-content": "center",
                            "align-items": "center",
                            "gap": "16px",
                            "margin-top": "100px"
                        }
                    }>
                        <label for="name" style={
                            {
                                "color": "#ffffff",
                                "font-size": "32px"
                            }
                        }>Name:</label>
                        <input style={
                            {
                                "background-color": "#030226",
                                "color": "#ffffff",
                                "font-size": "24px",
                                "height": "32px",
                                "width": "500px"
                            }
                        } id="name" name="name" type="text" maxLength={50} required></input>
                    </div>
                    <div style={
                        {
                            "display": "flex",
                            "justify-content": "center",
                            "align-items": "center",
                            "gap": "16px",
                            "margin-top": "20px"
                        }
                    }>
                        <label style={
                            {
                                "color": "#ffffff",
                                "font-size": "32px",
                                "align-self": "start"
                            }
                        } for="description">Description:</label>
                        <textarea  style={
                            {
                                "background-color": "#030226",
                                "color": "#ffffff",
                                "font-size": "24px",
                                "height": "200px",
                                "width": "700px",
                                "resize": "none"
                            }
                        } id="description" name="description" maxLength={100} required></textarea>
                    </div>

                    <div style={
                        {
                            "display": "flex",
                            "justify-content": "center",
                            "align-items": "center",
                            "gap": "24px",
                            "margin-top": "100px"
                        }
                    }>
                        <button type="button" style={
                            {
                                "all": "unset",
                                "width": "200px",
                                "height": "50px",
                                "color": "#ffffff",
                                "font-size": "24px",
                                "text-align": "center",
                                "border": "1px solid #1d2d53",
                                "border-radius": "16px",
                                "background-color": "#030226"
                            }
                        }>Cancel</button>
                        <button type="submit" style={
                            {
                                "all": "unset",
                                "width": "200px",
                                "height": "50px",
                                "color": "#ffffff",
                                "font-size": "24px",
                                "text-align": "center",
                                "border": "1px solid #1d2d53",
                                "border-radius": "16px",
                                "background-color": "#030226"
                            }
                        }>Create</button>
                    </div>
                </form>
            </div>
            <span class="divider"></span>
        </div>
        </>
    )
}

export default Packs