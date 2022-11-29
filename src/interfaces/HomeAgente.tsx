import "../styles/homeAgente.css";
import { HeaderAgente } from '../components/ui/HeaderAgente';
import usuario  from "../assets/usuario.png";

export const HomeAgente = () => {
  return (
    <div className="bodyAgente">
        <HeaderAgente/>
        <div className="content-title">
          <p>Notificaciones</p>
        </div>
        <div className="content-notification">
            <li>
                <div className="notification-main">
                    <div className="main-profile">
                        <img src={ usuario } alt="usuario" />
                    </div>
                    <div className="main-description">
                        <p>Kenneth DeLaCuz_Rom</p>
                        <div className="main-fecha">
                            <div>
                                <p>Submitted an evaluation - check your quality evaluation results for</p>
                            </div>
                            <div>
                                <p>Sep 06 15:54, 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-button">
                        <button>Ver</button>
                    </div>
                </div>
            </li>
            <li>
                <div className="notification-main">
                    <div className="main-profile">
                        <img src={ usuario } alt="usuario" />
                    </div>
                    <div className="main-description">
                        <p>Kenneth DeLaCuz_Rom</p>
                        <div className="main-fecha">
                            <div>
                                <p>Submitted an evaluation - check your quality evaluation results for</p>
                            </div>
                            <div>
                                <p>Sep 06 15:54, 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-button">
                        <button>Ver</button>
                    </div>
                </div>
            </li>
            <li>
                <div className="notification-main">
                    <div className="main-profile">
                        <img src={ usuario } alt="usuario" />
                    </div>
                    <div className="main-description">
                        <p>Kenneth DeLaCuz_Rom</p>
                        <div className="main-fecha">
                            <div>
                                <p>Submitted an evaluation - check your quality evaluation results for</p>
                            </div>
                            <div>
                                <p>Sep 06 15:54, 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-button">
                        <button>Ver</button>
                    </div>
                </div>
            </li>
            <li>
                <div className="notification-main">
                    <div className="main-profile">
                        <img src={ usuario } alt="usuario" />
                    </div>
                    <div className="main-description">
                        <p>Kenneth DeLaCuz_Rom</p>
                        <div className="main-fecha">
                            <div>
                                <p>Submitted an evaluation - check your quality evaluation results for</p>
                            </div>
                            <div>
                                <p>Sep 06 15:54, 2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-button">
                        <button>Ver</button>
                    </div>
                </div>
            </li>
        </div>
    </div>
  );
};