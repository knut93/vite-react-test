import React from 'react';
import Button from './Button';
import { IoIosAmericanFootball } from "react-icons/io";
import Accordion from './Accordion';

const items = [
    {
        label: 'What is React?',
        content: 'React is a front-end framework'
    },
    {
        label: 'Why use React?',
        content: 'It is a favorite among engineers'
    },
    {
        label: 'How do you use React?',
        content: 'Create components'
    }
]

function CompsApp() {

    return (
        <div>
            <Accordion items={items}/>
        </div>
        
    )
}

export default CompsApp;