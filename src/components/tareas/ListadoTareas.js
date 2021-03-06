import React, { Fragment, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";
import Tarea from "./Tarea";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListadoTareas = () => {
  //Obtener el State de proyectos
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  //Obtener las tareas del proyecto
  const tareasContext = useContext(tareaContext);
  const { tareasproyecto } = tareasContext;

  //Si no hay proyecto seleccionado

  if (!proyecto) return <h2> Selecciona proyecto</h2>;

  // aplicar array destructurin para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  //elimina un proyecto

  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual.id);
  };
  return (
    <Fragment>
      <h2>Proyecto : {proyectoActual.nombre}</h2>

      <ul className="listado-tareas">
        {tareasproyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          <TransitionGroup>
            {tareasproyecto.map((tarea) => (
              <CSSTransition key={tarea.id} timeout={200} className="tarea">
                <Tarea tarea={tarea} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
        <button
          type="button"
          className="btn btn-eliminar"
          onClick={onClickEliminar}
        >
          Eliminar Proyecto &times;
        </button>
      </ul>
    </Fragment>
  );
};
export default ListadoTareas;
