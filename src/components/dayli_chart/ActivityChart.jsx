import React from 'react'
import PropTypes from 'prop-types'

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'


const CustomTooltip = ({payload, label, active}) => {
    if (active) {
        return (
            <>
            <div className="daily_chart_tooltip">
                <p>{payload[0].value}kg</p>
                <p>{payload[1].value}Kcal</p>
            </div>
            </>
        )
    }
    return null
}

export class ActivityChart extends React.Component {

    render() {
        return (
            <>
            <div className="daily_chart">
                <h2>Acitvité quotidienne</h2>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={this.props.sessions} barGap={5} barCategoryGap={25} strokeDasharray="3 3">
                        <CartesianGrid vertical={false}/>
                        <XAxis axisLine={false} tick={{fontSize: 12}}/>
                        <YAxis dataKey="calories" axisLine={false} orientation="right"tick={{fontSize: 12}}/>
                        <Tooltip wrapperStyle={{ top: -50, left: 10 }} content={<CustomTooltip />}/>
                        <Legend height={50} iconSize={8} iconType="circle" align="right" verticalAlign="top"/>
                        <Bar name="Poids (kg)" radius={[10, 10, 0, 0]} stroke-linejoin={10} barSize={10} dataKey="kilogram" fill="#282D30" />
                        <Bar name="Calories brûlées (kCal)" radius={[10, 10, 0, 0]} barSize={10} dataKey="calories" fill="#E60000" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            </>
        )
    }
}

ActivityChart.propTypes = {
    sessions: PropTypes.array
}