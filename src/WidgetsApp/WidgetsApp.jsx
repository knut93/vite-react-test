import React from 'react'
import Accordion from './Accordion';
import Search from './Search';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front-end framework'
    },
    {
        title: 'Why use React?',
        content: 'It is a favorite among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'Create components'
    }
]

const WidgetsApp = () => {
    return (
        <div>
            <Search />
        </div>
    )
}

export default WidgetsApp;