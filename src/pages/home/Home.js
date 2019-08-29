import React from 'react';
import './Home.css';
import logo from '../../assets/img/logo.png';

import {NavLink,Link} from 'react-router-dom';
import Cell from '../../components/Cell/Cell';

import {Carousel} from 'antd-mobile';
import {connect} from 'react-redux';
import asyncAction from '../../store/asyncAction';
import * as types from '../../store/types'
class Home extends React.Component{
    componentDidMount(){
        // Home.axios({
        //     url:'/mock/home',
        //     params:{_page:1,_limit:3}
        // }).then(
        //     res=>this.setState({list:res.data.data})
        // )
        this.props.getHome()
    }
    render(){
        let {home}=this.props;
        return (
            <div className="home">
            <div className="top">
                <div className="logo">
                  <img src={logo} alt="logo"/> 
                  <p>招财猫理财</p>
                </div>
                <div className="top-right">
                    <NavLink  to={{pathname:"/reg",title:"注册"}}>注册</NavLink>
                    <span>|</span>
                    <NavLink  to={{pathname:"/login",title:"登录"}}>登录</NavLink>
                </div>
            </div>
            <ul className="home-head">
                <li tag="li">
                    <NavLink to="/home" activeClassName="active">首页</NavLink>
                </li>
                <li>
                    <NavLink to={{pathname:"/goods",title:"我要投资"}} activeClassName="active">我要投资</NavLink>
                </li>
                <li>
                    <NavLink to="/user" activeClassName="active">账户中心</NavLink>
                </li>
            </ul>
            <div className="home_swipe">
                <Carousel
                autoplay={true}
                autoplayInterval={2000}
                infinite={true}
                >
                    <a href="##">
                        <img src="/image/banner1.jpg" alt=""/>
                    </a>
                    <a href="##">
                        <img src="/image/banner2.png" alt=""/>
                    </a>
                </Carousel>
            </div>
            <ul className="home_nav"> 
                <li>

                    <img src="/image/home_ico_01.png" alt="安全保障"/>
                    <p onClick={this.address}>安全保障</p>
                </li>
                <li>
                    <Link to={{pathname:"/about",title:"关于我们"}}>
                        <img src="/image/home_ico_02.png" alt="关于我们"/>
                        <p>关于我们</p>
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:"/know",title:"了解招财猫"}}>
                        <img src="/image/home_ico_03.png" alt="新手指引"/>
                        <p>新手指引</p>
                    </Link>
                </li>
                <li>
                    <Link to={{pathname:"/help",title:"帮助中心"}}>
                        <img src="/image/home_ico_04.png" alt="帮助中心"/>
                        <p>帮助中心</p>
                    </Link>
                </li>
            </ul>
            <div className="home_list">
                <h3 className="hot">
                    <p>热门产品</p>
                    <span><Link to={{pathname:"/goods",title:"我要投资"}}>更多</Link></span>
                </h3>
                {
                    home.map((item,index)=>(
                        <div className="home_cell" key={index}>
                <Cell id={item.id} link history={this.props.history} item={item} dataName={'home'} />
                </div>
                    ))
                }
                <div className="list_news">
                    <h3>企业动态</h3>
                </div>
                
            </div>
            <ul className="home_news">
                        <li>
                            <a href="##">
                            <div className="new_img">
                            <img src="/image/new1.jpg" alt=""/>
                            </div>
                            <div className="li_r">
                                <p>春日梦想 植树专享
                                <b>来源:招财猫理财</b>
                                </p>
                            <span>2019-09-15</span>
                            </div>
                            </a>
                        </li>
                        <li>
                            <a href="##">
                            <div className="new_img">
                            <img src="/image/new2.jpg" alt=""/>
                            </div>
                            <div className="li_r">
                                <p>春日梦想 植树专享
                                <b>来源:招财猫理财</b>
                                </p>
                            <span>2019-09-15</span>
                            </div>
                            </a>
                        </li>
                        <li>
                            <a href="##">
                            <div className="new_img">
                            <img src="/image/new1.jpg" alt=""/>
                            </div>
                            <div className="li_r">
                                <p>春日梦想 植树专享
                                <b>来源:招财猫理财</b>
                                </p>
                            <span>2019-09-15</span>
                            </div>
                            </a>
                        </li>
                    </ul>
            <div className="geduan">

            </div>
        </div>

        )
    }
}

const initMapStateToProps=state=>({
    home:state.home
})
const initMapDispatchToProps=dispatch=>({
    getHome:()=>dispatch(asyncAction({
        apiname:'home',
        params:{_page:1,_limit:3},
        typeName:types.UPDATE_HOME
    }))
})

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Home)