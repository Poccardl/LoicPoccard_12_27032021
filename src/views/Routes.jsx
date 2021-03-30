import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Views import
import { Error404 } from '../views/Error404.jsx'

// Components import
import { Header } from '../components/header/Header.jsx'

export class Routes extends React.Component {

    render() {
        return (
            <>
            <Router>
                <Header/>
                <Switch>
                    <Route path="/" exact></Route>
                    <Route path="/" component={Error404}></Route>
                </Switch>
            </Router>
            </>
        )
    }
}