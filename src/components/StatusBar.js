// components/StatusBar.js

import styles from '../styles/StatusBar.module.css';

export default function StatusBar({ current, max }) {
    const percentage = (current / max) * 100;

    return (
        <div className={styles.statusBarContainer}>
            <div className={styles.statusBar} style={{ width: `${percentage}%` }}>
                {current}/{max}
            </div>
        </div>
    );
}