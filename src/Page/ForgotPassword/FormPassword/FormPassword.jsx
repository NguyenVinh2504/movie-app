import React from 'react';
import { Box, Button, Stack, useMediaQuery } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { PasswordIcon } from '~/components/Icon';
import Input from '~/components/Input';
// import uiConfigs from '~/config/ui.config';

const FormEmail = ({ openPass, onSubmitPass }) => {
    // const transformIn = keyframes`${uiConfigs.style.transformIn}`;
    // const transformOut = keyframes`${uiConfigs.style.transformOut}`;
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    // const [shouldRender, setRender] = useState(false);
    // const [inAnimation, setInAnimation] = useState(false);

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

    // useEffect(() => {
    //     let timer;
    //     if (openPass) {
    //         setRender(true);
    //         timer = setTimeout(() => {
    //             setInAnimation(true);
    //         }, [250]);
    //         return () => clearTimeout(timer);
    //     }
    // }, [openPass]);

    // useEffect(() => {
    //     let timer;
    //     if (!openPass) {
    //         console.log('tắt');
    //         setInAnimation(false);
    //         timer = setTimeout(() => {
    //             setRender(false);
    //         }, [1000]);
    //     }
    //     return () => clearTimeout(timer);
    // }, [openEmail, openPass, setOpenOtp]);

    // useEffect(() => {
    //     if (!shouldRender) {
    //         setOpenOtp(true);
    //     }
    // }, [setOpenOtp, shouldRender]);
    // useEffect(() => {
    //     let timer;
    //     if (shouldRender) {
    //         timer = setTimeout(() => {
    //             setInAnimation(true);
    //         }, [1000]);
    //     }
    //     return () => clearTimeout(timer);
    // }, [shouldRender]);
    return (
        // shouldRender && (
        //     <>
        openPass && (
            <Box
                component={'form'}
                onSubmit={formik.handleSubmit}
                sx={{
                    // animation: `${openPass ? transformIn : transformOut} 1.5s`,
                    // transform: inAnimation ? 'translateX(0)' : openPass ? 'translateX(-200%)' : 'translateX(200%)',
                    // transition: 'transform 1s ease-in-out 0s',
                    display: openPass ? 'block' : 'none',
                }}
            >
                <Stack mt={2} alignItems={'flex-end'}>
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
                    <Button variant="contained" size={pointDownSm ? 'small' : 'medium'} type="submit">
                        Tiếp theo
                    </Button>
                </Stack>
                {/* button */}
            </Box>
        )
        //     </>
        // )
    );
};

export default FormEmail;
