import React from 'react'
import PropTypes from 'prop-types'
import { LineChart, XAxis, Line, Tooltip, ResponsiveContainer } from 'recharts';

/**
 * Custom tooltip of LineChart
 * @date 2021-04-20
 * @param {object} {payload
 * @param {boolean} active} - Content tooltip object
 * @returns {Component} - React component
 */
const CustomTooltip = ({payload, active}) => {
    if (active) {
        return (
            <>
            <div className="average_duration_tooltip">
                <p>{payload[0].value}min</p>
            </div>
            </>
        )
    }
    return null
}

export class AverageDuration extends React.Component {

    componentDidMount() {
        const days = {1: "L", 2: "M", 3: "M", 4: "J", 5: "V", 6: "S", 7: "D"}
        let average = this.props.average
        for (let element of average) {
            if (element.day in days) {
                element.day = days[element.day]
            }
        }
    }

    render() {
        return (
            <>
            <div className="average_duration_chart">
                <h2>Durée moyenne des sessions</h2>
                <ResponsiveContainer width="100%" height="99%">
                    <LineChart data={this.props.average}>
                        <Tooltip wrapperStyle={{left: -10 }} cursor={{ stroke: "rgba(0, 0, 0, 0.1)", strokeWidth: 100}} content={<CustomTooltip />}/>
                        <XAxis tickLine={false} axisLine={false} stroke="white" dataKey="day" />
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