import { useTasks } from "../Context/TasksContext";
import { Link } from "react-router-dom";

function TaskCard({task}){
  const {deleteTask}=useTasks()
    return(
        <div className="card-body">
            <p><strong>Nombre:</strong> {task.nombre}</p>
            <p><strong>Apellido:</strong> {task.apellido}</p>
            <p><strong>Edad:</strong> {task.edad}</p>
            <p><strong>Diagnostico:</strong> {task.diagnostico}</p>
            
            
            <div className="d-flex justify-content-end">
                <Link to={`/tasks/${task._id}`} className="btn btn-primary me-2">Editar</Link>
                <button className="btn btn-danger" onClick={()=>{deleteTask(task._id);}}>Eliminar</button>
            </div>
          </div>
    );
}

export default TaskCard;