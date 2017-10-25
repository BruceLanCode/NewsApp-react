/**
 * Created by lantu on 2017/10/23.
 */

import React from 'react';
import { Row,Col,BackTop } from 'antd';
import axios from 'axios';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewsImageBlock from './pc_news_image_block';
import Comments from './comments';

import pcClass from '../../css/pc.css';
import '../../global_css/pc.css';

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
                this.setState({ newsItem: response.data });
                document.title = response.data.title + ' - React News | React 驱动的新闻平台';
            });
    }

    createMarkup(){
        return { __html: this.state.newsItem.pagecontent };
    }

    render(){
        return (
            <div>
                <PCHeader></PCHeader>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className={pcClass.container}>
                        <div dangerouslySetInnerHTML={this.createMarkup()}></div>
                        <hr/>
                        <Comments uniquekey={this.props.match.params.uniquekey}></Comments>
                    </Col>
                    <Col span={6}>
                        <PCNewsImageBlock count={40} type="top" width="100%" cardTitle="相关新闻" imageWidth="150px"></PCNewsImageBlock>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PCFooter></PCFooter>
                <BackTop/>
            </div>
        )
    }
}
