
import MapNavigator from '../components/MapNavigator';

export default function Map() {
    const levels = [
        { id: 1, name: 'Start', reputationPoints: 0 },
        { id: 2, name: 'Level 1', reputationPoints: 50 },
        { id: 3, name: 'Level 2', reputationPoints: 100 },
        { id: 4, name: 'Level 3', reputationPoints: 200 },
    ];

    return (
        <div>
            <h1>Map</h1>
            <MapNavigator levels={levels} />
        </div>
    );
}