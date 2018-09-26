import React from 'react';
import { connect } from 'react-redux';

import './index.css';

const getList = (list) => {
    return list.map(item => (
    <span
        key={item.id}
        className="bottom-span">
        {item.title}
    </span>))
}

const MyListBottom = (props) => (
    <div className="bottom">
        Videos in my list: { getList(props.list) }
    </div>
)

const mapStateToProps = (state) => {
    return {
        list: state.myList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyListBottom);
