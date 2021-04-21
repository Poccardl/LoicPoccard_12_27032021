import React from 'react'
import PropTypes from 'prop-types'
import { PieChart, ResponsiveContainer, Pie, Cell } from 'recharts';

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
        // update the state
        this.setState({data: [{name: "score", score: goal}], goal: goal, goalIsLoading: true})
    }

    render() {
        return (
            <>
            <div className="goal_chart">
                <h2 className="goal_title">Score</h2>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie data={this.state.data} startAngle={90} endAngle={90 + (this.state.goal * 360)} innerRadius="60%" outerRadius="70%" fill="#8884d8" paddingAngle={5} dataKey="score">
                            <Cell fill="red"/>
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="goal_content">
                    <p className="percentage">{this.state.goal * 100}%</p>
                    <p className="legend">de votre</p>
                    <p className="legend">objectif</p>
                </div>
            </div>
            </>
        )
    }
}

GoalChart.propTypes = {
    goal: PropTypes.number
}