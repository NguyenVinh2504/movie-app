import React, { memo } from 'react';
import { Box, Button, Stack, useMediaQuery } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { EmailIcon } from '~/components/Icon';
import Input from '~/components/Input';
// import style from './FormEmail.module.css';
// import classNames from 'classnames/bind';

// const cx = classNames.bind(style);

const FormEmail = ({ onSubmitEmail }) => {
    // const transformOut = keyframes`${uiConfigs.style.transformOut}`;
    // const [shouldRender, setRender] = useState(true);
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Định dạng email không đúng').required('Vui lòng nhập email'),
        }),
        onSubmit: async (values, actions) => {
            onSubmitEmail(values.email, actions);
        },
    });

    // const handleOnTransitionEnd = () => {
    //     console.log('mat email');
    //     // if (!openEmail) {
    //     //     console.log('mat email 1');
    //     //     setRender(false);
    //     // }
    // };
    // useEffect(() => {
    //     if (!shouldRender) {
    //         setOpenPass(true);
    //         console.log('tắt');
    //     }
    // }, [setOpenPass, shouldRender]);
    // useEffect(() => {
    //     let timer;
    //     if (!openEmail) {
    //         timer = setTimeout(() => {
    //             setRender(false);
    //         }, [1000]);
    //     }
    //     return () => clearTimeout(timer);
    // }, [openEmail, setOpenPass]);
    // console.log(openEmail);
    return (
        // shouldRender && (
        // <div
        //     className={cx('normal', {
        //         submit: !openEmail,
        //     })}
        // >
        <Box
            component={'form'}
            onSubmit={formik.handleSubmit}
            sx={{
                height: '100%',
                // // position: openEmail ? 'relative' : 'absolute',
                // transition: 'all 1s ease 0s',
                // display: openEmail ? 'block' : 'none',
                // animation: `${!openEmail && transformOut} 1.5s`,
            }}
        >
            <Stack spacing={0} mt={2} alignItems={'flex-end'}>
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
                <Button variant="contained" size={pointDownSm ? 'small' : 'medium'} type="submit">
                    Tiếp theo
                </Button>
            </Stack>
            {/* button */}
        </Box>
        // </div>
        // )
    );
};

export default memo(FormEmail);
