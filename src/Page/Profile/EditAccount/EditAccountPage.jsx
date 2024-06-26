import { Box, Button, Divider, Grid, styled, useMediaQuery } from '@mui/material';

import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { userValue } from '~/redux/selectors';
import { updateUser } from '~/redux/features/userSlice';

import InputProfile from './InputProfile/InputProflie';
import userApi from '~/api/module/user.api';

import { useFormik } from 'formik';

import * as Yup from 'yup';

import { toast } from 'react-toastify';

import isEqual from 'lodash.isequal';
import AvatarEdit from './AvatarEdit/AvatarEdit';
import PaperProfile from '../components/PaperProfile';
function EditAccount() {
    const [disable, setDisable] = useState(true);

    const user = useSelector(userValue);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            name: user?.name ?? '',
            phone: user?.phone ?? '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                // .min(8, 'Tên đăng nhập phải tối thiểu 8 kí tự')
                .required('Không được để trống'),
            phone: Yup.number().typeError('Vui lòng nhập chữ số'),
        }),
        enableReinitialize: true,
        onSubmit: async (values) => {
            let { name, phone } = values;
            name = name.trim();
            const checkValue = isEqual(formik.initialValues, { name, phone });
            setDisable(!disable);
            if (!checkValue) {
                const { response, err } = await userApi.profileUpdate({
                    name,
                    phone,
                });
                if (response) {
                    toast.success('Cập nhật thông tin thành công');
                    dispatch(updateUser(response));
                }
                if (err) {
                    toast.error(err.data.message);
                }
            }
        },
    });
    const handleCannel = () => {
        formik.resetForm();
        setDisable(!disable);
    };
    const handleDisable = () => {
        setDisable(!disable);
    };

    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const CustomButton = styled((props) => (
        <Button variant="contained" size={pointDownSm ? 'small' : 'medium'} {...props} />
    ))(() => ({}));

    return (
        <PaperProfile component={'form'} onSubmit={formik.handleSubmit}>
            <Grid container columnSpacing={2} p={2}>
                <Grid item xs={12} sm={6}>
                    <InputProfile
                        name="name"
                        disable={disable}
                        label={'Họ và tên'}
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.errors.name !== undefined && formik.touched.name}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <InputProfile disable={true} label={'User Name'} value={user?.userName ?? ''} />
                </Grid>
                <Grid item xs={12}>
                    <InputProfile disable={true} label={'Email'} value={user?.email ?? ''} />
                </Grid>
                <Grid item xs={12}>
                    <InputProfile
                        disable={disable}
                        label={'Số điện thoại'}
                        name="phone"
                        type="tel"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        error={formik.errors.phone !== undefined && formik.touched.phone}
                        helperText={formik.touched.phone && formik.errors.phone}
                    />
                </Grid>
                <Grid item xs={12}>
                    <AvatarEdit />
                </Grid>
            </Grid>
            <Divider />
            <Box p={2} justifyContent={'flex-end'} display={'flex'}>
                {disable && <CustomButton onClick={handleDisable}>Chỉnh sửa</CustomButton>}
                {!disable && <CustomButton type="submit">Lưu chỉnh sửa</CustomButton>}
                {!disable && (
                    <Button
                        variant="contained"
                        color="secondary"
                        size={pointDownSm ? 'small' : 'medium'}
                        sx={{ ml: 2 }}
                        onClick={handleCannel}
                    >
                        Hủy chỉnh sửa
                    </Button>
                )}
            </Box>
        </PaperProfile>
    );
}

export default EditAccount;
