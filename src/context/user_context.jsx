import React, { useContext, useReducer } from "react";
import reducer from "../reducers/user_reducer";
import PropTypes from "prop-types";

import { LOAD_FOLLOWERS } from "../actions";

const initialState = {
    user_found: false,
    user_followers: {},
    user_following: {},
    user_info: {}
};

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);


    const loadFollowers = (users) => {
        dispatch({ type: LOAD_FOLLOWERS, payload: users });
    }

    return (
        <UserContext.Provider
            value={{
                ...state,
                loadFollowers

            }}
        >
            {children}
        </UserContext.Provider>
    );
};
// make sure use
export const useUserContext = () => {
    return useContext(UserContext);
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
