// src/components/AutoAttack.js

import Image from 'next/image';
import styles from '@/styles/AutoAttack.module.css';
import PropTypes from 'prop-types';

const AutoAttack = ({ config }) => {
    return (
        <div className={styles.autoAttackContainer}>
            <Image
                src="/assets/images/auto-attack-icon.svg" // Example icon
                alt="Auto Attack"
                width={60}
                height={60}
            />
            <div className={styles.autoAttackSettings}>
                {config.map((item) => (
                    <div key={item.id} className={styles.autoAttackItem}>
                        <Image
                            src={item.icon}
                            alt={item.label}
                            width={40}
                            height={40}
                            className={styles.autoAttackIcon}
                        />
                        <span className={styles.autoAttackLabel}>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Default Props for Config
AutoAttack.defaultProps = {
    config: [
        { id: 1, icon: "/assets/images/attack1.svg", label: "Quick Attack" },
        { id: 2, icon: "/assets/images/attack2.svg", label: "Power Attack" },
    ],
};

// PropTypes for Type Checking
AutoAttack.propTypes = {
    config: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            icon: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    ),
};

export default AutoAttack;