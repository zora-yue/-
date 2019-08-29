import React from 'react';
import "./Footer.css"
export default class Footer extends React.Component{
    render (){
        return (
            <div className="footer">
            <div className="foot_app">
                <a href="##">触屏版</a>
                <span>|</span>
                <a href="##">电脑版</a>
                <span>|</span>
                <a href="##">APP下载</a>
            </div>
            <p className="foot_bei">
                ©️2017招财猫理财 浙ICP备14041616号
            </p>
        </div>
        )
    }
}