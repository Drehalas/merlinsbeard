// pages/attack.js

import AttackControls from '../components/AttackControls';

export default function Attack() {
    const handleAttack = (type) => {
        console.log('Attack type:', type);
        // Here, you would handle the attack logic.
    };

    return (
        <div>
            <h1>Attack Page</h1>
            <AttackControls onAttack={handleAttack} isAuto={true} />
        </div>
    );
}