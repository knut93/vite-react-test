import React from 'react'
import 'semantic-ui-css/semantic.min.css'

class SearchCar extends React.Component {
    state = { term: '' }

    onFormSubmit = e => {
        e.preventDefault();
        console.log("Form submitted")
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchCar;