// pages/ranking.js

import RankingList from '../components/RankingList';

export default function Ranking() {
    const rankings = [
        { name: 'Player 1', points: 1200 },
        { name: 'Player 2', points: 1000 },
        { name: 'Player 3', points: 800 },
        { name: 'Player 4', points: 600 },
    ];
    return (
        <div>
            <h1>Ranking Page</h1>
            <RankingList rankings={rankings} />
        </div>
    );
}