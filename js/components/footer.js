import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Footer(props) {
    return (
        <footer role="contentinfo">
            <p>Julia Miller 2018</p>
            <span className="float-right">
                Contact:
                <a href="mailto:opie.julia@gmail.com"><i title="email" className="fas fa-envelope"></i></a>
                <a href="https://github.com/jgmil"><i title="GitHub" className="fab fa-github"></i></a>
            </span>
        </footer>
    )
}
