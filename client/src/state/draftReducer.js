import {
  SAVE_DRAFT_HTML_IN_STORE,
  SAVE_DRAFT_RAW_IN_STORE,
  FETCH_WP_CONTENT,
  SET_ACTUAL_WP_POST,
} from './actionTypes'

const initialState = {
  draftHtml: '',
  currentRawContent: '',
  wpContent: null,
}

export default (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case SAVE_DRAFT_RAW_IN_STORE:
      return {
        ...state,
        currentRawContent: action.value
      }
    case SAVE_DRAFT_HTML_IN_STORE:
      return {
        ...state,
        draftHtml: action.value
      }
    case FETCH_WP_CONTENT:
      return {
        ...state,
        wpContent: action.value
      }
    default:
      return state
  }
}