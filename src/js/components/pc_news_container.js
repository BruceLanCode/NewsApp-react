/**
 * Created by lantu on 2017/10/21.
 */
import React from 'react';
import { Row,Col } from 'antd';
import { Tabs,Carousel} from 'antd';
const TabPane = Tabs.TabPane;
import pcClass from  '../../css/pc.css';

import PCNewsImageBlock from './pc_news_image_block';
import PCNewsBlock from './pc_news_block';
import PCProduct from './pc_products';

export default class extends React.Component {
    render(){
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        };
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className={pcClass.container}>
                        <div className={pcClass.leftContainer}>
                            <div className={pcClass.carousel}>
                                <Carousel {...settings}>
                                    <div><img src="./src/images/carousel_1.jpg" alt=""/></div>
                                    <div><img src="./src/images/carousel_2.jpg" alt=""/></div>
                                    <div><img src="./src/images/carousel_3.jpg" alt=""/></div>
                                    <div><img src="./src/images/carousel_4.jpg" alt=""/></div>
                                </Carousel>
                            </div>
                            <PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px"></PCNewsImageBlock>
                        </div>
                        <Tabs className={pcClass.tabs_news}>
                            <TabPane tab="头条新闻" key="1">
                                <PCNewsBlock count="22" type="top" width="100%" bordered={false} />
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PCNewsBlock count="22" type="guoji" width="100%"></PCNewsBlock>
                            </TabPane>
                        </Tabs>
                        <Tabs className={pcClass.tabs_product}>
                            <TabPane tab="ReactNews 产品" key="1">
                                <PCProduct></PCProduct>
                            </TabPane>
                        </Tabs>
                        <div>
                            <PCNewsImageBlock count="8" type="guonei" width="100%" cartTitle="国内新闻" imageWidth="132px"></PCNewsImageBlock>
                            <PCNewsImageBlock count="16" type="yule" width="100%" cartTitle="娱乐新闻" imageWidth="132px"></PCNewsImageBlock>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}
