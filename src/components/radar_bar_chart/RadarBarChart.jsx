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
        const kinds = {"intensity": "Intensité", "speed": "Vitesse", "strength": "Force", "endurance": "Endurance", "energy": "Energie", "cardio": "Cardio"}
        const kinds_order = {"Intensité": 1, "Vitesse": 2, "Force": 3, "Endurance": 4, "Energie": 5, "Cardio": 6}
        const performance = this.props.performance

        // TODO: add commentaire
        for (let element in performance.kind) {
            performance.kind[element] = kinds[performance.kind[element]]
        }
        for (let element in performance.data) {
            performance.data[element].kind = performance.kind[parseInt(element, 10) +1]
            performance.data[element].fullMark = 150
        }

        // TODO: add commentaire
        for (let element of performance.data) {
            element.id = kinds_order[element.kind]
        }
        performance.data.sort((a, b) => (a.id > b.id) ? 1 : -1)
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