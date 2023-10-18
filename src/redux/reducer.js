import mediaDetailReducer from '~/components/MediaDetail/MediaDetailSlice';
import { combineReducers } from 'redux';
// const rootReducer = (state = {}, action) => {
//     return {
//         showHideDetail: mediaDetailReducer(state.showHideDetail, action),
//     };
// };
const rootReducer = combineReducers({
    showHideDetail: mediaDetailReducer,
});
export default rootReducer;
