import React, { Component } from 'react';
import { connect } from 'react-redux';

import Item from './item';
import './index.css';
import * as actionCreators from '../store/actionCreators';

class MyList extends Component{

    //Item onMouseOut
    // hideButtonHandler = (index) => {
    //     const newList = this.state.list;
    //     newList[index]["showButton"] = false;
    //     this.setState({list: newList})
    // }

    getList = () => {
        
        return this.props.list.map((item, index) =>{
            return <Item 
                showButtonHandler = {() => this.props.showButtonHandler(index)}
                hideButtonHandler = {() => this.props.hideButtonHandler(index)}
                showButton = { item.showButton }
                removeHandler = {() => this.props.removeHandler(index)}
                key = {item.id}
                src = {item.img}
                title = {item.title}
            />
        })
    }

    render(){
        return (
            <div className="my-list">
                <div className="row-header">My List</div>
                <div className="row-body clearfix">
                    {this.getList()}
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.myList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //img onMouseEnter
        showButtonHandler(index) {
            dispatch(actionCreators.showRemoveButton(index))
        },

        //hide remove button when not on the item
        hideButtonHandler(index) {
            dispatch(actionCreators.hideRemoveButton(index))
        },

        //remove a film from my list
        removeHandler(index){
            dispatch(actionCreators.removeFromMyList(index))
        },


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyList);

