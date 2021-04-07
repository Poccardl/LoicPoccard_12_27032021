import React from 'react'

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