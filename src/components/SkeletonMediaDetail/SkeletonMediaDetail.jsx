import { Box, Stack, Typography, Skeleton } from '@mui/material';
import Episodes from '../MediaDetail/Episodes';
import CastSlice from '../MediaDetail/CastItem/CastSliceList/CastSliceList';
import VideoSlice from '../MediaDetail/VideoSlice';
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
function SkeletonMediaDetail() {
    return (
        <>
            {/* poster */}
            <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                <Skeleton
                    sx={{ aspectRatio: '16/9', objectFit: 'cover' }}
                    variant="rectangular"
                    width={'100%'}
                    height={'100%'}
                />
            </Box>
            {/* poster */}
            <Box px={5} mt={2}>
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
                    <Skeleton variant="rounded" height={'56px'} width={'80%'} />
                    <Box>
                        <Skeleton variant="circular" width={40} height={40} />
                    </Box>
                </Stack>
                <Skeleton variant="rounded" height={'24px'} width={'100%'} sx={{ mt: 1 }} />
                <Stack direction={'row'} spacing={2} mt={1}>
                    <Skeleton variant="rounded" height={'24px'} width={'146px'} />
                    <Skeleton variant="rounded" height={'24px'} width={'146px'} />
                </Stack>
                <Container headingText={'Mô tả'}>
                    <Skeleton variant="rounded" height={'80px'} width={'100%'} />
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
        </>
    );
}

export default SkeletonMediaDetail;
