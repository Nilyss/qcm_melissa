import './nav.scss'

import {ReactElement} from "react";

import {Link} from "react-router-dom";

export default function Nav(): ReactElement {
    return <nav>
        <Link to={'/'}>Tableau paramètres vitaux</Link>
        <Link to={'quiz'}>Quiz Normes Paramètres Vitaux</Link>
    </nav>
}