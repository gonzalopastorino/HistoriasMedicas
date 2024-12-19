import { createContext, useContext, useState } from "react";

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
    const createTask=async (task)=>{
        console.log(task)
    }
    return  (
        <TaskContext.Provider value={{
            tasks,
            createTask
        }}>
            {children}
        </TaskContext.Provider>
    );
}