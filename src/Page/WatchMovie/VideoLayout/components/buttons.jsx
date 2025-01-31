import {
    CaptionButton,
    FullscreenButton,
    isTrackCaptionKind,
    MuteButton,
    PIPButton,
    PlayButton,
    SeekButton,
    Tooltip,
    useMediaState,
} from '@vidstack/react';
import {
    ClosedCaptionsIcon,
    ClosedCaptionsOnIcon,
    FullscreenExitIcon,
    FullscreenIcon,
    PictureInPictureExitIcon,
    PictureInPictureIcon,
    SeekBackward10Icon,
    SeekForward10Icon,
} from '@vidstack/react/icons';
import {
    MuteIcon,
    PauseIcon,
    PlayIcon,
    VolumeHighIcon,
    VolumeLowIcon,
} from '~/components/Icon';

export function Play({ tooltipPlacement }) {
    const isPaused = useMediaState('paused');
    return (
        <Tooltip.Root>
            <Tooltip.Trigger asChild>
                <PlayButton className="vds-button">
                    {isPaused ? <PlayIcon /> : <PauseIcon />}
                </PlayButton>
            </Tooltip.Trigger>
            <Tooltip.Content
                className="vds-tooltip-content"
                placement={tooltipPlacement}
            >
                {isPaused ? 'Play' : 'Pause'}
            </Tooltip.Content>
        </Tooltip.Root>
    );
}

export function Mute({ tooltipPlacement }) {
    const volume = useMediaState('volume'),
        isMuted = useMediaState('muted');
    return (
        <Tooltip.Root>
            <Tooltip.Trigger asChild>
                <MuteButton className="vds-button">
                    {isMuted || volume === 0 ? (
                        <MuteIcon />
                    ) : volume < 0.5 ? (
                        <VolumeLowIcon />
                    ) : (
                        <VolumeHighIcon />
                    )}
                </MuteButton>
            </Tooltip.Trigger>
            <Tooltip.Content
                className="vds-tooltip-content"
                placement={tooltipPlacement}
            >
                {isMuted ? 'Unmute' : 'Mute'}
            </Tooltip.Content>
        </Tooltip.Root>
    );
}

export function Caption({ tooltipPlacement }) {
    const track = useMediaState('textTrack'),
        isOn = track && isTrackCaptionKind(track);
    return (
        <Tooltip.Root>
            <Tooltip.Trigger asChild>
                <CaptionButton className="vds-button">
                    {isOn ? <ClosedCaptionsOnIcon /> : <ClosedCaptionsIcon />}
                </CaptionButton>
            </Tooltip.Trigger>
            <Tooltip.Content
                className="vds-tooltip-content"
                placement={tooltipPlacement}
            >
                {isOn ? 'Closed-Captions Off' : 'Closed-Captions On'}
            </Tooltip.Content>
        </Tooltip.Root>
    );
}

export function PIP({ tooltipPlacement }) {
    const isActive = useMediaState('pictureInPicture');
    return (
        <Tooltip.Root>
            <Tooltip.Trigger asChild>
                <PIPButton className="vds-button">
                    {isActive ? (
                        <PictureInPictureExitIcon />
                    ) : (
                        <PictureInPictureIcon />
                    )}
                </PIPButton>
            </Tooltip.Trigger>
            <Tooltip.Content
                className="vds-tooltip-content"
                placement={tooltipPlacement}
            >
                {isActive ? 'Exit PIP' : 'Enter PIP'}
            </Tooltip.Content>
        </Tooltip.Root>
    );
}

export function Fullscreen({ tooltipPlacement }) {
    const isActive = useMediaState('fullscreen');
    return (
        <Tooltip.Root>
            <Tooltip.Trigger asChild>
                <FullscreenButton className="vds-button">
                    {isActive ? <FullscreenExitIcon /> : <FullscreenIcon />}
                </FullscreenButton>
            </Tooltip.Trigger>
            <Tooltip.Content
                className="vds-tooltip-content"
                placement={tooltipPlacement}
            >
                {isActive ? 'Exit Fullscreen' : 'Enter Fullscreen'}
            </Tooltip.Content>
        </Tooltip.Root>
    );
}

export function Seek({ seconds, tooltipPlacement }) {
    const isBackward = seconds < 0;
    return (
        <Tooltip.Root>
            <Tooltip.Trigger asChild>
                <SeekButton className="vds-button" seconds={seconds}>
                    {isBackward ? (
                        <SeekBackward10Icon />
                    ) : (
                        <SeekForward10Icon />
                    )}
                </SeekButton>
            </Tooltip.Trigger>
            <Tooltip.Content
                className="vds-tooltip-content"
                placement={tooltipPlacement}
            >
                {isBackward ? 'Seek Backward' : 'Seek Forward'}
            </Tooltip.Content>
        </Tooltip.Root>
    );
}
