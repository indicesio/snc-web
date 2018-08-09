import React, {Component} from 'react'
import {createBrowserHistory} from 'history'
import {applyMiddleware, compose, createStore} from 'redux'
import {ConnectedRouter, connectRouter, routerMiddleware} from 'connected-react-router'
import rootReducer from './reducers'
import './App.css'
import Header from './components/common/header'
import Routing from './components/common/routing'
import {Provider} from 'react-redux'

const history = createBrowserHistory();
const initialState = {};

const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    compose(
        applyMiddleware(
            routerMiddleware(history)
        ),
    ),
);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div className="App">
                        <Header defaultActiveItem="home" gameCode={"123456"} />
                        <div>
                            <Routing />
                        </div>
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;
