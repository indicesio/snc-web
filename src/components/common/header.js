import React, {Component} from 'react'
import {Menu} from 'semantic-ui-react'
import {Link} from "react-router-dom";

export default class Header extends Component {
    state = {activeItem: this.props.defaultActiveItem};

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state.activeItem;
        let gameCodeButton;

        if (this.props.gameCode) {
            gameCodeButton = (
                <Menu.Item>Game code: {this.props.gameCode}</Menu.Item>
            )
        } else {
            gameCodeButton = ""
        }

        return (
            <Menu inverted>
                <Menu.Item
                    as={Link}
                    to="/"
                    name='Sunday Night Games'
                    className="header"
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='How to play'
                    as={Link}
                    to="how-to-play"
                    active={activeItem === 'how-to-play'}
                    onClick={this.handleItemClick}
                />

                <Menu.Menu position='right'>
                    {gameCodeButton}
                </Menu.Menu>
            </Menu>
        )
    }
}
