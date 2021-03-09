import React from 'react'
import { getImageUrl } from "../../helpers/tmdb"
import { rando } from "../../helpers/utils"
import GridResponsive from "../ui/GridResponsive";



export default function MoviePosters({ data = [], onClick }) {
    return (

        <GridResponsive>
            {data.map((poster, i) => (
                <img
                    onClick={() => onClick && onClick(poster.id)}
                    key={rando()}
                    src={getImageUrl(poster.poster_path)}
                    alt={poster.title} />
            ))}
        </GridResponsive>
    )
}
