import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ( {label, options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);

    const ref = useRef();
    /* 
        useEffect and useRef are used for event bubbling. Need to be able to click anywhere on the form element to be able to close the dropdown menu. useRef is set to the form div element created by Dropdown.
    */
    useEffect(() => {
        const onBodyClick = (e) => {
            if(ref.current.contains(e.target)) {
                return;
            }
            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick, { capture: true});

        return () => {
            document.body.removeEventListener('click', onBodyClick, { capture: true})
        }
    }, []);

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value) {
            return null;
        }
        return (
            <div 
                key={option.value} 
                className="item"
                onClick={() => {
                    onSelectedChange(option)
                }}
            >
                {option.label}
            </div>
        );
    });


    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">Select a {label}</label>
                <div 
                    onClick={() => setOpen(!open)} 
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;