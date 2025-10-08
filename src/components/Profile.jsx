import ImgGitHub from "../assets/logo-github.svg";
import ImgInstagram from "../assets/logo-instagram.svg";
import ImgLinkedin from "../assets/logo-linkedin.svg"; // Com "i" minúsculo

import "../styles/style.css";

export default function Profile({mode}){
    const links = [
        { element: "Instagram", src: "https://www.instagram.com/lcsvn_"},
        { element: "GitHub", src: "https://github.com/LVN7-DEV"},
        {element: "Linkedin", src: "https://www.linkedin.com/in/LucasVinícius"},
        {element: "Meu projeto", src: "https://link-do-meu-projeto.com"}
    ];

    const color = mode ? "var(--orange)" : "var(--blue)";

    return (
        <>
            <main>
                {/* Lista de links */}
                <ul className="links-list">
                {links.map((item, index) => (
                    <li key={index} className="link-item" style={{ background: color }}>
                    <a href={item.src} target="_blank" rel="noopener noreferrer">
                        {item.element}
                    </a>
                    </li>
                ))}
                </ul>

                {/* Redes sociais */}
                <ul className="social-media">
                <li>
                    <a href="https://github.com/LVN7-DEV" target="_blank" rel="noopener noreferrer">
                    <img src={ImgGitHub} alt="Logo GitHub" />
                    </a>
                    <a href="https://www.instagram.com/lcsvn_" target="_blank" rel="noopener noreferrer">
                    <img src={ImgInstagram} alt="Logo Instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/LucasVinícius" target="_blank" rel="noopener noreferrer">
                    <img src={ImgLinkedin} alt="Logo LinkedIn" /> {/* Corrigido para ImgLinkedin */}
                    </a>
                </li>
                </ul>
            </main>

            {/* Footer */}
            <footer>
                <span>"Coragem!” — Lucas Vinícius</span>
            </footer>
        </>
    );
}