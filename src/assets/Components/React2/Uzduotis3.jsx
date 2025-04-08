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
        // atnaujinam state'us objektu naudodami setClick(nauja reiksme) siuo metodu atnaujiname
        // objektu state'us ir kintamojo click reiksme pasikeicia i naujai pateikta
        setCountriesSorted(sorted);
        setClick(true);

        // Assign a random color (red or blue) to each country
        const newColors = {};
        sorted.forEach((country) => {
            // newColors[country] = newColors["Norway"] ar kokia kita salis is countries objekto einant per visas is eiles
            // tokiu metodu taikome i specifine reiksme array
            // objekte giliau einame per taska, array siuo metodu
            newColors[country] = Math.random() > 0.5 ? "red" : "blue";
        });
        setColors(newColors);
    }

    return (
        <>
            <button onClick={sortCountries}>{title}</button>
            <div style={{display:"flex", flexWrap:"wrap", padding:"10px"}}>
                {countriesSorted.map((country, index) => (
                    <div key={index} style={{padding:"5px", margin:"5px", border: `5px solid ${clicked ? colors[country] : "green"}`,}}>
                        {country}
                    </div>
                ))}
            </div>
        </>
    );
};
