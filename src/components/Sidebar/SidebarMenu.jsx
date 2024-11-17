import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/js/dist/dropdown';
import "./SidebarMenu.css";

const SidebarMenu = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="bg-dark col-auto col-md-2 min-vh-100 justify-cpntent-between flex-column">
            <div>
              <a className="text-decoration-none text-white d-none d-sm-inline d-flex align-items-center ms-1 mt-3">
                <i className="fs-5 bi bi-activity"></i>
                <span className="ms-1 d-none d-sm-inline">Registro de Pacientes</span>
              </a>
              <hr className="text-secondary d-none d-sm-block"/>
              <ul className="nav nav-pills flex-column mt-3 mt-sm-0">
                <li className="nav-item text-white my-3 py-sm-0">
                  <i className="bi bi-house-door-fill text-white "></i>
                  <a className="text-decoration-none text-white p-2" href="#" aria-current="page">
                    <span className="ms-3 d-none d-sm-inline">Inicio</span>
                  </a>
                </li>
                <li className="nav-item text-white my-3">
                  <i className="bi bi-person text-white "></i>
                  <a className="text-decoration-none text-white p-2" href="#" aria-current="page">
                  <span className="ms-3 d-none d-sm-inline">Medico</span>
                  </a>
                </li>
                <li className="nav-item text-white my-3">
                  <i className="bi bi-people-fill text-white"></i>
                  <a className="text-decoration-none text-white p-2" href="#" aria-current="page">
                  <span className="ms-3 d-none d-sm-inline">Pacientes</span>
                  </a>
                </li>
                <li className="nav-item text-white my-3">
                  <i className="bi bi-calendar-event text-white"></i>
                  <a className="text-decoration-none text-white p-2" href="#" aria-current="page">
                  <span className="ms-3 d-none d-sm-inline">Cita</span>
                  </a>
                </li>
                <li className="nav-item text-white my-3">
                  <i className="bi bi-question-circle text-white"></i>
                  <a className="text-decoration-none text-white p-2" href="#" aria-current="page">
                  <span className="ms-3 d-none d-sm-inline">Consultas</span>
                  </a>
                </li>
                <li className="nav-item text-white my-3">
                  <i className="bi bi-calendar-date text-white "></i>
                  <a className="text-decoration-none text-white p-2" href="#" aria-current="page">
                  <span className="ms-3 d-none d-sm-inline">Calendario</span>
                  </a>
                </li>
                <li className="nav-item text-white my-3 ">
                  <i className="bi bi-gear text-white "></i>
                  <a className="text-decoration-none text-white p-2" href="#" aria-current="page">
                  <span className="ms-3 d-none d-sm-inline">Configuracion</span>
                  </a>
                </li>
              </ul>
            </div>
            
            {/* <div className="my-5">
              <a className='text-decoration-none text-white dropdown-toggle p-3 my-5' type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="bi bi-person-circle"></i><span className="ms-3 d-none d-sm-inline">Tocame</span>
              </a>
              <div className="dropdown-menu" aria-labelledby="triggerId">
                <a className="dropdown-item" href="#">Base de Datos</a>
                <a className="dropdown-item disabled" href="#">Perfil</a>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarMenu;
