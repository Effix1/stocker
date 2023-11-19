import { NavLink } from "react-router-dom";
import "../scss/Main.scss";

export default function Header ({ className }) {
    return (
        <header className="head">
            <h1>c'est le header</h1>
            <nav>
                <ul>
                    <li>
                        {''}
                        <NavLink to='/' className={"firstLink"}>
                            homepage
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/catalogue' className={'secondLink'}>
                        catalogue
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/ajouter' className={'secondLink'}>
                        ajout objet
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}