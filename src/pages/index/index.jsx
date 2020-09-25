import React, {Component} from 'react';
import './index.scss';
import Head from '../../components/header'
import Home from '../home'
import Footer from '../../components/footer'
import NewsList from "../news-list";
import AboutUs from "../about-us";
import {Row, Col} from 'antd'
import {BrowserRouter as Router, Route, Redirect, Link, withRouter, Switch} from "react-router-dom";
import NewsDetail from "../news-detail";

class Index extends Component {

    doViewNews = (id) => {
        console.log(id)
        console.log('属性',this.props)

    }

    render() {
        return (
            <div className="index">
                <Router>
                    <Head>
                        <Col xs={4} sm={4} md={2} lg={1} xl={1} xxl={1} className={'item'}>
                            <Link to={'/home'}>首页</Link>
                        </Col>
                        <Col xs={4} sm={4} md={2} lg={1} xl={1} xxl={1} className={'item'}>
                            <Link to={'/news-list'}>新闻</Link>
                        </Col>
                        <Col xs={4} sm={4} md={2} lg={1} xl={1} xxl={1} className={'item'}>
                            <Link to={'/about-us'}>关于我们</Link>
                        </Col>
                    </Head>

                    <Redirect to={'/home'}/>
                    <Switch>
                        <Route path='/home' component={Home}></Route>
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
