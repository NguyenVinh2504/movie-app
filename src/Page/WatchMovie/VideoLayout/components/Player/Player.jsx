// import '@vidstack/react/player/styles/default/theme.css';
// import '@vidstack/react/player/styles/default/layouts/video.css';
import '@vidstack/react/player/styles/base.css';

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
import { QualitySubmenu, SpeedSubmenu } from '../menus';
import VideoLayout from '../../VideoLayout';
import style from './Player.module.css';
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
    // const url = 'https://proxy-m3u8.vercel.app';
    const url = 'https://server2-proxy-m3u8.viejoy.io.vn';
    return (
        <MediaPlayer
            // src={`${url}/m3u8-proxy?url=${encodeURIComponent(
            //     videoUrl,
            // )}&headers=${encodeURIComponent(
            //     JSON.stringify({
            //         referer,
            //     }),
            // )}`}
            // src={`https://server2-m3u8-proxy.onrender.com/proxy/${encodeURIComponent(
            //     videoUrl,
            // )}`}
            src={
                'https://sundaythekingplays.xyz/hls/CTWIkLfH8bz-PkNqR4Uget-x7FdHf0sbnQYaKmzvAxf9pJS6tOFQ1yB+Z6P3NILSOILGDpGSxEW0+vH6Ae+CUw==/bWFzdGVyLm0zdTg=.m3u8'
                // 'https://sundaythekingplays.xyz/hls/IObLdzQJJwnIBQpiSEdLovKSUc7W2K3rtexfT4A92ZYusyWIbwsFXIRLOWkRh48zymyolDB5b4WAXml50eqctQ==/bWFzdGVyLm0zdTg=.m3u8'
            }
            poster={tmdbConfigs.backdropPath(poster)}
            viewType="video"
            streamType="on-demand"
            logLevel="warn"
            playsInline
            title={title}
            storage="player-movie"
            crossOrigin
            className={`player ${style.player}`}
        >
            <MediaProvider>
                <Poster className={style.poster} />
                {tracks.map((track, index) => (
                    <Track {...track} key={track.src} />
                ))}
            </MediaProvider>
            {/* <DefaultVideoLayout
                colorScheme="dark"
                translations={VIETNAM}
                smallLayoutWhen={smallVideoLayoutQuery}
                noAudioGain
                slots={{
                    googleCastButton: null,
                    settingsMenuStartItems: <QualitySubmenu />,
                    afterSettingsMenuStartItems: <SpeedSubmenu />,
                }}
                icons={customIcons}
            /> */}
            <VideoLayout />
        </MediaPlayer>
    );
}

export default memo(Player);
