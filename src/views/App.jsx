import React from 'react'

// CSS import
import '../sass/main.scss'

// API import
import fetchData from '../fetchData.js'

export class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
        data: {}
    }
  }

  componentDidMount() {
    fetchData(12, 'performance').then(data => {
      console.log("data :", data)
    })
  }

  render() {
    return (
      <div className="App">
        <p>Hello Sport See !</p>
      </div>
    )
  }
}