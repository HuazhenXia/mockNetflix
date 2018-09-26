import React from "react";
import { connect } from "react-redux";

import Item from "./item";
import * as actionCreators from "../store/actionCreators";
import "./index.css";

const Recommendations = props => (
  <div className="recommendations">
    <div className="row-header">Recommendations</div>
    <div className="row-body clearfix">{getList(props)}</div>
  </div>
);

const getList = props => {
  return props.list.map((item, index) => {
    return (
      <Item
        showButtonHandler={() => props.showAddButtonHandler(index)}
        hideButtonHandler={() => props.hideAddButtonHandler(index)}
        showButton={item.showButton}
        addHandler={() => props.addToMyListHandler(index)}
        key={item.id}
        src={item.img}
        title={item.title}
      />
    );
  });
};

const mapStateToProps = state => {
  return {
    list: state.recommendations
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //when mouse over
    showAddButtonHandler(index) {
      dispatch(actionCreators.showAddButton(index));
    },

    //when mouse not over
    hideAddButtonHandler(index) {
      dispatch(actionCreators.hideAddButton(index));
    },

    //add a film to my list
    addToMyListHandler(index) {
      dispatch(actionCreators.addToMyList(index));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recommendations);
