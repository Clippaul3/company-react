import React, {Component} from 'react';
import './index.scss';
import {Image, Layout, Pagination} from "antd";
import {Row, Col, Carousel} from 'antd'

import {
    EnvironmentOutlined,
    MailOutlined,
    PhoneOutlined
} from '@ant-design/icons'
import axios from 'axios'

class AboutUs extends Component {

    state = {}

    componentDidMount() {
        //eslint-disable-next-line
        let map = new AMap.Map('mapContainer', {
            zoom: 14,
            resizeEnable: true,
            center: [119.27359654974369, 26.049022329228993],
        })
        //eslint-disable-next-line
        let marker = new AMap.Marker({
            position: [119.27359654974369, 26.049022329228993]
        })
        map.add(marker)
    }


    render() {
        return (
            <Row className="about">
                <Col className={'about-container'} xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                    <div id={'mapContainer'}></div>
                </Col>
                <Col className={'about-content'} xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                    <div className={'about-content-words'}>
                        在符文之地，魔法就是一切。 在这里，魔法不只是一种神秘莫测的能量概念。它是实体化的物质，
                        可以被引导、成形、塑造和操作。符文之地的魔法拥有自己的自然法则。源生态魔法随机变化的结果
                        改变了科学法则。
                        符文之地有数块大陆，不过所有的生命都集中在最大魔法大陆——瓦洛兰。瓦洛兰大陆居于符文之地
                        中心，是符文之地面积最大的大陆。 被祝福的符文之地上有大量源生态魔法能量，而此地居民可以触及
                        其中的能量。符文之地的中心区域集中了数量巨大的源生态魔法能量，这些地方都是水晶枢纽的理想位置。
                        水晶枢纽可以将源生能量塑形为自身实体化的存在。此外，水晶枢纽还可以成为能量车间，为需要魔法能量
                        的建筑供能。水晶枢纽遍布符文之地，但最大的水晶枢纽都坐落在瓦洛兰大陆。
                    </div>
                    <div className="about-us-item">
                        <EnvironmentOutlined className={'icon'}/>
                        <div>福州市仓山区万达</div>
                    </div>
                    <div className="about-us-item">
                        <MailOutlined className={'icon'}/>
                        <div>lol.qq.com</div>
                    </div>
                    <div className="about-us-item">
                        <PhoneOutlined className={'icon'}/>
                        <div>443-4396-2200</div>
                    </div>
                </Col>
            </Row>
        );
    }


}

export default AboutUs;
