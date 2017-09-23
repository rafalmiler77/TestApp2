import {
  SAVE_DRAFT_HTML_IN_STORE,
  SAVE_DRAFT_RAW_IN_STORE,
  FETCH_WP_CONTENT,
  SET_ACTUAL_WP_POST,
} from './actionTypes'

export const saveRawStore = value => {
  return ({
    type: SAVE_DRAFT_RAW_IN_STORE,
    value
  })
}
export const saveHtmlStore = value => {
  return ({
    type: SAVE_DRAFT_HTML_IN_STORE,
    value
  })
}
export const wpContentToStore = value => {
  return ({
    type: FETCH_WP_CONTENT,
    value
  })
}
