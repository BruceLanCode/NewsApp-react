/**
 * Created by lantu on 2017/10/21.
 */
import React from 'react';
import { Row,Col } from 'antd';
import { Tabs,Carousel} from 'antd';
const TabPane = Tabs.TabPane;

import PCNewsImageBlock from './pc_news_image_block';

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
                    <Col span={20} className="container">
                        <div className="leftContainer">
                            <div className="carousel">
                                <Carousel {...settings}>
                                    <div><img src="./src/images/carousel_1.jpg" alt=""/></div>
                                    <div><img src="./src/images/carousel_2.jpg" alt=""/></div>
                                    <div><img src="./src/images/carousel_3.jpg" alt=""/></div>
                                    <div><img src="./src/images/carousel_4.jpg" alt=""/></div>
                                </Carousel>
                            </div>
                            <PCNewsImageBlock></PCNewsImageBlock>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
