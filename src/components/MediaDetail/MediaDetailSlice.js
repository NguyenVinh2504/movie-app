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

export default createSlice({
    name: 'showHideDetail',
    initialState: {
        toggleDetail: false,
    },
    reducers: {
        openDetail: (state, action) => {
            state.toggleDetail = action.payload;
        },
        closeDetail: (state, action) => {
            state.toggleDetail = action.payload;
        },
    },
});
