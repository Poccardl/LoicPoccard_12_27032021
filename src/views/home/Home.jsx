import React from 'react'

// API import
import fetchData from '../../fetchData.js'

// Components import
import { HeaderHome } from '../../components/header_home/HeaderHome.jsx'
import { ActivityChart } from '../../components/activity_chart/ActivityChart.jsx'
import { AverageDuration } from '../../components/average_duration_chart/AverageDuration.jsx'
import { RadarBarChart } from '../../components/radar_bar_chart/RadarBarChart.jsx'
import { GoalChart } from '../../components/goal_chart/GoalChart.jsx'

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
            performanceIsLoading: false,
            goal: null,
            goalIsLoading: false
        }
    }

    async componentDidMount() {
        fetchData(12).then(data => {
            this.setState({firstName: data.userInfos.firstName, firstNameIsLoading: true, goal: data.todayScore, goalIsLoading: true})
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
                <div className="charts">
                    <div>
                        {this.state.sessionsIsLoading ? <ActivityChart sessions={this.state.sessions}/> : ""}
                    </div>
                    <div className="charts_part_2">
                        {this.state.averageIsLoading ? <AverageDuration average={this.state.average}/> : ""}
                        {this.state.performanceIsLoading ? <RadarBarChart performance={this.state.performance}/> : ""}
                        {this.state.goalIsLoading ? <GoalChart goal={this.state.goal}/> : ""}
                    </div>
                </div>
                {/* <div className="">INFOS CLEFS</div> */}
            </section>
            </>
        )
    }
}