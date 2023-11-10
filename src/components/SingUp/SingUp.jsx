import { FacebookRounded, Google } from '@mui/icons-material';
import { Box, Button, Divider, Stack, Typography, useMediaQuery } from '@mui/material';
import Input from '~/components/Input';
import config from '~/config';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { EmailIcon, PasswordIcon, UserIcon } from '../Icon';
import userApi from '~/api/module/user.api';
function SingUp() {
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().min(8, 'Tên đăng nhập phải tối thiểu 8 kí tự').required('Vui lòng nhập tên đăng nhập'),
            email: Yup.string().email('Định dạng email không đúng').required('Vui lòng nhập email'),
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
            const { response, err } = await userApi.signup(values);
        },
    });
    return (
        <Box component={'form'} onSubmit={formik.handleSubmit}>
            <Stack spacing={2} mt={3}>
                <Input
                    type="text"
                    name="name"
                    placeholder={'Tên đăng nhập'}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.errors.name !== undefined && formik.touched.name}
                    helperText={formik.touched.name && formik.errors.name}
                    leftIcon={<UserIcon/>}
                ></Input>
                <Input
                    type="text"
                    name="email"
                    placeholder={'Email'}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.errors.email !== undefined && formik.touched.email}
                    helperText={formik.touched.email && formik.errors.email}
                    leftIcon={<EmailIcon/>}
                ></Input>
                <Input
                    type="password"
                    name="password"
                    placeholder={'Mật khẩu'}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.errors.password !== undefined && formik.touched.password}
                    helperText={formik.touched.password && formik.errors.password}
                    leftIcon={<PasswordIcon/>}
                ></Input>
                <Input
                    type="password"
                    name="confirmPassword"
                    placeholder={'Nhập lại mật khẩu'}
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    error={formik.errors.confirmPassword !== undefined && formik.touched.confirmPassword}
                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    leftIcon={<PasswordIcon/>}
                ></Input>

                {/* button */}
                <Button type={'submit'} variant="contained" sx={{ borderRadius: '100px' }} size={pointDownSm ? 'small' : 'medium'}>
                    Đăng Ký Ngay
                </Button>
                <Divider
                    sx={{ '::before, :: after': { borderTop: '1px solid rgba(255, 255, 255, 0.2)' }, fontSize: '16px' }}
                >
                    Hoặc
                </Divider>
                <Button variant="pill-outline" color="white-outline" startIcon={<Google />} size={pointDownSm ? 'small' : 'medium'}>
                    <div>Đăng nhập bằng Google</div>
                </Button>
                <Button variant="pill-outline" color="white-outline" startIcon={<FacebookRounded />} size={pointDownSm ? 'small' : 'medium'}>
                    <span>Đăng nhập bằng Facebook</span>
                </Button>
            </Stack>
            {/* button */}
            <Stack direction={'row'} justifyContent={'space-between'} mt={2}>
                <Typography variant="subtitle2" component={'a'} href={config.routes.login}>
                    Bạn đã có tài khoản? Đăng Nhập
                </Typography>
            </Stack>
        </Box>
    );
}

export default SingUp;
