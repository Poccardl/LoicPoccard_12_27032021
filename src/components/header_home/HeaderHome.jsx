import React from 'react'
import PropTypes from 'prop-types'

export class HeaderHome extends React.Component {

    render() {
        console.log("firstName", this.props.firstName)
        return (
            <>
            <p>Bonjour {this.props.firstName}</p>
            </>
        )
    }
}

HeaderHome.propTypes = {
    firstName: PropTypes.string
}