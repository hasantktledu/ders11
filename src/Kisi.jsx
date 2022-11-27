import React from "react";

function Kisi(ozellikler) {
    const [ bilgi, bilgiGuncele ] = React.useState(null)

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://swapi.dev/api/people/${ozellikler.id}/`);
            const newData = await response.json();
            bilgiGuncele(newData);
        };

        fetchData();
    }, [ozellikler.id]);


    if (bilgi) {
        return <div>{bilgi.name}</div>;
    } else {
        return null;
    }
}

export default Kisi