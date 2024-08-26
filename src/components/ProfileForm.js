// components/ProfileForm.js

import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Profile.module.css';

export default function ProfileForm({ profile, onSave }) {
    const [formData, setFormData] = useState(profile);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className={styles.profileForm}>
            <h2>Profile</h2>
            {/* Using Image component for avatar */}
            <Image
                src="/images/avatar.png"  // Example avatar image
                alt="Avatar"
                width={100}  // Adjust width as needed
                height={100}  // Adjust height as needed
            />
            <input name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
            <input name="birthday" value={formData.birthday} onChange={handleChange} placeholder="Enter your birthday" />
            <button onClick={() => onSave(formData)}>Save</button>
        </div>
    );
}