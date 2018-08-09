import React, {Component} from 'react'
import {Route, Switch} from "react-router-dom";
import Home from '../home/home'
import NotFound from '../error/not-found'
import Create from "../game/create";
import Game from "../game/game";

export default class Routing extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/create" component={Create} />
                <Route path="/game/:id" component={Game}/>
                <Route component={NotFound} />
            </Switch>
        )
    }
}
