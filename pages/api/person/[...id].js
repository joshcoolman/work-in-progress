export default async function handler(req, res) {
    const { query: { id } } = req
    const data = await fetchPersonData(id);
    res.status(200).json({ data })
}



const fetchPersonData = async (id) => {
    const key = process.env.TMDB_API_KEY;
    const append = `?append_to_response=movie_credits`;
    const url = `https://api.themoviedb.org/3/person/${id}${append}&api_key=${key}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}