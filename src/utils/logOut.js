import config from "~/config";

export const logOut = async ({ userApi, dispatch, loginOut, removeToken, toast, navigate }) => {
    const { response } = await userApi.logOut();
    if (response) {
        dispatch(loginOut());
        dispatch(removeToken());
        navigate(0)
        navigate(config.routes.home)
        toast.success('Đăng xuất thành công');
    }
};
