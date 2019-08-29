import React from 'react';
import './App.css'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Home from '../../pages/home/Home'
import About from '../../pages/about/About'
import Help from '../../pages/help/Help'
import Know from '../../pages/know/Know'
import Reg from '../../pages/reg/Reg'
import Login from '../../pages/login/Login'
import User from '../../pages/user/User'
import GOODS from '../../pages/goods/GOODS'
import Detail from '../../pages/detail/Detail.js'
import ErrorPage from '../../pages/error/ErrorPage'
import Auth from "../../guard/Auth";

import {Route,Switch,Redirect} from 'react-router-dom';
import Loading from '../../components/load/Loading';

import {VIEW_HEAD,VIEW_FOOT,VIEW_LOADING} from '../../store/types';

import {connect} from 'react-redux'

class App extends React.Component{
  componentWillReceiveProps(nextProps){
    let path = nextProps.location.pathname;
    this.checkPath(path)
    window.scrollTo(0,0)
  }
  componentDidMount(){
    let path = this.props.location.pathname;
    this.checkPath(path)
  }
  checkPath=(path)=>{
    let {viewFoot,viewHead}=this.props;
    if (/user|goods|help|about|login|reg/.test(path)){
      viewFoot(true);viewHead(true)
    }
    if (/home|Home/.test(path)){
      viewFoot(true);viewHead(false)
    }
    if (/detail/.test(path)){
      viewFoot(false);viewHead(true)
    }
  }
  render(){
    let {bHead,bFoot,bLoading}=this.props;
    return (
      <div className="App">
        {bLoading&&<Loading/>}
      {bHead&&<Header props={this.props}/>}
      <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/detail/:id" component={Detail}/>
            <Route path="/help" component={Help}/>
            <Route path="/know" component={Know}/>
            <Route path="/reg" component={Reg}/>
            {/* <Route path="/user" component={User}/> */}
            <Auth path="/user" component={User}/>
            <Route path="/goods" component={GOODS}/>
            {/* <Route path="/login" component={Login}/> */}
            
            <Route path="/login" component={Login}/>

            <Redirect from="/" to="/Home"/>
            <Route component={ErrorPage}/>
      </Switch>
      {bFoot?<Footer/>:null}
      </div>
    )
  }
}

const initMapStateToProps=state=>({
  bHead:state.bHead,
  bFoot:state.bFoot,
  bLoading:state.bLoading
})
const initMapDispatchToProps=dispatch=>({
  viewHead:(bl)=>dispatch({type:VIEW_HEAD,payload:bl}),
  viewFoot:(bl)=>dispatch({type:VIEW_FOOT,payload:bl})
})

export default connect(
  initMapStateToProps,
  initMapDispatchToProps
)(App)