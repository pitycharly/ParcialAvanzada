import React, {useState} from 'react';
import uuid from "uuid";
import axios from 'axios';
function AgregarTarea(props) {

    // creamos nuestro state que tiene tres partes, todos inicializan como
    // strin vacios
    //NOMBRE VARIABLE Y Y COMO LLAMARLA Y ALMACERNAR DATOS EN ELLA
    // onChange : e=>guardarNombre(e.target.value);

    const [nombreTarea, guardarNombreTarea ] = useState('');
    const [nombreProyecto, guardarNombreProyecto ] = useState('');
    const [nombreDes, guardarNombreDes ] = useState('');
    const [apellidoDes, guardarApellidoDes ] = useState('');
    const [tipoDes, guardarTipoDes ] = useState('');
    const [hora, guardarHora] = useState('');
    const [fecha, guardarFecha] = useState('');
    const [error, guardarError] = useState(true);

    const agregarTarea = async e => {
        e.preventDefault();

        if(nombreTarea === '' || nombreProyecto === '' || nombreDes === '' || apellidoDes === '' || tipoDes === ''
           || hora === '' || fecha === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        // crear nuevo producto POST

        try {
            const tarea = await axios.post('http://localhost:4000/tareas',{
                nombreTarea,
                nombreProyecto,
                nombreDes,
                apellidoDes,
                tipoDes,
                hora,
                fecha,
                estado:true,
                id :uuid(),
            });
            console.log(tarea);
            console.log("PRODUCTO CREADO");

            props.crearTarea(tarea);

        } catch (error) {
            console.log(error);

        }
    }


    return (
        <div className="col-md-8 mx-auto ">
            <h1 className="text-center">Agregar Tarea</h1>



            <form
                onSubmit={agregarTarea}
                className="mt-5"
            >
                <div className="form-group">
                    <label>Nombre Tarea</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nombreTarea"
                        placeholder="Nombre Tarea"
                        onChange={e => guardarNombreTarea(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Nombre del Proyecto</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nombreProyecto"
                        placeholder="Nombre del proyecto"
                        onChange={e => guardarNombreProyecto(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Nombre del Desarrollador</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nombreDesarrollador"
                        placeholder="Nombre del desarrollador"
                        onChange={e => guardarNombreDes(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Apellido del Desarrollador</label>
                    <input
                        type="text"
                        className="form-control"
                        name="apellidoDesarrollador"
                        placeholder="Apellido del desarrollador"
                        onChange={e => guardarApellidoDes(e.target.value)}
                    />
                </div>

                <legend className="text-center">Tipo Desarrollador:</legend>
                <div className="text-center">
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="TipoDesarrollador"
                        value="Front"
                        onClick={e=>guardarTipoDes(e.target.value)}
                    />
                    <label className="form-check-label">
                        Front-end
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="TipoDesarrollador"
                        value="Back"
                        onClick={e=>guardarTipoDes(e.target.value)}
                    />
                    <label className="form-check-label">
                        Back-end
                    </label>
                </div>

                </div>
                <div className="row ">
                    <div className="col-4">
                        <div className="input-group">
                            <span className="label label-default input--style-2">Hora de ingreso</span>
                            <input className="input--style-2" type="time" placeholder="Hora de ingreso" name="hora"
                            onChange={e => guardarHora(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="input-group">
                            <span className="label label-default input--style-2">Fecha</span>
                            <input className="input--style-2" type="date" placeholder="Fecha de ingreso" name="fecha"
                            onChange={e => guardarFecha(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="p-t-30">
                    <button className="btn btn--radius btn--green" type="submit">Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default AgregarTarea;
