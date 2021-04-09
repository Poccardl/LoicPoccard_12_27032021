import React from 'react'

// API import
import fetchData from '../../fetchData.js'

// Components import
import { HeaderHome } from '../../components/header_home/HeaderHome.jsx'
import { ActivityChart } from '../../components/activity_chart/ActivityChart.jsx'
import { AverageDuration } from '../../components/average_duration_chart/AverageDuration.jsx'
import { RadialBarChart } from '../../components/radial_bar_chart/RadialBarChart.jsx'

export class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: null,
            firstNameIsLoading: false,
            sessions: null,
            sessionsIsLoading: false,
            average: null,
            averageIsLoading: false,
            performance: null,
            performanceIsLoading: false
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
        fetchData(12, "performance").then(data => {
             this.setState({performance: data, performanceIsLoading: true})
        })
      }

    render() {
        return(
            <>
            <section className="home">
                {this.state.firstNameIsLoading ? <HeaderHome firstName={this.state.firstName}/> : ""}
                {this.state.sessionsIsLoading ? <ActivityChart sessions={this.state.sessions}/> : ""}
                {this.state.averageIsLoading ? <AverageDuration average={this.state.average}/> : ""}
                {this.state.performanceIsLoading ? <RadialBarChart performance={this.state.performance}/> : ""}
            </section>
            </>
        )
    }
}