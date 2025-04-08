// Shared default props
const defaultProps = {
    // deklaruojame default value, jeigu importuojant komponenta nenaudosime sios savybes, bus naudojamas default'as
    // kitu atveju butu undefinied ar net error'as
  className: "",
  title: "",
};

// Button component
const Button = ({ defaultProps: sharedDefaults, buttonProps }) => {

  const {
    type = "button",
    className = sharedDefaults.className,
    title = sharedDefaults.title,
  } = buttonProps;

  return (
    <button type={type} className={className} title={title}>
      {title}
    </button>
  );
};

// Link component
const Link = ({ defaultProps: sharedDefaults, linkProps }) => {
    
  const {
    href = "#",
    className = sharedDefaults.className,
    title = sharedDefaults.title,
  } = linkProps;

  return (
    <a href={href} className={className} title={title}>
      {title}
    </a>
  );
};

// taip atrodo exportas, kai is vieno failo exportuojame kelis komponentus, const ar func
export { Button, Link, defaultProps };
