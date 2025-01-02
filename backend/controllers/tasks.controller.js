import Task from '../models/task.model.js'
import { createTaskSchema } from "../schemas/task.schema.js"; // Ajusta la ruta según la ubicación real


export const getTasks= async (req,res) =>{
    try{
    const tasks= await Task.find({
        user: req.user.id
    }).populate('user')
    res.json(tasks);
}catch(error){
    res.status(404).json({message: 'Tarea no encontrada'})
}
};


export const createTask = async (req, res) => {
    try {
        // Valida los datos del cuerpo de la solicitud usando Zod
        const validatedData = createTaskSchema.parse(req.body);

        // Extrae los campos validados
        const { nombre, apellido, edad, diagnostico,obrasocial,localidad,direccion} = validatedData;

        // Crea una nueva tarea usando el modelo Task
        const newTask = new Task({
            nombre,
            apellido,
            edad,
            diagnostico,
            obrasocial,
            localidad,
            direccion,
            user: req.user.id,        // Relaciona la tarea con el usuario autenticado
        });

        // Guarda la tarea en la base de datos
        const savedTask = await newTask.save();

        // Devuelve la tarea creada como respuesta
        res.json(savedTask);
    }catch(error) {
        return res.status(500).json('error al crear la tarea');
    }
};

export const getTask= async (req,res) =>{
    try{
   const task= await Task.findById(req.params.id).populate('user')
    if(!task) return res.status(404).json({message: 'Tarea no encontrada'})
    res.json(task)
    }catch(error){
        res.status(404).json({message: 'Tarea no encontrada'})
    }

};

export const deleteTask = async (req, res) => {
    try {
      const deletedTask = await Task.findByIdAndDelete(req.params.id);
      if (!deletedTask)
        return res.status(404).json({ message: "Task not found" });
  
      return res.sendStatus(204);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
export const updateTask= async (req,res) =>{
    try{
    const task= await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if(!task) return res.status(404).json({message: 'Tarea no encontrada'})
    res.json(task)
}catch(error){
    res.status(404).json({message: 'Tarea no encontrada'})
}

};