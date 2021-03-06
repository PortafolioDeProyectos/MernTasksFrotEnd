import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";
import { v4 as uuid } from "uuid";
import {
  AGREGAR_TAREA,
  TAREAS_PROYECTO,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
  LIMPIAR_TAREA,
} from "../../types";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      {
        id: 1,
        nombre: "Elegir plataforma",
        estado: true,
        proyectoId: 1,
      },
      {
        id: 2,
        nombre: "Elegir colores",
        estado: true,
        proyectoId: 2,
      },
      {
        id: 3,
        nombre: "Elegir plataforma de pago",
        estado: false,
        proyectoId: 3,
      },
      {
        id: 4,
        nombre: "Elegir Hosting",
        estado: true,
        proyectoId: 4,
      },
      {
        id: 5,
        nombre: "Elegir plataforma",
        estado: true,
        proyectoId: 4,
      },
      {
        id: 6,
        nombre: "Elegir colores",
        estado: true,
        proyectoId: 3,
      },
      {
        id: 7,
        nombre: "Elegir plataforma de pago",
        estado: false,
        proyectoId: 2,
      },
      {
        id: 8,
        nombre: "Elegir Hosting",
        estado: true,
        proyectoId: 1,
      },
      {
        id: 9,
        nombre: "Elegir Hosting2",
        estado: true,
        proyectoId: 1,
      },
      {
        id: 10,
        nombre: "Elegir Hosting3",
        estado: true,
        proyectoId: 1,
      },
    ],
    tareasproyecto: null,
    errortarea: false,
    tareaseleccionada: null,
  };

  //Crear dispatch y State
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  //Crear las funciones

  //Obtener las tareas de un proyecto
  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };
  //Agregar una tarea un proyecto seleccionado
  const agregarTarea = (tarea) => {
    tarea.id = uuid();
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  // Valida y muestra un error en caso de que sea necesario

  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  //Eliminar tarea por su id
  const eliminarTarea = (id) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };

  //cambiarEstadoTarea
  const cambiarEstadoTarea = (tarea) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };
  // Extrae la tarea para edicion
  const guardarTareaActual = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };
  //edita o midifica una tarea
  const actualizarTarea = (tarea) => {
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea,
    });
  };
  //Elimina la tarea seleccionada

  const limpiarTarea = () => {
    dispatch({
      type: LIMPIAR_TAREA,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        tareaseleccionada: state.tareaseleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        guardarTareaActual,
        actualizarTarea,
        limpiarTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};
export default TareaState;
