/**
 * Created by lantu on 2017/10/20.
 */
import React from 'react';
import MediaQuery from 'react-responsive';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import PCIndex from './components/pc_index';
import PCNewsDetail from './components/pc_news_detail';
import PCUserCenter from './components/pc_usercenter';
import '../global_css/antd.css';
import '../global_css/antd_improve.css';

export default class Root extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery query="(min-device-width: 1224px)">
                    <Router>
                        <div>
                            <Route path="/" exact component={ PCIndex }></Route>
                            <Route path="/details/:uniquekey" component={ PCNewsDetail }></Route>
                            <Route path="/usercenter" component={ PCUserCenter }></Route>
                        </div>
                    </Router>
                </MediaQuery>
                <MediaQuery query="(max-device-width: 1224px)">
                    huangqian
                </MediaQuery>
            </div>
        )
    }
}