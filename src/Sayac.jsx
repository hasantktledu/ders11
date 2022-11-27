import React from "react";
import './sayac.css';
function Sayac(ozellikler) {

    const [sayac, sayacGuncelle] = React.useState(ozellikler.baslangic)

    return (
        <div className="sayac">
            {sayac}  <button onClick={() => { sayacGuncelle(sayac + ozellikler.artim) }}>Arttır +</button>
        </div>
    )
}
export default Sayac;