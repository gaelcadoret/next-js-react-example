import React, { useState, useCallback } from "react";
import DefaultLayout from "../src/layouts/default";
import TitleH1 from "../src/components/TitleHn";
import Items from "../src/components/Items";

/**
 * Statefull component
 * @returns {JSX.Element}
 * @constructor
 */
const Home = () => {
    const [data, setData] = useState({});

    const callCoinDesk = async () => {
        const response = await fetch("https://api.coindesk.com/v1/bpi/historical/close.json");
        const data = response.json();
        return data;
    };

    const fetchData = useCallback(async () => {
        const data = await callCoinDesk();
        setData(data.bpi);
    });

    return (
        <>
            <TitleH1 title="Accueil"/>

            <div>
                <img src="/img/image-montagne.jpg" alt="Vue sur la montagne et un lac" title="image de montagne"/>
            </div>

            <button
                onClick={() => fetchData()}
            >Fetch data</button>

            <Items data={data} />
        </>
    );
}

export default Home;
