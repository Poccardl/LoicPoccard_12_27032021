import React from 'react'
import PropTypes from 'prop-types'

export class HeaderHome extends React.Component {

    render() {
        return (
            <>
            <h1>Bonjour <span className="red">{this.props.firstName}</span></h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </>
        )
    }
}

HeaderHome.propTypes = {
    firstName: PropTypes.string
}