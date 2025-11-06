import "./layout/Contacto.css";
const Contacto = () => {
  return (
    <>
      <section className="contacto" id="contacto">
        <div className="encabezado">
          <h3 className="titulo">Manda tu mensajito Papuah</h3>
          <p className="subtitulo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
            possimus.
          </p>
        </div>
        <form action="" className="formulario">
          <div className="grupo-formulario">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Tu nombre"
            />
          </div>
          <div className="grupo-formulario">
            <label htmlFor="correo">Correo</label>
            <input
              type="text"
              name="corre"
              id="correo"
              placeholder="Tu correo"
            ></input>
          </div>
          <div className="grupo-formulario mensaje">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" placeholder="john@correo.com"></textarea>
          </div>
          <div className="grupo-formulario error">
            <p>Error: Informacion Invalida</p>
          </div>
          <div className="grupo-formulario enviar">
            <div className="boton">
              Mandar mensaje
              <div className="icono">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1.133l.941.502A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765L2 3.133zm0 2.267-.47.25A1 1 0 0 0 1 5.4v.817l1 .6zm1 3.15 3.75 2.25L8 8.917l1.25.75L13 7.417V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1zm11-.6 1-.6V5.4a1 1 0 0 0-.53-.882L14 4.267zM8 2.982C9.664 1.309 13.825 4.236 8 8 2.175 4.236 6.336 1.31 8 2.982m7 4.401-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contacto;
