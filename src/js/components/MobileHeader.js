/**
 * Created by lantu on 2017/10/26.
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
import { Link } from 'react-router-dom';
import axios from 'axios';

class MobileHeader extends React.Component {
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

    setModalVisible(value){
        this.setState({modalVisible: value});
    }

    componentWillMount(){
        if(localStorage.userid && localStorage.userid != ''){
            this.setState({ hasLogined: true });
            this.setState({userNickName: localStorage.userNickName,userid: localStorage.userid});
        }
    }

    handleSubmit(e){
        e.preventDefault();
        var formData = this.props.form.getFieldsValue();
        if(this.state.action=="login"){
            axios.get("https://www.baidu.com?userName="+formData.userName+"&password="+formData.password)
                .then(response => {
                    console.log(json);
                    this.setState({userNickName: formData.userName,userid: formData.password});
                    localStorage.userid = formData.password;
                    localStorage.userNickName = formData.userName;
                    message.success("请求成功！");
                })
                .catch(error => {
                    console.log(error);
                    this.setState({userNickName: formData.userName,userid: formData.password});
                    localStorage.userid = formData.password;
                    localStorage.userNickName = formData.userName;
                    message.success("请求成功！");
                });
            this.setState({hasLogined:true});
            this.setModalVisible(false);
        }else if(this.state.action=="register"){

        }
    }

    callback(key){
        if(key == 1){
            this.setState({action: 'login'});
        }else if(key == 2){
            this.setState({action: 'register'});
        }
    }

    render(){
        const logoImg = require('../../images/logo.png');
        const userShow = this.state.hasLogined
        ?<Link to={`/usercenter`}>
                <Icon type="inbox"></Icon>
            </Link> :<Icon type="setting" onClick={()=>this.setModalVisible.bind(this)(true)}></Icon>;
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
                <header>
                    <a href="/">
                        <img src={logoImg} alt=""/>
                        <span>ReactNews</span>
                    </a>
                    {userShow}
                </header>
                <Modal title="用户中心" visible={this.state.modalVisible} onCancel={()=>this.setModalVisible(false)} onOk={()=>this.setModalVisible(false)} okText="黄茜">
                    <Tabs type="card" onChange={this.callback.bind(this)}>
                        <TabPane tab="登录" key="1">
                            <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                                <FormItem label="账户">
                                    {getFieldDecorator('userName',{})(
                                        <Input placeholder="请输入您的账号"/>
                                    )}
                                </FormItem>
                                <FormItem label="密码">
                                    {getFieldDecorator('password',{})(
                                        <Input placeholder="请输入您的密码"/>
                                    )}
                                </FormItem>
                                <Button type="primary" htmlType="submit">登录</Button>
                            </Form>
                        </TabPane>
                        <TabPane tab="注册" key="2">
                            huangqian
                        </TabPane>
                    </Tabs>
                </Modal>
            </div>
        )
    }
}

export default Form.create({})(MobileHeader);
