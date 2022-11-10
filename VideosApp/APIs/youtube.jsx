import axios from "axios";

const KEY = 'AIzaSyAxXsZ51Tkkyej4Lr9N8onFfz0O2-rzwSM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});