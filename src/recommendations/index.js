import React, { Component } from 'react';
import { connect } from 'react-redux';

import Item from './item'
import * as actionCreators from '../store/actionCreators';
import './index.css';

class Recommendations extends Component{
    
    getList = () => {
        return this.props.list.map((item, index) =>{
            return <Item 
                showButtonHandler = {() => this.props.showAddButtonHandler(index)}
                hideButtonHandler = {() => this.props.hideAddButtonHandler(index)}
                showButton = {item.showButton}
                addHandler = {() => this.props.addToMyListHandler(index)}
                key = {item.id}
                src = {item.img}
                title = {item.title}
            />
        })
    }

    render(){
        return (
            <div className="recommendations">
                <div className="row-header">Recommendations</div>
                <div className="row-body clearfix">
                    {this.getList()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.recommendations
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //when mouse over
        showAddButtonHandler(index) {
            dispatch(actionCreators.showAddButton(index))
        },

        //when mouse not over
        hideAddButtonHandler(index) {
            dispatch(actionCreators.hideAddButton(index))
        },

        //add a film to my list
        addToMyListHandler(index){
            dispatch(actionCreators.addToMyList(index))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Recommendations);

