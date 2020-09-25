import React, {Component} from 'react';
import './index.scss';
import {Image, Layout, Pagination} from "antd";
import {Row, Col, Carousel} from 'antd'
import {BrowserRouter as Router, Route, Redirect, Link, withRouter, Switch} from "react-router-dom";
import {} from '@ant-design/icons'
import axios from 'axios'

class NewsList extends Component {

    state = {
        newsList: []
    }

    componentDidMount() {
        this.loadData()
    }

    loadData = (page = '1') => {
        axios.post(
            'https://www.fastmock.site/mock/9f18233f8bcfe1edef0d50d02959d7af/company/getNewsList',
            {page: page}
        ).then(res => {
            console.log(res)
            this.setState(
                {
                    newsList: res.data.data.newsList.data,
                    total: res.data.data.newsList.total,
                    current: res.data.data.newsList.current
                }
            )
        })
    }

    handlePageChange = (page) => {
        this.loadData(page + '')
    }

    viewDetail = (id) => {
        console.log(id, this.props)
        // this.props.viewDetail(id)
        this.props.history.push({
            pathname: '/news-detail',
            state: {id: id}
        })
    }

    render() {
        let {newsList, total, current} = this.state
        console.log(newsList)
        return (
            <div className="list">
                <Row className={'list-news'}>
                    {
                        newsList.map((news, index) => (
                            <Col key={index} className={'list-news-item'}
                                 xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}
                                 onClick={this.viewDetail.bind(this, news.id)}>
                                <Row className={'list-news-info'}>
                                    <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                        <Image src={require(`../../${news.imageUrl}`)} className={'list-news-image'}/>
                                    </Col>
                                    <Col className={'list-news-words'}
                                         xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                        <div className={'list-news-title'}>
                                            {news.title}
                                        </div>
                                        <div className={'list-news-date'}>
                                            {news.date}
                                        </div>
                                        <div className={'list-news-content'}>
                                            {news.content}
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        ))
                    }
                </Row>
                <Pagination className={'pagination'} current={current} pageSize={10} total={total}
                            onChange={this.handlePageChange.bind(this)}/>
            </div>
        );
    }


}

export default NewsList;
