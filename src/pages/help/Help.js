import React from 'react';
import './Help.scss';
export default class Help extends React.Component{
    render(){
        return (
            <div className="help">
                <ul className="help_entry">
                    <li>
                        <i className="i1"></i>
                        <p>了解招财猫</p>
                        <span>></span>
                    </li>
                    <li>
                        <i className="i2"></i>
                        <p>注册/登录</p>
                        <span>></span>
                    </li>
                    <li>
                        <i className="i3"></i>
                        <p>认证</p>
                        <span>></span>
                    </li>
                    <li>
                        <i className="i4"></i>
                        <p>投资</p>
                        <span>></span>
                    </li>
                    <li>
                        <i className="i5"></i>
                        <p>充值，体现</p>
                        <span>></span>
                    </li>
                    <li>
                        <i className="i6"></i>
                        <p>名词解释</p>
                        <span>></span>
                    </li>
                    <li>
                        <i className="i7"></i>
                        <p>意见反馈</p>
                        <span>></span>
                    </li>
                    <li>
                        <i className="i8"></i>
                        <p>客户端下载</p>
                        <span>></span>
                    </li>
                </ul>
                <div className="help_tel">
                    <i></i>
                    <div className="help_tel_n">
                        <h3>拨打客服热线：<s>400-991-7005</s></h3>
                        <p>周一至周五 9:00-20:00 周六至周日9:00-18:00</p>
                    </div>
                </div>
            </div>
        )
    }
}