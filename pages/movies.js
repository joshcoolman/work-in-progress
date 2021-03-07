import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
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
import Block from "../components/ui/Block"
import { Icon } from "../icons"
import { _var, _darken, _alpha } from "../helpers/colors"

export default function Render({ data: { results: items = [], ...rest } }) {
    const router = useRouter();
    const [movie, setMovie] = useState(() => { })
    const [actor, setActor] = useState(() => { })
    const [loading, setLoading] = useState(false)
    const [historyCurrent, historyAdd, clearHistory] = useHistory("id");
    const [colors, setColors] = useState({ bg: null, text: null });

    useEffect(() => {
        setColors({
            bg: _darken(_var('--body-bg')),
            text: _var('--body-text')
        })
        toTop();
    }, [])

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

    const clearStack = () => {
        setActor(null);
        setMovie(null);
        clearHistory();
    }






    return (
        <div className="wrapper">



            <Block
                c
                grid="auto 1fr auto"
                p={10}
                m={[-20, -10, 20, -10]}
                bg={colors.bg}
            >

                <div style={{ opacity: movie || actor ? 1 : 1 }}>
                    <Icon type="arrow" onClick={() => { window.history.back() }} color={colors.text} size={20} />
                </div>
                <h1 style={{ opacity: 0.7 }}>Now Playing</h1>
                <div style={{ opacity: movie || actor ? 1 : 0 }}>
                    <Icon type="close" color={colors.text} alpha={0.5} size={20} onClick={() => clearStack()} />
                </div>
            </Block>



            <div style={{ ...loaderStyle, opacity: loading ? 1 : 0 }}>
                <Loading />
            </div>
            <AnimatePresence>
                {!actor && movie && <Details data={movie} onClick={onDetail} />}
                {actor && <Actor data={actor} onClick={onActor} />}
                {!actor && !movie && <Posters onClick={getMovie} data={items} />}
            </AnimatePresence>
            <style jsx>{`
                .wrapper{
                    min-height: 100vh;
                }
                h1{
                    text-transform: uppercase;
                    font-size: 1.5rem;
                    letter-spacing: 5px;
                    color: var(--body-text)
            `}</style>
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







