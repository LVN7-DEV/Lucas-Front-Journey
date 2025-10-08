import { useEffect,useState } from "react";

import ImageSwitch from "../assets/Switch.svg";
import ImgProfile from "../assets/profile.jpeg";

import "../styles/style.css";

import Profile from "./Profile";

export default function Header() {
    const [mode, setMode] = useState(false);

    useEffect(()=> {
        const bg = mode ? "var(--bg-variant02)" : "var(--bg-variant01)";
        document.body.style.setProperty("background", bg);
    }, [mode]);

    return (
        <>
        <header className="Profile-header">
            {/* Foto de perfil */}
            <img className="img-profile" src={ImgProfile} alt="Foto de Perfil"/>


            {/* Nome e username */}
            <span>Lucas Vinícius</span>
            <span>@lucasvinicius</span>

            {/* Botão de alternar modo */}
            <button
                onClick={() => setMode(prev => !prev)}
                className="btn-switch"
                aria-label="Alternar tema"
                >
                    
                <img
                    className="modeImage"
                    src={ImageSwitch}
                    alt="Botão Dark Mode"
                    style={
                        mode
                        ? { filter: "invert(1)", transform: "scaleX(-1)"}
                        : { filter: "invert(0)", transform: "scaleX(1)"}
                    }
                />
            </button>
        </header>

        {/* Component que lista links e redes sociais */}
        <Profile mode={mode} />
    </>
    );
}

