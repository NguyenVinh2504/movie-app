import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider, Poster, Track } from '@vidstack/react';
import { DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import { useCallback } from 'react';
import { VIETNAM } from '~/Page/WatchMovie/translations';
import { customIcons } from '~/Page/WatchMovie/customIcon';
import tmdbConfigs from '~/api/configs/tmdb.configs';
import './Player.module.css';
import videoApi from '~/api/module/video.api';
import { useQuery } from '@tanstack/react-query';

function Player({
    id,
    mediaType,
    episode_number = '',
    season_number = '',
    episode_id = '',
}) {
    const smallVideoLayoutQuery = useCallback(({ width, height }) => {
        return width < 600 || height < 300;
    }, []);

    const getVideoInfo = useCallback(async () => {
        return await videoApi.getVideoMovie({
            movieId: id,
        });
    }, [id]);

    const { data: { videoUrl, poster, title, tracks = [] } = {}, isError } =
        useQuery({
            queryKey: ['Video Info', mediaType, id],
            queryFn: getVideoInfo,
        });

    return !isError ? (
        <MediaPlayer
            src={`https://proxy-m3u8.viejoy.io.vn/m3u8-proxy?url=${encodeURIComponent(
                videoUrl,
            )}&header=${JSON.stringify({
                Referer: 'https://megacloud.tube/',
            })}`}
            poster={tmdbConfigs.backdropPath(poster)}
            viewType="video"
            streamType="on-demand"
            logLevel="warn"
            crossOrigin
            playsInline
            title={title}
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
    ) : null;
}

export default Player;
