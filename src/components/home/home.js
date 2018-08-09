import React, {Component} from 'react';
import {Button, Input} from "semantic-ui-react";
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="central-elm">
                    <Input placeholder='Game code' className="center-text" />
                    <Button secondary as={Link} to="/game/123456">Join game</Button>
                    <span className="or-divide hr-title"><hr/>OR<hr/></span>
                    <Button secondary as={Link} to="/create">Create game</Button>
                </div>
            </div>
        )
    }
}

export default Home;