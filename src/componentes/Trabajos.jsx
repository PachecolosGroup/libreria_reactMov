import "./layout/Trabajos.css";
import jobs from "./data/jobs";
import { useState } from "react";
import Modal from "./Modal";

const Trabajos = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("todos");
  const [trabajosFiltrados, setTrabajosFiltrados] = useState(jobs);
  const [estadoModal, setEstadoModal] = useState(false);
  const [trabajoSeleccionado, setTrabajoSeleccionado] = useState(jobs[0]);

  const handleChange = (e) => {
    const categoria = e.target.id;
    setCategoriaSelecionada(categoria);

    if (categoria === "todos") {
      setTrabajosFiltrados(jobs);
    } else {
      const nuevosTrabajos = jobs.filter((jobs) => {
        if (jobs.categoria === categoria) {
          return true;
        }
      });
      setTrabajosFiltrados(nuevosTrabajos);
    }
  };

  /* abrir el modal */

  const openModal = (e, id) => {
    e.preventDefault();
    setEstadoModal(true);

    const trabajoid = jobs.find((trabajos) => {
      if (trabajos.id === id) {
        return true;
      }
    });

    setTrabajoSeleccionado(trabajoid);
  };

  const closeModal = () => {
    setEstadoModal(false);
  };

  return (
    <>
      <section className="trabajos" id="trabajos">
        <div className="encabezado">
          <h3 className="titulo">Componentes</h3>
          <p className="subtitulo">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam!
          </p>
        </div>
        <div className="filtros">
          <label htmlFor="todos">
            <input
              type="radio"
              name="categoria"
              id="todos"
              onChange={handleChange}
              checked={categoriaSelecionada === "todos"}
            />
            <span className="opcion">Todos</span>
          </label>
          <label htmlFor="diseño-web">
            <input
              type="radio"
              name="categoria"
              id="diseño-web"
              onChange={handleChange}
              checked={categoriaSelecionada === "diseño-web"}
            />
            <span className="opcion">diseño-web</span>
          </label>
          <label htmlFor="desarrollo-web">
            <input
              type="radio"
              name="categoria"
              id="desarrollo-web"
              onChange={handleChange}
              checked={categoriaSelecionada === "desarrollo-web"}
            />
            <span className="opcion">desarollo-web</span>
          </label>
          <label htmlFor="aplicaciones-moviles">
            <input
              type="radio"
              name="categoria"
              id="aplicaciones-moviles"
              onChange={handleChange}
              checked={categoriaSelecionada === "aplicaciones-moviles"}
            />
            <span className="opcion">aplicaciones-moviles</span>
          </label>
        </div>
        <div className="gridTrabajos">
          {trabajosFiltrados.map((jobs, index) => {
            return (
              <div className="trabajo" key={jobs.id}>
                <a
                  href="#"
                  className="thumb"
                  onClick={(e) => openModal(e, jobs.id)}
                >
                  <img
                    loading="lazy"
                    src={jobs.thumb.url}
                    alt={jobs.thumb.alt}
                  />
                </a>
                <div className="info">
                  <div className="textos">
                    <a
                      href="#"
                      className="nombre"
                      onClick={(e) => openModal(e, jobs.id)}
                    >
                      {jobs.info.nombre}
                    </a>
                    <p className="categoria">{jobs.info.categoria}</p>
                  </div>
                  <a
                    href="#"
                    className="btn-ir"
                    onClick={(e) => openModal(e, jobs.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m5.904-2.803a.5.5 0 1 0-.707.707L9.293 10H6.525a.5.5 0 0 0 0 1H10.5a.5.5 0 0 0 .5-.5V6.525a.5.5 0 0 0-1 0v2.768z" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {estadoModal && (
        <Modal closeModal={closeModal} trabajoid={trabajoSeleccionado} />
      )}
    </>
  );
};

export default Trabajos;
