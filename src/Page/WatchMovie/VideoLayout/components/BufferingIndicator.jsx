import { Spinner } from '@vidstack/react';
import styles from './styles/BufferingIndicator.module.css';
export function BufferingIndicator() {
    return (
        <div className={styles.mediaBufferingIndicator}>
            <Spinner.Root className={styles.mediaBufferingSpinner} size={80}>
                <Spinner.Track
                    className={styles.mediaBufferingTrack}
                    width={10}
                />
                <Spinner.TrackFill
                    className={styles.mediaBufferingTrackFill}
                    width={10}
                />
            </Spinner.Root>
        </div>
    );
}
