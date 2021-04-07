import React from 'react'

// API import
import fetchData from '../../fetchData.js'

// Components import
import { HeaderHome } from '../../components/header_home/HeaderHome.jsx'

export class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: null
        }
    }

    componentDidMount() {
        fetchData(12).then(data => {
            // console.log("data :", data)
            this.setState({firstName: data.userInfos.firstName})
        })
      }

    render() {
        return(
            <>
            <section className="home">
                <HeaderHome firstName={this.state.firstName}/>
            </section>
            </>
        )
    }
}