import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{ title: 'Go it Alone', duration: '4:05' },
		{ title: 'Macerane', duration: '2:55' },
		{ title: 'All Star', duration: '3:35' },
		{ title: 'I want it that way', duration: '1:45' }
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}
	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});
