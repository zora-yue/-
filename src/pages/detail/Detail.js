import React from 'react';
import icon1 from '../../assets/img/detail_icon_01.png';
import icon2 from '../../assets/img/detail_icon_02.png';
import icon3 from '../../assets/img/detail_icon_03.png';
import icon4 from '../../assets/img/detail_icon_04.png';
import './Detail.scss'

import {connect} from 'react-redux';
import asyncAction from '../../store/asyncAction';
import querystring from 'query-string';
import * as types from '../../store/types';
import {Progress} from 'antd-mobile';

class Detail extends React.Component{
    componentWillMount(){
        let id=this.props.match.params.id-0;
        // let dataName=this.props.history.location.pathname;
        let dataName = querystring.parse(this.props.location.search).dataName;
        this.props.getDetail(dataName,id)
    }
    render(){
        // let title = querystring.parse(this.props.location.search).title;
        let {data}=this.props;
        return (
            <div className="detail">
                <div className="detail_interest">
                    <h3>{data.interest+"%"}+{data.activity+"%"}</h3>
                    <p>{(data.interest+data.activity).toFixed(2)+"%"} ({data.interest+"%"}+活动加息{data.activity+"%"})</p>
                </div>
                <div className="detail_day">
                    <span>1000元起投</span><b>|</b><span>期限{data.day}天</span>
                </div>
                <div className="detail_save">
                    <ul>
                        <li>
                            <img src={icon1} />
                            <span>省级律所法律支持</span>
                        </li>
                        <li>
                            <img src={icon2} />
                            <span>浙大友创战略入股</span>
                        </li>
                        <li>
                            <img src={icon3} />
                            <span>招财猫易贷严风控</span>
                        </li>
                        <li>
                            <img src={icon4} />
                            <span>千万级风险保障金</span>
                        </li>
                    </ul>
                    <div className="detail_save_jin">
                        <div className="detail_save_jin_num" style={{left:data.percentage*0.9+"%"}}>
                            <p>{data.percentage+"%"}</p>
                            <div id="triangle-down"></div>
                        </div>
                        <Progress percent={data.percentage} position="normal" style={{width:'6.82rem',height:'0.15rem',borderRadius: '0.15rem',background: '#f0f0f0',margin:'0 auto'}} barStyle={{height:'100%',backgroundColor:'#fb0502',borderRadius: '0.15rem'}}/>
                        {/* <p className="detail_save_p">
                            <b></b>
                        </p> */}
                        <div className="detail_save_jin_money">
                            <span>已投资<s>{data.percentage}</s>人>></span>
                            <span>剩余可投<s>623000</s>元</span>
                        </div>
                    </div>
                </div>
                <div className="detail_more">
                    <a href="##">查看项目详情></a>
                </div>
                <div className="detail_now">
                    <p>收益估算</p>
                    <input type="button" value="立即投资"/>
                </div>
            </div>
        )
    }
    
}

const initMapStateToProps=state=>({
    data:state.detail
})
const initMapDispatchToProps=dispatch=>({
    getDetail:(dataName,id)=>dispatch(asyncAction({
        apiname:`${dataName}/${id}`,
        typeName:types.UPDATE_DETAIL
    }))
})

export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Detail)