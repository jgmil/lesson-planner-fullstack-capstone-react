import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Header(props) {
    return (
        <header className="clearfix" role="banner" id="landing">
            <a href="#" id="home">
                <h2>Lesson planner</h2>
                <h3 className="user-banner">Welcome!</h3>
            </a>

            <nav role="navigation" className="float-right">
                <div className="landing-nav">
                    <a href="#log-in" id="log-in-nav-link">Log in</a>
                    <a href="#create-account-form" id="create-account-nav-link">Create an account</a>
                    <a href="#more-info" id="info-link">More info</a>
                </div>
                <div className="dashboard-nav">
                    <button className="create-subject-nav">Add a subject</button>
                    <button className="create-unit-nav">Add a unit</button>
                    <button className="create-lesson-nav">Add a lesson</button>
                    <button id="log-out-link">Log out</button><br />
                </div>
                <div className="subject-shortcuts float-right">
                </div>
            </nav>

            <input type="hidden" id="loggedInUser" value="" />
        </header>
    )
}
