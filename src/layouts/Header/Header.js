import React from 'react';
import ReactDom from 'react-dom';
import './Header.css';
import top1 from '../../assets/img/ico_top_1.png'
import top2 from '../../assets/img/ico_top_2.png'

export default class Header extends React.Component{
    render (){
        return(
            <div className="header">
            <img className="header_go" src={top1} onClick={()=>this.props.props.history.go(-1)}/>
            <h3>{this.props.props.location.title}</h3>
            <img className="header_more" src={top2}/>
        </div>
        )
    }
}