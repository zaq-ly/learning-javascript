export const searchMovies = async (query) => {
    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=391d1b00&s=${query}`)
        if (!response.ok) throw new Error("Gagal request :" + response.status);
        const data = await response.json()
        if (data.Response === "False") throw new Error(data.Error);
        return data.Search
    } catch (error) {
        throw error
    }
}