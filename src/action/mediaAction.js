import * as types from '../const/actionTypes';

export const selectImageAction = (image) => ({
  type: types.SELECTED_IMAGE,
  image
});

export const selectVideoAction = (video) => ({
  type: types.SELECTED_VIDEO,
  video
});

export const searchMediaAction = (payload) => ({
  type: types.SEARCH_MEDIA_REQUEST,
  payload
})