import React from 'react';
import Todo from '../components/Todo';
import styles from './TodosPage.module.css';

const TodosPage = () => {
    const todos = ["todo 1", "todo 2", "todo 3"];

    return (
        <div className={styles.todosPage}>
            {todos.map((todo, index) => (
                <Todo key={index} todo={todo} />
            ))}
        </div>
    );
};

export default TodosPage;
