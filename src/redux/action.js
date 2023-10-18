export const openDetail = (data) => {
    return {
        type: 'showHideDetail/openDetail',
        payload: data,
    };
};

export const closeDetail = (data) => {
    return {
        type: 'showHideDetail/closeDetail',
        payload: data,
    };
};
