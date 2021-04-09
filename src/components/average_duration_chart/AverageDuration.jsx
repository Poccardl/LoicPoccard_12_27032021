import React from 'react'
import PropTypes from 'prop-types'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export class AverageDuration extends React.Component {

    render() {
        // console.log(this.props.average)
        return (
            <>
            <div className="average_duration_chart">
                <h2>Durée moyenne des sessions</h2>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={300} height={100} data={this.props.average}>
                        {/* <XAxis dataKey="day" axisLine={false}/> */}
                        <Tooltip/>
                        <Line dataKey="sessionLength" stroke="#8884d8" />
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