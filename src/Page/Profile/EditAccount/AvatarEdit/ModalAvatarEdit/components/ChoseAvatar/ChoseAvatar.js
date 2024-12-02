import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import Avatar from '~/components/Avatar';
import { CloseIcon, PhotoIcon } from '~/components/Icon';

function ChoseAvatar({
    handleClose,
    disabled,
    handlePreviewAvatar,
    handleUploadAvatar,
    handleDeleteAvatar,
    avatar,
    setIsEditing,
}) {
    return (
        <Box
            sx={{
                p: 2,
                display: 'flex',
                // justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: 3,
                width: '100%',
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
                    disabled={disabled}
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
                    ref={btnUpdateRef}
                    variant="contained"
                    color="secondary"
                    onClick={() => setIsEditing(true)}
                >
                    Chỉnh sửa
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
    );
}

export default ChoseAvatar;
