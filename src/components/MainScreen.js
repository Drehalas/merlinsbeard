// src/components/MainScreen.js

import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import ActionSpells from '@/components/ActionSpells';
import AutoAttack from '@/components/AutoAttack';
import PointBar from '@/components/PointBar';
import Footer from '@/components/Footer';
import CharacterDisplay from '@/components/CharacterDisplay';
import StatusBar from '@/components/StatusBar';
import Inventory from '@/components/Inventory';

const MainScreen = () => {
    return (
        <div className={styles.mainScreenContainer}>
            {/* Main Screen Grid Container */}
            <div className={styles.mainScreen}>
                {/* Background Image */}
                <div className={styles.background}>
                    <Image
                        src="/assets/Images/Background.svg"
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>

                {/* Header */}
                <div className={styles.header}>
                    <Image
                        src="/assets/Images/Header.svg"
                        alt="Header"
                        layout="responsive"
                        width={500}
                        height={100}
                    />
                </div>

                {/* Orb */}
                <div className={styles.orbContainer}>
                    <Image
                        src="/assets/Images/orb.svg"
                        alt="Orb"
                        width={100}
                        height={100}
                    />
                </div>

                {/* Character Display */}
                <div className={styles.characterContainer}>
                    <Image
                        src="/assets/Images/character.svg"
                        alt="Character"
                        layout="responsive"
                        width={150}
                        height={300}
                    />
                </div>

                {/* Status Bar */}
                <div className={styles.statusBarContainer}>
                    <Image
                        src="/assets/Images/ManaBar.svg"
                        alt="Mana Bar"
                        layout="responsive"
                        width={300}
                        height={50}
                    />
                    <span className={styles.manaText}>300/500</span>
                </div>

                {/* Action Spells */}
                <div className={styles.actionSpells}>
                    <ActionSpells />
                </div>

                {/* Buff and Auto Attack Buttons */}
                <div className={styles.buttonsContainer}>
                    <Image
                        src="/assets/Images/BuffButton.svg"
                        alt="Buff"
                        width={120}
                        height={50}
                    />
                    <Image
                        src="/assets/Images/AutoButton.svg"
                        alt="Auto Attack"
                        width={80}
                        height={80}
                    />
                    <Image
                        src="/assets/Images/AutoCancelButton.svg"
                        alt="Cancel Auto Attack"
                        width={80}
                        height={80}
                    />
                </div>

                {/* Inventory Items */}
                <div className={styles.inventoryItems}>
                    <Inventory />
                </div>

                {/* Point Bar */}
                <div className={styles.pointBar}>
                    <PointBar />
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
};

export default MainScreen;
