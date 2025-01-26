import React, { useState, useEffect } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import { getEventsRequest } from "../../api/calendario";
import { useNavigate } from "react-router-dom";
import "./calendario.css";

// Configuración de localización y mensajes en español
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
  const navigate = useNavigate(); // Hook para redirigir

  // Cargar eventos desde el backend
  useEffect(() => {
    const cargarEventos = async () => {
      try {
        const respuesta = await getEventsRequest();
        const eventosTransformados = respuesta.data.map((evento) => ({
          id: evento._id,
          title: `${evento.nombre} ${evento.apellido}`, // Título concatenado
          start: new Date(evento.start),
          end: new Date(evento.start), // Fecha de fin igual a la de inicio
        }));
        setEventos(eventosTransformados);
      } catch (error) {
        console.error("Error al cargar los eventos:", error.message);
      }
    };
    cargarEventos();
  }, []);

  // Manejar clic en una fecha para redirigir al formulario
  const manejarClicFecha = (fecha) => {
    const fechaISO = fecha.toISOString(); // Convertir fecha a ISO
    navigate("/calendario/nuevo-turno", { state: { fechaSeleccionada: fechaISO } });
  };

  return (
    <div className="calendario-container">
      <h2>Calendario de Eventos</h2>

      {/* Contenedor del calendario */}
      <div className="calendario-body" style={{ height: "80vh" }}>
        <Calendar
          localizer={localizer}
          events={eventos}
          startAccessor="start"
          endAccessor="end"
          selectable={true} // Habilitar selección de fecha
          onSelectSlot={({ start }) => manejarClicFecha(start)} // Redirigir al formulario al seleccionar una fecha
          messages={mensajesEspañol} // Mensajes en español
        />
      </div>
    </div>
  );
};

export default Calendario;
