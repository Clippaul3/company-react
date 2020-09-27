import React, {Component} from 'react';
import './index.scss';
import {Image, Layout} from "antd";
import {Row, Col, Carousel} from 'antd'
import game1 from '../../images/game1.png'
import game2 from '../../images/game2.png'
import game3 from '../../images/game3.png'
import {
    ExperimentOutlined,
    MedicineBoxOutlined,
    GiftOutlined,
    RocketOutlined
} from '@ant-design/icons'
import axios from 'axios'

class Home extends Component {

    state = {
        team: []
    }

    componentDidMount() {
        axios.get(
            'https://www.fastmock.site/mock/9f18233f8bcfe1edef0d50d02959d7af/company/team'
        ).then(res => {
            console.log(res)
            this.setState({team: res.data})
        })
    }

    render() {
        let {team} = this.state
        return (
            <div className="home">
                <Carousel autoplay={true} dots={true}>
                    <div className={'home-image-container'}>
                        <Image className={'home-image'} src={game1}/>
                    </div>
                    <div className={'home-image-container'}>
                        <Image className={'home-image'} src={game2}/>
                    </div>
                    <div className={'home-image-container'}>
                        <Image className={'home-image'} src={game3}/>
                    </div>
                </Carousel>
                <div className={'home-body'}>
                    <div className="home-desc">
                        <div className="home-desc-title">服务范围</div>
                        <div className="home-desc-content">
                            <div className="home-desc-items">
                                <div className={'home-desc-items-item'}>
                                    <ExperimentOutlined className={'item-icon'}/>
                                    <div>药剂研究</div>
                                </div>
                                <div className={'home-desc-items-item'}>
                                    <MedicineBoxOutlined className={'item-icon'}/>
                                    <div>战地医疗</div>
                                </div>
                                <div className={'home-desc-items-item'}>
                                    <GiftOutlined className={'item-icon'}/>
                                    <div>神秘惊喜</div>
                                </div>
                                <div className={'home-desc-items-item'}>
                                    <RocketOutlined className={'item-icon'}/>
                                    <div>帮你上天</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'home-team'}>
                        {
                            team.map((member, index) => (
                                <Row key={index} className={'home-team-member'}>
                                    <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
                                        <div className={'home-team-member-image'}>
                                            <Image className={'image'}
                                                   src={require(`../../images/${member.name}.png`)}/>
                                        </div>
                                    </Col>
                                    <Col md={12} lg={16} xxl={16} xl={16}>
                                        <div className={'home-team-member-info'}>
                                            <div className={'home-team-member-name'}>
                                                {member.name}
                                            </div>
                                            <div className={'home-team-member-position'}>
                                                {member.position}
                                            </div>
                                            <div className={'home-team-member-desc'}>
                                                &nbsp;&nbsp;{member.desc}
                                            </div>
                                            <div className={'home-team-member-ability'}>
                                                &nbsp;&nbsp;{member.ability}
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }


}

export default Home;
