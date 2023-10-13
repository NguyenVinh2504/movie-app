import { memo } from 'react';
import { Modal, Box, Typography, Stack, IconButton } from '@mui/material';
import { CloseIcon, HeartIcon, PlayIcon } from '../Icon';

// const style = {
//     position: 'fixed',
//     top: '0%',
//     left: '50%',
//     bottom: '0%',
//     transform: 'translate(-50%, 0)',
//     // height: 400,
//     boxShadow: 24,
//     overflowX: 'auto',
//     width: 850,
// };

function MovieDetail({ handleClose, open }) {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: 'fixed',
                        top: '2%',
                        bottom: '2%',
                        right: '0%',
                        width: { md: '850px', xs: '90%' },
                        left: '50%',
                        transform: 'translate(-50%, 0)',
                        bgcolor: '#0c0a0a',
                        overflow: 'hidden',
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        // height: '90%',
                        // pt: 2,
                        // overflowY: 'overlay',
                    }}
                >
                    <Stack direction={'row'} my={2} justifyContent={'flex-end'} px={2} position={'relative'}>
                        <Typography
                            variant="h4"
                            textAlign={'center'}
                            fontWeight={'500'}
                            position={'absolute'}
                            left={0}
                            right={0}
                        >
                            Chi tiết
                        </Typography>
                        <IconButton color="neutral" onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Stack>
                    {/* container */}
                    <Box
                        sx={{
                            // borderRadius: '1.25rem',
                            // width: { md: '850px', xs: '300px' },
                            position: 'absolute',
                            borderTop: '1px solid rgba(255,255,255,0.6)',
                            top: '0',
                            mt: '68px',
                            mb: '20px',
                            // height: '100%',
                            // left: '50%',
                            bottom: '0%',
                            // transform: 'translate(-50%, 0)',
                            // bgcolor: theme.palette.secondary.main,
                            overflowY: 'auto',
                            '&::-webkit-scrollbar': {
                                width: '8px',
                            },
                            '&::-webkit-scrollbar-track': {
                                backgroundColor: 'transparent',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: 'rgba(255,255,255,0.5)',
                                borderRadius: '6px',
                                width: '8px',
                            },
                        }}
                    >
                        <Box sx={{ position: 'relative' }}>
                            <IconButton
                                color="neutral"
                                sx={{
                                    position: 'absolute',
                                    zIndex: '10',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    bgcolor: 'rgba(0,0,0,0.5)',
                                    svg: {
                                        width: '40px',
                                        height: '40px',
                                    },
                                }}
                            >
                                <PlayIcon />
                            </IconButton>
                            <Box
                                sx={{
                                    width: '100%',
                                    pt: '56.25%',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    position: 'relative',
                                    backgroundPosition: 'center top',
                                    backgroundImage:
                                        'url(https://image.tmdb.org/t/p/original/xFYpUmB01nswPgbzi8EOCT1ZYFu.jpg)',
                                }}
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '0',
                                    left: '0',
                                    width: '100%',
                                    height: '100%',
                                    // bgcolor: 'red',
                                    background: 'linear-gradient(180deg, rgba(12, 10, 10, 0), rgba(12, 10, 10, 1))',
                                }}
                            />
                            {/* <img
                                src="https://image.tmdb.org/t/p/original/xFYpUmB01nswPgbzi8EOCT1ZYFu.jpg"
                                width="100%"
                                alt="test"
                            /> */}
                        </Box>
                        <Box sx={{ px: 5 }}>
                            {/* <Stack direction={'row'}>
                                <Button startIcon={<PlayIcon />} color="primary" variant="contained" disableElevation>
                                    Xem Phim
                                </Button>
                                <IconButton color="neutral">
                                    <HeartIcon />
                                </IconButton>
                            </Stack> */}
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                <Typography variant="h3" fontWeight={'500'}>
                                    Gran Turismo
                                </Typography>
                                <Box>
                                    <IconButton color="neutral">
                                        <HeartIcon />
                                    </IconButton>
                                </Box>
                            </Stack>
                            <Typography variant="subtitle1" mt={1}>
                                07/21/2023 (US)Phim Hài, Phim Phiêu Lưu, Phim Giả Tượng1h 54m
                            </Typography>
                            <Stack direction={'row'} spacing={2}>
                                <Typography variant="subtitle2">Đạo diễn: Greta Gerwig</Typography>
                                <Typography variant="subtitle2">Kịch bản: Greta Gerwig</Typography>
                            </Stack>
                            <Typography variant="h5" mt={3} fontWeight={'500'}>
                                Mô tả
                            </Typography>
                            <Typography mt={1}>
                                BARBIE sẽ được nhào nặn và chắp bút bởi nữ đạo diễn kiêm biên kịch từng nhận nhiều Đề cử
                                Tượng vàng Oscar – Greta Grewig. Hai nhân vật chính Barbie và Ken sẽ được hóa thân bởi
                                nữ diên viên Margot Robbie và nam thần Ryan Gosling, hứa hẹn sẽ tạo nên “chemistry” đáng
                                yêu giữa hai nhân vật búp bê nổi tiếng thế giới.v
                            </Typography>
                        </Box>
                    </Box>
                    {/* container */}
                </Box>
            </Modal>
        </div>
    );
}

export default memo(MovieDetail);
