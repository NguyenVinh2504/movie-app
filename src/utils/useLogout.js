
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import userApi from "~/api/module/user.api";
import { removeToken } from "~/redux/features/authSlice";
import { removeFavorites } from "~/redux/features/favoritesSlice";
import { loginOut } from "~/redux/features/userSlice";

// let disable = false
let isLogged = false
export function useLogout() {
    const dispatch = useDispatch();
    const [disable, setDisabled] = useState(false);
    async function handelLogout() {
        setDisabled(true)
        // disable = true
        const id = toast.loading('Đang đăng xuất...');
        const { response, err } = await userApi.logOut();
        if (response) {
            // navigate(config.routes.home)
            // setTimeout(() => {
            // setDisabled(false)
            // disable.current = false
            dispatch(removeFavorites());
            dispatch(loginOut())
            dispatch(removeToken())
            toast.update(id, {
                render: 'Đăng xuất thành công',
                type: 'success',
                isLoading: false,
                autoClose: 3000,
            });
            isLogged = true
            setTimeout(() => {
                // window.location.href = "/";
            }, [500])
            // navigate(0)
            // }, 2000)
        }
        if (err) {
            // setDisabled(false)
            dispatch(loginOut())
            dispatch(removeToken())
            dispatch(removeFavorites());
            toast.update(id, {
                render: 'Đăng xuất không thành công',
                type: 'error',
                isLoading: false,
                autoClose: 3000,
            });
        }
    }
    console.log(disable);
    useEffect(() => {
        if (isLogged) {
            window.location.href = "/";
        }
    })
    return {
        handelLogout,
        disable
    }
};
