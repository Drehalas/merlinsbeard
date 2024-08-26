// pages/task.js

import TaskList from '../components/TaskList';

export default function Task() {
    const tasks = [
        { id: 1, description: 'Follow Twitter' },
        { id: 2, description: 'Join Discord Channel' },
        { id: 3, description: 'Join Telegram Announcement Channel' },
    ];

    const handleComplete = (taskId) => {
        console.log('Task completed:', taskId);
        // Here, you would handle the logic to update task status and give rewards.
    };

    return (
        <div>
            <h1>Task Page</h1>
            <TaskList tasks={tasks} onComplete={handleComplete} />
        </div>
    );
}