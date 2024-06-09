import { Box, Button, Fade, IconButton, Modal, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '~/components/Avatar';
import { CloseIcon, PhotoIcon } from '~/components/Icon';
import uiConfigs from '~/config/ui.config';
import { userValue } from '~/redux/selectors';
import userApi from '~/api/module/user.api';
import { updateUser } from '~/redux/features/userSlice';
import { toast } from 'react-toastify';
import imageCompression from 'browser-image-compression';
import { useRef } from 'react';
function ModalAvatarEdit({ open, handleClose }) {
    let btnUpdateRef = useRef();
    let btnRemoveRef = useRef();
    const user = useSelector(userValue);
    const [avatar, setAvatar] = useState();
    const [imageUpload, setImageUpload] = useState();
    const [disabled, setDisabled] = useState();
    const dispatch = useDispatch();
    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar]);
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];
        const imageFile = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
        setImageUpload(imageFile);
        e.target.value = null;
    };
    const options = {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
    };
    const handleUploadAvatar = async () => {
        if (imageUpload) {
            if (btnUpdateRef.current) {
                btnUpdateRef.current.setAttribute('disabled', 'disabled');
            }
            if (btnRemoveRef.current) {
                btnRemoveRef.current.setAttribute('disabled', 'disabled');
            }
            setDisabled(true);
            const id = toast.loading('Đang tải ảnh đại diện');
            const compressedFile = await imageCompression(imageUpload, options);
            const formDate = new FormData();
            if (user.avatar) {
                formDate.append('avatar', user.avatar);
            }
            formDate.append('imageAvatar', compressedFile);
            const { response, err } = await userApi.profileUpdate(formDate);

            if (response) {
                dispatch(updateUser(response));
                toast.update(id, {
                    render: 'Cập nhật ảnh đại diện thành công',
                    type: 'success',
                    isLoading: false,
                    autoClose: 3000,
                });
                setDisabled(false);
                setAvatar(null);
                setImageUpload(null);
                if (btnUpdateRef.current) {
                    btnUpdateRef.current.removeAttribute('disabled');
                }
                if (btnRemoveRef.current) {
                    btnRemoveRef.current.removeAttribute('disabled');
                }
            }
            if (err) {
                toast.update(id, {
                    render: err.data.message,
                    type: 'error',
                    isLoading: false,
                    autoClose: 3000,
                });
                setDisabled(false);
                setAvatar(null);
                setImageUpload(null);
                if (btnUpdateRef.current) {
                    btnUpdateRef.current.removeAttribute('disabled');
                }
                if (btnRemoveRef.current) {
                    btnRemoveRef.current.removeAttribute('disabled');
                }
            }
        }
    };

    const handleDeleteAvatar = async () => {
        if (user.avatar) {
            if (btnUpdateRef.current) {
                btnUpdateRef.current.setAttribute('disabled', 'disabled');
            }
            if (btnRemoveRef.current) {
                btnRemoveRef.current.setAttribute('disabled', 'disabled');
            }
            const id = toast.loading('Đang xóa ảnh đại diện');
            setDisabled(true);
            const { response, err } = await userApi.profileUpdate({ avatar: user.avatar });
            if (response) {
                dispatch(updateUser(response));
                toast.update(id, {
                    render: 'Xóa ảnh đại diện thành công',
                    type: 'success',
                    isLoading: false,
                    autoClose: 3000,
                });
                setDisabled(false);
                if (btnUpdateRef.current) {
                    btnUpdateRef.current.removeAttribute('disabled');
                }
                if (btnRemoveRef.current) {
                    btnRemoveRef.current.removeAttribute('disabled');
                }
            }
            if (err) {
                toast.update(id, {
                    render: err.data,
                    type: 'error',
                    isLoading: false,
                    autoClose: 3000,
                });
                setDisabled(false);
                if (btnUpdateRef.current) {
                    btnUpdateRef.current.removeAttribute('disabled');
                }
                if (btnRemoveRef.current) {
                    btnRemoveRef.current.removeAttribute('disabled');
                }
            }
        }
    };
    return (
        <>
            <Modal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                {/* container */}
                <Fade in={open} timeout={300}>
                    <Box
                        sx={{
                            ...uiConfigs.style.centerAlight,
                            width: { xs: '100%', sm: '400px' },
                            height: { xs: '100%', sm: 'auto' },
                            backgroundColor: '#121212',
                            p: 2,
                            display: 'flex',
                            // justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            borderRadius: 2,
                            gap: 3,
                            border: { xs: 'none', sm: '1px solid hsla(0,0%,100%,.1)' },
                            overflowY: 'auto',
                        }}
                    >
                        {/* title */}
                        <Stack
                            width={'100%'}
                            position={'relative'}
                            flexDirection={'row'}
                            justifyContent={'flex-end'}
                            alignItems={'center'}
                        >
                            <Typography
                                variant="h5"
                                fontWeight={500}
                                textAlign={'center'}
                                left={0}
                                right={0}
                                component={'h2'}
                                // sx={{ fontSize: { sm: '1.5rem' } }}
                                position={'absolute'}
                                px={'40px'}
                            >
                                Thay đổi ảnh đại diện
                            </Typography>
                            <IconButton color="neutral" onClick={() => handleClose()} disabled={disabled}>
                                <CloseIcon />
                            </IconButton>
                        </Stack>
                        {/* title */}
                        <Typography variant="subtitle1" component={'h3'} textAlign={'center'}>
                            Chọn vào ảnh đại diện để thay đổi
                        </Typography>
                        {/* Avatar */}
                        <label htmlFor="avatar">
                            <Box
                                sx={{
                                    width: { xs: '250px', sm: '200px' },
                                    height: { xs: '250px', sm: '200px' },
                                    position: 'relative',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        '.MuiBox-root': {
                                            opacity: 1,
                                        },
                                    },
                                }}
                            >
                                <input
                                    id="avatar"
                                    style={{
                                        display: 'none',
                                    }}
                                    type="file"
                                    accept="image/*"
                                    onChange={handlePreviewAvatar}
                                    multiple
                                />
                                <Avatar src={avatar && avatar.preview} alt={null} />
                                <Box
                                    sx={{
                                        borderRadius: '1000px',
                                        bgcolor: 'rgba(0, 0, 0, 0.5)',
                                        position: 'absolute',
                                        opacity: 0,
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        transition: 'opacity 0.4s ease 0s',
                                    }}
                                >
                                    <Box sx={{ svg: { width: '50px', height: '50px' } }}>
                                        <PhotoIcon />
                                    </Box>
                                </Box>
                            </Box>
                        </label>
                        {/* Avatar */}

                        {/* Button */}
                        <Stack flexDirection={'row'} gap={2}>
                            <Button
                                ref={btnUpdateRef}
                                variant="contained"
                                color="secondary"
                                onClick={handleUploadAvatar}
                            >
                                Cập nhật
                            </Button>
                            <Button
                                ref={btnRemoveRef}
                                variant="contained"
                                color="secondary"
                                onClick={handleDeleteAvatar}
                            >
                                Xóa
                            </Button>
                        </Stack>
                        {/* Button */}
                    </Box>
                </Fade>
                {/* container */}
            </Modal>
        </>
    );
}

export default ModalAvatarEdit;
