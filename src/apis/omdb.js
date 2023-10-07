export function searchMovie (term) {
    return `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_APP_ID}&s=${term}`
}

export function searchMovieById (id) {
    return `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_APP_ID}&i=${id}`

}