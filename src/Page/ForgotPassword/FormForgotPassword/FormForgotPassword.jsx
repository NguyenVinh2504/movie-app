import { Box } from '@mui/material';
import { useCallback, useState } from 'react';
import FormEmail from './FormEmail';
import FormOTP from './FormOTP';
import FormPassword from './FormPassword';
import userApi from '~/api/module/user.api';
import { useNavigate } from 'react-router-dom';
import config from '~/config';

function FormForgotPassword() {
    const [errorMessage, setErrorMessage] = useState();
    const [openEmail, setOpenEmail] = useState(true);
    const [openOtp, setOpenOtp] = useState(false);
    const [openPass, setOpenPass] = useState(false);
    const [formValue, setFormValue] = useState({
        email: null,
        newPassword: null,
    });
    const location = useNavigate();
    const { email, newPassword } = formValue;
    const handleSubmitEmail = useCallback(async (email) => {
        const { response, err } = await userApi.checkEmail({ email });
        if (response) {
            setErrorMessage(false);
            setOpenPass(true);
            setOpenEmail(false);
            setFormValue({
                email,
            });
        }
        if (err) {
            if (err.statusCode === 404) {
                setErrorMessage('Không tìm thấy Email này');
            }
        }
    }, []);

    const handleSubmitPass = useCallback(
        async ({ newPassword }) => {
            const { response } = await userApi.sendEmail({ email });
            if (response) {
                setErrorMessage(false);
                setOpenPass(false);
                setOpenOtp(true);
                setFormValue((prev) => ({ newPassword, ...prev }));
            }
        },
        [email],
    );

    const handleSubmitOTP = useCallback(
        async (otp) => {
            const { response, err } = await userApi.forgotPassword({ email, otp, newPassword });
            if (response) {
                setErrorMessage(false);
                location(config.routes.login);
            }
            if (err) {
                if (err.statusCode === 401) {
                    setErrorMessage('Mã OTP không hợp lệ');
                }
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [email, newPassword],
    );

    const handleReSendOTP = useCallback(
        async (setCountdown) => {
            setErrorMessage(false);
            const { response } = await userApi.sendEmail({ email });
            if (response) {
                setErrorMessage(false);
                setCountdown(120);
            }
        },
        [email],
    );
    return (
        <Box sx={{ position: 'relative' }}>
            <FormEmail
                openEmail={openEmail}
                setOpenEmail={setOpenEmail}
                setOpenOtp={setOpenOtp}
                errorMessage={errorMessage}
                onSubmitEmail={handleSubmitEmail}
            />
            <FormPassword openPass={openPass} onSubmitPass={handleSubmitPass} openOtp={openOtp} />
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
    );
}

export default FormForgotPassword;
