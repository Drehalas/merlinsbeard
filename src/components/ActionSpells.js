// components/ActionSpells.js

import Image from 'next/image';
import styles from '@/styles/ActionSpells.module.css';
import PropTypes from 'prop-types';

const ActionSpells = () => {
    const spells = [
        { id: 1, src: "/assets/images/Spell-fire.svg", alt: "Fire Spell", level: 2 },
        { id: 2, src: "/assets/images/Spell-ice.svg", alt: "Ice Spell", level: 2 },
        { id: 3, src: "/assets/images/Spell-wind.svg", alt: "Wind Spell", level: 2 },
    ];

    return (
        <div className={styles.spellsContainer}>
            {spells.map((spell) => (
                <div key={spell.id} className={styles.spell}>
                    <Image
                        src={spell.src}
                        alt={spell.alt}
                        width={60}
                        height={60}
                        onError={(e) => e.target.src = '/assets/images/placeholder.svg'} // Optional: Placeholder on error
                    />
                    <span className={styles.level}>Lv{spell.level}</span>
                </div>
            ))}
        </div>
    );
};

export default ActionSpells;

// Optional: PropTypes
ActionSpells.propTypes = {
    spells: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            src: PropTypes.string.isRequired,
            alt: PropTypes.string.isRequired,
            level: PropTypes.number.isRequired,
        })
    ),
};