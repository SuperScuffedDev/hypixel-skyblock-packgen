import { API_CONFIG } from "./config"

export async function getItemData() {
    await fetch(`${API_CONFIG.API_BASE_URL}hypixelitemdata/`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })

    // var data = {
    //     title: "fuck",
    //     content: "aaaa"
    // }

    // await fetch(`${API_CONFIG.API_BASE_URL}api/posts`, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(data)
    // })
}