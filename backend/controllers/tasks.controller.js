import Task from '../models/task.model.js'
import { createTaskSchema } from "../schemas/task.schema.js"; // Ajusta la ruta según la ubicación real


export const getTasks= async (req,res) =>{
    const tasks= await Task.find({
        user: req.user.id
    }).populate('user')
    res.json(tasks);
};


export const createTask = async (req, res) => {
    try {
        // Valida los datos del cuerpo de la solicitud usando Zod
        const validatedData = createTaskSchema.parse(req.body);

        // Extrae los campos validados
        const { nombre, apellido, edad, diagnostico, date } = validatedData;

        // Crea una nueva tarea usando el modelo Task
        const newTask = new Task({
            nombre,
            apellido,
            edad,
            diagnostico,
            date: date || new Date(), // Si no se proporciona una fecha, usa la actual
            user: req.user.id,        // Relaciona la tarea con el usuario autenticado
        });

        // Guarda la tarea en la base de datos
        const savedTask = await newTask.save();

        // Devuelve la tarea creada como respuesta
        res.status(201).json(savedTask);
    } catch (error) {
        if (error.name === "ZodError") {
            // Devuelve errores de validación si los datos no son válidos
            return res.status(400).json({ errors: error.errors });
        }
        console.error("Error al crear la tarea:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const getTask= async (req,res) =>{
   const task= await Task.findById(req.params.id).populate('user')
    if(!task) return res.status(404).json({message: 'Tarea no encontrada'})
    res.json(task)

};

export const deleteTask= async (req,res) =>{
    const task= await Task.findByIdAndDelete(req.params.id)
    if(!task) return res.status(404).json({message: 'Tarea no encontrada'})
    return res.sendStatus(204);

};
export const updateTask= async (req,res) =>{
    const task= await Task.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if(!task) return res.status(404).json({message: 'Tarea no encontrada'})
    res.json(task)

};