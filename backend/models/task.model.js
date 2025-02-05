import mongoose from "mongoose";


const taskSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },

    dni: {
        type: Number,
        required:true,
    },

    edad: {
        type: Number,
        required: true
    },

    diagnostico: {
        type: String,
        required: true
    },
    obrasocial: {
        type: String,
        required: true,
    },

    localidad: {
        type: String,
        required: true,
    },

    direccion: {
        type: String,
        required: true,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

}, {
    timestamps: true
});

export default mongoose.model('Task', taskSchema);