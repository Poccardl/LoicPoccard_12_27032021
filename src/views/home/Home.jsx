import React from 'react'

// API import
import fetchData from '../../fetchData.js'

// Components import
import { HeaderHome } from '../../components/header_home/HeaderHome.jsx'
import { ActivityChart } from '../../components/activity_chart/ActivityChart.jsx'
import { AverageDuration } from '../../components/average_duration_chart/AverageDuration.jsx'

export class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: null,
            firstNameIsLoading: false,
            sessions: null,
            sessionsIsLoading: false,
            average: null,
            averageIsLoading: false
        }
    }

    async componentDidMount() {
        fetchData(12).then(data => {
            this.setState({firstName: data.userInfos.firstName, firstNameIsLoading: true})
        })
        fetchData(12, "activity").then(data => {
             this.setState({sessions: data.sessions, sessionsIsLoading: true})
        })
        fetchData(12, "average-sessions").then(data => {
             this.setState({average: data.sessions, averageIsLoading: true})
        })
      }

    render() {
        return(
            <>
            <section className="home">
                {this.state.firstNameIsLoading ? <HeaderHome firstName={this.state.firstName}/> : ""}
                {this.state.sessionsIsLoading ? <ActivityChart sessions={this.state.sessions}/> : ""}
                {this.state.averageIsLoading ? <AverageDuration average={this.state.average}/> : ""}
            </section>
            </>
        )
    }
}