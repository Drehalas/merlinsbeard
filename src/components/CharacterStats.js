// Import the Image component from Next.js
import Image from 'next/image';

// Usage in a component (CharacterStats.js)
export default function CharacterStats({ stats }) {
    return (
        <div className="stats">
            <h2>Stats</h2>
            {/* Example using Next.js Image component for optimization */}
            <Image
                src="/assets/images/character.svg"  // Path to the image in the public folder
                alt="Character"
                width={200}    // Desired width of the image
                height={200}   // Desired height of the image
            />
            <p>Power: {stats.power}</p>
            <p>Intelligence: {stats.intelligence}</p>
            <p>Total Damage: {stats.totalDamage}</p>
            <p>Reputation Points: {stats.reputationPoints}</p>
            <p>Level: {stats.level}</p>
        </div>
    );
}