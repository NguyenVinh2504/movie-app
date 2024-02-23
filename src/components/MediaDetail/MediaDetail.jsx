import { memo, useEffect, useState } from 'react';
import { Modal, Box, Typography, Stack, IconButton, Fade } from '@mui/material';
import { CloseIcon } from '../Icon';
import CastSlice from './CastItem';
import VideoSlice from './VideoSlice';
import Episodes from './Episodes';
import uiConfigs from '~/config/ui.config';
import mediaApi from '~/api/module/media.api';
import OverviewMovieDetail from './OverviewMovieDetail';
import { useQuery } from '@tanstack/react-query';
import HeaderMovieDetail from './HeaderMovieDetail';
import { useSearchParams } from 'react-router-dom';
import { omit } from 'lodash';
import { useQueryConfig } from '~/Hooks';
import { Helmet } from 'react-helmet';

function MovieDetail() {
    const [genres, setGenres] = useState([]);
    const queryConfig = useQueryConfig();
    const [, setSearchParams] = useSearchParams();
    // console.log(mediaTypeDetail, id);
    const { media_type: mediaTypeDetail, id, category } = queryConfig;
    const handleClose = () => {
        setSearchParams(
            omit(
                {
                    ...queryConfig,
                },
                ['media_type', 'id', 'category'],
            ),
        );
    };
    const getDataDetail = async () => {
        const { response } = await mediaApi.getDetail({
            mediaType: mediaTypeDetail,
            mediaId: id,
        });
        return response;
    };

    const { data: dataDetail = {}, isPending: loading } = useQuery({
        queryKey: ['Media detail', mediaTypeDetail, id],
        queryFn: getDataDetail,
        enabled: Boolean(category),
    });

    useEffect(() => {
        if (dataDetail.genres) {
            const newGenres = dataDetail?.genres?.map((item) => item.name) || [];
            setGenres(newGenres);
        }
    }, [dataDetail]);

    // console.log('data', dataDetail, 'isPending', loading, 'isFetching', genres);

    return (
        <>
            <Helmet>
                <title>{dataDetail?.title ?? dataDetail?.name}</title>
                <meta name="description" content={dataDetail?.overview ? dataDetail.overview : 'Không có nội dung'} />
            </Helmet>
            <Modal
                open={Boolean(category)}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    '.MuiModal-root': {
                        backdropFilter: 'blur(2px)',
                    },
                }}
            >
                <Fade in={Boolean(category)} timeout={300}>
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
                                <HeaderMovieDetail
                                    loading={loading}
                                    dataDetail={dataDetail}
                                    genres={genres}
                                    mediaType={mediaTypeDetail}
                                />
                                <OverviewMovieDetail loading={loading} dataDetail={dataDetail} />
                                {/* thong tin phim */}

                                {/* tap phim */}
                                {mediaTypeDetail === 'tv' && (
                                    <Episodes
                                        seasons={dataDetail?.seasons ?? []}
                                        seriesId={dataDetail?.id ?? Number('')}
                                        isLoading={loading}
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
        </>
    );
}

export default memo(MovieDetail);
