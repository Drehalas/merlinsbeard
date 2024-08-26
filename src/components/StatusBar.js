// components/StatusBar.js

import Image from 'next/image';
import styles from '@/styles/StatusBar.module.css';

const StatusBar = () => {
    return (
        <div className={styles.statusBarContainer}>
            <Image
                src="/assets/Images/ManaBar.svg"
                alt="Mana Bar"
                width={300}
                height={30}
                layout="responsive"
                className={styles.statusBar}
            />
            <p className={styles.statusText}>300/500</p>
        </div>
    );
};

export default StatusBar;