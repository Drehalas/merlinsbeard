// components/CharacterDisplay.js

import Image from 'next/image';
import styles from '@/styles/CharacterDisplay.module.css';

const CharacterDisplay = () => {
    return (
        <div className={styles.characterContainer}>

            <Image
                src="/assets/Images/character.svg"
                alt="Character"
                width={200}
                height={400}
                layout="intrinsic"
                className={styles.character}
            />
        </div>
    );
};

export default CharacterDisplay;