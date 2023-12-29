export const logOut = async ({ userApi, dispatch, loginOut, removeToken, toast }) => {
    const { response } = await userApi.logOut();
    if (response) {
        dispatch(loginOut());
        dispatch(removeToken());
        toast.success('Đăng xuất thành công');
    }
};