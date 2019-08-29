import React from 'react';
import ReactDom from 'react-dom';
import Cell from '../../components/Cell/Cell';
import './GOODS.scss';
import {WhiteSpace} from 'antd-mobile';
import {connect} from 'react-redux';
import asyncAction from '../../store/asyncAction';
import * as types from '../../store/types';


class Goods extends React.Component{
    componentDidMount(){
        this.props.getGoods()
    }
    render(){
        let {goods}=this.props;
        return (
            <div className="goods">
                <div className="goods_bg"></div>
                <ul className="goods_list">
                    {goods.map((item,index)=>(
                        <li key={index}>
                            <Cell id={item.id} history={this.props.history} item={item} dataName='goods' linkapi/>
                        </li>
                    ))}
                </ul>
                <WhiteSpace size={'xl'}/>
            </div>
        )
    }
}

const initMapStateToProps=state=>({
    goods:state.goods
})
const initMapDispatcnToPaops=dispatch=>({
    getGoods:()=>dispatch(asyncAction({
        apiname:'goods',
        params:{_page:1,_limit:8},
        typeName:types.UPDATE_GOODS
    }))
})

export default connect(
    initMapStateToProps,
    initMapDispatcnToPaops
)(Goods)