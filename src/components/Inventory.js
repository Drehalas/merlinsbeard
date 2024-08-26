// components/Inventory.js

import Image from 'next/image';
import styles from '../styles/Inventory.module.css';

export default function Inventory() {
    const items = [
        { id: 1, src: "/assets/images/crystal1.svg", alt: "Crystal 1", quantity: "1000/1000" },
        { id: 2, src: "/assets/images/crystal2.svg", alt: "Crystal 2", quantity: "1000/1000" },
        { id: 3, src: "/assets/images/crystal3.svg", alt: "Crystal 3", quantity: "1000/1000" },
        { id: 4, src: "/assets/images/crystal4.svg", alt: "Crystal 4", quantity: "1000/1000" },
    ];

    return (
        <div className={styles.inventoryContainer}>
            {items.map(item => (
                <div key={item.id} className={styles.inventoryItem}>
                    <Image
                        src={item.src}
                        alt={item.alt}
                        width={50}
                        height={50}
                    />
                    <span className={styles.quantity}>{item.quantity}</span>
                </div>
            ))}
        </div>
    );
}