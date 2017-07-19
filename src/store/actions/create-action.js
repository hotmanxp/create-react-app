import * as types from './action-types';

export const addCount = () => {
  return {
    type: types.ADD_COUNT
  };
}
export const minCount = (payload) => {
  return {
    type: types.MIN_COUNT,
    payload
  };
}