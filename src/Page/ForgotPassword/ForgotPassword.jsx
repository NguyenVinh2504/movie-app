import React from 'react';
import Auth from '~/components/Auth';
import FormForgotPassword from './FormForgotPassword';

const ForgotPassword = () => {
    return <Auth titleAuth={'Khôi phục mật khẩu'}>{<FormForgotPassword />}</Auth>;
};

export default ForgotPassword;
