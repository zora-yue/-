import React from 'react';
import './Cell.scss';
import ProgressCircle from 'react-progress-circle2';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types'
import querystring from 'query-string'
export default class Cell extends React.Component{
    
    clickDet=()=>{
        let {dataName} =this.props
        this.props.history.push({pathname:'/detail/'+this.props.id,search:querystring.stringify({dataName,title:"我要投资"}),
        title:this.props.item.title
    })
    }
    render(){
        
        return (
            <div className="cell" onClick={this.clickDet}>
                <div className="cell_top">
                    <h3>{this.props.item.title}</h3>
                        <i></i>
                        <span>返现金</span>
                </div>
                <div className="cell_bottom">
                    <p className="cell_bottom_l">{this.props.item.interest+"%"}<span>+0.5%</span></p>
                    <div className="cell_bottom_c">
                        <p><span>{this.props.item.day}</span>天</p>
                        <p>投资期限</p>
                    </div>
                    <div className="cell_bottom_r">
                        {/* <div className="dian">
                            <span>37%</span>
                        </div> */}
                        <ProgressCircle
                            progress={this.props.item.percentage}
                            size={136}
                            strokeWidth={5}
                            bgColor="#ffe2e0"
                            progressColor="#fa3012"
                            >
                            {({ progress }) => (
                            <div
                                style={{
                                alignItems: 'center',
                                display: 'flex',
                                fontSize: 38,
                                }}
                            >
                                <div
                                style={{
                                    color:"#fb3034",
                                }}
                                >
                                {Math.round(progress)}
                                </div>
                                <div style={{color:"#fb3034"}}>%</div>
                            </div>
                            )}
                        </ProgressCircle>
                    </div>
                </div>
            </div>
        )
    }
}
        Cell.defaultProps = {
            id:null
        }
        Cell.propTypes={
            id:propTypes.number
        }