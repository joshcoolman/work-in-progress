import axios from 'axios'
import { useEffect, useState } from 'react';


async function fetcher(url) {
    const { data: { results } } = await axios.get(url);
    return results
}

const useUnsplash = (init = 'nature') => {
    const [images, setImages] = useState([])
    const [term, setTerm] = useState(init)

    useEffect(() => {
        if (term) {
            searchImage(term);
        }
    }, [term])

    const searchImage = async (term) => {
        const data = await fetcher(`/api/unsplash?term=${term}`)
        setImages(data);
    }


    return [images, setTerm]
}

export default useUnsplash