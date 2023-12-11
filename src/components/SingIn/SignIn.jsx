import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material';

import { NavLink, useNavigate } from 'react-router-dom';
import Input from '~/components/Input';
import config from '~/config';
import { PasswordIcon, UserIcon } from '../Icon';
import userApi from '~/api/module/user.api';

import { useFormik } from 'formik';

import * as Yup from 'yup';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { setUser } from '~/redux/features/userSlice';
import ErrorMessageForm from '../ErrorMessageForm';
import { toast } from 'react-toastify';
import ButtonGoogle from '../ButtonGoogle';
import { toggleGlobalLoading } from '~/redux/features/globalLoadingSlice';
function SingIn() {
    const location = useNavigate();

    const dispatch = useDispatch();

    const [errorMessage, setErrorMessage] = useState();

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
        onSubmit: async (values) => {
            setErrorMessage(undefined);
            dispatch(toggleGlobalLoading(true));
            const { response, err } = await userApi.signin(values);
            dispatch(toggleGlobalLoading(false));
            if (err) {
                setErrorMessage(err.message);
            }
            if (response) {
                dispatch(setUser(response));
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
            {errorMessage && <ErrorMessageForm>{errorMessage}</ErrorMessageForm>}
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
                <Typography variant="subtitle2">
                    <NavLink to={config.routes.signup}>Bạn chưa có tài khoản?</NavLink>
                </Typography>
                <NavLink>
                    <Typography variant="subtitle2">Quên mật khẩu</Typography>
                </NavLink>
            </Stack>
        </Box>
    );
}

export default SingIn;