const API_KEY = "91fbbf2a4272029f6eef1df7151d69de";

const requests={
    fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
    fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
    fetchActionMovie: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovie: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovie: `/discover/movie?api_key=${API_KEY}&with_genres=27`
}
export default requests;