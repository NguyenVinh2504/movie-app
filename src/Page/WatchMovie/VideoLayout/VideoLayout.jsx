import styles from './video-layout.module.css';

import { Captions, Controls, Gesture } from '@vidstack/react';

import * as Buttons from './components/buttons';
import * as Menus from './components/menus';
import * as Sliders from './components/sliders';
import { TimeGroup } from './components/time-group';
import { Box, useMediaQuery } from '@mui/material';

import { BufferingIndicator } from './components/BufferingIndicator';
function VideoLayout() {
    const isMobile = useMediaQuery('(max-width: 767.98px)');
    return (
        <>
            <Gestures />
            <BufferingIndicator />
            <Captions className={styles.captions} />
            {!isMobile ? <ControlsDesktop /> : <ControlsMobile />}
        </>
    );
}

function ControlsDesktop() {
    return (
        <Controls.Root className={styles.controls}>
            <div className={styles.spacer} />
            <Controls.Group className={styles.controlsGroup}>
                <Sliders.Time />
            </Controls.Group>
            <Controls.Group className={styles.controlsGroup}>
                <Buttons.Play tooltipPlacement="top start" />
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        '@media (hover: hover) and (pointer: fine)': {
                            '&:hover .volume-slider': {
                                width: '72px',
                            },
                        },
                        '@media (hover: none) and (pointer: coarse)': {
                            '& .volume-slider': {
                                width: '72px',
                            },
                        },
                    }}
                >
                    <Buttons.Mute tooltipPlacement="top" />
                    <Sliders.Volume />
                </Box>
                <TimeGroup />
                <div className={styles.spacer} />
                <Buttons.Caption tooltipPlacement="top" />
                <Buttons.PIP tooltipPlacement="top" />
                <Menus.Settings placement="top end" tooltipPlacement="top" />
                <Buttons.Fullscreen tooltipPlacement="top end" />
            </Controls.Group>
        </Controls.Root>
    );
}

function ControlsMobile() {
    return (
        <Controls.Root className={styles.controls}>
            <Controls.Group className={styles.controlsGroup}>
                <Buttons.PIP tooltipPlacement="top" />
                <div className={styles.spacer} />
                <Buttons.Caption tooltipPlacement="top" />
                <Menus.SettingsMobile
                    placement="top end"
                    tooltipPlacement="top"
                />
            </Controls.Group>
            <div className={styles.spacer} />
            <Controls.Group
                className={styles.controlsGroup}
                style={{
                    pointerEvents: 'none',
                }}
            >
                <div className={styles.spacer} />
                <Buttons.PlayMobile />
                <div className={styles.spacer} />
            </Controls.Group>
            <div className={styles.spacer} />
            <Controls.Group className={styles.controlsGroup}>
                <TimeGroup />
                <div className={styles.spacer} />
                <Buttons.Fullscreen tooltipPlacement="top end" />
            </Controls.Group>
            <Controls.Group className={styles.controlsGroup}>
                <Sliders.Time />
            </Controls.Group>
        </Controls.Root>
    );
}

function Gestures() {
    return (
        <>
            <Gesture
                className={styles.gesture}
                event="pointerup"
                action="toggle:paused"
            />
            <Gesture
                className={styles.gesture}
                event="dblpointerup"
                action="toggle:fullscreen"
            />
            <Gesture
                className={styles.gesture}
                event="pointerup"
                action="toggle:controls"
            />
            <Gesture
                className={styles.gesture}
                event="dblpointerup"
                action="seek:-10"
            />
            <Gesture
                className={styles.gesture}
                event="dblpointerup"
                action="seek:10"
            />
        </>
    );
}

export default VideoLayout;
