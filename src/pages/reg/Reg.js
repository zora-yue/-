import React from 'react';
import './Reg.css'
import logo from "../../assets/img/login_img.png"
import phone from "../../assets/img/phone_img.png";
import {Link} from 'react-router-dom';
export default class Login extends React.Component{
    render(){
        return (
            <div className="reg">
                 <div className="tel_img">
                    <img src={logo} alt=""/>
                </div>
                <p className="tel_p">请输入手机号码：</p>
                <div className="tel_text">
                    <img src={phone} alt=""/>
                    <input type="text" placeholder="请输入手机号码"/>
                </div>
                <p  className="tel_p">请输入密码：</p>
                <div className="tel_text">
                    <img src={phone} alt=""/>
                    <input type="text" placeholder="请输入密码"/>
                </div>
                <div className="tel_button">
                    <input type="button" value="注册"/>
                    <a href="##" className="look">阅读并同意《招财猫理财用户使用及隐私协议》</a>
                    <span>已有账号？快去<Link to={{pathname:"/login",title:"登录"}}>登录</Link>吧</span>
                </div>
            </div>
        )
    }
}