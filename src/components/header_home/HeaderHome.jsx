import React from 'react'
import PropTypes from 'prop-types'

export class HeaderHome extends React.Component {

    render() {
        return (
            <>
            <div className="header_home">
                <h1>Bonjour <span className="red">{this.props.firstName}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            </>
        )
    }
}

HeaderHome.propTypes = {
    firstName: PropTypes.string
}