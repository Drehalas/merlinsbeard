// components/RankingList.js

import Image from 'next/image';
import styles from '../styles/Ranking.module.css';

export default function RankingList({ rankings }) {
    return (
        <div className={styles.rankingContainer}>
            <ul className={styles.rankingList}>
                {rankings.map((player, index) => (
                    <li key={index} className={styles.rankingItem}>
                        {/* Using Image component for player icons */}
                        <Image
                            src="/images/player-icon.png"  // Example player icon image
                            alt={`Player ${player.name}`}
                            width={40}  // Adjust width as needed
                            height={40}  // Adjust height as needed
                        />
                        <span className={styles.rank}>#{index + 1}</span>
                        <span className={styles.playerName}>{player.name}</span>
                        <span className={styles.points}>{player.points}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}