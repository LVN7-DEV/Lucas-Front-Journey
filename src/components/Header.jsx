import { useEffect, useState } from "react";
import ImgProfile from "../assets/profile.jpeg";
import "../styles/style.css";
import Profile from "./Profile";

export default function Header() {
    const [mode, setMode] = useState(false); // false = light, true = dark

    useEffect(() => {
        // Aplica as classes de tema no body
        if (mode) {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
        } else {
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
        }
    }, [mode]);

    return (
        <>
            <header className="Profile-header">
                {/* Foto de perfil */}
                <img className="img-profile" src={ImgProfile} alt="Foto de Perfil"/>

                {/* Nome e username */}
                <span className="profile-name">Lucas Vinícius</span>
                <span className="profile-username">@lucasvinicius</span>

                {/* Botão Dark Mode */}
                <div className="dark-mode-toggle">
                    <input 
                        type="checkbox" 
                        id="darkmode-toggle" 
                        className="toggle-checkbox"
                        checked={mode}
                        onChange={() => setMode(prev => !prev)}
                    />
                    <label htmlFor="darkmode-toggle" className="toggle-label">
                        <div className="toggle-moon">🌙</div>
                        <div className="toggle-sun">☀️</div>
                        <div className="toggle-ball"></div>
                    </label>
                    <span className="toggle-text">
                        {mode ? "Modo Escuro" : "Modo Claro"}
                    </span>
                </div>
            </header>

            <Profile mode={mode} />
        </>
    );
}