import React, { useState, useEffect } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import { getEventsRequest,createEventRequest } from "../../api/calendario.js"; // Importa las funciones de la API


// Configuración de los mensajes en español
const localizer = dayjsLocalizer(dayjs);
const mensajesEspañol = {
  allDay: "Todo el día",
  previous: "Anterior",
  next: "Siguiente",
  today: "Hoy",
  month: "Mes",
  week: "Semana",
  day: "Día",
  agenda: "Agenda",
  date: "Fecha",
  time: "Hora",
  event: "Evento",
  noEventsInRange: "No hay eventos en este rango",
  showMore: (total) => `+ Ver más (${total})`,
  
};

const Calendario = () => {
  const [eventos, setEventos] = useState([]);

  // Cargar los eventos desde el backend
  useEffect(() => {
    const cargarEventos = async () => {
      try {
        const respuesta = await getEventsRequest();
        const eventosTransformados = respuesta.data.map((evento) => ({
          id: evento._id,
          title: `${evento.nombre} ${evento.apellido}`, // Concatenar nombre y apellido para el título
          start: new Date(evento.start),
          end: new Date(evento.start), // Usar la misma fecha de inicio como fecha de fin
        }));
        setEventos(eventosTransformados);
      } catch (error) {
        console.error("Error al cargar los eventos:", error.message);
      }
    };
    cargarEventos();
  }, []);

  // Manejo del clic en un día para mostrar los prompts
  const manejarClicFecha = async (fecha) => {
    const nombre = prompt("Ingrese el nombre del paciente:");
    if (!nombre) return; // Si no se ingresa nombre, no continuar

    const apellido = prompt("Ingrese el apellido del paciente:");
    if (!apellido) return; // Si no se ingresa apellido, no continuar

    const obrasocial = prompt("Ingrese la obra social:");
    if (!obrasocial) return; // Si no se ingresa obra social, no continuar

    const especialista = prompt("Ingrese el nombre del especialista:");
    if (!especialista) return; // Si no se ingresa especialista, no continuar

    const start = fecha.toISOString(); // Fecha seleccionada en el calendario

    // Crear el objeto del evento con los datos proporcionados
    const datosEvento = { nombre, apellido, obrasocial, especialista, start };

    try {
      const eventoCreado = await createEventRequest(datosEvento);
      setEventos((prevEventos) => [
        ...prevEventos,
        {
          ...eventoCreado,
          title: `${eventoCreado.nombre} ${eventoCreado.apellido}`,
          start: new Date(eventoCreado.start),
          end: new Date(eventoCreado.start), // Usar la misma fecha de inicio como fecha de fin
        },
      ]);
    } catch (error) {
      console.error("Error al crear el evento:", error.message);
    }
  };

  return (
    <div>
      <h2>Calendario de Eventos</h2>

      {/* Calendario */}
      <div className="calendario" 
      style={{ height: "75vh", width: "100%", backgroundImage: "linear-gradient(to top,rgb(39, 105, 172) 0%,rgb(227, 228, 231) 1%,rgb(255, 255, 255) 100%)" }}>
        <Calendar
          localizer={localizer}
          events={eventos}
          startAccessor="start"
          endAccessor="end"
          onSelectSlot={({ start }) => manejarClicFecha(start)} // Llamar a manejarClicFecha al hacer clic en una fecha
          selectable={true} // Habilitar la selección de fecha
          messages={mensajesEspañol} // Mensajes en español
        />
      </div>
    </div>
  );
};

export default Calendario;
