export const getWatchList = () => {
    return JSON.parse(localStorage.getItem("movie")) || []
}

export const addMovie = (movie) => {
    const add = getWatchList()
    if (!add.find(a => a.imdbID === movie.imdbID)) {
        add.push({ ...movie, watched: false })
    }
    localStorage.setItem("movie", JSON.stringify(add))
}

export const toggleWatched = (imdbID) => {
    const watchlist = getWatchList()
    const found = watchlist.find(f => f.imdbID === imdbID)
    if (!found) return
    found.watched = !found.watched
    localStorage.setItem("movie", JSON.stringify(watchlist))
}

export const deleteMovie = (imdbID) => {
    let delMovie = getWatchList()
    delMovie = delMovie.filter(f => f.imdbID !== imdbID)
    localStorage.setItem("movie", JSON.stringify(delMovie))
}
