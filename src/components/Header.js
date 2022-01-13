import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './Header.css'
export class Header extends Component {
    render() {
        return (
            <div>
                <h1>Router Introduction</h1>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/profile"><li>Profile</li></Link>
                </ul>
            </div>
        )
    }
}

export default Header
