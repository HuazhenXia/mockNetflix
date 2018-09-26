import React from "react";
import { connect } from "react-redux";

import Item from "./item";
import "./index.css";
import * as actionCreators from "../store/actionCreators";

const MyList = props => (
  <div className="my-list">
    <div className="row-header">My List</div>
    <div className="row-body clearfix">{getList(props)}</div>
  </div>
);

const getList = props => {
  return props.list.map((item, index) => {
    return (
      <Item
        showButtonHandler={() => props.showButtonHandler(index)}
        hideButtonHandler={() => props.hideButtonHandler(index)}
        showButton={item.showButton}
        removeHandler={() => props.removeHandler(index)}
        key={item.id}
        src={item.img}
        title={item.title}
      />
    );
  });
};

const mapStateToProps = state => {
  return {
    list: state.myList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //img onMouseEnter
    showButtonHandler(index) {
      dispatch(actionCreators.showRemoveButton(index));
    },

    //hide remove button when not on the item
    hideButtonHandler(index) {
      dispatch(actionCreators.hideRemoveButton(index));
    },

    //remove a film from my list
    removeHandler(index) {
      dispatch(actionCreators.removeFromMyList(index));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyList);
