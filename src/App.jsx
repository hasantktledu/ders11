import React from "react"
import KopekListe from "./KopekListe"

function App() {
    const [adet, adetGuncelle] = React.useState(3)
    const eleman1 = React.useRef()

    const fotoGetir = ()=> {
        adetGuncelle( eleman1.current.value )
    }

    return (
        <>
            <div>
                <input ref={eleman1} type="text" />
                <button onClick={fotoGetir}>Foto Getir</button>
            </div>
            <KopekListe fotoSayisi={adet} />
        </>
    )
}

export default App