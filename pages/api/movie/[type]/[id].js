export default async function handler(req, res) {

    let {
        query: { type, id },
    } = req

    if (type == 'details') {
        type = null
    }

    let data = await fetchMovieData(id, type);

    res.status(200).json({ data })
}



const fetchMovieData = async (id = 464052, param = null) => {
    const key = process.env.TMDB_API_KEY;
    const append = `?append_to_response=images,credits,similar`;
    const url = `https://api.themoviedb.org/3/movie/${id}${append}&api_key=${key}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}