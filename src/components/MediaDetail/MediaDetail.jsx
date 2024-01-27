import { memo, useEffect, useState } from 'react';
import { Modal, Box, Typography, Stack, IconButton, Fade, Paper } from '@mui/material';
import { CloseIcon } from '../Icon';
import CastSlice from './CastItem';
import VideoSlice from './VideoSlice';
import { useSelector, useDispatch } from 'react-redux';
import { openSelector, paramsDetail } from '~/redux/selectors';
import { toggleDetail } from '~/redux/features/mediaDetailSlice';
import Episodes from './Episodes';
import uiConfigs from '~/config/ui.config';
import mediaApi from '~/api/module/media.api';
import BannerMovieDetail from './BannerMovieDetail';
import TitleMovieDetail from './TitleMovieDetail';
import OverviewMovieDetail from './OverviewMovieDetail';
import { useQuery } from '@tanstack/react-query';

function MovieDetail() {
    const [genres, setGenres] = useState([]);
    const open = useSelector(openSelector);
    const param = useSelector(paramsDetail);
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(toggleDetail(false));
    };
    const getDataDetail = async () => {
        const { response } = await mediaApi.getDetail({
            mediaType: param?.mediaType,
            mediaId: param?.id,
        });
        return response;
    };

    const { data: dataDetail, isPending: loading } = useQuery({
        queryKey: ['Media detail', param],
        queryFn: getDataDetail,
        enabled: Boolean(param),
        
    });

    useEffect(() => {
        if (dataDetail) {
            const newGenres = dataDetail?.genres?.map((item) => item.name) || [];
            setGenres(newGenres);
        }
    }, [dataDetail]);

    console.log('data', dataDetail, 'isPending', loading, 'isFetching', genres);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                '.MuiModal-root': {
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
                        width: { md: '850px', xs: '97%' },
                        left: '50%',
                        display: 'flex',
                        flexDirection: 'column',
                        transform: 'translate(-50%, 0)',
                        bgcolor: '#121212',
                        overflow: 'hidden',
                        borderRadius: '8px',
                        border: '1px solid hsla(0,0%,100%,.1)',
                    }}
                >
                    <Stack
                        direction={'row'}
                        my={2}
                        justifyContent={'flex-end'}
                        alignItems={'center'}
                        px={2}
                        position={'relative'}
                    >
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
                            pt: 1,
                            overflowY: 'auto',
                            ...uiConfigs.style.scroll,
                        }}
                    >
                        <Box px={1} mt={0}>
                            <Paper variant="outlined" sx={{ overflow: 'hidden' }}>
                                {/* poster */}
                                <BannerMovieDetail
                                    loading={loading}
                                    dataDetail={dataDetail}
                                    mediaType={param.mediaType}
                                />
                                {/* poster */}
                                {/* thong tin phim */}
                                <TitleMovieDetail
                                    loading={loading}
                                    dataDetail={dataDetail}
                                    genres={genres}
                                    mediaType={param?.mediaType}
                                />
                            </Paper>
                            <OverviewMovieDetail loading={loading} dataDetail={dataDetail} />
                            {/* thong tin phim */}

                            {/* tap phim */}
                            {param.mediaType === 'tv' && (
                                <Episodes
                                    seasons={dataDetail?.seasons}
                                    isLoading={loading}
                                    seriesId={dataDetail?.id}
                                    numberSeasonValue={dataDetail?.seasons && dataDetail?.seasons[0]?.season_number}
                                />
                            )}
                            {/* tap phim */}

                            {/* slice dien vien */}
                            <CastSlice cast={dataDetail?.credits?.cast} loading={loading} />
                            {/* slice dien vien */}

                            {/* trailer */}
                            <VideoSlice videos={dataDetail?.videos?.results} loading={loading} />
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
