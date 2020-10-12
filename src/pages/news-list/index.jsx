import React, {Component} from 'react';
import './index.scss';
import {Image, Layout, Pagination} from "antd";
import {Row, Col, Carousel, Spin} from 'antd'
import {BrowserRouter as Router, Route, Redirect, Link, withRouter, Switch} from "react-router-dom";
import {} from '@ant-design/icons'
import axios from 'axios'

class NewsList extends Component {

    state = {
        newsList: [],
        isLoading: false
    }

    componentDidMount() {


        let storage = window.localStorage
        if(storage.pageNo){
            this.loadData(storage.pageNo)
        }else{
            this.loadData()
        }
    }

    loadData = (pageNo = '1') => {
        let storage = window.localStorage
        this.setState({isLoading: true}, () => {
            axios.get(
                `https://www.fastmock.site/mock/9f18233f8bcfe1edef0d50d02959d7af/company/news?pageNo=${pageNo}&pageSize=10`
            ).then(res => {
                console.log('get', res)
                this.setState({
                    newsList: res.data.data.data,
                    total: res.data.data.totalRecord,
                    current: res.data.data.pageNo * 1,
                    isLoading: false
                },()=>{
                    storage.pageNo = res.data.data.pageNo * 1
                })
            })
        })
    }

    handlePageChange = (page) => {
        this.loadData(page + '')
    }

    viewDetail = (id) => {
        console.log(id, this.props)
        // this.props.viewDetail(id)
        this.props.history.push({
            pathname: '/news-detail/'+id,
            state: {id: id}
        })
    }

    render() {
        let {newsList, total, current, isLoading} = this.state
        console.log(newsList)
        return (
            <div className="list">
                {
                    isLoading ?
                        <div className={'loading'}>
                            <Spin size={"large"}/>
                        </div> :
                        <Row className={'list-news'}>
                            {
                                newsList.map((news, index) => (
                                    <Col key={index} className={'list-news-item'}
                                         xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}
                                         onClick={this.viewDetail.bind(this, news.id)}>
                                        <Row className={'list-news-info'}>
                                            <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                                                <Image src={require(`../../${news.imageUrl}`)}
                                                       className={'list-news-image'}/>
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
                }
                <Pagination className={'pagination'} current={current} pageSize={10} total={total}
                            onChange={this.handlePageChange.bind(this)}/>
            </div>
        );
    }


}

export default NewsList;
