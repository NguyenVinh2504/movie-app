/* eslint-disable no-unused-vars */
import React, { useCallback, useMemo } from 'react';
import Wrapper from '~/components/Wrapper';
// import TitleMatchMovie from './TitleMatchMovie';
// import OverviewWatchMovie from './OverviewWatchMovie';
import OverviewMovieDetail from '~/components/MediaDetail/OverviewMovieDetail';
import Episodes from '~/components/MediaDetail/Episodes';
import CastSlice from '~/components/MediaDetail/CastItem';
import VideoSlice from '~/components/MediaDetail/VideoSlice';
import CommentMedia from '~/components/MediaDetail/CommentMedia';
import { dataDetail } from './mockup-data';
import WrapperMovieDetail from '~/components/MediaDetail/components/WrapperMovieDetail';
import TitleMovieDetail from '~/components/MediaDetail/HeaderMovieDetail/TitleMovieDetail';

import { VIETNAM } from './translations';
import { customIcons } from './customIcon';

import { MediaPlayer, MediaProvider, Poster, Track } from '@vidstack/react';
import { DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

import { Box } from '@mui/material';
import tmdbConfigs from '~/api/configs/tmdb.configs';
import { textTracks } from './tracks';
const WatchMovie = () => {
    const mediaTypeDetail = 'movie';
    const loading = false;
    const id = 1114894;
    const newGenres = useMemo(
        () => dataDetail?.genres?.map((item) => item.name) || [],
        [],
    );
    const smallVideoLayoutQuery = useCallback(({ width, height }) => {
        return width < 600 || height < 300;
    }, []);
    return (
        <Wrapper>
            {/* <Typography variant='h4'>Admin Lười Nên Chưa Có Phần Xem Phim. Sẽ Cập Nhật Trong Thời Gian Sắp Tới Nha. Yêu!!!</Typography> */}

            {/* <Box
                sx={{
                    position: 'relative',
                    pt: 'calc(9/16*100%)',
                    borderRadius: 2,
                    overflow: 'hidden',
                    backgroundColor: 'secondary.main',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        ...uiConfigs.style.positionFullSize,
                    }}
                >
                    <video width={'100%'} height={'100%'} controls={true}>
                        <source
                            src={
                                'http://localhost:2504/api/v1/files/video-stream/97483167-6f1a-4f88-8db3-1898bc30cf6e.mp4'
                            }
                            type="video/mp4"
                        />
                    </video>
                </Box>
            </Box> */}

            <WrapperMovieDetail noPadding>
                <MediaPlayer
                    // src={"https://files.vidstack.io/sprite-fight/hls/stream.m3u8"}
                    src={
                        'https://norlixfire12.xyz/file2/0tGBkVwHG4oM40Y2N8etn7u7Zf~In28mHQvs3JShRZFeigmu6hRO6BQ8sczNL7TaLrMGANJ7pE8KoYF~4P0ToM2p3+ogUestCbfKvj0qPIfdRGzhmHvu+~fDoTt0R121xco771OMhD6CJHB04laGYHyKoKulMPjqt2D9nWwIM4c=/cGxheWxpc3QubTN1OA==.m3u8'
                    }
                    poster={tmdbConfigs.backdropPath(dataDetail.backdrop_path)}
                    crossOrigin
                    playsInline
                >
                    <MediaProvider>
                        <Poster className="vds-poster" />
                        {textTracks.map((track) => (
                            <Track {...track} key={track.src} />
                        ))}
                    </MediaProvider>
                    <DefaultVideoLayout
                        colorScheme="dark"
                        translations={VIETNAM}
                        // icons={defaultLayoutIcons}
                        smallLayoutWhen={smallVideoLayoutQuery}
                        noAudioGain
                        slots={{
                            googleCastButton: null,
                        }}
                        icons={customIcons}
                    />
                </MediaPlayer>
                <TitleMovieDetail
                    loading={loading}
                    dataDetail={dataDetail}
                    genres={newGenres}
                    mediaType={mediaTypeDetail}
                />
            </WrapperMovieDetail>
            <OverviewMovieDetail loading={loading} dataDetail={dataDetail} />
            {/* thong tin phim */}

            {/* tap phim */}
            {mediaTypeDetail === 'tv' && (
                <Episodes
                    seasons={dataDetail?.seasons ?? []}
                    seriesId={dataDetail?.id ?? Number('')}
                    isLoading={loading}
                    mediaTitle={dataDetail?.name ?? dataDetail?.title ?? ''}
                />
            )}
            {/* tap phim */}

            {/* slice dien vien */}
            <CastSlice cast={dataDetail?.credits?.cast} loading={loading} />
            {/* slice dien vien */}

            {/* trailer */}
            <VideoSlice
                videos={dataDetail?.videos?.results}
                loading={loading}
            />
            {/* trailer */}

            {/* comment */}
            <CommentMedia movieId={id} mediaType={mediaTypeDetail} />
        </Wrapper>
    );
};

export default WatchMovie;
