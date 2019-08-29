import store from './store';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDom from 'react-dom';
import App from './layouts/App/App.js'
import {BrowserRouter,Route} from 'react-router-dom';

import './plugins/axios' //配置axios

import './assets/css/base.css';//配置全局css
import './assets/js/font';//自适应rem布局

import * as utils from './utils';
Object.keys(utils).forEach(key=>React.Component[key]=utils[key]);




ReactDom.render(
    // 路由跳转可以拿到路由上下文
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App}/>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById("root")
)