import React from 'react'

// CSS import
import '../sass/main.scss'

// Components import
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