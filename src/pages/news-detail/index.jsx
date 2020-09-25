import React, {Component} from 'react';
import './index.scss';
import {Image, Layout, Pagination} from "antd";
import {Row, Col, Carousel} from 'antd'

import {} from '@ant-design/icons'
import axios from 'axios'

class NewsDetail extends Component {

    state = {
        newsDetail:{}
    }

    componentDidMount() {
        console.log('didMount',this,this.props.location.state)
        let {id} = this.props.location.state
        this.loadData(id)
    }

    loadData = (id = '1') => {
        axios.post(
            'https://www.fastmock.site/mock/9f18233f8bcfe1edef0d50d02959d7af/company/newsDetail',
            {id: id}
        ).then(res => {
            console.log('a',res)
            this.setState({newsDetail:res.data.data.newsDetail})
        })
    }


    render() {
        let {newsDetail} = this.state
        console.log(newsDetail.imageUrl)
        let imgURL = newsDetail.imageUrl
        return (
            <Row className="detail">
                <Col className={'detail-title'} xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    {newsDetail.title}
                </Col>
                <Col className={'image-container'} xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    {
                        imgURL && <Image src={require(`../../${imgURL}`)} className={'detail-image'}/>
                    }
                </Col>
                <Col className={'detail-content'} xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    &nbsp;&nbsp;{newsDetail.content}
                </Col>
            </Row>
        );
    }


}

export default NewsDetail;
