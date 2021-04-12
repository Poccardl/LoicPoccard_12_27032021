import React from 'react'

// img import
import caloeries_icon from '../../assets/img/calories_icon.png'
import protein_icon from '../../assets/img/protein_icon.png'
import carbs_icon from '../../assets/img/carbs_icon.png'
import fat_icon from '../../assets/img/fat_icon.png'

export class KeyInfo extends React.Component {

    render() {
        return (
            <>
            <div className="card_keyinfo">
                <img className="icon" src={caloeries_icon} alt=""/>
                <div>
                    <p>{this.props.data.calorieCount / 1000}kCal</p>
                    <span>Calories</span>
                </div>
            </div>
            <div className="card_keyinfo">
                <img className="icon" src={protein_icon} alt=""/>
                <div>
                    <p>{this.props.data.proteinCount}g</p>
                    <span>Proteines</span>
                </div>
            </div>
            <div className="card_keyinfo">
                <img className="icon" src={carbs_icon} alt=""/>
                <div>
                    <p>{this.props.data.carbohydrateCount}g</p>
                    <span>Glucides</span>
                </div>
            </div>
            <div className="card_keyinfo">
                <img className="icon" src={fat_icon} alt=""/>
                <div>
                    <p>{this.props.data.lipidCount}g</p>
                    <span>Lipides</span>
                </div>
            </div>
            </>
        )
    }
}