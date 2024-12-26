import patientsModel from '../models/patients.model.js';

export const getPatients= async (req,res) =>{
    const patientsList= await patientsModel.find({})
    res.json(patientsList)

};

export const creaPatient= async (req,res) =>{
    const {nombre,apellido,edad,diagnostico}= req.body
    const newPatient= new Task({
        nombre,
        apellido,
        edad,
        diagnostico,
        user: req.user.id
    })
    const savedPatient= await newPatient.save()
    res.json(savedPatient);
};

export const getPatient= async (req,res) =>{
    const patient= await patient.findById(req.params.id).populate('user')
    if(!patient) return res.status(404).json({message: 'Paciente no encontrado'})
    res.json(patient)

};

export const deletePatient= async (req,res) =>{
    const patient= await patient.findByIdAndDelete(req.params.id)
    if(!patient) return res.status(404).json({message: 'Paciente no encontrado'})
    return res.sendStatus(204);

};

export const updatePatient= async (req,res) =>{
    const patient= await patient.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    if(!patient) return res.status(404).json({message: 'Paciente no encontrado'})
    res.json(patient)

};