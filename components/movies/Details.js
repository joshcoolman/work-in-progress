
import Block from "../ui/Block"
import Blurb from "../ui/Blurb"
import Gallery from "../ui/Gallery"
import FadeInUp from "../animated/FadeInUp";
import Cast from "./Cast"
import Posters from "./Posters";
import Rating from "../ui/Rating"


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
                <div style={{ marginLeft: -20, marginRight: -20 }}>
                    <Gallery mobile={false} data={images} image_prop="file_path" />
                </div>
                <Block nm p={[0, 5, 10, 0]} grid="1fr auto" style={{ alignItems: 'center' }}>
                    <h2>{title}</h2>
                    <Rating
                        size={45}
                        total={rating + 5}
                        color="lime"
                        colors={['lime', 'orange', 'tomato']}
                    />
                </Block>
                <Blurb text={overview} />
                <Cast
                    onClick={(id) => handleClick({ type: 'actor', val: id })}
                    data={cast}>
                </Cast>
                <h2>Related Movies:</h2>
                <Posters data={related} limit={12} onClick={(id) => handleClick({ type: 'movie', val: id })} />
            </Block>
        </FadeInUp>
    )
}

export default MovieDetails