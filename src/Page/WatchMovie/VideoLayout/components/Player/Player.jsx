import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider, Poster, Track } from '@vidstack/react';
import { DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import { textTracks } from '~/Page/WatchMovie/tracks';
import { useCallback } from 'react';
import { VIETNAM } from '~/Page/WatchMovie/translations';
import { customIcons } from '~/Page/WatchMovie/customIcon';
import tmdbConfigs from '~/api/configs/tmdb.configs';
import './Player.module.css';
function Player({ url, poster, title }) {
    const smallVideoLayoutQuery = useCallback(({ width, height }) => {
        return width < 600 || height < 300;
    }, []);
    return (
        <MediaPlayer
            src={`https://proxy-m3u8.viejoy.io.vn/m3u8-proxy?url=${encodeURIComponent(
                url,
            )}&header=${JSON.stringify({
                Referer: '',
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
                {textTracks.map((track) => (
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

export default Player;
