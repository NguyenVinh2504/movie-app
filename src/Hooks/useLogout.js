
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import userApi from "~/api/module/user.api";
import { removeToken } from "~/redux/features/authSlice";
import { removeFavorites } from "~/redux/features/favoritesSlice";
import { setIsAuthenticated } from "~/redux/features/isAuthenticated";
import { loginOut } from "~/redux/features/userSlice";
import { clearLS } from "~/utils/auth";

export function useLogout() {
    const dispatch = useDispatch();
    const [disable, setDisabled] = useState(false);
    async function handelLogout() {
        setDisabled(true)
        // disable = true
        const { response } = await userApi.logOut();
        if (response) {
            // setTimeout(() => {
            dispatch(removeFavorites());
            dispatch(loginOut())
            dispatch(setIsAuthenticated(false))
            clearLS()
            dispatch(removeToken())
            toast.success('Đăng xuất thành công');
            // setTimeout(() => {
            //     window.location.href = "/";
            // }, [500])
            // }, 2000)
        }
        // if (err) {
        //     // setDisabled(false)
        //     dispatch(loginOut())
        //     dispatch(removeToken())
        //     dispatch(setIsAuthenticated(false))
        //     dispatch(removeFavorites());
        //     clearLS()
        //     toast.update(id, {
        //         render: 'Đăng xuất không thành công',
        //         type: 'error',
        //         isLoading: false,
        //         autoClose: 3000,
        //     });
        // }
    }
    return {
        handelLogout,
        disable
    }
};
