import { memo } from 'react';
import { Modal, Box, Typography, Stack, IconButton, Fade, useMediaQuery } from '@mui/material';
import { CloseIcon, HeartIcon, PlayIcon } from '../Icon';
import CastSlice from '../CastItem/CastSlice';
import VideoSlice from '../VideoSlice';
import { useSelector, useDispatch } from 'react-redux';
import { openSelector } from '~/redux/selectors';
import { toggleDetail } from '~/redux/features/mediaDetailSlice';
import Image from '../Image';
import images from '~/assets/image';
import Episodes from '../Episodes';
import uiConfigs from '~/config/ui.config';
function Container({ headingText, children }) {
    return (
        <Box sx={{ marginTop: 3 }}>
            <Typography variant={'h5'} mb={1} fontWeight={'500'}>
                {headingText}
            </Typography>
            {children}
        </Box>
    );
}
function MovieDetail() {
    const pointDownSm = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const open = useSelector(openSelector);
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(toggleDetail(false));
    };
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                '.MuiBackdrop-root': {
                    backdropFilter: 'blur(2px)',
                },
            }}
        >
            <Fade in={open} timeout={300}>
                <Box
                    sx={{
                        position: 'fixed',
                        top: '2%',
                        bottom: '2%',
                        width: { md: '850px', xs: '95%' },
                        left: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        transform: 'translate(-50%, 0)',
                        // bgcolor: '#0c0a0a',
                        bgcolor: '#121212',
                        overflow: 'hidden',
                        borderRadius: '8px',
                        border: '1px solid hsla(0,0%,100%,.1)',
                        // boxShadow: 'rgba(0, 0, 0, 0.75) 0px 3px 10px',
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
                            borderTop: '1px solid rgba(255,255,255,0.5)',
                            pb: '20px',
                            overflowY: 'auto',
                            ...uiConfigs.style.scroll,
                        }}
                    >
                        {/* poster */}
                        <Box sx={{ position: 'relative' }}>
                            <IconButton
                                color="secondNeutral"
                                sx={{
                                    zIndex: '10',
                                    ...uiConfigs.style.centerAlight,
                                    svg: {
                                        width: '40px',
                                        height: '40px',
                                    },
                                }}
                            >
                                <PlayIcon />
                            </IconButton>

                            <Image
                                src={`https://image.tmdb.org/t/p/original/xFYpUmB01nswPgbzi8EOCT1ZYFu.jpg`}
                                alt={'item.name'}
                                fallBack={images.noImage19x6}
                                aspectRatio={'16/9'}
                            />
                            <Box
                                sx={{
                                    ...uiConfigs.style.gradientBgImage,
                                    background: 'linear-gradient(180deg, rgba(18,18,18,0), rgb(18,18,18) )',
                                }}
                            />
                        </Box>
                        {/* poster */}
                        <Box px={5}>
                            {/* thong tin phim */}
                            {/* <Stack direction={'row'}>
                                        <Button startIcon={<PlayIcon />} color="primary" variant="contained" disableElevation>
                                            Xem Phim
                                        </Button>
                                        <IconButton color="neutral">
                                            <HeartIcon />
                                        </IconButton>
                                    </Stack> */}
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                                <Typography
                                    variant={pointDownSm ? 'h4' : 'h3'}
                                    fontWeight={'500'}
                                    sx={{ ...uiConfigs.style.typoLines(2) }}
                                >
                                    Gran Turismo
                                </Typography>
                                <Box>
                                    <IconButton color="neutral">
                                        <HeartIcon />
                                    </IconButton>
                                </Box>
                            </Stack>
                            <Typography variant={pointDownSm ? 'subtitle2' : 'subtitle1'} mt={1}>
                                07/21/2023 | Phim Hài, Phim Phiêu Lưu, Phim Giả Tượng | 1h 54m
                            </Typography>
                            <Stack direction={'row'} spacing={2}>
                                <Typography variant={pointDownSm ? 'caption' : 'subtitle2'}>
                                    Đạo diễn: Greta Gerwig
                                </Typography>
                                <Typography variant={pointDownSm ? 'caption' : 'subtitle2'}>
                                    Kịch bản: Greta Gerwig
                                </Typography>
                            </Stack>
                            <Container headingText={'Mô tả'}>
                                <Typography variant={pointDownSm ? 'body2' : 'body1'}>
                                    BARBIE sẽ được nhào nặn và chắp bút bởi nữ đạo diễn kiêm biên kịch từng nhận nhiều
                                    Đề cử Tượng vàng Oscar – Greta Grewig. Hai nhân vật chính Barbie và Ken sẽ được hóa
                                    thân bởi nữ diên viên Margot Robbie và nam thần Ryan Gosling, hứa hẹn sẽ tạo nên
                                    “chemistry” đáng yêu giữa hai nhân vật búp bê nổi tiếng thế giới.v
                                </Typography>
                            </Container>
                            {/* thong tin phim */}

                            {/* tap phim */}
                            <Container headingText={'Tập phim'}>
                                <Episodes />
                            </Container>
                            {/* tap phim */}

                            {/* slice dien vien */}
                            <Container headingText={'Diễn viên'}>
                                <CastSlice />
                            </Container>
                            {/* slice dien vien */}

                            {/* trailer */}
                            <Container headingText={'Trailer'}>
                                <VideoSlice />
                            </Container>
                            {/* trailer */}
                        </Box>
                    </Box>
                    {/* container */}
                </Box>
            </Fade>
        </Modal>
    );
}

export default memo(MovieDetail);
