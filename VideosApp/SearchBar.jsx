import React from 'react';
import 'semantic-ui-css/semantic.min.css'

class SearchBar extends React.Component {
    state = { term: '' };

    onSearchSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onSearchSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
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

export default SearchBar;