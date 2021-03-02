import { createApi } from "unsplash-js"

export default async function handler(req, res) {

    let { query: { term = 'wallpaper' } } = req;

    const api = await unsplashAPI();
    const apiReq = await api.search.getPhotos({
        query: term,
        orientation: 'landscape',
        page: 1,
        perPage: 30
    });
    const { results } = apiReq.response;

    res.status(200).json({ results })
}

const unsplashAPI = () => {
    const key = process.env.UNSPLASH;
    return createApi({ accessKey: key })
}