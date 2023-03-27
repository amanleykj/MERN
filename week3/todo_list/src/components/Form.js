import React, { useState } from 'react';

const Form = (props) => {

    const { todoList, setTodoList } = props;
    
    const [ newTodoItem, setNewTodoItem ] = useState({
        title : '',
        doneItem : false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodoList([...todoList, newTodoItem]);
        setNewTodoItem({
            title : '',
            doneItem : false
        });
    }

    const changeHandler = (e) => {
        if(e.target.type === 'checkbox'){
            setNewTodoItem({...newTodoItem, doneItem : !newTodoItem.doneItem})
        }
        else{
            setNewTodoItem({...newTodoItem, [e.target.name]:e.target.value})
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>

                <h1>Add To-Do Item</h1>

                <div>
                    <label>Title: </label>
                    <input type="text" name = 'title' className='mb-3' value = {newTodoItem.title} onChange = {changeHandler}/> 
                </div>

                {/* <div>
                    <label>To-do Details: </label>
                    <input type="text" name = 'details' className='mb-3' value = {newTodoItem.details} onChange = {changeHandler}/>
                </div> */}
{/* 
                <div>
                    <label>Watched? </label>
                    <input type="checkbox" className="form-check-input mt-0" name = 'doneItem' checked = {newTodoItem.doneItem} onChange = {changeHandler}/>
                </div> */}
                
                <button className='btn btn-primary'>Add</button>

            </form>
        </div>

    );
}

export default Form;
