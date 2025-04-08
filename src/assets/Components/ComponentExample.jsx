// svarbumo tvarka
//1 pav Pavadinimas turi buti semantiskai aiskus
//2 jeigu tai yra vienintelis komponentas faile - jo Pavadinimas turi buti toks pag kaip failo
//3 komponento pavadinimas VISADA is Didziosios raides, failo taip pat

// deklaruojam export Componenta
// () surasom propsus, kurie bus naudojami komponente, propsu vardus galima sugalvoti bet kokius
// bet jie turetu buti semantiskai aiskus arba naudoti pagal standarta priimtus vardus, e.g.:
// example propsu vardams: className, key, style, type 
export const Component = (props) => {

    // kad exporto eiluteje nebutu sniuras del didelio propsu kiekio, galima naudoti ju aprasyma kaip
    // parodyta zemiau papildamoje konstaktoje.
    // ji privalo vadintis: props, defaultProps, componentProps
    const {
        // sita className sulinkina su App.jsx faile esanciu <Component className={"bar"}/>
        className,
    } = props;
    
    // grazinam xml contenta
    return (
        // pirmas className react atributas(class atitikmuo), yra kur padesime propso reiksme
        // antras className yra apsirasytas propsas ir nuoroda kur ateis tiksliai reiksme
        // className={className}   =   kurEina={kasEina}
        <div className={className}></div>
    );
};

