import { actionTypes } from './index';

export const showRemoveButton = (index) => ({
    type: actionTypes.SHOW_REMOVE_BUTTON,
    index
})

export const hideRemoveButton = (index) => ({
    type: actionTypes.HIDE_REMOVE_BUTTON,
    index
})

export const removeFromMyList = (index) =>({
    type: actionTypes.REMOVE_FROM_MY_LIST,
    index
})

export const showAddButton = (index) => ({
    type: actionTypes.SHOW_ADD_BUTTON,
    index
})

export const hideAddButton = (index) => ({
    type: actionTypes.HIDE_ADD_BUTTON,
    index
})

export const addToMyList = (index) => ({
    type: actionTypes.ADD_TO_MY_LIST,
    index
})

