import React from 'react'
import '../sass/main.scss'
import { Routes } from '../views/Routes.jsx'

export class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    )
  }
}