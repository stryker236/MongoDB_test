import React, { useState } from 'react';
import axios from 'axios';

const InputBox = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitting:', inputValue);

        axios.post('/api', {
            name: inputValue,
            description: 'Qualquer coisa'
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error('There was an error making the POST request!', error);
        });

        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleChange} 
                placeholder="Enter text here"
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default InputBox;