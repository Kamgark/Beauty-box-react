import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) =>{
    switch (action.type){
        case 'total':
            return {...state, total: action.payLoad};
        case 'rightcart':
            return {...state, rightcart: action.payLoad};
        case 'showdiv':
            return {...state, showdiv: action.payLoad};
       default:
            return state;
    }
};

export class BeautyProvider extends Component{

    state = {
        dispatch: action =>{
                this.setState(state => reducer(state, action))
        },
        showdiv: false,
        rightcart:[],
        total:null
        
    };

    render(){
        const { state, props: {children} } = this;
        return <Context.Provider value={ state } >{children}</Context.Provider>;
    }
}

export const BeautyConsumer = Context.Consumer;
