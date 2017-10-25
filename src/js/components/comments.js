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

    handleSubmit(e){
        e.preventDefault();
        var formdata = this.props.form.getFieldsValue();
        axios.get("http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid=" + localStorage.userid + "&uniquekey=" + this.props.uniquekey + "&commnet=" + formdata.remark)
            .then((response) => {
                this.componentDidMount();
            })
    }

    addUserCollection(){
        notification.success({message: 'ReactNews提醒',description: '收藏此文章成功'});
    }

    render(){
        let { getFieldDecorator } = this.props.form;
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
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <FormItem label="您的评论">
                                {getFieldDecorator('remark',{})(
                                    <Input placeholder="随便写"/>
                                )}
                            </FormItem>
                            <Button type="primary" htmlType="submit">提交评论</Button>
                            &nbsp;&nbsp;
                            <Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>收藏文章</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Form.create({})(Comments);
