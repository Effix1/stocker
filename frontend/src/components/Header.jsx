import { NavLink } from "react-router-dom";
import "../scss/layout/_header.scss";

export default function Header ({ className }) {
    return (
        <header className="head">
            <h1 className="header_title">Stocker</h1>
            <nav className="header_nav">
                <ul>
                    <li>
                        {''}
                        <NavLink to='/' className={"header_nav_link"}>
                            homepage
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/catalogue' className={'header_nav_link'}>
                        catalogue
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/ajouter' className={'header_nav_link'}>
                        ajout objet
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}