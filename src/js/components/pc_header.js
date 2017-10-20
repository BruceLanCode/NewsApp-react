/**
 * Created by lantu on 2017/10/20.
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
    Modal
} from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
import { BrowerRouter as Router,Route,Link } from 'react-router-dom'

export default class PCHeader extends React.Component {
    constructor(){
        super();
        this.state = {
            current: 'top',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userid: 0
        };
    }

    render(){
        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="" className="logo">
                            <img src="./src/images/logo.png" alt="logo"/>
                            <span>ReactNews</span>
                        </a>
                    </Col>
                </Row>
            </header>
        )
    }
}