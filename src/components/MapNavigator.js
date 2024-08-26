// components/MapNavigator.js

import Image from 'next/image';
import styles from '../styles/Map.module.css';

export default function MapNavigator({ levels }) {
    return (
        <div className={styles.mapContainer}>
            {levels.map(level => (
                <div key={level.id} className={styles.level}>
                    <div className={styles.levelInfo}>
                        {/* Using Image component for level icons */}
                        <Image
                            src="/images/level-icon.png"  // Example icon for each level
                            alt={`Icon for ${level.name}`}
                            width={50}  // Adjust width as needed
                            height={50}  // Adjust height as needed
                        />
                        <span className={styles.levelName}>{level.name}</span>
                        <span className={styles.reputationPoints}>{level.reputationPoints} Reputation Points</span>
                    </div>
                </div>
            ))}
        </div>
    );
}