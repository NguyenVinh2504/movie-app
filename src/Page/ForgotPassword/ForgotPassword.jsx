import React, { useRef } from 'react';
import Auth from '~/components/Auth';
import { Box } from '@mui/material';
import { useCallback, useState } from 'react';

import userApi from '~/api/module/user.api';
import { useNavigate } from 'react-router-dom';
import config from '~/config';
import FormEmail from './FormEmail';
import FormPassword from './FormPassword';
import FormOTP from './FormOTP';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
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

    const SlideRef = useRef();
    // useEffect(() => {
    //     if (SlideRef.current) {
    //         SlideRef.current.children[0].style.height = 'auto';
    //         console.log(SlideRef.current.children[0]);
    //     }
    // });
    const location = useNavigate();
    const { email, newPassword } = formValue;
    const nextPage = () => {
        SlideRef.current.swiper.slideNext();
    };
    const handleSubmitEmail = useCallback(async (email, actions) => {
        setIsLoading(true);
        const { response, err } = await userApi.checkEmail({ email });
        if (response) {
            setOpenPass(true);
            nextPage();
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
                nextPage();
                setErrorMessage(false);
                setOpenPass(false);
                setOpenOtp(true);
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
            <Box>
                <Swiper
                    pagination={true}
                    className="mySwiper"
                    spaceBetween={524}
                    ref={SlideRef}
                    speed={2000}
                    simulateTouch={false}
                    allowTouchMove={false}
                >
                    <SwiperSlide>
                        <FormEmail
                            openEmail={openEmail}
                            setOpenEmail={setOpenEmail}
                            setOpenOtp={setOpenOtp}
                            errorMessage={errorMessage}
                            setOpenPass={setOpenPass}
                            onSubmitEmail={handleSubmitEmail}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FormPassword
                            openPass={openPass}
                            openEmail={openEmail}
                            onSubmitPass={handleSubmitPass}
                            setOpenOtp={setOpenOtp}
                            openOtp={openOtp}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
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
                    </SwiperSlide>
                </Swiper>
            </Box>
        </Auth>
    );
};

export default ForgotPassword;
