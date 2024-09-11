// components/TaskList.js

import Image from 'next/image';
import styles from '../styles/Task.module.css';

export default function TaskList({ tasks, onComplete }) {
    return (
        <div className={styles.taskListContainer}>
            {tasks.map(task => (
                <div key={task.id} className={styles.taskItem}>
                    {/* Using Image component for task_ranking icons */}
                    <Image
                        src="/images/task-icon.png"  // Example task_ranking icon image
                        alt="Task Icon"
                        width={30}  // Adjust width as needed
                        height={30}  // Adjust height as needed
                    />
                    <span>{task.description}</span>
                    <button onClick={() => onComplete(task.id)}>Complete</button>
                </div>
            ))}
        </div>
    );
}