import * as types from '../actions/action-types';

export default (state = {count: 10}, {type, payload}) => {
  switch (type) {
    case types.ADD_COUNT:
      return {...state, count: (state.count + 1)};
    case types.MIN_COUNT:
      return {...state, count: (state.count - payload)};
    default:
      return state;
  }
};