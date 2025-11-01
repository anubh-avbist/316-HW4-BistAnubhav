/*
    This is our http api, which we use to send requests to
    our back-end API. Note we`re using the Axios library
    for doing this, which is an easy to use AJAX-based
    library. We could (and maybe should) use Fetch, which
    is a native (to browsers) standard, but Axios is easier
    to use when sending JSON back and forth and it`s a Promise-
    based API which helps a lot with asynchronous communication.
    
    @author McKilla Gorilla
*/

// THESE ARE ALL THE REQUESTS WE`LL BE MAKING, ALL REQUESTS HAVE A
// REQUEST METHOD (like get) AND PATH (like /top5list). SOME ALSO
// REQUIRE AN id SO THAT THE SERVER KNOWS ON WHICH LIST TO DO ITS
// WORK, AND SOME REQUIRE DATA, WHICH WE WE WILL FORMAT HERE, FOR WHEN
// WE NEED TO PUT THINGS INTO THE DATABASE OR IF WE HAVE SOME
// CUSTOM FILTERS FOR QUERIES

export async function createPlaylist(newListName, newSongs, userEmail){
    const url = "http://localhost:4000/store/playlist/";

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({
            "name" : newListName,
            "songs" : newSongs,
            "ownerEmail" : userEmail
        })
    });

    if (!response.ok) {
        let error = await response.json();
        throw error;
    }

    return response;
}

export async function deletePlaylistById(id) {
    const url = `http://localhost:4000/store/playlist/${id}`;
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include'
    });

    if (!response.ok) {
        let error = await response.json();
        throw error;
    }

    return response;
}

export async function getPlaylistById(id){
    const url = `http://localhost:4000/store/playlist/${id}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include'
    });

    if (!response.ok) {
        let error = await response.json();
        throw error;
    }

    return response;
}

export async function getPlaylistPairs(){
    const url = `http://localhost:4000/store/playlistpairs/`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include'
    });

    if (!response.ok) {
        let error = await response.json();
        throw error;
    }

    return response;
}

export async function updatePlaylistById(id, playlist) {
    const url = `http://localhost:4000/store/playlist/${id}`;
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify({
            // SPECIFY THE PAYLOAD
            playlist : playlist
        })
    });

    if (!response.ok) {
        let error = await response.json();
        throw error;
    }

    return response;
}

const apis = {
    createPlaylist,
    deletePlaylistById,
    getPlaylistById,
    getPlaylistPairs,
    updatePlaylistById
}

export default apis
