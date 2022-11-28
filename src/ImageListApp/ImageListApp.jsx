import SearchBar from "./SearchBar"

function ImageListApp() {

    const handleSubmit = (term) => {
        console.log('Do a search with', term)
    }
    return (
        <div>
            <SearchBar onSubmit={handleSubmit}/>
        </div>
    )
}

export default ImageListApp;