import React, { useState } from 'react'
import Accordion from './Accordion';
import Search from './Search';
import Dropdown from './Dropdown';
import Translate from './Translate';

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

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    },
]

const WidgetsApp = () => {
    /*
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);
    */
    return (
        /*
        <div>
            <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {showDropdown ? 
                <Dropdown
                    selected={selected}
                    onSelectedChange={setSelected} 
                    options={options}
                /> : null
            }
        </div>
        */
        <div>
            <Translate />
        </div>
    )
}

export default WidgetsApp;