import "./layout/Clientes.css";

const Clientes = () => {
  return (
    <>
      <section className="clientes">
        <div className="encabezado">
          <h3 className="titulo">Mis Clientes</h3>
          <p className="subtitulo"> Estas marcas son las propias</p>
        </div>
        <div className="logos">
          <img
            className="logo"
            src="./assets/logos/Recharge.svg"
            alt="Logo de Recharge Comp"
          />
          <img
            className="logo"
            src="./assets/logos/Umbrella.svg"
            alt="Logo de Umbrella"
          />
          <img
            className="logo"
            src="./assets/logos/Vision.svg"
            alt="Logo de Vision"
          />

          <img
            className="logo"
            src="./assets/logos/Waveless.svg"
            alt="Logo de Recharge Comp"
          />
        </div>
      </section>
    </>
  );
};

export default Clientes;
