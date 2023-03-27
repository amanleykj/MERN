import React, { useState } from 'react';

const Display = (props) => {

    const { todoList, setTodoList } = props

    const toggleItem = (newTodoItem) => {
        const updatedItemList = todoList.map((todoItem) => {
            if(todoItem === newTodoItem){
                todoItem.doneItem = !todoItem.doneItem
            }
            return todoItem
        })
        setTodoList(updatedItemList)
    }
    
    const deleteHandler = (item) => {
        const updatedItemList = todoList.filter((todoItem) => todoItem !== item)
        setTodoList(updatedItemList)
    }
    
    return (
        <div>
            <h1>Anthony's To-Do List</h1>
            {
            todoList.map((item, index) => (
                <div className='container-sm' key = {index}>
                    {
                    item.doneItem?
                    <h2 className='line-through'>Task: {item.title}</h2>:
                    <h2>Task: {item.title}</h2>
                }
                    <span>Finished doing this? </span>
                    <input type="checkbox" className='form-check-input mt-0' name = 'doneItem' checked = {item.doneItem} onClick = {() => toggleItem(item)} />
                    <button className='btn btn-danger' onClick = {() => deleteHandler(item)}> Delete </button>
                </div>
                ))
            }  
        </div>
    )
}
export default Display;