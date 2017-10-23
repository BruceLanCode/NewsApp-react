/**
 * Created by lantu on 2017/10/23.
 */

import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import pcClass from '../../css/pc.css'

export default class extends React.Component {
    constructor(){
        super();
        this.state = {
            news: ''
        }
    }

    componentWillMount(){
        axios.get("http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=" + this.props.type + "&count=" + this.props.count)
            .then((response) => {
                this.setState({news: response.data});
            })
    }

    render(){
        const { news } = this.state;
        const newsList = news.length
            ?news.map((newsItem,index) => (
                <li key={index}>
                    <Link to={`details/${newsItem.uniquekey}`}>
                        { newsItem.title }
                    </Link>
                </li>
            )):'没有加载到任何新闻'
        return (
            <div className={pcClass.topNewsList} style={{width: this.props.width}}>
                <Card bordered={this.props.bordered}>
                    <ul>
                        { newsList }
                    </ul>
                </Card>
            </div>
        )
    }
}
