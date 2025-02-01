import { useMemo } from 'react';
import Wrapper from '~/components/Wrapper';
import OverviewMovieDetail from '~/components/MediaDetail/OverviewMovieDetail';
import Episodes from '~/components/MediaDetail/Episodes';
import CastSlice from '~/components/MediaDetail/CastItem';
import VideoSlice from '~/components/MediaDetail/VideoSlice';
import CommentMedia from '~/components/MediaDetail/CommentMedia';
import { dataDetail } from './mockup-data';
import WrapperMovieDetail from '~/components/MediaDetail/components/WrapperMovieDetail';
import TitleMovieDetail from '~/components/MediaDetail/HeaderMovieDetail/TitleMovieDetail';

import Player from './VideoLayout/components/Player';
const WatchMovie = () => {
    const mediaTypeDetail = 'movie';
    const loading = false;
    const id = 1114894;
    const newGenres = useMemo(
        () => dataDetail?.genres?.map((item) => item.name) || [],
        [],
    );

    const url =
        'https://norlixfire12.xyz/file2/0tGBkVwHG4oM40Y2N8etn7u7Zf~In28mHQvs3JShRZFeigmu6hRO6BQ8sczNL7TaLrMGANJ7pE8KoYF~4P0ToM2p3+ogUestCbfKvj0qPIfdRGzhmHvu+~fDoTt0R121xco771OMhD6CJHB04laGYHyKoKulMPjqt2D9nWwIM4c=/cGxheWxpc3QubTN1OA==.m3u8';

    return (
        <Wrapper>
            {/* <Typography variant='h4'>Admin Lười Nên Chưa Có Phần Xem Phim. Sẽ Cập Nhật Trong Thời Gian Sắp Tới Nha. Yêu!!!</Typography> */}

            <WrapperMovieDetail noPadding>
                {/* <Box
                    sx={{
                        '& .vds-menu-items[data-root]': {
                            '--root-bg': '#000000',
                            backgroundColor: 'var(--root-bg)',
                        },
                        '& .vds-menu-items': {
                            '--root-padding': '20px',
                            '--root-border':
                                '1px solid rgba(255, 255, 255, 0.2)',
                        },
                        '& [data-media-player]': {
                            aspectRatio: '16 /9',
                            '--media-brand': theme.palette.primary.main,
                            '--media-slider-track-bg':
                                'rgba(255, 255, 255, .5)',
                            backgroundColor: '#000',
                        },
                        '& .vds-radio': {
                            pl: '30px',
                            '& .vds-icon': {
                                position: 'absolute',
                                left: 0,
                                top: '50%',
                                transform: 'translateY(-50%)',
                            },
                        },
                        '& .vds-poster': {
                            objectFit: 'cover',
                        },
                    }}
                >
                    <MediaPlayer
                        ref={playerRef}
                        src={`https://proxy-m3u8.viejoy.io.vn/m3u8-proxy?url=${encodeURIComponent(
                            url,
                        )}&header=${JSON.stringify({
                            Referer: '',
                        })}`}
                        poster={tmdbConfigs.backdropPath(
                            dataDetail.backdrop_path,
                        )}
                        crossOrigin
                        playsInline
                        storage="player-movie"
                        className="media-player"
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
                        <VideoLayout />
                    </MediaPlayer>
                </Box> */}
                <Player
                    poster={dataDetail.backdrop_path}
                    url={url}
                    title={dataDetail.title}
                />
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
