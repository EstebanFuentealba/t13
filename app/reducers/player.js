import * as types from '../constants/ActionTypes';

const initialState = {
  isPlaying: false
};

export default function player(state = initialState, action) {
  console.log(action.type , action.isPlaying );
  switch (action.type) {
    case types.TOGGLE_IS_PLAYING:
      return Object.assign({}, state, {
        isPlaying: action.isPlaying,
      });
    default:
      return state;
  }
}
