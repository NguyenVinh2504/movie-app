// import config from "~/config";

export const logOut = async ({ userApi, dispatch, loginOut, removeToken, toast, navigate }) => {
    const id = toast.loading('Đang đăng xuất...');
    const { response, err } = await userApi.logOut();
    if (response) {
        // navigate(config.routes.home)
        setTimeout(() => {
            dispatch(loginOut())
            dispatch(removeToken())
            toast.update(id, {
                render: 'Đăng xuất thành công',
                type: 'success',
                isLoading: false,
                autoClose: 3000,
            });
            // navigate(0)
        }, 2000)
    }
    if (err) {
        toast.update(id, {
            render: 'Đăng xuất không thành công',
            type: 'error',
            isLoading: false,
            autoClose: 3000,
        });
    }
};
