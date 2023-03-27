import React, { useState } from 'react';

const TabForm = (props) => {

    const { tabArray, setTabArray} = props;

    const [ tab, setTab ] = useState({
        label : '',
        content : ''
    })

    const changeHandler = (e) => {
        setTab(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setTabArray([...tabArray, tab]);

}

    return (
        <div>
            <h1>Add New Tabs Now</h1>

            <form onSubmit = {submitHandler} id='first_tab'>

                <label htmlFor="label">Tab 1 Label: </label>
                <input type = "text" name = 'tab_label' onChange = {changeHandler} />

                <label htmlFor="content">Tab 1 Content: </label>
                <input type = "text" name = 'tab_content' onChange = {changeHandler} />

                <button>Add this tab</button>

            </form>

            <form onSubmit = {submitHandler} id='second_tab'>

                <label htmlFor="label">Tab 2 Label: </label>
                <input type = "text" name = 'tab_label' onChange = {changeHandler} />

                <label htmlFor="content">Tab 2 Content: </label>
                <input type = "text" name = 'tab_content' onChange = {changeHandler} />

                <button>Add this tab</button>

            </form>

            <form onSubmit = {submitHandler} id='third_tab'>

                <label htmlFor="label">Tab 3 Label: </label>
                <input type = "text" name = 'tab_label' onChange = {changeHandler} />

                <label htmlFor="content">Tab 3 Content: </label>
                <input type = "text" name = 'tab_content' onChange = {changeHandler} />

                <button>Add this tab</button>

            </form>

        </div>
    );
}

export default TabForm;
