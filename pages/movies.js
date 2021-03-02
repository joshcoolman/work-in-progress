import { useState, useEffect } from 'react'
import axios from "axios";
import { AnimatePresence } from "framer-motion"
import {
    getDetails,
    getPerson,
    getMoviesURL,
} from "../helpers/tmdb";
import Loading from "../components/ui/Loading";
import Actor from "../components/movies/Actor";
import Details from "../components/movies/Details"
import Posters from "../components/movies/Posters";
import useHistory from "../hooks/useHistory"

export default function Render({ data: { results: items = [], ...rest } }) {
    const [movie, setMovie] = useState(() => { })
    const [actor, setActor] = useState(() => { })
    const [loading, setLoading] = useState(false)
    const [historyCurrent, historyAdd] = useHistory("id");

    useEffect(() => {
        if (historyCurrent) {
            let { type } = historyCurrent;
            if (type === 'movie') {
                setMovie(historyCurrent);
                toTop();
            }
            if (type === 'actor') {
                setActor(historyCurrent);
                toTop();
            }
        } else {
            setMovie(null);
        }

    }, [historyCurrent])


    useEffect(() => {
        if (movie) {
            setActor(null);
            setLoading(false)
            historyAdd({ type: 'movie', ...movie });
        }
    }, [movie])


    useEffect(() => {
        if (actor) {
            setLoading(false)
            historyAdd({ type: 'actor', ...actor });
        }
    }, [actor])

    const toTop = () => {
        if (window.scrollY) {
            setTimeout(() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
            }, 100);
        }

    }

    const getMovie = async (_id) => {
        const data = await getDetails(_id);
        toTop();
        setLoading(true)
        setMovie(data);
        setActor(null);
    }

    const getActor = async (_id) => {
        const data = await getPerson(_id);
        toTop()
        setLoading(true)
        setActor(data)
    }

    const onDetail = ({ type, val }) => {
        if (type === 'actor') getActor(val);
        if (type === 'movie') getMovie(val);
    }

    const onActor = (id) => {
        getMovie(id);
    }






    return (
        <div>
            <div style={{ ...loaderStyle, opacity: loading ? 1 : 0 }}>
                <Loading />
            </div>

            <AnimatePresence>
                {!actor && movie && <Details data={movie} onClick={onDetail} />}
                {actor && <Actor data={actor} onClick={onActor} />}
                {!actor && !movie && <Posters onClick={getMovie} data={items} />}
            </AnimatePresence>
        </div>
    )
}


export async function getStaticProps() {

    const key = process.env.TMDB_API_KEY;
    const url = getMoviesURL(key, 1);
    const { data } = await axios.get(url);

    return {
        props: {
            data
        }
    }
}





const loaderStyle = {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    pointerEvents: 'none',
    top: 0,
    left: 0,
    background: 'rgba(0,0,0,0.5)',
    zIndex: 10,
}







