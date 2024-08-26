// components/MainScreen.js


import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import ActionSpells from '@/components/ActionSpells'; // Corrected from SkillsBar to ActionSpells
import AutoAttack from '@/components/AutoAttack';
import PointBar from '@/components/PointBar';
import Footer from '@/components/Footer';
import CharacterDisplay from '@/components/CharacterDisplay';
import StatusBar from '@/components/StatusBar';
import Inventory from '@/components/Inventory';


const MainScreen = () => {
    return (
        <div className={styles.mainScreen}>
            {/* Background Image */}
            <Image
                className={styles.background}
                src="/assets/Images/Background.svg"
                alt="Background"
                layout="fill"
                objectFit="cover"
                priority // Ensures this image loads quickly
            />

            {/* Header */}
            <Image
                className={styles.header}
                src="/assets/Images/Header.svg"
                alt="Header"
                layout="responsive"
                width={500}
                height={100}
            />

            {/* Character and Orb */}
            <CharacterDisplay />

            {/* Status Bar */}
            <StatusBar />

            {/* Action Spells */}
            <ActionSpells /> {/* Updated to use the correct component */}

            {/* Action Buttons */}
            <div className={styles.actionButtonsContainer}>
                <Image
                    className={styles.actionButton}
                    src="/assets/Images/BuffButton.svg"
                    alt="Buff Button"
                    layout="responsive"
                    width={120}
                    height={60}
                />
                <Image
                    className={styles.actionButton}
                    src="/assets/Images/AutoButton.svg"
                    alt="Auto Button"
                    layout="responsive"
                    width={120}
                    height={60}
                />
            </div>

            {/* Inventory Items */}
            <Inventory />

            {/* Point Bar and Main Menu */}
            <PointBar />
            <Footer />

            {/* Footer */}
            <Image
                className={styles.footer}
                src="/assets/Images/footer.svg"
                alt="Footer"
                layout="responsive"
                width={500}
                height={100}
            />
        </div>
    );
};

export default MainScreen;