const API_KEY = process.env.REACT_APP_NETFLIX_API_KEY;
const requests={
    fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
    fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
    fetchActionMovie: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovie: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovie: `/discover/movie?api_key=${API_KEY}&with_genres=27`
}
export default requests;