import config from "~/config";

export const logOut = async ({ userApi, dispatch, loginOut, removeToken, toast, navigate }) => {
    const { response } = await userApi.logOut();
    if (response) {
        dispatch(loginOut());
        dispatch(removeToken());
        navigate(config.routes.home)
        navigate(0)
        toast.success('Đăng xuất thành công');
    }
};
