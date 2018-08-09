import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Login extends Component {
    render() {
        return (
            <div className="no-match">
                <span>404: we couldn't find the page you were looking for.</span><br/>
                <Link to="/">Go back to the homepage</Link>
            </div>
        );
    }
}

export default Login;