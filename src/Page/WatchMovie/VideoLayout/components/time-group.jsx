import { Time } from '@vidstack/react';
import styles from './styles/time-group.module.css';

export function TimeGroup() {
    return (
        <div className={styles.group}>
            <Time className={styles.time} type="current" />
            <div className={styles.divider}>/</div>
            <Time className={styles.time} type="duration" />
        </div>
    );
}
