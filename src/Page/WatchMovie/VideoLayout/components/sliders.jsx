import { TimeSlider, VolumeSlider } from '@vidstack/react';
import styles from './styles/slider.module.css';
export function Volume() {
    return (
        <VolumeSlider.Root
            className={`volume-slider ${styles.slider} ${styles.sliderSmall}`}
        >
            <VolumeSlider.Track className={styles.track} />
            <VolumeSlider.TrackFill
                className={`${styles.trackFill} ${styles.track}`}
            />
            <VolumeSlider.Preview className={styles.preview} noClamp>
                <VolumeSlider.Value className={styles.volumeValue} />
            </VolumeSlider.Preview>
            <VolumeSlider.Thumb className={styles.thumb} />
        </VolumeSlider.Root>
    );
}

export function Time({ thumbnails }) {
    return (
        <TimeSlider.Root className={`time-slider ${styles.slider}`}>
            <TimeSlider.Chapters className={styles.chapters}>
                {(cues, forwardRef) =>
                    cues.map((cue) => (
                        <div
                            className={styles.chapter}
                            key={cue.startTime}
                            ref={forwardRef}
                        >
                            <TimeSlider.Track className={styles.track} />
                            <TimeSlider.TrackFill
                                className={`${styles.trackFill} ${styles.track}`}
                            />
                            <TimeSlider.Progress
                                className={`${styles.progress} ${styles.track}`}
                            />
                        </div>
                    ))
                }
            </TimeSlider.Chapters>

            <TimeSlider.Thumb className={styles.thumb} />

            <TimeSlider.Preview className={styles.preview}>
                {thumbnails ? (
                    <TimeSlider.Thumbnail.Root
                        src={thumbnails}
                        className={styles.thumbnail}
                    >
                        <TimeSlider.Thumbnail.Img />
                    </TimeSlider.Thumbnail.Root>
                ) : null}

                <TimeSlider.ChapterTitle className={styles.chapterTitle} />

                <TimeSlider.Value className={styles.timeValue} />
            </TimeSlider.Preview>
        </TimeSlider.Root>
    );
}
