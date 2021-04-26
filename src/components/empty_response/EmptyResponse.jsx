import React from 'react'
import logo from '../../assets/svg/exclamation-triangle-solid.svg'

export class EmptyResponse extends React.Component {

    render() {
        return (
            <>
            <div className="error_info">
                <img src={logo} alt="" className="error_icon"/>
                <p>Service momentanément indisponible !</p>
                <p>Impossible de récupérer les données via l'API SportSee.</p>
            </div>
            </>
        )
    }
}