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
    // ClosedCaptionsIcon,
    // ClosedCaptionsOnIcon,
    PictureInPictureExitIcon,
    SeekBackward10Icon,
    SeekForward10Icon,
} from '@vidstack/react/icons';
import {
    ClosedCaptionsIcon,
    ClosedCaptionsOnIcon,
    FullscreenExitIcon,
    FullscreenIcon,
    MuteIcon,
    PauseIcon,
    PlayIcon,
    VolumeHighIcon,
    VolumeLowIcon,
} from '~/components/Icon';
// import buttonStyles from './styles/button.module.css';
import tooltipStyles from './styles/tooltip.module.css';
import { IconButton, styled, useMediaQuery } from '@mui/material';

export const CustomIconButton = styled((props) => {
    const pointDownLg = useMediaQuery((theme) => theme.breakpoints.down('lg'));
    const pointDownMd = useMediaQuery((theme) => theme.breakpoints.down('md'));

    return (
        <IconButton
            component={'div'}
            size={pointDownMd ? 'small' : pointDownLg ? 'medium' : 'large'}
            sx={{
                '& svg': {
                    width: '28px',
                    height: '28px',
                },
            }}
            {...props}
        ></IconButton>
    );
})(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        svg: {
            height: '24px',
            width: '24px',
        },
    },
}));

export function Play({ tooltipPlacement }) {
    const isPaused = useMediaState('paused');
    return (
        <Tooltip.Root>
            <Tooltip.Trigger asChild>
                <PlayButton>
                    <CustomIconButton>
                        {isPaused ? <PlayIcon /> : <PauseIcon />}
                    </CustomIconButton>
                </PlayButton>
            </Tooltip.Trigger>
            <Tooltip.Content
                className={tooltipStyles.tooltip}
                placement={tooltipPlacement}
            >
                {isPaused ? 'Phát' : 'Tạm dừng'}
            </Tooltip.Content>
        </Tooltip.Root>
    );
}

export function PlayMobile() {
    const isPaused = useMediaState('paused');
    return (
        <PlayButton
            style={{
                pointerEvents: 'auto',
            }}
        >
            <CustomIconButton size={'medium'} color="secondNeutral">
                {isPaused ? <PlayIcon /> : <PauseIcon />}
            </CustomIconButton>
        </PlayButton>
    );
}

export function Mute({ tooltipPlacement }) {
    const volume = useMediaState('volume');
    const isMuted = useMediaState('muted');
    return (
        <Tooltip.Root>
            <Tooltip.Trigger asChild>
                <MuteButton>
                    <CustomIconButton>
                        {isMuted || volume === 0 ? (
                            <MuteIcon />
                        ) : volume < 0.5 ? (
                            <VolumeLowIcon />
                        ) : (
                            <VolumeHighIcon />
                        )}
                    </CustomIconButton>
                </MuteButton>
            </Tooltip.Trigger>
            <Tooltip.Content
                className={tooltipStyles.tooltip}
                placement={tooltipPlacement}
            >
                {isMuted ? 'Mở tiếng' : 'Tắt tiếng'}
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
                <CaptionButton
                // className={`caption-button ${buttonStyles.button}`}
                >
                    <CustomIconButton>
                        {isOn ? (
                            <ClosedCaptionsOnIcon />
                        ) : (
                            <ClosedCaptionsIcon />
                        )}
                    </CustomIconButton>
                </CaptionButton>
            </Tooltip.Trigger>
            <Tooltip.Content
                className={tooltipStyles.tooltip}
                placement={tooltipPlacement}
            >
                {isOn ? 'Tắt phụ đề' : 'Bật phụ đề'}
            </Tooltip.Content>
        </Tooltip.Root>
    );
}

export function PIP({ tooltipPlacement }) {
    const isActive = useMediaState('pictureInPicture');
    return (
        <Tooltip.Root>
            <Tooltip.Trigger asChild>
                <PIPButton>
                    <CustomIconButton>
                        {isActive ? (
                            <PictureInPictureExitIcon />
                        ) : (
                            <svg
                                fill="none"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2 6.25C2 4.45507 3.45507 3 5.25 3H18.75C20.5449 3 22 4.45507 22 6.25V12H20.5V6.25C20.5 5.2835 19.7165 4.5 18.75 4.5H5.25C4.2835 4.5 3.5 5.2835 3.5 6.25V15.75C3.5 16.7165 4.2835 17.5 5.25 17.5H11V19H5.25C3.45507 19 2 17.5449 2 15.75V6.25ZM14 13C12.8954 13 12 13.8954 12 15V20C12 21.1046 12.8954 22 14 22H21C22.1046 22 23 21.1046 23 20V15C23 13.8954 22.1046 13 21 13H14Z"
                                    fill="#fff"
                                />
                            </svg>
                        )}
                    </CustomIconButton>
                </PIPButton>
            </Tooltip.Trigger>
            <Tooltip.Content
                className={tooltipStyles.tooltip}
                placement={tooltipPlacement}
            >
                {isActive ? 'Thoát trong nền' : 'Bật trong nền'}
            </Tooltip.Content>
        </Tooltip.Root>
    );
}

export function Fullscreen({ tooltipPlacement }) {
    const isActive = useMediaState('fullscreen');
    return (
        <Tooltip.Root>
            <Tooltip.Trigger asChild>
                <FullscreenButton>
                    <CustomIconButton>
                        {isActive ? <FullscreenExitIcon /> : <FullscreenIcon />}
                    </CustomIconButton>
                </FullscreenButton>
            </Tooltip.Trigger>
            <Tooltip.Content
                className={tooltipStyles.tooltip}
                placement={tooltipPlacement}
            >
                {isActive ? 'Thoát toàn màn hình' : 'Toàn màn hình'}
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
