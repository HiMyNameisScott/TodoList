import React from 'react';
import reactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';

var destination = document.querySelector("#container")

reactDOM.render(
    <div>
        <TodoList />
    </div>,
    destination
)
