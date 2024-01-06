import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material';

import { NavLink, useNavigate } from 'react-router-dom';
import Input from '~/components/Input';
import config from '~/config';
import { PasswordIcon, UserIcon } from '../Icon';
import userApi from '~/api/module/user.api';

import { useFormik } from 'formik';

import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { setUser } from '~/redux/features/userSlice';
import { toast } from 'react-toastify';
import ButtonGoogle from '../ButtonGoogle';
import { setToken } from '~/redux/features/authSlice';
import { useState } from 'react';
function SingIn({ setIsLoading }) {
    const [disable, setDisabled] = useState(false);
    const location = useNavigate();

    const dispatch = useDispatch();

    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));

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
            setIsLoading(true);
            setDisabled(true);
            const { response, err } = await userApi.signin(values);
            if (err) {
                setDisabled(false);
                setIsLoading(false);
                if (err.message === 'INVALID_PASSWORD') {
                    action.setErrors({ password: 'Mật khẩu chưa chính xác' });
                } else if (err.message === 'INVALID_EMAIL') {
                    action.setErrors({ email: 'Không tìm thấy email' });
                }
            }
            if (response) {
                setDisabled(false);
                setIsLoading(false);
                const { accessToken, refreshToken, ...user } = response;
                dispatch(setUser(user));
                dispatch(setToken({ accessToken, refreshToken }));
                location(config.routes.home);
                formik.resetForm();
                toast.success(`Xin chào, ${response.name}`, {
                    position: 'top-center',
                });
            }
        },
    });
    return (
        <Box component={'form'} onSubmit={formik.handleSubmit}>
            <Stack spacing={2} mt={2}>
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
                    disabled={disable}
                    size={pointDownSm ? 'small' : 'medium'}
                    sx={{ borderRadius: '100px' }}
                    type="submit"
                >
                    Đăng Nhập
                </Button>
                <ButtonGoogle />
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
    );
}

export default SingIn;
