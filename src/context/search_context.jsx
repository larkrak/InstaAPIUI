import React, { useContext, useReducer } from "react";
import reducer from "../reducers/search_reducer";
import PropTypes from "prop-types";

import { END_SEARCHING_FOLLOWERS, SEARCHING_FOLLOWERS, SEND_USER_TO_CONTEXT, SIDEBAR_OPEN } from "../actions";
import { SIDEBAR_CLOSE } from "../actions";

const initialState = {
  isSidebarOpen: false,
  user_search: '',
  is_user_searching: true
};

const SearchContext = React.createContext();

export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const sendUserToContext = (user) => {
    dispatch({ type: SEND_USER_TO_CONTEXT, payload: user });
  };

  const startFollowersSearch = () => {
    dispatch({ type: SEARCHING_FOLLOWERS });
  }
  const endFollowersSearch = () => {
    dispatch({ type: END_SEARCHING_FOLLOWERS });
  }

  return (
    <SearchContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        sendUserToContext,
        startFollowersSearch,
        endFollowersSearch
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
// make sure use
export const useSearchContext = () => {
  return useContext(SearchContext);
};

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
