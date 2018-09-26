import data from "../data/data.json";
import { actionTypes } from "./index";

const defaultState = {
  myList: data.mylist,
  recommendations: data.recommendations
};

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case actionTypes.SHOW_REMOVE_BUTTON:
      newState.myList[action.index]["showButton"] = true;
      return newState;

    case actionTypes.HIDE_REMOVE_BUTTON:
      newState.myList[action.index]["showButton"] = false;
      return newState;

    case actionTypes.REMOVE_FROM_MY_LIST:
      newState.myList.splice(action.index, 1);
      return newState;

    case actionTypes.SHOW_ADD_BUTTON:
      newState.recommendations[action.index]["showButton"] = true;
      return newState;

    case actionTypes.HIDE_ADD_BUTTON:
      newState.recommendations[action.index]["showButton"] = false;
      return newState;

    case actionTypes.ADD_TO_MY_LIST:
      const item = newState.recommendations.splice(action.index, 1);
      item[0].showButton = false;
      newState.myList.push(item[0]);
      return newState;

    default:
      return newState;
  }
};
