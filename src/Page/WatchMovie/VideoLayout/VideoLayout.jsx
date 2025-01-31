import styles from './video-layout.module.css';

import { Captions, ChapterTitle, Controls, Gesture } from '@vidstack/react';

import * as Buttons from './components/buttons';
import * as Menus from './components/menus';
import * as Sliders from './components/sliders';
import { TimeGroup } from './components/time-group';

function VideoLayout() {
    return (
        <>
            <Gestures />
            <Captions className={`${styles.captions} vds-captions`} />
            <Controls.Root className={`${styles.controls} vds-controls`}>
                <div className="vds-controls-spacer" />
                <Controls.Group
                    className={`${styles.controlsGroup} vds-controls-group`}
                >
                    <Sliders.Time />
                </Controls.Group>
                <Controls.Group
                    className={`${styles.controlsGroup} vds-controls-group`}
                >
                    <Buttons.Play tooltipPlacement="top start" />
                    <Buttons.Mute tooltipPlacement="top" />
                    <Sliders.Volume />
                    <TimeGroup />
                    <ChapterTitle className="vds-chapter-title" />
                    <div className="vds-controls-spacer" />
                    <Buttons.Caption tooltipPlacement="top" />
                    <Menus.Settings
                        placement="top end"
                        tooltipPlacement="top"
                    />
                    <Buttons.PIP tooltipPlacement="top" />
                    <Buttons.Fullscreen tooltipPlacement="top end" />
                </Controls.Group>
            </Controls.Root>
        </>
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
