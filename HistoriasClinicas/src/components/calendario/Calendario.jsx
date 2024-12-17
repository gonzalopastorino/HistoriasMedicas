import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import dayjs from 'dayjs'
import './calendario.css'

const Calendario = () => {
  const localizer = dayjsLocalizer(dayjs)

  const events = [
    {
      start: dayjs('2024-12-01T09:00:00').toDate(),
      end: dayjs('2024-12-01T15:00:00').toDate(),
      title: 'Cita médica',
    }
  ]

  return (
    <div style={{ 
      height: '75vh',
      width: '80%',
      }}>
      calendario
      <Calendar        
      localizer={localizer}
      events={events}
      />
    </div>
  )
}

export default Calendario