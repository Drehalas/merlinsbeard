// components/ActionSpells.js

import Image from 'next/image';
import styles from '../styles/ActionSpells.module.css';

export default function ActionSpells() {
    const spells = [
        { id: 1, src: "/assets/images/Spell-fire.svg", alt: "Spell 1", level: 2 },
        { id: 2, src: "/assets/images/Spell-ice.svg", alt: "Spell 2", level: 2 },
        { id: 3, src: "/assets/images/Spell-wind.svg", alt: "Spell 3", level: 2 },
    ];

    return (
        <div className={styles.spellsContainer}>
            {spells.map(spell => (
                <div key={spell.id} className={styles.spell}>
                    <Image
                        src={spell.src}
                        alt={spell.alt}
                        width={60}
                        height={60}
                    />
                    <span className={styles.level}>Lv{spell.level}</span>
                </div>
            ))}
        </div>
    );
}