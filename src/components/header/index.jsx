import React, {Component} from 'react';
import './index.scss';
import {Image, Layout} from "antd";
import logo from "../../images/logo.png";
import {Row,Col} from 'antd'

const {Header} = Layout

class Head extends Component {
    render() {
        return (
            <div className="head">
                <Row>
                    <Col xs={12} sm={12} md={18} lg={21} xl={21} xxl={21}>
                        <div className={'head-avatar'}>
                            <Image src={logo} className={'logo'}/>
                        </div>
                    </Col>
                    {this.props.children}
                </Row>
            </div>
        );
    }


}

export default Head;
