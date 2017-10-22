/**
 * Created by lantu on 2017/10/21.
 */

import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';

import pcClass from '../../css/pc.css';

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
        const styleImage = {
          display: "block",
          width: this.props.imageWidth,
          height: '90px'
        };
        const styleH3 = {
            width: this.props.imageWidth,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
        };
        const {news} = this.state;
        console.log(news);
        const newsList = news.length
            ?news.map((newsItem,index) => (
                <div key={index} className={pcClass.imageblock}>
                    <Link to={`detail/${newsItem.uniquekey}`}>
                        <div>
                            <img src={newsItem.thumbnail_pic_s} style={styleImage} alt=""/>
                        </div>
                        <div className={pcClass.custom_card}>
                            <h3 style={styleH3}>{newsItem.title}</h3>
                            <p>{newsItem.author_name}</p>
                        </div>
                    </Link>
                </div>
            )):'没有加载到任何新闻'
        return(
            <div className={pcClass.topNewsList}>
                <Card title={this.props.cartTitle} bordered={true} style={{
                    width: this.props.width
                }}>
                    {newsList}
                </Card>
            </div>
        )
    }
}
