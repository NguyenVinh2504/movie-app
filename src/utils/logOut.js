// import config from "~/config";

export const logOut = async ({ userApi, dispatch, loginOut, removeToken, toast, navigate, setDisabled = () => { } }) => {
    const id = toast.loading('Đang đăng xuất...');
    setDisabled(true)
    const { response, err } = await userApi.logOut();
    if (response) {
        // navigate(config.routes.home)
        setTimeout(() => {
            setDisabled(false)
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
        setDisabled(false)
        dispatch(loginOut())
        dispatch(removeToken())
        toast.update(id, {
            render: 'Đăng xuất không thành công',
            type: 'error',
            isLoading: false,
            autoClose: 3000,
        });
    }
};
