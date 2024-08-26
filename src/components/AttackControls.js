// components/AttackControls.js

import Image from 'next/image';
import styles from '../styles/Attack.module.css';

export default function AttackControls({ onAttack, isAuto }) {
    return (
        <div className={styles.attackOptions}>
            {/* Using Image components for different attack options */}
            <button className={styles.attackButton} onClick={() => onAttack('normal')}>
                <Image
                    src="/images/normal-attack.png"  // Example image for normal attack
                    alt="Normal Attack"
                    width={60}  // Adjust width as needed
                    height={60}  // Adjust height as needed
                />
                Normal Attack
            </button>
            <button className={styles.attackButton} onClick={() => onAttack('special')}>
                <Image
                    src="/images/special-attack.png"  // Example image for special attack
                    alt="Special Attack"
                    width={60}  // Adjust width as needed
                    height={60}  // Adjust height as needed
                />
                Special Attack
            </button>
            {isAuto && (
                <button className={styles.attackButton} onClick={() => onAttack('auto')}>
                    <Image
                        src="/images/auto-attack.png"  // Example image for auto attack
                        alt="Auto Attack"
                        width={60}  // Adjust width as needed
                        height={60}  // Adjust height as needed
                    />
                    Auto Attack
                </button>
            )}
        </div>
    );
}