/**
 * Created by lantu on 2017/10/20.
 */
import React from 'react';
import MediaQuery from 'react-responsive';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import PCIndex from './components/pc_index';
import PCNewsDetail from './components/pc_news_detail';
import PCUserCenter from './components/pc_usercenter';
import MobileIndex from './components/MobileIndex';
import MobileNewsDetail from './components/mobile_news_detail'
import MobileUserCenter from './components/mobile-usercenter'
import '../global_css/antd.css';
import '../global_css/antd_improve.css';
import '../global_css/pc.css';

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
                    <Router>
                        <div>
                            <Route exact path="/" component={MobileIndex}></Route>
                            <Route path="/details/:uniquekey" component={ MobileNewsDetail }></Route>
                            <Route path="/usercenter" component={MobileUserCenter}></Route>
                        </div>
                    </Router>
                </MediaQuery>
            </div>
        )
    }
}