// components/Footer.js

import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.footerNav}>
                <Link href="/attack">
                    <Image src="/assets/images/icon-attack.svg" alt="Attack" width={40} height={40}/>
                </Link>
                <Link href="/merlinsbeard/src/components/Inventory">
                    <Image src="/assets/images/icon-inventory.svg" alt="Inventory" width={40} height={40}/>
                </Link>
                <Link href="/map">
                    <Image src="/assets/images/icon-map.svg" alt="Map" width={40} height={40}/>
                </Link>
                <Link href="/task">
                    <Image src="/assets/images/icon-task.svg" alt="Task" width={40} height={40}/>
                </Link>
                <Link href="/ranking">
                    <Image src="/assets/images/icon-ranking.svg" alt="Ranking" width={40} height={40}/>
                </Link>
                <Link href="/profile">
                    <Image src="/assets/images/icon-profile.svg" alt="Profile" width={40} height={40}/>
                </Link>
            </nav>
        </footer>
    );
}
