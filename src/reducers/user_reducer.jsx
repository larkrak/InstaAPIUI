import { LOAD_FOLLOWERS } from "../actions";

const products_reducer = (state, action) => {
    if (action.type === LOAD_FOLLOWERS) {
        console.log("action", action)
        return { ...state, user_followers: { ...action.payload.followers_info }, user_following: { ...action.payload.following_info }, user_info: { ...action.payload.user_info } };
    }

    throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
