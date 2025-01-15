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
      // Validar que el DNI solo contenga números
      const { dni } = req.body;
      if (dni && !/^\d+$/.test(dni)) { // Verifica que el DNI contenga solo números
        return res.status(400).json({
          message: ["El DNI solo puede contener números"],
        });
      }
  
      // Valida los datos del cuerpo de la solicitud usando Zod
      const validatedData = createTaskSchema.parse(req.body);
  
      // Extrae los campos validados
      const { nombre, apellido, edad, diagnostico, obrasocial, localidad, direccion } = validatedData;
  
      // Verifica si el DNI ya está en uso
      const existingTask = await Task.findOne({ dni });
      if (existingTask) {
        return res.status(400).json({
          message: ["El DNI ya está en uso"],
        });
      }
  
      
      const newTask = new Task({
        dni,
        nombre,
        apellido,
        edad,
        diagnostico,
        obrasocial,
        localidad,
        direccion,
        user: req.user.id, 
      });
  
      
      const savedTask = await newTask.save();
  
      
      res.json(savedTask);
    } catch (error) {
      console.error("Error al crear la tarea:", error);
      return res.status(500).json({ message: "Error al crear la tarea" });
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
  export const updateTask = async (req, res) => {
    try {
      
      const { dni } = req.body;
      if (dni && !/^\d+$/.test(dni)) { 
        return res.status(400).json({ message: "El DNI solo puede contener números" });
      }
  
      
      const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!task) {
        return res.status(404).json({ message: "Tarea no encontrada" });
      }
  
      res.json(task);
    } catch (error) {
      console.error("Error al actualizar la tarea:", error);
      res.status(500).json({ message: "Error interno del servidor" });
    }
  };
  