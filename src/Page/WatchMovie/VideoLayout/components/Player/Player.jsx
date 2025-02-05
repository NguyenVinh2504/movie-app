import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider, Poster, Track } from '@vidstack/react';
import { DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import { memo, useCallback, useEffect } from 'react';
import { VIETNAM } from '~/Page/WatchMovie/translations';
import { customIcons } from '~/Page/WatchMovie/customIcon';
import tmdbConfigs from '~/api/configs/tmdb.configs';
import './Player.module.css';
import videoApi from '~/api/module/video.api';
import { useQuery } from '@tanstack/react-query';
import { Box, Skeleton, Typography } from '@mui/material';
import uiConfigs from '~/config/ui.config';

function Player({
    poster,
    title,
    id,
    mediaType,
    episodeNumber = '',
    seasonNumber = '',
    episodeId = '',
}) {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [id, mediaType, episodeNumber, seasonNumber, episodeId]);

    const smallVideoLayoutQuery = useCallback(({ width, height }) => {
        return width < 600 || height < 300;
    }, []);

    const getVideoInfo = useCallback(async () => {
        let response = null;
        if (mediaType === 'tv') {
            response = await videoApi.getVideoTV({
                mediaId: id,
                episodeNumber,
                seasonNumber,
                episodeId,
            });
        } else {
            response = await videoApi.getVideoMovie({
                mediaId: id,
            });
        }
        return response;
    }, [id, mediaType, episodeNumber, seasonNumber, episodeId]);

    const { data = {}, isLoading } = useQuery({
        queryKey: [
            'Video Info',
            mediaType,
            id,
            episodeNumber,
            seasonNumber,
            episodeId,
        ],
        queryFn: getVideoInfo,
        enabled: Boolean(mediaType && id),
    });
    const { videoUrl = '', tracks = [], referer = '' } = data;
    if (Object.keys(data).length === 0) {
        return (
            <Box
                sx={{
                    width: '100%',
                    pt: 'calc(9/16*100%)',
                    backgroundColor: 'black',
                    position: 'relative',
                }}
            >
                {isLoading ? (
                    <Skeleton
                        variant="rounded"
                        sx={{ ...uiConfigs.style.positionFullSize }}
                    />
                ) : (
                    <Typography
                        variant="h5"
                        component={'p'}
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            p: 4,
                        }}
                    >
                        Phim sẽ được cập nhật trong thời gian sớm nhất. Xin cảm
                        ơn!
                    </Typography>
                )}
            </Box>
        );
    }
    return (
        <MediaPlayer
            src={`https://proxy-m3u8.viejoy.io.vn/m3u8-proxy?url=${encodeURIComponent(
                videoUrl,
            )}&header=${encodeURIComponent(
                JSON.stringify({
                    referer,
                }),
            )}`}
            // src={`https://server2-m3u8-proxy.onrender.com/proxy/${encodeURIComponent(
            //     videoUrl,
            // )}`}
            // src={
            //     'https://renewed-georgeanne-nekonode-1aa70c0c.koyeb.app/fetch?url=https%3A%2F%2Ftmstr1.luminousstreamhaven.com%2Fstream_new%2FH4sIAAAAAAAAAw3N3W6DIBiA4VtC1Dp3tqagcQMnBfw5Qz_TVbQ10Vr16ufhmzzJG3hhgxs3DH1ocPvhYTi1AQ4gdBGuT6b5ZB2dDeqfjbztYJ0lG3gk3PFbEGEMKt2a6D5DvjT4762Ko_ebb6hWmqwJs_OUS.2qnfe8gJntlDLK75ld58rRhR7gzuLzBJH2hKUv3vEB4oQqvD4qJCwbqqlWYXqNdcc6tVVUdFrTLdVi4TFXx3mrbfJT5f4mbFVA94VL7A_pJVsY4eIwD3PJ3qanpURjniE4c6RRS8AwRH.vRGFOkCcj55VbMUIeSjM8d7EnCmTj5gTWf50mlDAhAQAA%2Fmaster.m3u8'
            // }
            poster={tmdbConfigs.backdropPath(poster)}
            viewType="video"
            streamType="on-demand"
            logLevel="warn"
            crossOrigin
            playsInline
            title={title}
            storage="player-movie"
        >
            <MediaProvider>
                <Poster className="vds-poster" />
                {tracks.map((track, index) => (
                    <Track {...track} key={track.src} />
                ))}
            </MediaProvider>
            <DefaultVideoLayout
                colorScheme="dark"
                translations={VIETNAM}
                smallLayoutWhen={smallVideoLayoutQuery}
                noAudioGain
                slots={{
                    googleCastButton: null,
                }}
                icons={customIcons}
            />
        </MediaPlayer>
    );
}

export default memo(Player);
