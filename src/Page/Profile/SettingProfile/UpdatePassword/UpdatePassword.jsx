import { Box, Button, Stack, Divider } from '@mui/material';
// import LoadingButton from '@mui/lab/LoadingButton';

import userApi from '~/api/module/user.api';

import { useFormik } from 'formik';

import * as Yup from 'yup';

import { toast } from 'react-toastify';

import Input from '~/components/Input';
import Label from '~/components/LabelSetting';
import { useState } from 'react';

function UpdatePassword() {
    const [disable, setDisabled] = useState(false);
    const formik = useFormik({
        initialValues: {
            password: '',
            newPassword: '',
            confirmNewPassword: '',
        },
        validationSchema: Yup.object({
            password: Yup.string().required('Vui lòng nhập mật khẩu'),
            newPassword: Yup.string()
                .min(8, 'Mật khẩu phải chưa ít nhất 8 kí tự')
                .matches(/[0-9]/, 'Mật khẩu phải chứa chữ số')
                .matches(/[a-z]/, 'Mật khẩu phải chứa chữ cái thường')
                .matches(/[A-Z]/, 'Mật khẩu phải chứa chữ cái hoa')
                .matches(/[^\w]/, 'Mật khẩu phải chứa kí tự đặc biệt')
                .matches(/^(\S+$)/, 'Mật khẩu không khoảng trắng')
                .notOneOf([Yup.ref('password')], 'Mật khẩu mới phải khác mật khẩu cũ')
                .required('Vui lòng nhập mật khẩu mới'),
            confirmNewPassword: Yup.string()
                .notOneOf([Yup.ref('password')], 'Mật khẩu mới phải khác mật khẩu cũ')
                .oneOf([Yup.ref('newPassword')], 'Nhập lại mật khẩu mới chưa chính xác')
                .required('Vui lòng nhập lại mật khẩu mới'),
        }),
        onSubmit: async (values) => {
            setDisabled(true);
            const { response, err } = await userApi.passwordUpdate(values);

            if (response) {
                setDisabled(false);
                toast.success('Cập nhật mật khẩu thành công');
            }
            if (err) {
                setDisabled(false);
                toast.error(err.data.message);
            }
        },
    });
    return (
        <>
            <Box component={'form'} onSubmit={formik.handleSubmit}>
                <Stack p={2}>
                    <Box>
                        <Label>Mật khẩu cũ</Label>
                        <Input
                            type="password"
                            name="password"
                            placeholder={'Nhập mật khẩu'}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.errors.password !== undefined && formik.touched.password}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                    </Box>
                    <Box>
                        <Label>Mật khẩu mới</Label>
                        <Input
                            type="password"
                            name="newPassword"
                            placeholder={'Nhập mật khẩu mới'}
                            value={formik.values.newPassword}
                            onChange={formik.handleChange}
                            error={formik.errors.newPassword !== undefined && formik.touched.newPassword}
                            helperText={formik.touched.newPassword && formik.errors.newPassword}
                        />
                    </Box>
                    <Box>
                        <Label>Nhập lại mật khẩu</Label>
                        <Input
                            type="password"
                            name="confirmNewPassword"
                            placeholder={'Nhập lại mật khẩu mới'}
                            value={formik.values.confirmNewPassword}
                            onChange={formik.handleChange}
                            error={formik.errors.confirmNewPassword !== undefined && formik.touched.confirmNewPassword}
                            helperText={formik.touched.confirmNewPassword && formik.errors.confirmNewPassword}
                        />
                    </Box>
                </Stack>
                <Divider />
                <Box p={2}>
                    <Button variant="contained" type="submit" color="secondary" disabled={disable}>
                        Cập nhật
                    </Button>
                </Box>
            </Box>
        </>
    );
}

export default UpdatePassword;
