/**
 * Created by lantu on 2017/10/23.
 */

import React from 'react';
import { Row,Col,BackTop } from 'antd';
import axios from 'axios';
import PCHeader from './pc_header';
import PCFooter from './pc_footer';
import PCNewsImageBlock from './pc_news_image_block';

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

    render(){
        return (
            <div>
                <PCHeader></PCHeader>
            </div>
        )
    }
}
