import React, { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ({onSubmit}) => {
    const [inputText, setInputText] = useState('')

    const handleInput = (e) => setInputText(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault()

        if(inputText.trim().length > 2){
            onSubmit(inputText)
            setInputText('')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name="name" type="text" value={inputText} onChange={handleInput} placeholder="Add a category..."/>
            </form>
        </>
    );
};

AddCategory.propTypes = {
    onSubmit: PropTypes.func.isRequired
}