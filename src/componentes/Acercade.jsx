import "./layout/Acercade.css";
const Acercade = () => {
  return (
    <>
      <section className="acerca-de" id="acerca-de">
        <div className="grid">
          <div className="col-1">
            <div className="fotos">
              <img className="foto" src="./assets/acerca-de-1.png" alt="" />
              <img className="foto" src="./assets/acerca-de-2.png" alt="" />
            </div>
          </div>
          <div className="col-2">
            <h4 className="pre-titulo">Acerca del Proyecto</h4>
            <h3 className="titulo">Lorem, ipsum dolor sit amet</h3>
            <p className="resumen">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
              repellendus consequuntur totam praesentium nobis perferendis
              rerum? Sed recusandae maiores dignissimos sapiente iure, provident
              nam!
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
              iure architecto. Eius.
            </p>
            <a href="#contacto" className="boton">
              Mandame un mensajito
              <span className="icono">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                  <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Acercade;
