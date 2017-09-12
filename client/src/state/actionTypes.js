import {

} from './actionTypes'

const initialState = {
  lightboxStatus: false,
  lightboxImage: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_LIGHTBOX':
      return {
        ...state,
        lightboxImage: action.value,
        lightboxStatus: true
      }
    case 'CLOSE_LIGHTBOX':
      return {
        ...state,
        lightboxImage: null,
        lightboxStatus: false
      }
    default:
      return state
  }
}