
import Block from "../ui/Block"
import Blurb from "../ui/Blurb"
import Gallery from "../ui/Gallery"
import FadeInUp from "../animated/FadeInUp";
import Cast from "./Cast"
import Posters from "./Posters";
import Rating from "../ui/Rating"
import { _var } from "../../helpers/colors"


const MovieDetails = ({ data, onClick }) => {
    const { images, cast, related } = data;
    const { overview, title, vote_average } = data.details
    const rating = Math.floor(10 * vote_average)
    const handleClick = (obj) => {
        onClick && onClick(obj)
    }

    return (
        <FadeInUp>
            <Block nc >
                <div style={{ marginLeft: -20, marginRight: -20, position: 'relative' }}>
                    <Gallery mobile={false} data={images} image_prop="file_path" />
                    <div style={{ position: 'absolute', bottom: 0, right: 5, zIndex: 99 }}>
                        <Rating
                            size={60}
                            total={rating + 5}
                            color={_var('--body-hl')}
                        />
                    </div>
                </div>

                <h2>{title}</h2>
                <Blurb text={overview} color={_var('--body-bg')} align="justify" />
                <Cast
                    onClick={(id) => handleClick({ type: 'actor', val: id })}
                    data={cast}>
                </Cast>
                <h2>Related Movies:</h2>
                <Posters data={related} limit={12} onClick={(id) => handleClick({ type: 'movie', val: id })} />
            </Block>
            <style jsx>{`
                h2{
                    color: var(--body-hdr);
                }
            `}</style>
        </FadeInUp>
    )
}

export default MovieDetails