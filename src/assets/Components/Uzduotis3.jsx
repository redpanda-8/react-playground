import { useState } from "react";

export const Uzduotis3 = (props) => {
    const {
       title, 
    } = props;

    const countries = [
        "Norway",
        "Argentina",
        "Japan",
        "Canada",
        "Portugal",
        "Finland",
        "Australia",
        "Greece",
        "Latvia",
        "Estonia",
        "Ireland",
        "Lietuva",
        "Italy",
        "France",
        "Sweden",
        "Germany",
        "Poland",
        "Denmark",
        "Austria",
        "JAV"
    ];

    const [countriesSorted, setCountriesSorted] = useState([...countries]);
    const [clicked, setClick] = useState(false)
    const [colors, setColors] = useState({});

    function sortCountries() {
        const sorted = [...countriesSorted].sort();
        setCountriesSorted(sorted);
        setClick(true);

        // Assign a random color (red or blue) to each country
        const newColors = {};
        sorted.forEach((country) => {
            newColors[country] = Math.random() > 0.5 ? "red" : "blue";
        });
        setColors(newColors);
    }


    return (
        <>
            <button onClick={sortCountries}>{title}</button>
            <div style={{display:"flex", flexWrap:"wrap", padding:"10px"}}>
                {countriesSorted.map((country, index) => (
                    <div key={index} style={{padding:"5px", margin:"5px", border: `5px solid ${clicked ? colors[country] : "green"}`,}}>{country}</div>
                ))}
            </div>
        </>
        
    );
};
