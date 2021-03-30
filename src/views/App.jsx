import React from 'react'

// CSS import
import '../sass/main.scss'

// API import
import fetchData from '../fetchData.js'

// Components import
import { Routes } from '../views/Routes.jsx'

export class App extends React.Component {

  componentDidMount() {
    fetchData(12, 'performance').then(data => {
      console.log("data :", data)
    })
  }

  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    )
  }
}