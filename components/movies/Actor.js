import Block from "../ui/Block"
import Blurb from "../ui/Blurb"
import ProfileImage from "../ui/ProfileImage"
import FadeInUp from "../animated/FadeInUp";
import MoviePosters from "./Posters"
import { getImageUrl } from "../../helpers/tmdb";


const ActorProfile = ({ data, onClick }) => {
    const { name, path, credits, bio } = data;
    const handleClick = (id) => {
        onClick && onClick(id);
    }
    return (
        <FadeInUp>
            <Block fcc nc nm c >
                <ProfileImage size="50%" src={getImageUrl(path)} />
                <h1>{name}</h1>
                <Blurb limit={50} text={bio} />
                <MoviePosters data={credits} onClick={(id) => { handleClick(id) }} />
            </Block>
        </FadeInUp>
    )
}

export default ActorProfile






