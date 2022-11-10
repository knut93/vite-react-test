import React from 'react'

{/*
This is a class-based Clock component that shows the current time.
Uses componentDidMount() to update the time, stored in state.
setInterval() uses setState() on a 1000 ms interval.
*/}

class ClockApp extends React.Component {
    state = { time: null };
    
    componentDidMount() {
        setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString() })
        }, 1000)
    }
    
    render() {
        return (
            <div className="time">
                The time is: {this.state.time}
            </div>
        );
    }
}

export default ClockApp;