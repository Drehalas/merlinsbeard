// src/components/Footer.js

import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Footer.module.css';
import PropTypes from 'prop-types';

// Destructure props and assign default values directly in the function parameters
const Footer = ({ menuItems = [
    { id: 1, icon: "/assets/images/icon-attack.svg", label: "Attack", href: "/attack" },
    { id: 2, icon: "/assets/images/icon-inventory.svg", label: "Inventory", href: "/inventory" },
    { id: 3, icon: "/assets/images/icon-map.svg", label: "Map", href: "/map" },
    { id: 4, icon: "/assets/images/icon-task_ranking.svg", label: "Task", href: "/task_ranking" },
    { id: 5, icon: "/assets/images/icon-ranking.svg", label: "ranking", href: "/ranking" },
    { id: 6, icon: "/assets/images/icon-profile.svg", label: "Profile", href: "/profile" },
] }) => {
    return (
        <footer className={styles.footer}>
            <nav className={styles.footerNav}>
                {menuItems.map((item) => (
                    <Link key={item.id} href={item.href} className={styles.navItem}>
                        <Image
                            src={item.icon}
                            alt={item.label}
                            width={40}
                            height={40}
                            className={styles.navIcon}
                        />
                        <span className={styles.navLabel}>{item.label}</span>
                    </Link>
                ))}
            </nav>
        </footer>
    );
};

// PropTypes for Type Checking
Footer.propTypes = {
    menuItems: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            icon: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        })
    ),
};

export default Footer;