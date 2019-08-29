import * as types from './types';
export default (state,{type,payload})=>{
    switch (type) {
        case types.VIEW_HEAD:
            return {...state,bHead:payload};
        case types.VIEW_FOOT:
            return {...state,bFoot:payload};
        case types.VIEW_LOADING:
            return {...state,bLoading:payload};
        case types.UPDATE_HOME:
            return {...state,home:payload.data};
        case types.UPDATE_GOODS:
            return {...state,goods:payload.data};
        case types.UPDATE_DETAIL:
            return {...state,detail:payload.data};
        case types.UPDATE_BANNER:
            return {...state,banner:payload.data};
        case types.UPDATE_USER:
            // 同步localstion
            window.localStorage.setItem('cat_user',JSON.stringify(payload))
            return {...state,user:payload};
        default:
            return state;
    }
}