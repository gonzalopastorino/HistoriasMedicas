import { createContext, useContext, useState, useEffect } from "react";
import { createTaskRequest, getTasksRequest, deleteTaskRequest, getTaskRequest, updateTaskRequest } from "../../api/tasks";

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("error en la tarea");
  }
  return context;
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [errors, setErrors] = useState([]); // Estado para errores

  const getTasks = async () => {
    try {
      const res = await getTasksRequest();
      setTasks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createTask = async (task) => {
    try {
      const res = await createTaskRequest(task);
      setTasks([...tasks, res.data]);
      setErrors([]); // Limpia errores si la creación fue exitosa
      return true; // Indica que la creación fue exitosa
    } catch (error) {
      const errorMessages = Array.isArray(error.response?.data)
        ? error.response.data
        : [error.response?.data?.message || "Error desconocido"];
      setErrors(errorMessages); // Guarda los errores en el estado
      return false; // Indica que la creación falló
    }
  };
  
  

  const deleteTask = async (id) => {
    try {
      const res = await deleteTaskRequest(id);
      if (res.status === 204) setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (id, task) => {
    try {
      await updateTaskRequest(id, task);
      setErrors([]); // Limpiar errores si la actualización es exitosa
    } catch (error) {
      const errorMessages = Array.isArray(error.response?.data)
        ? error.response.data
        : [error.response?.data?.message || "Error desconocido"];
      setErrors(errorMessages); // Guardar errores en el estado
      throw error; // Lanza el error para que el formulario lo maneje
    }
  };
  
  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]); // Limpiar errores después de 5 segundos
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        getTasks,
        deleteTask,
        getTask,
        updateTask,
        errors, // Proporciona los errores en el contexto
        setErrors, // Permite limpiar errores desde el componente
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
