/**
 * Created by lantu on 2017/10/24.
 */

import React from 'react';
import { Row,Col } from 'antd';
import {
    Menu,
    Icon,
    Tabs,
    message,
    Form,
    Input,
    Button,
    CheckBox,
    Modal,
    Card,
    notification
} from 'antd';
const FormItem = Form.Item;
import { Link } from 'react-router-dom';
import axios from 'axios';

class Comments extends React.Component {
    constructor(){
        super();
        this.state = {
            comments: ''
        }
    }

    componentDidMount(){
        axios.get("http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey=" + this.props.uniquekey)
            .then((response) => {
                this.setState({ comments: response.data });
            })
    }

    render(){
        const { comments } = this.state;
        const commentList = comments.length
            ?comments.map((comment,index) => (
                <Card key={index} title={comment.UserName} extra={<a href="#">发布于 {comment.datetime}</a>}>
                    <p>{comment.Comments}</p>
                </Card>
            )):'没有加载到任何评论';
        return (
            <div className="comment">
                <Row>
                    <Col span={24}>
                        { commentList }
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Form.create({})(Comments);
