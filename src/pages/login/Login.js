import React from 'react';
import './Login.css'
import logo from "../../assets/img/login_img.png"
import phone from "../../assets/img/phone_img.png";
import {Link} from 'react-router-dom';
import asyncAction from "../../store/asyncAction";
import * as types from "../../store/types";
import {connect} from "react-redux";

class Login extends React.Component{
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
            mess:''
        }
    }

    changeMess=(ev)=>{
        this.setState({
            [ev.target.name]:ev.target.value
        })
    }
    render(){
        let {username,password}=this.state;
        return (
            <div className="login">
                 <div className="tel_img">
                    <img src={logo} alt=""/>
                </div>
                <p className="tel_p">请输入手机号码：</p>
                <div className="tel_text">
                    <img src={phone} alt=""/>
                    <input type="text" placeholder="请输入手机号码" name="username" value={username} onChange={this.changeMess}/>
                </div>
                <p  className="tel_p">请输入密码：</p>
                <div className="tel_text">
                    <img src={phone} alt=""/>
                    <input type="text" placeholder="请输入密码" name="password" value={password} onChange={this.changeMess}/>
                </div>
                <h3 className="login_mess">{this.state.mess}</h3>
                <div className="tel_button">
                    <input type="button" value="登录" onClick={()=>{
                        console.log(1)
                        this.props.login({
                            username:this.state.username,
                            password:this.state.password,
                            history:this.props.history,
                            _this:this
                        })
                    }}/>
                    <a href="##" className="look">阅读并同意《招财猫理财用户使用及隐私协议》</a>
                    <span>还没有账号？快去<Link to={{pathname:"/reg",title:"注册"}}>注册</Link>吧</span>
                </div>
            </div>
        )
    }
}

const initMapDispatchtoProps=(dispatch,ownProps)=>({
    login:({username,password,history,_this})=>dispatch(asyncAction({
        apiname:'login',
        params:{username,password},
        typeName:types.UPDATE_USER
    })).then(
        res=>{
            if(res.err===0){
                ownProps.history.push('/user')
            }else{
                _this.setState({mess:res.msg})
            }
        }
    )
})

export default connect(
    null,
    initMapDispatchtoProps
)(Login)