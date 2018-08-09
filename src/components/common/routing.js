import React, {Component} from 'react'
import {Link, Route, Switch} from "react-router-dom";
import Home from '../home/home'
import NotFound from '../error/not-found'

export default class Routing extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
            </Switch>
        )
    }
}
