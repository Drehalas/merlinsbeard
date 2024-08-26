// components/CharacterDisplay.js

import Image from 'next/image';
import styles from '../styles/CharacterDisplay.module.css';

export default function CharacterDisplay() {
    return (
        <div className={styles.characterContainer}>
            {/* Orb Display */}
            <Image
                src="/assets/images/orb.svg"  // Example image for the orb
                alt="Magic Orb"
                width={150}
                height={150}
                className={styles.orb}
            />

            {/* Character Image */}
            <Image
                src="/assets/images/character.svg"  // Example image for the character
                alt="Main Character"
                width={200}
                height={300}
                className={styles.character}
            />
        </div>
    );
}