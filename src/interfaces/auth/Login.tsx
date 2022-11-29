import "../../styles/auth.css";
import logo  from "../../assets/mtg.png";

export const Login = () => {
  return (
    <div className="body">
      <div className="headerLog">
        <img src={logo} alt="logo"/>
      </div>
      <div className="bodyLog">
        <div className="formBox">
          <div className="formTitle">
            <p>Sing in</p>
          </div>
          <div className="formContent">
            <form>
              Correo
              <input type="email" />
              Contraseña
              <input type="password" />
              <div>
                <input type="submit" value="Continuar" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="footLog">
        <div className="content-descrip">
          <p> &copy; 2022 MTG - Todos los derechos reservados</p>         
        </div>
        <div className="content-Suport"> 
          <button>Soporte</button>
        </div>
      </div>
    </div>
  );
};