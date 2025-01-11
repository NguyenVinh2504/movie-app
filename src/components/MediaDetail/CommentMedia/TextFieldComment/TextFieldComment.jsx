import {
    Box,
    Button,
    IconButton,
    Menu,
    Stack,
    styled,
    useMediaQuery,
} from '@mui/material';
import { useFormik } from 'formik';
import { useCallback, useState } from 'react';
import TextFieldInput from '~/components/TextFieldInput';
import * as Yup from 'yup';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { SmileIcon } from '~/components/Icon';
import AvatarUser from '~/components/Avatar/AvatarUser';
import { userValue } from '~/redux/selectors';
import { useSelector } from 'react-redux';

function TextFieldComment({ onSubmit }) {
    // const [isShowBtn, setIsShowBtn] = useState(false);
    const [isShowEmoji, setIsShowEmoji] = useState(null);
    const open = Boolean(isShowEmoji);
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const pointDownMd = useMediaQuery((theme) => theme.breakpoints.down('md'));
    const { avatar, temporaryAvatar } = useSelector(userValue) || {};

    const CustomButton = styled((props) => (
        <Button
            variant="contained"
            size={pointDownSm ? 'small' : 'medium'}
            {...props}
        />
    ))(() => ({}));

    const formik = useFormik({
        initialValues: {
            comment: '',
        },
        validationSchema: Yup.object({
            comment: Yup.string()
                .required('Không được để trống')
                .test(
                    'maxLength',
                    // eslint-disable-next-line no-template-curly-in-string
                    'độ dài của ${path} phải nhỏ hơn hoặc bằng 400 kí tự',
                    (value) => Array.from(value).length <= 400,
                ),
        }),
        onSubmit: async (values) => {
            // setIsShowBtn(false);
            onSubmit(values);
            formik.resetForm();
        },
    });
    // const handleFocus = useCallback(() => {
    //     setIsShowBtn(true);
    // }, []);
    const handleCancel = () => {
        // setIsShowBtn(false);
        formik.resetForm();
    };

    const handleOpenEmoji = (e) => {
        setIsShowEmoji(e.currentTarget);
    };
    const handleCloseEmoji = () => {
        setIsShowEmoji(null);
    };

    const handleChange = useCallback(
        (e) => {
            const inputValue = e.target.value;
            const chars = Array.from(inputValue);
            if (chars.length > 400) {
                // Cắt chuỗi để chỉ lấy 400 ký tự đầu tiên
                const truncatedValue = chars.slice(0, 400).join('');
                formik.setFieldValue('comment', truncatedValue);
            } else {
                formik.handleChange(e);
            }
        },
        [formik],
    );

    const setCurrentEmoji = (emoji) => {
        if (Array.from(formik.values.comment).length < 400) {
            formik.setFieldValue(
                'comment',
                formik.values.comment + emoji.native,
            );
        }
    };
    return (
        <Box component={'form'} onSubmit={formik.handleSubmit}>
            <Stack direction={'row'} spacing={2} alignItems={'flex-start'}>
                <AvatarUser
                    src={avatar || temporaryAvatar}
                    sx={{
                        width: { xs: '40px', sm: '45px' },
                        height: { xs: '40px', sm: '45px' },
                    }}
                />
                <Box sx={{ flex: 1 }}>
                    <TextFieldInput
                        name="comment"
                        // onFocus={handleFocus}
                        value={formik.values.comment}
                        onChange={handleChange}
                    />
                    {/* {isShowBtn && ( */}
                    <Stack
                        direction={'row'}
                        mt={2}
                        alignItems={'flex-start'}
                        justifyContent={
                            pointDownMd ? 'flex-end' : 'space-between'
                        }
                    >
                        {/* emoji */}
                        {pointDownMd ? null : (
                            <>
                                <IconButton
                                    id="emoji-btn"
                                    onClick={handleOpenEmoji}
                                    aria-controls={
                                        open ? 'emoji-menu' : undefined
                                    }
                                    sx={{
                                        p: '0',
                                    }}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <SmileIcon />
                                </IconButton>
                                <Menu
                                    id="emoji-menu"
                                    anchorEl={isShowEmoji}
                                    open={open}
                                    onClose={handleCloseEmoji}
                                    MenuListProps={{
                                        'aria-labelledby': 'emoji-btn',
                                    }}
                                    sx={{
                                        mt: 1,
                                        '& .MuiList-root': {
                                            padding: 0,
                                        },
                                    }}
                                >
                                    <Picker
                                        data={data}
                                        onEmojiSelect={setCurrentEmoji}
                                        previewPosition="none"
                                        theme="dark"
                                    />
                                </Menu>
                            </>
                        )}
                        {/* <Stack
                                direction={'row'}
                                alignItems={'center'}
                                justifyContent={
                                    pointDownMd ? 'flex-end' : 'space-between'
                                }
                            >
                                length
                                <Typography
                                    variant="subtitle2"
                                    component={'p'}
                                    textAlign={'right'}
                                >
                                    {formik.values.comment.length}
                                    <Typography
                                        component={'span'}
                                        sx={{ color: '#ffffff61' }}
                                        variant="subtitle2"
                                    >
                                        /400
                                    </Typography>
                                </Typography>
                            </Stack> */}
                        {/* Button Action */}
                        <Stack direction={'row'} justifyContent={'flex-end'}>
                            <Button
                                variant="contained"
                                color="secondary"
                                size={pointDownSm ? 'small' : 'medium'}
                                onClick={handleCancel}
                            >
                                Hủy
                            </Button>
                            <CustomButton
                                sx={{ ml: 2 }}
                                type="submit"
                                disabled={
                                    !formik.values.comment || !formik.isValid
                                }
                            >
                                Bình luận
                            </CustomButton>
                        </Stack>
                    </Stack>
                    {/* )} */}
                </Box>
            </Stack>
        </Box>
    );
}

export default TextFieldComment;
