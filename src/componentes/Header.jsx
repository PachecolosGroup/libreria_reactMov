import "./layout/Header.css";
import DarkModeSwitch from "./DarkModeSwith";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="logo">
          <h2 className="tituloLogo">@Libreria_FrontEnd</h2>
          <p className="subtituloLogo">4Developers, designers and more.</p>
        </div>
        <nav className="navbar">
          <a href="#trabajos">Trabajos</a>
          <a href="#acerca-de">Acerca del proyecto</a>
          <a href="#contacto">Participantes</a>
        </nav>
        <DarkModeSwitch />
      </header>
    </>
  );
};

export default Header;
