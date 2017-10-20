/**
 * Created by lantu on 2017/10/20.
 */
import React from 'react';
import MediaQuery from 'react-responsive';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import PCIndex from './components/pc_index';
import 'antd/dist/antd.css';
import '../css/pc.css';

export default class Root extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery query="(min-device-width: 1224px)">
                    <Router>
                        <Route path="/" exec component={ PCIndex }></Route>
                    </Router>
                </MediaQuery>
                <MediaQuery query="(max-device-width: 1224px)">
                    huangqian
                </MediaQuery>
            </div>
        )
    }
}