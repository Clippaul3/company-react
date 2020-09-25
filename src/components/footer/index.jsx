import React, {Component} from 'react';
import './index.scss';
import {Image} from "antd";
import {
    EnvironmentOutlined,
    MailOutlined,
    PhoneOutlined
} from '@ant-design/icons'
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-items">
                    <div>
                        <EnvironmentOutlined className={'footer-icon'}/>
                        <div>福州市仓山区万达</div>
                    </div>
                    <div>
                        <MailOutlined className={'footer-icon'}/>
                        <div>lol.qq.com</div>
                    </div>
                    <div>
                        <PhoneOutlined className={'footer-icon'}/>
                        <div>443-4396-2200</div>
                    </div>
                    <div>
                        <Image src={require('../../images/code2.png')}/>
                    </div>
                </div>
                <div className="copyright">
                    版权所有©英雄联盟
                </div>
            </div>
        );
    }
}

export default Footer;
