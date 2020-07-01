import React from "react"
import ContactCard from "./components/ContactCard.js"

function App() {
    return (
        <>
        <ContactCard contact={{name: "Miguel Karlo Sese", number: "09175911109", email: "sese.miguel9@gmail.com"}} />
        <ContactCard contact={{name: "Miguel Karlo Sese", number: "09175911109", email: "sese.miguel9@gmail.com"}} />
        <ContactCard contact={{name: "Miguel Karlo Sese", number: "09175911109", email: "sese.miguel9@gmail.com"}} />
        <ContactCard contact={{name: "Miguel Karlo Sese", number: "09175911109", email: "sese.miguel9@gmail.com"}} />
        </>
    )
}

export default App