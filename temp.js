// Write a function to retrieve a blob of json
// make a ajax request , Use fetch function
// http://rallycoding.herokuapp.com/api/music_albums

// function fetchAlbums() {
// 	fetch('http://rallycoding.herokuapp.com/api/music_albums')
// 	.then(res => res.json())
// 	.then(json => console.log(json));
// }

async function fetchAlbums() {
	const res = await fetch(
		"http://rallycoding.herokuapp.com/api/music_albums"
	)
	const json = await then((res) => res.json());
	console.log(json);
}

fetchAlbums();