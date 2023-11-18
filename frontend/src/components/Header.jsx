import { NavLink } from "react-router-dom";

export default function Header ({ className }) {
    return (
        <header>
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