import React from 'react'
import PropTypes from 'prop-types'

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'

export class RadarBarChart extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: null,
            dataIsLoading: false
        }
    }

    componentDidMount() {
        const performance = this.props.performance
        for (let element in performance.data) {
            performance.data[element].kind = performance.kind[parseInt(element, 10) +1]
            performance.data[element].fullMark = 150
        }
        this.setState({data: performance.data, dataIsLoading: true})
    }

    render() {
        return (
            <>
            <div className="radar_bar_chart">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={this.state.data}>
                        <PolarGrid/>
                        <PolarAngleAxis tickLine={false} stroke="white" dataKey="kind"/>
                        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6}/>
                    </RadarChart>
                </ResponsiveContainer>
            </div>
            </>
        )
    }
}

RadarBarChart.propTypes = {
    performance: PropTypes.object
}