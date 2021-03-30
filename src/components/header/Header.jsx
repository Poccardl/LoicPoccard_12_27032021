import React from 'react'
import { BrowserRouter as Link } from "react-router-dom"

// svg import
import logo from '../../assets/svg/sportSee_logo.png'


export class Header extends React.Component {

    render() {
        return (
            <>
            <div className="header">
                <img className="logo" src={logo} alt=""/>
                <nav>
                    <ul>
                        <li>
                            <Link>Accueil</Link>
                        </li>
                        <li>
                            <Link>Profil</Link>
                        </li>
                        <li>
                            <Link>Réglage</Link>
                        </li>
                        <li>
                            <Link>Communauté</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            </>
        )
    }
}