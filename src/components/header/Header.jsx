import React from 'react'
import logo from '../../assets/img/sportSee_logo.png'

export class Header extends React.Component {

    render() {
        return (
            <>
            <div className="header">
                <img className="logo" src={logo} alt=""/>
                <nav>
                    <ul>
                        <li>Accueil</li>
                        <li>Profil</li>
                        <li>Réglage</li>
                        <li>Communauté</li>
                    </ul>
                </nav>
            </div>
            </>
        )
    }
}