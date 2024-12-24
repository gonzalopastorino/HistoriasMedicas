import { createContext, useContext, useState } from "react";
import {createTaskRequest,getTasksRequest} from "../../api/tasks"
const TaskContext= createContext()

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('error en la tarea');
    }
    return context; // Esto es crucial para que la información del contexto esté disponible.
};

export function TaskProvider({children}){
    const [tasks,setTasks]=useState([]);


    const getTasks = async() => {
        try{
        const res= await getTasksRequest();
        setTasks(res.data)
    }catch(error){
        console.error(error)
    }
    }
    const createTask= async (task)=>{
        console.log('task')
       const res= await createTaskRequest(task);
       console.log(res)
    }
    return  (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            getTasks,
        }}>
            {children}
        </TaskContext.Provider>
    );
}