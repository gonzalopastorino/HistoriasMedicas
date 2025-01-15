import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },

  apellido: {
    type: String,
    required: true,
  },

  obrasocial: {
    type: String,
    required: true,
  },
  especialista: {
    type: String,
    required: true,
  },
  start: {
    type: Date,
    required: true,
  },
  
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.model('Turno', EventSchema);
