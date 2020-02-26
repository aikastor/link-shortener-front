import {SHORTEN_LINK_REQUEST, SHORTEN_LINK_SUCCESS} from "../actions/linkActions";

const initialState = {
  shortenedLink : null,
  loading: false,
};

const linksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHORTEN_LINK_REQUEST:
      return {...state, loading: true};
    case SHORTEN_LINK_SUCCESS:
      return {...state, shortenedLink: action.link};
    default:
      return state

  }
};

export default linksReducer;