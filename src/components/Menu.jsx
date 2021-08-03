import {NavLink} from "react-router-dom";

export function Menu(){
    return (
        <ul className="nav justify-content-center">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Главная</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/contact-us">Контакты</NavLink>
            </li>
        </ul>
    )
}