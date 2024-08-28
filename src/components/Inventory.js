// components/Inventory.js

import Image from 'next/image';
import styles from '@/styles/Inventory.module.css';

const Inventory = () => {
    return (
        <div className={styles.inventoryContainer}>
            {['Crystal1.svg', 'Crystal2.svg', 'Crystal3.svg', 'Crystal4.svg'].map((item, index) => (
                <div className={styles.inventoryItem} key={index}>
                    <Image
                        src={`/assets/Images/${item}`}
                        alt={`Inventory Item ${index + 1}`}
                        width={60}
                        height={60}
                        layout="responsive"
                    />
                    <p className={styles.itemText}>1000/1000</p>
                </div>
            ))}
        </div>
    );
};

export default Inventory;