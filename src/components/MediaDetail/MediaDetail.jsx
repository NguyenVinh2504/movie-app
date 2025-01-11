import { memo, useCallback, useEffect, useMemo } from 'react';
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
import { useLocation, useSearchParams } from 'react-router-dom';
import { omit } from 'lodash';
import { useQueryConfig } from '~/Hooks';
import { Helmet } from 'react-helmet';
import config from '~/config';
import CommentMedia from './CommentMedia';

function MovieDetail() {
    // const [genres, setGenres] = useState([]);
    const queryConfig = useQueryConfig();
    const [, setSearchParams] = useSearchParams();
    const location = useLocation();
    // const navigate = useNavigate();
    // console.log(mediaTypeDetail, id);
    const { media_type: mediaTypeDetail, id, category } = queryConfig;

    const handleClose = useCallback(() => {
        setSearchParams(
            location.pathname === config.routes.searchPage
                ? omit(
                      {
                          ...queryConfig,
                      },
                      ['id', 'category'],
                  )
                : omit(
                      {
                          ...queryConfig,
                      },
                      ['media_type', 'id', 'category'],
                  ),
        );
    }, [location.pathname, queryConfig, setSearchParams]);

    const getDataDetail = useCallback(async () => {
        const { response, err } = await mediaApi.getDetail({
            mediaType: mediaTypeDetail,
            mediaId: id,
        });
        if (response) return response;
        if (err) throw err;
    }, [id, mediaTypeDetail]);

    const {
        data: dataDetail = {},
        isPending: loading,
        isError,
    } = useQuery({
        queryKey: ['Media detail', mediaTypeDetail, id],
        queryFn: getDataDetail,
        enabled: Boolean(category && mediaTypeDetail && id),
    });

    const newGenres = useMemo(
        () => dataDetail?.genres?.map((item) => item.name) || [],
        [dataDetail?.genres],
    );
    useEffect(() => {
        if (Object.keys(dataDetail).length === 0 && !loading) {
            setSearchParams(
                location.pathname === config.routes.searchPage
                    ? omit(
                          {
                              ...queryConfig,
                          },
                          ['id', 'category'],
                      )
                    : omit(
                          {
                              ...queryConfig,
                          },
                          ['media_type', 'id', 'category'],
                      ),
            );
        }
    }, [dataDetail, loading, location.pathname, queryConfig, setSearchParams]);

    // console.log('data', dataDetail, 'isPending', loading, 'isFetching', genres);
    // console.log(dataDetail, Object.keys(dataDetail).length === 0);
    // useEffect(() => {
    //     console.log('data', dataDetail);
    // });
    return (
        <>
            <Helmet>
                <title>{dataDetail?.title ?? dataDetail?.name}</title>
                <meta
                    name="description"
                    content={
                        dataDetail?.overview
                            ? dataDetail.overview
                            : 'Không có nội dung'
                    }
                />
            </Helmet>
            <Modal
                open={Boolean(category) && !isError}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    '.MuiModal-root': {
                        backdropFilter: 'blur(2px)',
                    },
                }}
            >
                <Fade in={Boolean(category) && !isError} timeout={300}>
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
                                component={'h2'}
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
                                scrollbarWidth: { xs: 'none', md: 'initial' },
                            }}
                        >
                            <Box px={1} mt={0}>
                                <HeaderMovieDetail
                                    loading={loading}
                                    dataDetail={dataDetail}
                                    genres={newGenres}
                                    mediaType={mediaTypeDetail}
                                />
                                <OverviewMovieDetail
                                    loading={loading}
                                    dataDetail={dataDetail}
                                />
                                {/* thong tin phim */}

                                {/* tap phim */}
                                {mediaTypeDetail === 'tv' && (
                                    <Episodes
                                        seasons={dataDetail?.seasons ?? []}
                                        seriesId={dataDetail?.id ?? Number('')}
                                        isLoading={loading}
                                        mediaTitle={
                                            dataDetail?.name ??
                                            dataDetail?.title ??
                                            ''
                                        }
                                    />
                                )}
                                {/* tap phim */}

                                {/* slice dien vien */}
                                <CastSlice
                                    cast={dataDetail?.credits?.cast}
                                    loading={loading}
                                />
                                {/* slice dien vien */}

                                {/* trailer */}
                                <VideoSlice
                                    videos={dataDetail?.videos?.results}
                                    loading={loading}
                                />
                                {/* trailer */}

                                {/* comment */}
                                <CommentMedia
                                    movieId={id}
                                    mediaType={mediaTypeDetail}
                                />
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
