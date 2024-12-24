import mongoose  from "mongoose";


const taskSchema= new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
    },
    apellido: {
        type: String,
        required: true,
    },

    edad: {
        type: Number,
        required: true
    },

    diagnostico: {
        type: String,
        required: true
    },
    
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    
},{
    timestamps: true
});

export default mongoose.model('Task',taskSchema);