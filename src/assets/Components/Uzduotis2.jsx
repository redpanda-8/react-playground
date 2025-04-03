import { useState } from "react";

export const Uzduotis2 = (props) => {
    const {
       title, 
    } = props;

    const [count, setCount] = useState(0)

    const kvadratukai = [];
    let i = 0;
    // while loop'e mes nustatome kiek kartu norime kartoti veiksma. Tai skaiciuojame pagal i kuris yra aktyvus tik for viduje
    // let i = 0; - nusako musu startini indeksa, siuo metu nuli, nuo sios reiksmes pradesime skaiciuoti loop'us
    // i < count; - yra salyga kuriai griztant true mes kartosime loop'a. Tai kol i bus maziau count
    // i++ - jei pries tai buvusi salyga grazina true, padidiname i ir kartojame loop'a dar karta
    // visos sitos trys salygos yra privalomos for loop'ui (kitaip uzsiloopinsi ir dings kompas)
    while (i < count) {
        // push itraukia i array nauja elementa
        // key react yra privalomas bet kokiame loope, loope dazniausiai naudojam index'a
        const min = 10;
        const max = 20;
        const rand = min + Math.random() * (max - min);
        kvadratukai.push(<div key={i}style={{padding:"5px", margin:"5px", border:"1px solid red"}}>{Math.round(rand)}</div>);
        i++;
    }

    function createKvadratukas(){
        // countas seka kiek yra globalus skaicius
        setCount(count + 1);
    }

    return (
        <>
            <button onClick={createKvadratukas}>{title}</button>
            <div style={{display:"flex", flexWrap:"wrap", padding:"10px"}}>
            {kvadratukai}
            </div>
            
        </>
        
    );
};
