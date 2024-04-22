import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material';

import { NavLink } from 'react-router-dom';
import Input from '~/components/Input';
import config from '~/config';
import { PasswordIcon, UserIcon } from '../Icon';
import userApi from '~/api/module/user.api';

import { useFormik } from 'formik';

import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '~/redux/features/userSlice';
import { toast } from 'react-toastify';
import ButtonGoogle from '../ButtonGoogle';
import { setToken } from '~/redux/features/authSlice';
import { setFavorites } from '~/redux/features/favoritesSlice';
import { isAuthenticated } from '~/redux/selectors';

import { useMutation } from '@tanstack/react-query';
import Auth from '../Auth';
import { setIsAuthenticated } from '~/redux/features/isAuthenticated';

function SingIn({ setIsLoading, isLoading }) {
    // const location = useNavigate();

    const dispatch = useDispatch();

    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const isLogged = useSelector(isAuthenticated);

    const fetchApi = async (body) => {
        const { response, err } = await userApi.signin(body);
        if (response) return response;
        if (err) return Promise.reject(err);
    };

    const { mutate, isPending } = useMutation({
        mutationKey: ['login'],
        mutationFn: (body) => fetchApi(body),
    });
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Vui lòng nhập email đăng nhập'),
            password: Yup.string().required('Vui lòng nhập mật khẩu'),
        }),
        onSubmit: async (values, action) => {
            if (isLogged) return;
            mutate(values, {
                onSuccess: (data) => {
                    const { accessToken, refreshToken, favorites, ...user } = data;
                    dispatch(setFavorites(favorites));
                    dispatch(setUser(user));
                    dispatch(setIsAuthenticated(true));
                    dispatch(setToken({ accessToken, refreshToken }));
                    // location(config.routes.home);
                    formik.resetForm();
                    toast.success(`Xin chào, ${data.name}`, {
                        position: 'top-center',
                    });
                },
                onError: (error) => {
                    // if (error.data.name === 'PASSWORD') {
                    //     action.setErrors({ password: error.data.message });
                    // } else if (error.data.name === 'EMAIL') {
                    //     action.setErrors({ email: error.data.message });
                    // }
                    if ('name' in error.data) {
                        const key = error.data.name.toLowerCase();
                        const message = error.data.message;
                        action.setErrors({ [key]: message });
                    }
                },
            });
        },
    });
    return (
        <Auth titleAuth={'Đăng nhập vào tài khoản của bạn'} isLoading={isPending || isLoading}>
            <Box component={'form'} onSubmit={formik.handleSubmit}>
                <Stack mt={2}>
                    <Input
                        type="text"
                        name="email"
                        placeholder={'Email đăng nhập'}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.errors.email !== undefined && formik.touched.email}
                        helperText={formik.touched.email && formik.errors.email}
                        leftIcon={<UserIcon />}
                    ></Input>
                    <Input
                        type="password"
                        name="password"
                        placeholder={'Mật khẩu'}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.errors.password !== undefined && formik.touched.password}
                        helperText={formik.touched.password && formik.errors.password}
                        leftIcon={<PasswordIcon />}
                    ></Input>
                    {/* button */}
                    <Button
                        variant="contained"
                        disabled={isPending}
                        size={pointDownSm ? 'small' : 'medium'}
                        sx={{ borderRadius: '100px', mb: '19px' }}
                        type="submit"
                    >
                        Đăng Nhập
                    </Button>
                    <ButtonGoogle setIsLoading={setIsLoading} />
                </Stack>
                {/* button */}
                <Stack direction={'row'} justifyContent={'space-between'} mt={2}>
                    <Typography variant={pointDownSm ? 'subtitle2' : 'subtitle1'}>
                        <NavLink to={config.routes.signup}>Bạn chưa có tài khoản?</NavLink>
                    </Typography>
                    <Typography variant={pointDownSm ? 'subtitle2' : 'subtitle1'}>
                        <NavLink to={config.routes.forgotPassword}>Quên mật khẩu</NavLink>
                    </Typography>
                </Stack>
            </Box>
        </Auth>
    );
}

export default SingIn;
