import axios from 'axios'

const getYear = (datestring) => {
    const date = new Date(datestring)
    return date.getFullYear();
}

const isRecent = (datestring, year = 2002) => {
    const date = new Date(datestring)
    return date.getFullYear() > year;
}

function sortByReleaseDate(a, b) {
    const num1 = Date.parse(a.release_date);
    const num2 = Date.parse(b.release_date);
    let comparison = 0;
    if (num1 > num2) {
        comparison = -1;
    } else if (num1 < num2) {
        comparison = 1;
    }
    return comparison;
}

const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/"

const getImageUrl = (url, size = 500) => {

    if (!url) {
        return TMDB_IMAGE_URL;
    }

    if (size === "original") {
        return `${TMDB_IMAGE_URL}w1280${url}`;
    }
    return `${TMDB_IMAGE_URL}w${size}${url}`;
};

const fetchDetails = (id, type) => {
    const url = `/api/movie/${type}/${id}`;
    return axios.get(url);
}

const fetchPerson = (id, params = "") => {
    const url = `/api/person/${id}/${params}`;
    return axios.get(url);
}

const getPerson = async (_id) => {
    const { data: { data: details } } = await fetchPerson(_id);

    const {
        biography: bio,
        profile_path: path,
        name,
        id,
        movie_credits: { cast } } = details;

    const credits = cast.filter(item => {
        return item.vote_count > 500
    }).sort(sortByReleaseDate)

    return {
        id,
        name,
        bio,
        path,
        credits
    };
}

const getMovie = async (id) => {
    const req = await fetchDetails(id, 'details');
    const { data } = req.data;
    return data
}

const getDetails = async (_id) => {
    const {
        id,
        credits: { cast },
        images: { backdrops },
        similar: { results },
        ...rest } = await getMovie(_id)

    const data = {
        id,
        details: rest,
        images: backdrops,
        related: results,
        cast
    }
    return data;
}

const Poster = ({ src, alt = 'img', ...props }) => {

    return (
        <div className="wrap" {...props} >
            <div className="cover" />
            <img src={getImageUrl(src, 200)} alt={alt} />
            <style jsx>{`
        img{
            width:100%;
            pointer-events: none;
            margin:0;
            display: block;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -o-user-select: none;
            user-select: none;
        }
        .wrap{
            position:relative;
            transition: all .125s ease-in-out;
            box-shadow: 0 0 30px 5px rgba(0, 0, 0, 0);
        }
        .wrap:hover{
            transform: scale(1.15);
            z-index: 2;
            box-shadow: 0 0 30px 5px black;
        }
        .cover{
            pointer-events: none;
            position: absolute;
            height: 100%;
            width: 100%;
            background-color: rgba(0,0,0,0.125);
        }
        
        `}</style>
        </div>
    )
}

const getMoviesURL = (key, page = 1) => {

    let filter = {
        language: "en-US",
        primary_release_year: 2020,
        "vote_count.gte": 500,
        "vote_average.gte": 6.8,
        with_original_language: "en",
        sort_by: "popularity.desc",
        include_adult: false,
        include_video: false,
    }

    let params = '';
    for (const [key, value] of Object.entries(filter)) {
        params += `&${key}=${value}`
    }

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${key}${params}&page=${page}`;
    return url
}

export {
    getYear,
    sortByReleaseDate,
    isRecent,
    fetchDetails,
    getMoviesURL,
    getDetails,
    getImageUrl,
    getPerson,
    Poster,
}