import { searchMovies, } from "./api.js";
import { getWatchList, addMovie, deleteMovie, toggleWatched } from "./storage.js";


const searchInput = document.getElementById("search-input")
const searchBtn = document.getElementById("search-btn")
const statusMsg = document.getElementById("status-msg")
const searchResults = document.getElementById("search-results")
const watchList = document.getElementById("watchlist")
const allBtn = document.querySelectorAll(".filter-bar button")

let activeFilter = "all"

const renderWatchlist = (filter) => {
    watchList.innerHTML = ""
    const watch = getWatchList()
    let filtered = watch
    if (filter === "watched") {
        filtered = watch.filter(f => f.watched === true)
    } else if (filter === "unwatched") {
        filtered = watch.filter(f => f.watched === false)
    }
    filtered.forEach(fil => {
        const watchListCard = document.createElement("div")
        watchListCard.classList.add("watchlist-card")
        const img = document.createElement("img")
        img.src = fil.Poster
        const info = document.createElement("div")
        info.classList.add("info")
        const title = document.createElement("h3")
        title.textContent = fil.Title
        const year = document.createElement("span")
        year.textContent = fil.Year
        const cardAction = document.createElement("div")
        cardAction.classList.add("card-actions")
        const buttonWatched = document.createElement("button")
        buttonWatched.classList.add("btn-watch")
        buttonWatched.textContent = "Watched"
        buttonWatched.addEventListener("click", () => {
            toggleWatched(fil.imdbID)
            renderWatchlist(activeFilter)

        })
        const buttonDelete = document.createElement("button")
        buttonDelete.classList.add("btn-delete")
        buttonDelete.textContent = "Delete"
        buttonDelete.addEventListener("click", () => {
            deleteMovie(fil.imdbID)
            renderWatchlist(activeFilter)
        })
        watchListCard.appendChild(img)
        info.appendChild(title)
        info.appendChild(year)
        watchListCard.appendChild(info)
        watchListCard.appendChild(cardAction)
        cardAction.appendChild(buttonWatched)
        cardAction.appendChild(buttonDelete)
        watchList.appendChild(watchListCard)
    });
}

const renderSearchResult = (movie) => {
    searchResults.innerHTML = ""
    movie.forEach(mov => {
        const resultCard = document.createElement("div")
        resultCard.classList.add("result-card")
        resultCard.addEventListener("click", () => {
            addMovie(mov)
            renderWatchlist(activeFilter)
        })
        const img = document.createElement("img")
        img.src = mov.Poster
        const title = document.createElement("p")
        title.classList.add("card-title")
        title.textContent = mov.Title
        const year = document.createElement("p")
        year.classList.add("card-year")
        year.textContent = mov.Year
        resultCard.appendChild(img)
        resultCard.appendChild(title)
        resultCard.appendChild(year)
        searchResults.appendChild(resultCard)
    });
}


searchBtn.addEventListener("click", async () => {
    try {
        const input = searchInput.value
        const data = await searchMovies(input)
        renderSearchResult(data)
    } catch (error) {
        statusMsg.textContent = error.message
    }
})


allBtn.forEach(btnFilter => {
    btnFilter.addEventListener("click", () => {
        allBtn.forEach(btn => btn.classList.remove("active"));
        activeFilter = btnFilter.dataset.filter // update setiap klik
        btnFilter.classList.add("active")
        renderWatchlist(activeFilter)

    })
});

renderWatchlist("all")