import React from 'react'
import PropTypes from 'prop-types'

import { PieChart, Pie, Cell } from 'recharts';

export class GoalChart extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            goal: null,
            goalIsLoading: false
        }
    }

    componentDidMount() {
        let goal = this.props.goal
        goal *= 100
        this.setState({goal: {name: "score", score: goal}, goalIsLoading: true})
    }

    render() {
        return (
            <>
            <div className="goal_chart">
                    <PieChart width={250} height={180}>
                        <Pie data={this.props.goal} cx={120} cy={200} innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5} dataKey="score">
                            <Cell fill="#0088FE"/>
                        </Pie>
                    </PieChart>
            </div>
            </>
        )
    }
}

GoalChart.propTypes = {
    goal: PropTypes.number
}