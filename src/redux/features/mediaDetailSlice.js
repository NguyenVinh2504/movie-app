// const initState = {
//     toggleDetail: false,
// };

// const mediaDetailReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'showHideDetail/openDetail':
//             return {
//                 toggleDetail: action.payload,
//             };
//         case 'showHideDetail/closeDetail':
//             return {
//                 toggleDetail: action.payload,
//             };
//         default:
//             return state;
//     }
// };

// export default mediaDetailReducer;

import { createSlice } from '@reduxjs/toolkit';

const detailMovie = createSlice({
    name: 'detailMovie',
    initialState: {
        toggleDetail: false,
    },
    reducers: {
        toggleDetail: (state, action) => {
            state.toggleDetail = action.payload;
        },
    },
});

const { actions, reducer } = detailMovie;
export const { toggleDetail } = actions;

export default reducer;
