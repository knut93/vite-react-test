import React from 'react';
import Accordion from '../components/Accordion';

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

function AccordionPage() {

    return (
        <div>
            <Accordion items={items}/>
        </div>
        
    )
}

export default AccordionPage;