/**
 * Created by lantu on 2017/10/25.
 */

import React from 'react';
import { Row,Col,Modal } from 'antd';
import { Menu,Icon } from 'antd';
import {
    Tabs,
    message,
    Button,
    Card,
    notification,
    Upload
} from 'antd';
const TabPane = Tabs.TabPane;
import axios from 'axios';

import PCHeader from './pc_header';
import PCFooter from './pc_footer';

export default class extends React.Component {
    constructor(){
        super();
        this.state = {
            usercollection: '',
            usercomments: '',
            previewImage: '',
            previewVisible: false
        }
    }

    render(){
        const props = {
            action: 'http://newsapi.gugujiankong.com/handler.ashx',
            headers: {
                "Access-Control-Allow-Origin":"*"
            },
            listType: 'picture-card',
            defaultFileList: [
                {
                    uid: -1,
                    name: 'xxx.png',
                    state: 'done',
                    url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
                    thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'
                }
            ],
            onPreview: (file) => {
                this.setState({previewImage:file.url,previewVisible: true});
            }
        };

        const { usercollection,usercomments } = this.state;
        const usercollectionList = usercollection.length?
            usercollection.map((uc,index) => (
                <Card key={index} title={uc.uniquekey}>
                    <p>{uc.Title}</p>
                </Card>
            )):'您还没有收藏任何的新闻，快去收藏一些新闻吧。';

        const usercommentsList = usercomments.length?
            usercomments.map((comment,index) => (
                <Card key={index} title={comment.uniquekey}>
                    <p>{comment.Title}</p>
                </Card>
            )):'您还没有发表过任何评论。';

        return (
            <div>
                <PCHeader></PCHeader>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20}>
                        <Tabs>
                            <TabPane tab="我的收藏列表" key="1">
                                <div className="commet">
                                    <Row>
                                        <Col span={24}>
                                            { usercollectionList }
                                        </Col>
                                    </Row>
                                </div>
                            </TabPane>
                            <TabPane tab="我的评论列表" key="2">
                                <div className="comment">
                                    <Row>
                                        <Col span={24}>
                                            {usercommentsList}
                                        </Col>
                                    </Row>
                                </div>
                            </TabPane>
                            <TabPane tab="头像设置" key="3">
                                <div className="clearfix">
                                    <Upload {...props}>
                                        <Icon type="plus"></Icon>
                                        <div className="ant-upload-text">上传照片</div>
                                        <Modal visible={this.state.previewVisible} footer={null} onCancel={()=>this.setState({previewVisible: false})}>
                                            <img src={this.state.previewImage} alt="预览"/>
                                        </Modal>
                                    </Upload>
                                </div>
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PCFooter></PCFooter>
            </div>
        )
    }
}
