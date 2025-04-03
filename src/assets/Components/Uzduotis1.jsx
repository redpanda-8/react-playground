export const Uzduotis1 = (props) => {
    const {
        color,
        children,
    } = props;
    // return visada grazins html elementa su prie jo pridetomis ir sugeneruotomis 
    // kintamuju rekksmemis, kurias pateiksime importuodami (siuo atveju app.jsx ten importuojam ir irasom reiksme)
    return (
        // children propsas leidzia padaryti ne void komponenta, visa laika naudojamas kaip parodyta zemiau,
        // naudinga pop up, didesniems komponentams, kurie gali tureti vaiku, kitu komponentu
        <button style={{backgroundColor: color}}>{children}</button>
    );
};
