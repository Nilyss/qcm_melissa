import './nav.scss'

import {ReactElement} from "react";

import {Link} from "react-router-dom";

export default function Nav(): ReactElement {
    return <nav>
        <Link to={'/'}>Paramètres vitaux</Link>
        <Link to={'quiz'}>Quiz</Link>
    </nav>
}