import patientsModel from '../models/patients.model.js';

export const getPatients= async (req,res) =>{
    const patientsList= await patientsModel.find({})
    res.json(patientsList)

};


