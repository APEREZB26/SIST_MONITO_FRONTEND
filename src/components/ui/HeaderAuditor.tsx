import "../../styles/header.css";
import logo  from "../../assets/mtg.png";
import config  from "../../assets/config.png";
import notifi  from "../../assets/notifi.png";
import usuario  from "../../assets/usuario.png";

export const HeaderAuditor = () => {
    return (
        <header className="header">
            <div className="content-logo">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <ul>
                    <li>Calidad</li>
                </ul>
                <div className="content-header">
                    <div className="profile">
                      <p>Kenneth De La Cruz</p>
                      <div className="notification">
                        <img src={notifi} alt="logo"/>
                      </div>
                      <div className="configuration">
                        <img src={config} alt="logo"/>
                      </div>
                      <div className="circle">
                        <img src={usuario} alt="logo"/>
                      </div>
                    </div>
                </div>
            </div>
            <div className="headerFoot">
                <ul>
                    <li className="activation">Reportes</li>
                    <li>Evaluaciones</li>
                </ul>
            </div>
        </header>
    );  
};