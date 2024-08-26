// src/components/PointBar.js

import Image from 'next/image';
import styles from '@/styles/PointBar.module.css';
import PropTypes from 'prop-types';

const PointBar = ({ points, maxPoints, label, barImage }) => {
    // Calculate the width of the bar based on the current points
    const barWidth = (points / maxPoints) * 100;

    return (
        <div className={styles.pointBarContainer}>
            <span className={styles.label}>{label}</span>
            <div className={styles.barBackground}>
                <div className={styles.barFill} style={{ width: `${barWidth}%` }} />
                <Image
                    src={barImage}
                    alt={`${label} Bar`}
                    layout="fill"
                    objectFit="cover"
                    className={styles.barOverlay}
                />
            </div>
            <span className={styles.pointsText}>
        {points} / {maxPoints}
      </span>
        </div>
    );
};

// Default Props
PointBar.defaultProps = {
    points: 300,
    maxPoints: 500,
    label: 'Mana',
    barImage: '/assets/images/bar-background.svg',
};

// PropTypes for Type Checking
PointBar.propTypes = {
    points: PropTypes.number.isRequired,
    maxPoints: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    barImage: PropTypes.string.isRequired,
};

export default PointBar;