import Calendario from '../models/calendario.model.js';

export const createEvent = async (req, res) => {
  try {
    const { nombre, apellido, obrasocial, especialista, start } = req.body;
    const user = req.user.id; // ID del usuario autenticado

    const newEvent = new Calendario({
      nombre,
      apellido,
      obrasocial,
      especialista,
      start,
      user,
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el evento', error });
  }
};

export const getUserEvents = async (req, res) => {
    try {
      const userId = req.user.id;
  
      const events = await Calendario.find({ user: userId });
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los eventos', error });
    }
  };
  
