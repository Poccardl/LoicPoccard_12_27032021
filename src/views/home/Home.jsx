import React from 'react'
import fetchData from '../../fetchData.js'
import { HeaderHome } from '../../components/header_home/HeaderHome.jsx'
import { ActivityChart } from '../../components/activity_chart/ActivityChart.jsx'
import { AverageDuration } from '../../components/average_duration_chart/AverageDuration.jsx'
import { RadarBarChart } from '../../components/radar_bar_chart/RadarBarChart.jsx'
import { GoalChart } from '../../components/goal_chart/GoalChart.jsx'
import { KeyInfo } from '../../components/key_info/KeyInfo.jsx'
import { EmptyResponse } from '../../components/empty_response/EmptyResponse.jsx'

export class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            emptyData: false,
            firstName: null,
            firstNameIsLoading: false,
            sessions: null,
            sessionsIsLoading: false,
            average: null,
            averageIsLoading: false,
            performance: null,
            performanceIsLoading: false,
            goal: null,
            goalIsLoading: false,
            keyData: null,
            keyIsLoading: false
        }
    }

    async componentDidMount() {
        await fetchData(12).then(data => {
            if (Object.keys(data).length === 0) {
                console.error("Impossible de récupérer les données via l'API SportSee.")
                this.setState({emptyData: true})
            } else {
                this.setState({emptyData: false})
            }
        })
        if (this.state.emptyData === false) {
            fetchData(12).then(data => {
                this.setState({emptyData: false, firstName: data.userInfos.firstName, firstNameIsLoading: true, goal: data.todayScore, goalIsLoading: true, keyData: data.keyData, keyIsLoading: true})
            })
            fetchData(12, "activity").then(data => {
                this.setState({emptyActivity: false, sessions: data.sessions, sessionsIsLoading: true})
            })
            fetchData(12, "average-sessions").then(data => {
                this.setState({emptyAverageSession: false, average: data.sessions, averageIsLoading: true})
            })
            fetchData(12, "performance").then(data => {
                this.setState({emptyPerformance: false, performance: data, performanceIsLoading: true})
            })
        }
    }

    render() {
        return(
            <>
            <section className="home">
                {this.state.emptyData === false ?
                    <>
                    {this.state.firstNameIsLoading ? <HeaderHome firstName={this.state.firstName}/> : ""}
                    <div className="charts">
                        <div>{this.state.sessionsIsLoading ? <ActivityChart sessions={this.state.sessions}/> : ""}</div>
                        <div className="charts_part_2">
                            {this.state.averageIsLoading ? <AverageDuration average={this.state.average}/> : ""}
                            {this.state.performanceIsLoading ? <RadarBarChart performance={this.state.performance}/> : ""}
                            {this.state.goalIsLoading ? <GoalChart goal={this.state.goal}/> : ""}
                        </div>
                    </div>
                    <div className="key_info">
                        {this.state.keyIsLoading ? <KeyInfo keyData={this.state.keyData} /> : ""}
                    </div>
                    </>
                    : <EmptyResponse/>}

            </section>
            </>
        )
    }
}