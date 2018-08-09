import React, {Component} from 'react';
import {Button, Grid, Input} from "semantic-ui-react";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Home">
                <div className="central-elm">
                    <Input placeholder='Game code' className="center-text" style={{width: 150}}/>
                    <Button secondary style={{width: 150}}>Join game</Button>
                    <div className="separating-rule">
                        <hr width="50px"/>OR<hr width="50px"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;