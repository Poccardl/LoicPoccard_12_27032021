import React from 'react'
import PropTypes from 'prop-types'

export class HeaderHome extends React.Component {

    render() {
        return (
            <>
            <h1>Bonjour {this.props.firstName}</h1>
            </>
        )
    }
}

HeaderHome.propTypes = {
    firstName: PropTypes.string
}