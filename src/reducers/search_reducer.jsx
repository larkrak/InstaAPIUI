import { END_SEARCHING_FOLLOWERS, SEARCHING_FOLLOWERS, SEND_USER_TO_CONTEXT, SIDEBAR_CLOSE, SIDEBAR_OPEN } from "../actions";

const products_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }

  if (action.type === SEND_USER_TO_CONTEXT) {
    return { ...state, user_search: action.payload }
  }

  if (action.type === SEARCHING_FOLLOWERS) {
    return { ...state, is_user_searching: true }
  }

  if (action.type === END_SEARCHING_FOLLOWERS) {
    return { ...state, is_user_searching: false }
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
