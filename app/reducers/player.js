import * as types from '../constants/ActionTypes';

const initialState = {
  isPlaying: false
};

export default function player(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_IS_PLAYING:
      return Object.assign({}, state, {
        isPlaying: action.isPlaying,
      });
    default:
      return state;
  }
}
