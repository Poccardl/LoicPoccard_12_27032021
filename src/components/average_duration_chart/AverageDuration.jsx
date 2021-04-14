import React from 'react'
import PropTypes from 'prop-types'

import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';

export class AverageDuration extends React.Component {

    render() {
        // console.log(this.props.average)
        return (
            <>
            <div className="average_duration_chart">
                <h2>Durée moyenne des sessions</h2>
                <ResponsiveContainer width="80%" height="80%">
                    <LineChart data={this.props.average}>
                        <Tooltip/>
                        <Line type="monotone" dataKey="sessionLength" stroke="white" dot=""/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
            </>
        )
    }
}

AverageDuration.propTypes = {
    average: PropTypes.array
}