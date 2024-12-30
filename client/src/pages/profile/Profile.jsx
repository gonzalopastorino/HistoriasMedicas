import React from "react";
import { useAuth } from "../../components/Context/AuthContext"; // Ajusta esta ruta según tu estructura
import "bootstrap/dist/css/bootstrap.min.css";

const Profile=()=>{

    const { user } = useAuth(); // Asumimos que `useAuth` tiene un objeto `user` con los datos del usuario

  return (
    <div className="container mt-5">
      <div className="card shadow-lg" style={{ maxWidth: "600px", margin: "0 auto" }}>
        <div className="card-header bg-primary text-white text-center">
          <h3>Perfil de Usuario</h3>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <strong>Nombre de usuario:</strong>
            <p>{user?.username || "No disponible"}</p>
          </div>
          <div className="mb-3">
            <strong>Email:</strong>
            <p>{user?.email || "No disponible"}</p>
          </div>
          <div className="mb-3">
            <strong>Contraseña:</strong>
            <p>{user?.password || "******"}</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};
  
  export default Profile;