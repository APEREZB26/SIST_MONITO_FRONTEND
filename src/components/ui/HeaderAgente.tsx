import "../../styles/header.css";
import logo  from "../../assets/mtg.png";
import config  from "../../assets/config.png";
import notifi  from "../../assets/notifi.png";
import profile  from "../../assets/profile.jpg";

export const HeaderAgente = () => {
    return (
        <header className="header">
            <div className="content-header">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <ul>
                    <li>Calidad</li>
                </ul>
                <div className="content-profile">
                    <div className="profile">
                      <p>Kenneth Hernan</p>
                      <div className="notification">
                        <img src={notifi} alt="logo"/>
                      </div>
                      <div className="configuration">
                        <img src={config} alt="logo"/>
                      </div>
                      <div className="circle">
                        <img src={profile} alt="logo"/>
                      </div>
                    </div>
                </div>
            </div>
            <div className="headerFoot">
                <ul>
                    <li className="activation">Notificaciones</li>
                    <li>Evaluaciones</li>
                </ul>
            </div>
        </header>
    );  
};