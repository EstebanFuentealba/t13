import * as types from '../constants/ActionTypes';

export function toggleIsPlaying(isPlaying) {
  return {
    type: types.TOGGLE_IS_PLAYING,
    isPlaying,
  };
}
