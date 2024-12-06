import { createContext, useState, useContext, useEffect } from "react";  
import { registerRequest, loginRequest } from "../../api/auth"

export const AuthContext = createContext();  

export const useAuth = () => {  
    const context = useContext(AuthContext);  
    if (!context) {  
        throw new Error("useAuth debe estar dentro de AuthProvider");  
    }  
    return context;  
};  

export const AuthProvoder = ({ children }) => {  
    const [user, setUser] = useState(null);  
    const [isAuthenticated, setIsAuthenticated] = useState(false);  
    const [errors, setErrors] = useState([]);  

    const signup = async (user) => {  
        try {  
            const res = await registerRequest(user);  
            console.log(res.data);  
            setUser(res.data);  
            setIsAuthenticated(true);  
        } catch (error) {  
            setErrors(error.response.data);  
        }  
    };  

    const signin = async (user) => {  
      try {  
          const res = await loginRequest(user); // Aquí esperamos la respuesta  
          console.log('Respuesta del login en AuthContext:', res); // Asegúrate que aquí se imprime los datos  
          if (res) { // Solo proceder si hay datos de usuario  
              setUser(res); // Guardamos el usuario  
              setIsAuthenticated(true); // Cambiamos el estado de autenticado a verdadero  
              console.log('Usuario autenticado:', res); // Asegúrate que esto muestre el usuario  
          }  
      } catch (error) {  
          if (Array.isArray(error.response.data)) {  
              setErrors(error.response.data);  
              console.log('Errores en el inicio de sesión:', error.response.data); // Log de errores  
          } else {  
              setErrors([error.response.data]);  
              console.log('Error del servidor:', error.response.data); // Log de error  
          }  
      }  
  };
    useEffect(() => {  
        if (errors.length > 0) {  
            const timer = setTimeout(() => {  
                setErrors([]);  
            }, 5000);  
            return () => clearTimeout(timer);  
        }  
    }, [errors]);  

    return (  
        <AuthContext.Provider value={{  
            signup,  
            signin,  
            user,  
            isAuthenticated,  
            errors,  
        }}>  
            {children}  
        </AuthContext.Provider>  
    );  
};