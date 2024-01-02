import React, { memo } from 'react';
import { Box, Button, Stack, useMediaQuery } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ErrorMessageForm from '~/components/ErrorMessageForm';
import { EmailIcon } from '~/components/Icon';
import Input from '~/components/Input';
import uiConfigs from '~/config/ui.config';

const FormEmail = ({ openEmail, errorMessage, setOpenOtp, setOpenEmail, onSubmitEmail }) => {
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            // email: Yup.string().email('Định dạng email không đúng').required('Vui lòng nhập email'),
        }),
        onSubmit: async (values) => {
            onSubmitEmail(values.email)
        },
    });
    return (
        <Box
            component={'form'}
            onSubmit={formik.handleSubmit}
            sx={{
                transform: openEmail ? 'translateX(0)' : 'translateX(200%)',
                ...uiConfigs.style.positionFullSize,
                position: openEmail ? 'relative' : 'absolute',
                transition: 'all 1s ease 0s',
            }}
        >
            {errorMessage && <ErrorMessageForm>{errorMessage}</ErrorMessageForm>}
            <Stack spacing={2} mt={2} alignItems={'flex-end'}>
                <Input
                    type="text"
                    name="email"
                    placeholder={'Nhập Email'}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.errors.email !== undefined && formik.touched.email}
                    helperText={formik.touched.email && formik.errors.email}
                    leftIcon={<EmailIcon />}
                ></Input>
                {/* button */}
                <Button
                    variant="contained"
                    size={pointDownSm ? 'small' : 'medium'}
                    type="submit"
                >
                    Tiếp theo
                </Button>
            </Stack>
            {/* button */}
        </Box>
    );
};

export default memo(FormEmail);
