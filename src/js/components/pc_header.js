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
const MenuItem = Menu.Item;
import { BrowerRouter as Router,Route,Link } from 'react-router-dom';
import axios from 'axios';
import pcClass from  '../../css/pc.css';

class PCHeader extends React.Component {
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

    componentWillMount(){
        if(localStorage.userid != ''){
            this.setState({ hasLogined: true });
            this.setState({userNickName: localStorage.userNickName,userid: localStorage.userid});
        }
    }

    handleClick({ key }){
        if(key === 'register'){
            this.setState({ current: 'register' });
            this.setModalVisible(true);
        }else{
            this.setState({ current: key });
        }
    }

    setModalVisible(value){
        this.setState({modalVisible: value});
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

    logout(){
        localStorage.userid= '';
        localStorage.userNickName = '';
        this.setState({hasLogined:false});
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        const userShow = this.state.hasLogined
            ?<MenuItem key="logout" className={pcClass.register}>
                <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
                &nbsp;&nbsp;
                <Link to={`/usercenter`}>
                    <Button type="dashed" htmlType="button">个人中心</Button>
                </Link>
                &nbsp;&nbsp;
                <Button type="ghost" htmlType="button" onClick={this.logout.bind(this)}>退出</Button>
            </MenuItem>
            : <MenuItem key="register" class="register">
                <Icon type="appstore" />注册/登录
            </MenuItem>;
        const logoImg = require('../../images/logo.png');
        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="" className={pcClass.logo}>
                            {/*<img src="./src/images/logo.png" alt="logo"/>*/}
                            <img src={logoImg} alt=""/>
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" selectedKeys={[this.state.current]} onClick={this.handleClick.bind(this)}>
                            <MenuItem key="top">
                                <Icon type="appstore" />头条
                            </MenuItem>
                            <MenuItem key="shehui">
                                <Icon type="appstore" />社会
                            </MenuItem>
                            <MenuItem key="guoji">
                                <Icon type="appstore" />国际
                            </MenuItem>
                            <MenuItem key="yule">
                                <Icon type="appstore" />娱乐
                            </MenuItem>
                            <MenuItem key="tiyu">
                                <Icon type="appstore" />体育
                            </MenuItem>
                            <MenuItem key="keji">
                                <Icon type="appstore" />科技
                            </MenuItem>
                            <MenuItem key="shishang">
                                <Icon type="appstore" />时尚
                            </MenuItem>
                            {userShow}
                        </Menu>
                        <Modal visible={this.state.modalVisible} title="用户中心" wrapClassName="vertical-center-modal"
                        onCancel={()=>this.setModalVisible(false)} onOk={()=>this.setModalVisible(false)} okText="关闭">
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
                                <TabPane tab="注册" key="2">huangxi</TabPane>
                            </Tabs>
                        </Modal>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </header>
        )
    }
}

export default Form.create({})(PCHeader);