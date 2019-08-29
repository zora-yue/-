import  React from 'react';
import {Route,Redirect} from 'react-router-dom';

export default class Auth extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hasAuth:false,
            data:{}
        };
        Auth.axios({
            url:`/mock/user`
        }).then(res=>this.setState({data:res.data,hasAuth:true}))
    }
    render(){
        if (!this.state.hasAuth) return null;
        let {component:Component,...rest} = this.props;
    
        return (
            <Route {...rest} render={(rest)=>(
                this.state.data.err===0?
                <Component {...rest} data={this.state.data.data}/>:
                <Redirect to="/login" />
            )}/>
        )
        
    }
}
