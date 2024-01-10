import React from 'react';
import Auth from '~/components/Auth';
import { Box } from '@mui/material';
import { useCallback, useState } from 'react';

import userApi from '~/api/module/user.api';
import { useNavigate } from 'react-router-dom';
import config from '~/config';
import FormEmail from './FormEmail';
import FormPassword from './FormPassword';
import FormOTP from './FormOTP';
const ForgotPassword = () => {
    const [errorMessage, setErrorMessage] = useState();
    const [openEmail, setOpenEmail] = useState(true);
    const [openOtp, setOpenOtp] = useState(false);
    const [openPass, setOpenPass] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formValue, setFormValue] = useState({
        email: null,
        newPassword: null,
    });
    const location = useNavigate();
    const { email, newPassword } = formValue;
    const handleSubmitEmail = useCallback(async (email, actions) => {
        setIsLoading(true);
        const { response, err } = await userApi.checkEmail({ email });
        if (response) {
            // setOpenPass(true);
            setOpenEmail(false);
            setIsLoading(false);
            setFormValue({
                email,
            });
        }
        if (err) {
            setIsLoading(false);
            if (err.statusCode === 404) {
                actions.setErrors({ email: 'Không tìm thấy Email này' });
            }
        }
    }, []);

    const handleSubmitPass = useCallback(
        async ({ newPassword }) => {
            setIsLoading(true);
            const { response } = await userApi.sendEmail({ email });
            setIsLoading(false);
            if (response) {
                setErrorMessage(false);
                setOpenPass(false);
                setFormValue((prev) => ({ newPassword, ...prev }));
            }
        },
        [email],
    );

    const handleSubmitOTP = useCallback(
        async (otp, actions) => {
            setIsLoading(true);
            const { response, err } = await userApi.forgotPassword({ email, otp, newPassword });
            setIsLoading(false);
            if (response) {
                location(config.routes.login);
            }
            if (err) {
                if (err.statusCode === 401) {
                    actions.setErrors({ otp: 'Mã OTP không hợp lệ' });
                }
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [email, newPassword],
    );

    const handleReSendOTP = useCallback(
        async (setCountdown) => {
            setIsLoading(true);
            const { response } = await userApi.sendEmail({ email });
            setIsLoading(false);
            if (response) {
                setCountdown(120);
            }
        },
        [email],
    );
    return (
        <Auth titleAuth={'Khôi phục mật khẩu'} isLoading={isLoading}>
            <Box sx={{ position: 'relative' }}>
                <FormEmail
                    openEmail={openEmail}
                    setOpenEmail={setOpenEmail}
                    setOpenOtp={setOpenOtp}
                    errorMessage={errorMessage}
                    setOpenPass={setOpenPass}
                    onSubmitEmail={handleSubmitEmail}
                />
                <FormPassword
                    openPass={openPass}
                    onSubmitPass={handleSubmitPass}
                    setOpenOtp={setOpenOtp}
                    openOtp={openOtp}
                />
                <FormOTP
                    openOtp={openOtp}
                    setErrorMessage={setErrorMessage}
                    setOpenPass={setOpenPass}
                    setOpenOtp={setOpenOtp}
                    errorMessage={errorMessage}
                    openEmail={openEmail}
                    onSubmitOTP={handleSubmitOTP}
                    onReSendOTP={handleReSendOTP}
                />
            </Box>
        </Auth>
    );
};

export default ForgotPassword;
