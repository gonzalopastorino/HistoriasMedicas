import './IntroductionContent.css';

const IntroductionContent = () => {
  return (
    <div className="content-container">
      <img 
        src="./src/assets/doctor.jpg" 
        alt="Imagen de Doctor" 
        className="responsive-img" 
      />
      <div className="text-content">
        <h1>
         Bienvenido a <strong>Historias Clínicas</strong>
        </h1>
        <h2>
         La solución integral para la gestión de historias clínicas.
        </h2>
        <p>
          En el mundo de la medicina, la precisión y la accesibilidad de la información son esenciales. Nuestra plataforma está diseñada para facilitar la administración de historias clínicas de sus pacientes de manera segura y eficiente. Con un sistema intuitivo, podrá registrar, consultar y actualizar información vital sobre cada paciente, desde nombres y antecedentes médicos hasta diagnósticos y tratamientos.
        </p>
        <p>
          ¿Por qué elegir <strong>Historias Clínicas</strong>? Porque su tiempo es valioso. Ahorre horas de trabajo y minimice errores al tener toda la información de sus pacientes a solo un clic. Además, garantizamos la máxima seguridad y privacidad de los datos, cumpliendo con todas las normativas de protección de información médica.
        </p>
        <p>
          Únase a nosotros y transforme la forma en que gestiona la atención médica. Con <strong>Historias Clínicas</strong>, cada paciente recibe la atención que merece.
        </p>
      </div>
    </div>
  );
};

export default IntroductionContent;
