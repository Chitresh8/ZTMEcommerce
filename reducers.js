///src/reducers.js

import { combineReducers } from 'redux';

const initialState={
    data:[],
    loading:false,
    error:null,
    datas:[],
};

const dataReducer=(state=initialState,action)=>{
    switch (action.type){
        case "FETCH_DATA_REQUEST":
        return {...state,loading:true};
        case "FETCH_DATA_SUCCESS":
            return{...state,loading:false,data:action.payload}
            case "FETCH_DATA_FAILURE":
                return {...state,loading:false,error:action.payload};
                default:
                    return state;
    }
};

const datasReducer=(state=initialState,action)=>{
switch (action.type){
    case "FETCH_TRIAL_REQUEST":
        return {...state,loading:true };
        case "FETCH_TRIAL_SUCCESS":
            return {...state,loading:false,datas:action.payload}
            case "FETCH_TRIAL_FAILURE":
                return {...state,loading:false,error:action.payload};
                default:
                    return state;
}
};

const rootReducer=combineReducers({
    data:dataReducer,
    datas:datasReducer
});

export default rootReducer;
