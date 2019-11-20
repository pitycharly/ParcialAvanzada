import React from "react";

const Tarea = ({ tarea, eliminarTarea }) => (
  <div className="media mt-3">
    <div className="media-body">
      <h3 className="mt-0">{tarea.nombreArma}</h3>
      <h2 className="mt-0">Proyecto: {tarea.nombreProyecto}</h2>
      <p className="card-text">
        <span>Nombre del Desarrollador</span> {tarea.nombreDes}
      </p>
      <p className="card-text">
        <span>Apellido del Desarrollador</span> {tarea.apellidoDes}
      </p>
      <p className="card-text">
        <span>Tipo de desarrollador</span> {tarea.tipoDe}
      </p>



      <p>
        <span>Fecha</span> {tarea.fecha}
      </p>
      <p>
        <span>Hora</span> {tarea.hora}
      </p>

      <button className="btn btn-danger" onClick={() => eliminarTarea(tarea.id)}>
        Borrar &times;
      </button>
    </div>
  </div>
);

export default Tarea;
