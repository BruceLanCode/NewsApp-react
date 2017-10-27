/**
 * Created by lantu on 2017/10/26.
 */

import React from 'react';
import { Row,Col,BackTop } from 'antd';
import MobileHeader from './MobileHeader'
import MobileFooter from './MobileFooter'
import CommonComments from './comments';

import axios from 'axios';

export default class extends React.Component {
    constructor(){
        super();
        this.state = {
            newsItem: ''
        }
    }

    componentDidMount(){
        axios.get("http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=" + this.props.match.params.uniquekey)
            .then((response) => {
                this.setState({newsItem: response.data});
                document.title = this.state.newsItem.title + " - React News | React 驱动的新闻平台";
            })
    }

    createMarkup(){
        return { __html: this.state.newsItem.pagecontent };
    }

    render(){
        return (
            <div id="mobileDetailsContainer">
                <MobileHeader></MobileHeader>
                <div className="ucmobileList">
                    <Row>
                        <Col span={24} className="container">
                            <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                            <hr/>
                            {/*<CommonComments uniquekey={this.props.match.params.uniquekey}></CommonComments>*/}
                        </Col>
                    </Row>
                </div>
                <MobileFooter></MobileFooter>
                <BackTop></BackTop>
            </div>
        )
    }
}