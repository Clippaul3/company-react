import React, {Component} from 'react';
import './index.scss';
import Head from '../../components/header'
import Home from '../home'
import Footer from '../../components/footer'
import NewsList from "../news-list";
import AboutUs from "../about-us";
import {Row, Col, Button, Drawer} from 'antd'
import {HashRouter as Router, Route, Redirect, Link, withRouter, Switch} from "react-router-dom";
import NewsDetail from "../news-detail";
import {} from 'react-router'
import {MenuOutlined} from "@ant-design/icons";
import Media from "react-media";

class Index extends Component {

    state = {
        isShowLink: false
    }

    doViewNews = (id) => {
        console.log(id)
        console.log('123')
        let {isShowLink} = this.state
        this.setState({isShowLink: !isShowLink})
    }

    doClose = () => {
        this.setState({isShowLink: false})
    }

    render() {
        let {isShowLink} = this.state
        return (
            <div className="index">
                <Router>
                    <Head>
                        <div className={'pc-link'}>
                            <Col className={'item'}>
                                <Link to={'/'}>首页</Link>
                            </Col>
                            <Col className={'item'}>
                                <Link to={'/news-list'}>新闻</Link>
                            </Col>
                            <Col className={'item'}>
                                <Link to={'/about-us'}>关于我们</Link>
                            </Col>
                        </div>
                        <div className={'mobile-link'}>
                            <MenuOutlined className={'hamburger'} onClick={this.doViewNews.bind(this, 123)}/>
                            <Drawer
                                visible={isShowLink}
                                // mask={false}
                                maskClosable={true}
                                onClose={this.doClose}
                            >
                                <div className={'item'}>
                                    <Link to={'/'} className={'item-link'} onClick={this.doClose}>
                                        首页
                                    </Link>
                                </div>
                                <div className={'item'}>
                                    <Link to={'/news-list'} className={'item-link'} onClick={this.doClose}>
                                        新闻
                                    </Link>
                                </div>
                                <div className={'item'}>
                                    <Link to={'/about-us'} className={'item-link'} onClick={this.doClose}>
                                        关于我们
                                    </Link>
                                </div>
                            </Drawer>
                        </div>
                    </Head>
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route path='/news-list'
                               render={(props) => <NewsList {...props} viewDetail={this.doViewNews}/>}></Route>
                        <Route path='/news-detail' component={NewsDetail}></Route>
                        <Route path={'/about-us'} component={AboutUs}></Route>
                    </Switch>
                </Router>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(Index);
