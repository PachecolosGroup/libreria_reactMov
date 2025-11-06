import Header from "./componentes/Header";
import Hero from "./componentes/Hero";
import Clientes from "./componentes/Clientes";
import Trabajos from "./componentes/Trabajos";
import Acercade from "./componentes/Acercade";
import Contacto from "./componentes/Contacto";
import Footer from "./componentes/Footer";

function App() {
  return (
    <>
      <div className="contenedor">
        <Header />
        <Hero />
        <Trabajos />
        <Acercade />
        <Footer />
      </div>
    </>
  );
}

export default App;
