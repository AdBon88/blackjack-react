import React, { Component } from 'react';

function ToDoListTable(props) {
    return (
    <div>
        <table className='table table-striped' aria-labelledby="tableLabel">
        <thead>
            <tr>
            <th>Task No.</th>
            <th>Description</th>
            </tr>
        </thead>
        <tbody>
            {props.toDoItems.map(item =>
            <tr>
                <td>{props.toDoItems.indexOf(item) + 1 }</td>
                <td>{item.description}</td>
            </tr>
            )}
        </tbody>
        </table>
    </div>
    )
}

export default ToDoListTable;