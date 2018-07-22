import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Landing(props) {
    return (
        <div>
            <section role="region" className="landing-row">
                <div className="landing-left">
                    <h1>Lesson Planner</h1>
                    <p>A clean, mobile-friendly, unit-based lesson planner to help you work efficiently.</p>
                </div>
                <div className="landing-right">
                    <img src="https://github.com/jgmil/lesson-planner-fullstack-capstone/blob/master/public/img/screenshots/lesson-planner-user-dashboard.png?raw=true" alt="user dashboard" />
                </div>
            </section>

            <div className="row2">
                <section role="region" className="landing-row">
                    <div className="landing-left" id="more-info">
                        <img src="https://github.com/jgmil/lesson-planner-fullstack-capstone/blob/master/public/img/screenshots/lesson-planner-lesson-detail-cropped.png?raw=true" alt="lesson detial" />
                        <p>Lesson Planner allows you to quickly create lesson plans organized into units. Your dashboard allows immediate access to your unit plans, on your computer or device. You can easily view and print detailed lesson plans.</p>
                    </div>
                <div className="log-in-form landing-right">
                    <h2>Form Here</h2>
                </div>
                </section>
            </div>

            <section className="landing-row" role="region">
                <div className="landing-left" id="create-account-container">
                    <h2>Form Here</h2>
                </div>
                <div className="landing-right">
                    <img src="https://github.com/jgmil/lesson-planner-fullstack-capstone/blob/master/public/img/screenshots/lesson-planner-responsive.jpg?raw=true" alt="lesson planner screenshot responsive" />
                </div>
            </section>
        </div>
    );
}
