import {
    Box,
    Button,
    Fade,
    Grid,
    IconButton,
    List,
    ListItemButton,
    ListItemText,
    Modal,
    Paper,
    Stack,
    Typography,
} from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '~/components/Avatar';
import {
    ArrowDownIcon,
    ArrowHorizontalIcon,
    ArrowVerticalIcon,
    CloseIcon,
    PhotoIcon,
    RefreshIcon,
    RotateIcon,
} from '~/components/Icon';
import { userValue } from '~/redux/selectors';
import userApi from '~/api/module/user.api';
import { updateUser } from '~/redux/features/userSlice';
import { toast } from 'react-toastify';
import imageCompression from 'browser-image-compression';
import { useRef } from 'react';
import { singleFileValidator } from '~/utils/validators';
// import './style.css';
import { CSSTransition } from 'react-transition-group';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { debounce } from 'lodash';
function ModalContainer({ children, isEditing, menuSize, setMenuSize }) {
    const containerRef = useRef(null);
    useEffect(() => {
        if (
            containerRef.current instanceof HTMLElement &&
            containerRef.current.firstElementChild
        ) {
            const height = containerRef.current.firstElementChild.offsetHeight;
            const width = containerRef.current.firstElementChild.offsetWidth;
            // console.log(height, width);

            setMenuSize({
                height,
                width,
            });
        }
    }, [setMenuSize]);

    const getDimensionValue = (size, defaultValue = 'auto') => {
        return typeof size === 'number' && !Number.isNaN(size)
            ? `${size}px`
            : defaultValue;
    };
    const widthContainer = getDimensionValue(menuSize?.width);
    const heightContainer = getDimensionValue(menuSize?.height);
    // useEffect(() => {
    //     console.log('container', [
    //         'widthContainer',
    //         widthContainer,
    //         'heightContainer',
    //         heightContainer,
    //         'menuSize',
    //         menuSize,
    //     ]);
    // });

    return (
        <Box
            ref={containerRef}
            sx={{
                position: 'relative',
                backgroundColor: '#121212',
                borderRadius: 2,
                border: {
                    xs: 'none',
                    sm: '1px solid hsla(0,0%,100%,.1)',
                },
                overflow: 'hidden',
                transition: 'all 0.5s ease-in-out',
                width: {
                    xs: '100%',
                    sm: widthContainer,
                },
                height: {
                    xs: '100%',
                    sm: heightContainer,
                },
            }}
        >
            {children}
        </Box>
    );
}
// Cấu hình nén ảnh
const IMAGE_COMPRESSION_OPTIONS = {
    maxSizeMB: 0.05,
    maxWidthOrHeight: 300,
    useWebWorker: true,
};
function ModalAvatarEdit({ open, handleClose }) {
    const dispatch = useDispatch();
    const user = useSelector(userValue);

    const [previewAvatar, setPreviewAvatar] = useState(null);
    const [avatarFile, setAvatarFile] = useState(null);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [menuSize, setMenuSize] = useState(null);

    const cropperRef = useRef(null);
    const previewElementRef = useRef(null);
    const editElementRef = useRef(null);

    useEffect(() => {
        return () => {
            previewAvatar && URL.revokeObjectURL(previewAvatar.preview);
        };
    }, [previewAvatar]);
    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];

        file.preview = URL.createObjectURL(file);
        const error = singleFileValidator(file);
        if (error) {
            toast.error(error);
            return;
        }
        setPreviewAvatar(file);
        setAvatarFile(file);
        e.target.value = null;
        setIsEditing(true);
    };

    const handleFlipHorizontal = () => {
        if (cropperRef.current) {
            const cropper = cropperRef.current.cropper;
            cropper.scaleX(cropper.getData().scaleX === 1 ? -1 : 1);
        }
    };

    const handleFlipVertical = () => {
        if (cropperRef.current) {
            const cropper = cropperRef.current.cropper;
            cropper.scaleY(cropper.getData().scaleY === 1 ? -1 : 1);
        }
    };

    const handleRotate = () => {
        if (cropperRef.current) {
            const cropper = cropperRef.current.cropper;
            cropper.rotate(90);
        }
    };

    const handleReset = () => {
        if (cropperRef.current) {
            const cropper = cropperRef.current.cropper;
            cropper.reset();
        }
    };
    const resetAvatarState = useCallback(() => {
        setIsDisabled(false);
        setPreviewAvatar(null);
        setAvatarFile(null);
        handleClose();
    }, [handleClose]);

    const getCropData = () => {
        if (typeof cropperRef.current.cropper === 'undefined') {
            return;
        }
        cropperRef.current?.cropper.getCroppedCanvas().toBlob((blob) => {
            const file = blob;
            file.preview = URL.createObjectURL(blob);
            setAvatarFile(file);
            setPreviewAvatar(file);
            setIsEditing(false);
        });
    };

    const handleUploadAvatar = useCallback(async () => {
        if (!avatarFile) {
            toast.error('Vui lòng chọn ảnh');
            return;
        }
        setIsDisabled(true);
        const toastId = toast.loading('Đang tải ảnh đại diện');
        try {
            const compressedFile = await imageCompression(
                avatarFile,
                IMAGE_COMPRESSION_OPTIONS,
            );
            const formDate = new FormData();
            if (user.avatar) {
                formDate.append('avatar', user.avatar);
            }
            formDate.append('imageAvatar', compressedFile);
            const { response, err } = await userApi.profileUpdate(formDate);

            if (response) {
                dispatch(updateUser(response));
                toast.update(toastId, {
                    render: 'Cập nhật ảnh đại diện thành công',
                    type: 'success',
                    isLoading: false,
                    autoClose: 3000,
                });
                resetAvatarState();
            }
            if (err) {
                toast.update(toastId, {
                    render:
                        err?.data?.message ??
                        'Cập nhật ảnh đại diện không thành công',
                    type: 'error',
                    isLoading: false,
                    autoClose: 3000,
                });
                resetAvatarState();
            }
        } catch (error) {
            toast.update(toastId, {
                render: 'Lỗi khi tải ảnh',
                type: 'error',
                isLoading: false,
                autoClose: 3000,
            });
        }
    }, [avatarFile, dispatch, resetAvatarState, user.avatar]);

    const handleDeleteAvatar = useCallback(async () => {
        if (!user.avatar) return;

        setIsDisabled(true);
        const toastId = toast.loading('Đang xóa ảnh đại diện');

        try {
            const { response, err } = await userApi.profileUpdate({
                avatar: user.avatar,
            });
            if (response) {
                dispatch(updateUser(response));
                toast.update(toastId, {
                    render: 'Xóa ảnh đại diện thành công',
                    type: 'success',
                    isLoading: false,
                    autoClose: 3000,
                });
                setIsDisabled(false);
            }
            if (err) {
                toast.update(toastId, {
                    render: err?.data,
                    type: 'error',
                    isLoading: false,
                    autoClose: 3000,
                });
                setIsDisabled(false);
            }
        } catch (error) {
            toast.update(toastId, {
                render: 'Lỗi khi xóa ảnh',
                type: 'error',
                isLoading: false,
                autoClose: 3000,
            });
        }
    }, [dispatch, user.avatar]);

    const calcHeight = (element) => {
        if (element instanceof HTMLElement) {
            const height = element.offsetHeight;
            const width = element.offsetWidth;
            setMenuSize({
                height,
                width,
            });
        }
    };
    // useEffect(() => {
    //     calcHeight();
    // }, []);
    const calcHeightWhenResize = debounce(() => {
        calcHeight(
            isEditing ? editElementRef.current : previewElementRef.current,
        );
    }, 500);
    useEffect(() => {
        window.addEventListener('resize', calcHeightWhenResize);
        return () => {
            window.removeEventListener('resize', calcHeightWhenResize);
        };
    }, [calcHeightWhenResize, isEditing]);
    // useEffect(() => {
    //     console.log([
    //         'previewAvatar',
    //         previewAvatar,
    //         'avatarFile',
    //         avatarFile,
    //         'isDisabled',
    //         isDisabled,
    //         'isEditing',
    //         isEditing,
    //         'menuSize',
    //         menuSize,
    //     ]);
    // });
    return (
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            {/* container */}
            <Fade in={open} timeout={300}>
                <Box
                    sx={{
                        width: '100vw',
                        height: '100dvh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden',
                    }}
                >
                    <ModalContainer
                        isEditing={isEditing}
                        menuSize={menuSize}
                        setMenuSize={setMenuSize}
                    >
                        <CSSTransition
                            nodeRef={previewElementRef}
                            in={!isEditing}
                            timeout={500}
                            unmountOnExit
                            onEnter={() =>
                                calcHeight(previewElementRef.current)
                            }
                            classNames="modal-chose-avatar"
                        >
                            <Box
                                ref={previewElementRef}
                                sx={{
                                    p: 2,
                                    display: 'flex',
                                    // justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    gap: 3,
                                    height: {
                                        xs: '100%',
                                        sm: 'auto',
                                    },
                                    maxHeight: {
                                        xs: 'initial',
                                        sm: 'calc(100dvh - 20px)',
                                    },
                                    width: {
                                        xs: '100%',
                                        sm: '400px',
                                        overflowY: 'auto',
                                    },
                                    overflowY: 'auto',

                                    '&.modal-chose-avatar-enter': {
                                        transform: 'translateX(-100%)',
                                    },
                                    '&.modal-chose-avatar-enter-active': {
                                        position: 'absolute',
                                        transform: 'translateX(0)',
                                        transition:
                                            'transform 500ms ease-in-out',
                                    },
                                    '&.modal-chose-avatar-exit': {
                                        transform: 'translateX(0)',
                                    },
                                    '&.modal-chose-avatar-exit-active': {
                                        position: 'absolute',
                                        transform: 'translateX(-100%)',
                                        transition:
                                            'transform 500ms ease-in-out',
                                    },
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
                                    <IconButton
                                        color="neutral"
                                        onClick={() => handleClose()}
                                        disabled={isDisabled}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                </Stack>
                                {/* title */}
                                <Typography
                                    variant="subtitle1"
                                    component={'h3'}
                                    textAlign={'center'}
                                >
                                    Chọn vào ảnh đại diện để thay đổi
                                </Typography>
                                {/* Avatar */}
                                <label htmlFor="avatar">
                                    <Box
                                        sx={{
                                            width: {
                                                xs: '250px',
                                                sm: '200px',
                                            },
                                            height: {
                                                xs: '250px',
                                                sm: '200px',
                                            },
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
                                        />
                                        <Avatar
                                            src={
                                                previewAvatar &&
                                                previewAvatar.preview
                                            }
                                            alt={null}
                                        />
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
                                                transition:
                                                    'opacity 0.4s ease 0s',
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    svg: {
                                                        width: '50px',
                                                        height: '50px',
                                                    },
                                                }}
                                            >
                                                <PhotoIcon />
                                            </Box>
                                        </Box>
                                    </Box>
                                </label>
                                {/* Avatar */}

                                {/* Button */}
                                <Stack flexDirection={'row'} gap={2}>
                                    {/* <Button
                                                    ref={btnUpdateRef}
                                                    variant="contained"
                                                    color="secondary"
                                                    onClick={handleUploadAvatar}
                                                >
                                                    Cập nhật
                                                </Button> */}
                                    <Button
                                        disabled={isDisabled}
                                        variant="contained"
                                        color="secondary"
                                        onClick={handleUploadAvatar}
                                    >
                                        Cập nhât
                                    </Button>
                                    <Button
                                        disabled={isDisabled}
                                        variant="contained"
                                        color="secondary"
                                        onClick={handleDeleteAvatar}
                                    >
                                        Xóa
                                    </Button>
                                </Stack>
                                {/* Button */}
                            </Box>
                        </CSSTransition>

                        <CSSTransition
                            in={isEditing}
                            nodeRef={editElementRef}
                            timeout={500}
                            classNames="modal-edit-avatar"
                            unmountOnExit
                            onEnter={() => calcHeight(editElementRef.current)}
                        >
                            <Box
                                sx={{
                                    p: 2,
                                    height: {
                                        xs: '100%',
                                        sm: 'auto',
                                    },
                                    maxHeight: {
                                        xs: 'initial',
                                        sm: 'calc(100dvh - 20px)',
                                    },
                                    overflowY: 'auto',
                                    width: {
                                        xs: '100%',
                                        sm: '580px',
                                        md: '800px',
                                        lg: '1000px',
                                        xl: '1200px',
                                    },
                                    '&.modal-edit-avatar-enter': {
                                        transform: 'translateX(100%)',
                                    },
                                    '&.modal-edit-avatar-enter-active': {
                                        transform: 'translateX(0)',
                                        transition:
                                            'transform 500ms ease-in-out',
                                    },
                                    '&.modal-edit-avatar-exit': {
                                        transform: 'translateX(0)',
                                    },
                                    '&.modal-edit-avatar-exit-active': {
                                        transform: 'translateX(100%)',
                                        transition:
                                            'transform 500ms ease-in-out',
                                    },
                                }}
                                ref={editElementRef}
                            >
                                <Stack
                                    direction={'row'}
                                    sx={{
                                        '& svg': {
                                            rotate: '90deg',
                                        },
                                    }}
                                    alignItems={'center'}
                                    gap={1}
                                    mb={2}
                                >
                                    <IconButton
                                        onClick={() => {
                                            setIsEditing(false);
                                            setPreviewAvatar(null);
                                            setAvatarFile(null);
                                        }}
                                    >
                                        <ArrowDownIcon />
                                    </IconButton>
                                    <Typography variant="h5" fontWeight={500}>
                                        Chỉnh sửa ảnh đại diện
                                    </Typography>
                                </Stack>
                                <Grid
                                    container
                                    spacing={{ xs: 1, sm: 1.5 }}
                                    sx={{
                                        flexWrap: 'wrap-reverse',
                                    }}
                                >
                                    <Grid item xs={12} md={4} lg={3}>
                                        <Paper variant="outlined" sx={{ p: 2 }}>
                                            <List
                                                component="nav"
                                                aria-label="main mailbox folders"
                                                sx={{ py: 0 }}
                                            >
                                                <ListItemButton
                                                    onClick={handleReset}
                                                    sx={{
                                                        gap: 2,
                                                    }}
                                                >
                                                    <RefreshIcon />
                                                    <ListItemText
                                                        primary={'Đặt lại'}
                                                    />
                                                </ListItemButton>
                                                <ListItemButton
                                                    sx={{
                                                        gap: 2,
                                                    }}
                                                    onClick={handleRotate}
                                                >
                                                    <RotateIcon />
                                                    <ListItemText
                                                        primary={'Xoay'}
                                                    />
                                                </ListItemButton>
                                                <ListItemButton
                                                    sx={{
                                                        gap: 2,
                                                    }}
                                                    onClick={
                                                        handleFlipHorizontal
                                                    }
                                                >
                                                    <ArrowHorizontalIcon />
                                                    <ListItemText
                                                        primary={'Lật ngang'}
                                                    />
                                                </ListItemButton>
                                                <ListItemButton
                                                    sx={{
                                                        gap: 2,
                                                    }}
                                                    onClick={handleFlipVertical}
                                                >
                                                    <ArrowVerticalIcon />
                                                    <ListItemText
                                                        primary={'Lật dọc'}
                                                    />
                                                </ListItemButton>
                                            </List>
                                            <Button
                                                disabled={isDisabled}
                                                variant="contained"
                                                color="secondary"
                                                onClick={getCropData}
                                                sx={{ mt: 2 }}
                                            >
                                                Lưu chỉnh sửa
                                            </Button>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} md={8} lg={9}>
                                        <Paper variant="outlined" sx={{ p: 2 }}>
                                            <Cropper
                                                style={{
                                                    height: 400,
                                                    width: '100%',
                                                }}
                                                autoCropArea={1}
                                                dragMode={'move'}
                                                highlight={false}
                                                aspectRatio={1 / 1}
                                                src={
                                                    previewAvatar &&
                                                    previewAvatar.preview
                                                }
                                                ref={cropperRef}
                                                viewMode={1}
                                                guides={true}
                                                minCropBoxHeight={100}
                                                minCropBoxWidth={100}
                                                background={false}
                                                responsive={true}
                                                checkOrientation={false}
                                            />
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Box>
                        </CSSTransition>
                    </ModalContainer>
                </Box>
            </Fade>

            {/* container */}
        </Modal>
    );
}

export default ModalAvatarEdit;
