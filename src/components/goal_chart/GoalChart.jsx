import React from 'react'
import PropTypes from 'prop-types'

// recharts import
import { PieChart, Pie, Cell } from 'recharts';

export class GoalChart extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: null,
            goal: null,
            goalIsLoading: false
        }
    }

    componentDidMount() {
        let goal = this.props.goal
        goal *= 100
        this.setState({data: [{name: "score", score: goal}], goal: goal, goalIsLoading: true})
    }

    render() {
        return (
            <>
            <div className="goal_chart">
                <h2 className="goal_title">Score</h2>
                <PieChart width={200} height={200}>
                    <Pie data={this.state.data} startAngle={90} endAngle={90 + this.state.goal} innerRadius={50} outerRadius={60} fill="#8884d8" paddingAngle={5} dataKey="score">
                        <Cell fill="red"/>
                    </Pie>
                </PieChart>
                <div className="goal_content">
                    <p className="percentage">{this.state.goal}%</p>
                    <span>de votre objectif</span>
                </div>
            </div>
            </>
        )
    }
}

GoalChart.propTypes = {
    goal: PropTypes.number
}