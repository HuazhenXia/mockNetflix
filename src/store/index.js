import { createStore, compose } from 'redux';

import * as actionTypes from './actionTypes';
import * as actionCreators from './actionCreators';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers());

export {store, actionTypes, actionCreators};