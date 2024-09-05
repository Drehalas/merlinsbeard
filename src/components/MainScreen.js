// src/components/mainscreen.js

import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import ActionSpells from '@/components/ActionSpells';
import StatusBar from '@/components/StatusBar';
import CharacterDisplay from '@/components/CharacterDisplay';
import Inventory from '@/components/Inventory';
import PointBar from '@/components/PointBar';
import Footer from '@/components/Footer';

const MainScreen = () => {
    return (
        <div className={styles.mainScreenContainer}>
            <div className={styles.mainScreen}>
                {/* Background image */}
                <div className={styles.background}>
                    <Image
                        src="/assets/Images/Background.svg"
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>

                {/* Update Header Here */}
                <div className={styles.header}>
                    <Image
                        src="/assets/Images/Header.svg"
                        alt="Header"
                        layout="responsive" /* Ensure image is responsive */
                        width={1500} /* Increase width to ensure it spans full width */
                        height={100} /* Maintain the aspect ratio */
                    />
                </div>

                {/* Orb as a background layer */}
                <div className={styles.orbBackground}>
                    <Image
                        src="/assets/Images/orb.svg"
                        alt="Orb"
                        width={190}
                        height={190}
                    />
                </div>

                {/* AutoStop Button */}
                <div className={styles.autoStopButton}>
                    <Image
                        src="/assets/Images/AutoCancelButton.svg"  // Make sure this image exists
                        alt="Auto Stop"
                        width={100}  // Adjust size as needed
                        height={50}  // Adjust size as needed
                    />
                </div>

                {/* Action spells section */}
                <div className={styles.actionSpells}>
                    <ActionSpells/>
                </div>

                {/* Status bar section */}
                <div className={styles.statusBarContainer}>
                    <StatusBar/>
                </div>

                {/* Character display section */}
                <div className={styles.characterContainer}>
                    <CharacterDisplay/>
                </div>

                {/* Crystals */}
                <div className={styles.crystal1}>
                    <Image
                        src="/assets/Images/Crystal1.svg"
                        alt="Crystal 1"
                        width={80}
                        height={80}
                    />
                </div>
                <div className={styles.crystal2}>
                    <Image
                        src="/assets/Images/Crystal2.svg"
                        alt="Crystal 2"
                        width={80}
                        height={80}
                    />
                </div>
                <div className={styles.crystal3}>
                    <Image
                        src="/assets/Images/Crystal3.svg"
                        alt="Crystal 3"
                        width={80}
                        height={80}
                    />
                </div>
                <div className={styles.crystal4}>
                    <Image
                        src="/assets/Images/Crystal4.svg"
                        alt="Crystal 4"
                        width={80}
                        height={80}
                    />
                </div>

                {/* Buttons Section */}
                <div className={styles.leftButton}>
                    <Image
                        src="/assets/Images/BuffButton.svg"
                        alt="Buff Button"
                        width={80}
                        height={80}
                        className={styles.button}
                    />
                </div>
                <div className={styles.rightButton}>
                    <Image
                        src="/assets/Images/AutoButton.svg"
                        alt="Auto Button"
                        width={80}
                        height={80}
                        className={styles.button}
                    />
                </div>

                {/* Footer section */}
                <div className={styles.footer}>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default MainScreen;