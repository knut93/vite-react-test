import React from 'react';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import SearchCar from './SearchCar';
import ImageList from './ImageList';
{/*
SearchCar allows us to handle state with user input through a form. We pass onSearchSubmit as a prop through onSubmit.
ImageList shows how to map through an array of objects that we obtain from the API.
*/}
class SearchCarApp extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },    
            headers: {
                Authorization: 'Client-ID uOAyrwsNGhwcnRoc4ESYF4jjb9f-TDavUtGpdXQKrGk'
            }
        });

        this.setState({ images: response.data.results });
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchCar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default SearchCarApp;