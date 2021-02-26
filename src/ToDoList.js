import React from 'react';
const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }


    return (
        <div>
            <button style={{ margin: '20px' }} onClick={handleFilter}>Clear Completed</button>

            {toDoList.map(todo => {
                return (
                    <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? "todo strike" : "todo"}>
                        {todo.task}
                    </div>

                )
            })}

        </div>
    );
};

export default ToDoList;