import React from 'react'

// svg import
import icon_sport_1 from '../../assets/img/icon_sport_1.png'
import icon_sport_2 from '../../assets/img/icon_sport_2.png'
import icon_sport_3 from '../../assets/img/icon_sport_3.png'
import icon_sport_4 from '../../assets/img/icon_sport_4.png'

export class VerticalNavbar extends React.Component {

    render() {
        return (
            <>
            <div className="vertical_navbar">
                <nav>
                    <ul>
                        <li><img className="icon" src={icon_sport_1} alt=""/></li>
                        <li><img className="icon" src={icon_sport_2} alt=""/></li>
                        <li><img className="icon" src={icon_sport_3} alt=""/></li>
                        <li><img className="icon" src={icon_sport_4} alt=""/></li>
                    </ul>
                </nav>
                <div className="copiryght">
                    <p>Copiryght, SportSee 2020</p>
                </div>
            </div>
            </>
        )
    }
}