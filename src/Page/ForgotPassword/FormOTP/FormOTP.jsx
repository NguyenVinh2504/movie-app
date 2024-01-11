import React, { useEffect, useState } from 'react';
import { Box, Button, ButtonBase, Stack, Typography, useMediaQuery } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ErrorMessageForm from '~/components/ErrorMessageForm';
import { PasswordIcon } from '~/components/Icon';
import Input from '~/components/Input';
// import uiConfigs from '~/config/ui.config';
// import uiConfigs from '~/config/ui.config';

// const transformIn = keyframes`${uiConfigs.style.transformIn}`;
// const transformOut = keyframes`${uiConfigs.style.transformOut}`;

const FormEmail = ({ openOtp, errorMessage, setErrorMessage, onSubmitOTP, onReSendOTP }) => {
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const [countdown, setCountdown] = useState(120);
    // const [shouldRender, setRender] = useState(false);
    // const [inAnimation, setInAnimation] = useState(false);

    const formik = useFormik({
        initialValues: {
            otp: '',
        },
        validationSchema: Yup.object({
            otp: Yup.string().required('Vui lòng nhập mã OTP'),
        }),
        onSubmit: async (values, actions) => {
            const { otp } = values;
            onSubmitOTP(otp.toString(), actions);
        },
    });
    useEffect(() => {
        if (!openOtp) return;
        if (countdown === 0) {
            setErrorMessage(false);
            formik.resetForm();
            return;
        }
        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countdown, openOtp]);

    // useEffect(() => {
    //     let timer;
    //     if (openOtp) {
    //         setRender(true);
    //         timer = setTimeout(() => {
    //             setInAnimation(true);
    //         }, [250]);
    //         return () => clearTimeout(timer);
    //     }
    // }, [openOtp]);

    return (
        // shouldRender && (
        openOtp && (
            <Box
                component={'form'}
                onSubmit={formik.handleSubmit}
                sx={{
                    // transform: inAnimation ? 'translateX(0)' : 'translateX(-200%)',
                    display: openOtp ? 'block' : 'none',
                    // transition: 'transform 1s ease-in-out 0s',
                }}
            >
                {errorMessage && <ErrorMessageForm>{errorMessage}</ErrorMessageForm>}
                <Stack spacing={2} mt={2} alignItems={'flex-end'}>
                    <Box sx={{ width: '100%' }}>
                        <Input
                            type="number"
                            name="otp"
                            inputEvent={{
                                disabled: countdown === 0,
                            }}
                            placeholder={'Nhập mã OTP'}
                            value={formik.values.otp}
                            onChange={formik.handleChange}
                            error={formik.errors.otp !== undefined && formik.touched.otp}
                            helperText={formik.touched.otp && formik.errors.otp}
                            leftIcon={<PasswordIcon />}
                        ></Input>
                        <ButtonBase disabled={true} onClick={() => onReSendOTP(setCountdown)}>
                            <Typography variant="subtitle2" mt={1} color={countdown !== 0 ? '#a6a4a4' : `white`}>
                                {countdown === 0 ? 'Gửi mã OTP mới' : `Gửi mã OTP mới (sau ${countdown} giây)`}
                            </Typography>
                        </ButtonBase>
                    </Box>
                    {/* button */}
                    <Button
                        variant="contained"
                        disabled={countdown === 0}
                        size={pointDownSm ? 'small' : 'medium'}
                        type="submit"
                    >
                        Gửi mã
                    </Button>
                </Stack>
                {/* button */}
            </Box>
        )
        // )
    );
};

export default FormEmail;
