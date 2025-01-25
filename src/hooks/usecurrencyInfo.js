import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((res) => {
                console.log(res); // Log the entire response
                setData(res[currency]);
            })
            .catch((error) => console.error('Fetch error:', error));
    }, [currency]);

    console.log(data); // This will log the updated data after the fetch
    return data;
}

export default useCurrencyInfo;