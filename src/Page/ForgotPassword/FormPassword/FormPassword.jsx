import React from 'react';
import { Box, Button, Stack, useMediaQuery } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ErrorMessageForm from '~/components/ErrorMessageForm';
import { PasswordIcon } from '~/components/Icon';
import Input from '~/components/Input';
import uiConfigs from '~/config/ui.config';

const FormEmail = ({ errorMessage, openPass, openOtp, onSubmitPass }) => {
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .min(8, 'Mật khẩu phải chưa ít nhất 8 kí tự')
                .matches(/[0-9]/, 'Mật khẩu phải chứa chữ số')
                .matches(/[a-z]/, 'Mật khẩu phải chứa chữ cái thường')
                .matches(/[A-Z]/, 'Mật khẩu phải chứa chữ cái hoa')
                .matches(/[^\w]/, 'Mật khẩu phải chứa kí tự đặc biệt')
                .matches(/^(\S+$)/, 'Mật khẩu không khoảng trắng')
                .required('Vui lòng nhập mật khẩu'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password')], 'Nhập lại mật khẩu chưa chính xác')
                .required('Vui lòng nhập lại mật khẩu'),
        }),
        onSubmit: async (values) => {
            onSubmitPass({ newPassword: values.password });
        },
    });
    return (
        <Box
            component={'form'}
            onSubmit={formik.handleSubmit}
            sx={{
                transform: openPass ? 'translateX(0)' : openOtp ? 'translateX(200%)' : 'translateX(-200%)',
                ...uiConfigs.style.positionFullSize,
                position: openPass ? 'relative' : 'absolute',
                transition: 'all 1s ease 0s',
            }}
        >
            {errorMessage && <ErrorMessageForm>{errorMessage}</ErrorMessageForm>}
            <Stack spacing={2} mt={2} alignItems={'flex-end'}>
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
                <Input
                    type="password"
                    name="confirmPassword"
                    placeholder={'Nhập lại mật khẩu'}
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    error={formik.errors.confirmPassword !== undefined && formik.touched.confirmPassword}
                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    leftIcon={<PasswordIcon />}
                ></Input>
                {/* button */}
                <Button
                    variant="contained"
                    size={pointDownSm ? 'small' : 'medium'}
                    type="submit"
                >
                    Tiếp theo
                </Button>
            </Stack>
            {/* button */}
        </Box>
    );
};

export default FormEmail;
