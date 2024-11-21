//1
import { createContext, useContext, useState } from 'react';
import { v4 } from "uuid"

//2
const PatientsContext = createContext()
// eslint-disable-next-line react-refresh/only-export-components
export const usePatients = () => useContext(PatientsContext)

// eslint-disable-next-line react/prop-types
export default function PatientsProvider({ children }) {
  // 3
    const [patients, setPatients] = useState([])

  // 4
const addPatients = patient =>{
    
    setPatients([
        ...patients,
        {
            id: v4(),
            patient,
            complete: false
        }
    ])
}

  //5
const updatePatient = (patient, id) => {
const list = patients.filter(t => t.id === id ? patient : t)
setPatients([...list, patient])
}

// 6
return (
    <PatientsContext.Provider value={{ patients, addPatients, updatePatient }}>
        { children }
    </PatientsContext.Provider>
)
}