import { Box, Button, Divider, Typography } from '@mui/material';

import { useDispatch } from 'react-redux';

import userApi from '~/api/module/user.api';

import { useFormik } from 'formik';

import * as Yup from 'yup';

import { toast } from 'react-toastify';

import Input from '~/components/Input';
import Label from '~/components/LabelSetting';

import { useState } from 'react';
import { setUser } from '~/redux/features/userSlice';

function DeleteUser() {
    const [inputPassword, setInputPassword] = useState(false);
    const [disable, setDisabled] = useState(false);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            password: '',
        },
        validationSchema: Yup.object({
            password: Yup.string().required('Vui lòng nhập mật khẩu'),
        }),
        onSubmit: async (values) => {
            setDisabled(true);
            setInputPassword(!inputPassword);
            const { response, err } = await userApi.deleteUser(values);

            if (response) {
                setDisabled(false);
                toast.success('Xóa tài khoản thành công');
                dispatch(setUser(null));
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
                <Box p={2}>
                    {inputPassword && <Label>Mật khẩu </Label>}
                    {inputPassword && (
                        <Input
                            type="password"
                            name="password"
                            placeholder={'Nhập lại mật khẩu'}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.errors.password !== undefined && formik.touched.password}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                    )}
                    {!inputPassword && (
                        <Button variant="contained" color="secondary" onClick={() => setInputPassword(!inputPassword)}>
                            Xóa tài khoản
                        </Button>
                    )}
                    {inputPassword && (
                        <Box sx={{ mt: 1, display: 'flex', gap: 1 }}>
                            <Button disabled={disable} variant="contained" color="secondary" type={'submit'}>
                                Xác nhận
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => setInputPassword(!inputPassword)}
                            >
                                Hủy
                            </Button>
                        </Box>
                    )}
                </Box>
                <Divider />
                <Typography variant="body1" p={2}>
                    Bạn xác nhận muốn xóa tài khoản? Khi xác nhận xóa, tài khoản bạn sẽ được xóa vĩnh viễn.
                </Typography>
            </Box>
        </>
    );
}

export default DeleteUser;
