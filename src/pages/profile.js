// pages/profile.js

import ProfileForm from '../components/ProfileForm';

export default function Profile() {
    const profile = {
        email: '',
        name: '',
        birthday: '',
    };

    const handleSave = (data) => {
        console.log('Profile saved:', data);
        // Here, you would handle the logic to save profile data.
    };

    return (
        <div>
            <h1>Profile Page</h1>
            <ProfileForm profile={profile} onSave={handleSave} />
        </div>
    );
}