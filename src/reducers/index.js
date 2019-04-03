import { combineReducers } from 'redux';

const songReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '3:20' },
        { title: 'All Star', duration: '2:59' },
        { title: 'I Want It That Way', duration: '3:11' }
    ]
};

const selectedSongReducer = ( selectedSong = null, action ) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});