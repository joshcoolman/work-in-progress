import Block from "../ui/Block"
import Blurb from "../ui/Blurb"
import ProfileImage from "../ui/ProfileImage"
import FadeInUp from "../animated/FadeInUp";
import MoviePosters from "./Posters"
import { getImageUrl } from "../../helpers/tmdb";
import { _var } from "../../helpers/colors"


const ActorProfile = ({ data, onClick }) => {
    const { name, path, credits, bio } = data;
    const handleClick = (id) => {
        onClick && onClick(id);
    }
    return (
        <FadeInUp>
            <Block p={0}>
                <Block np c m={[0, 0, 10, 0]} >
                    <ProfileImage size="50%" src={getImageUrl(path)} />
                    <h1 style={{ marginTop: 10 }}>{name}</h1>
                </Block>
                <Blurb limit={50} text={bio} color={_var('--body-bg')} align="justify" />
                <MoviePosters data={credits} onClick={(id) => { handleClick(id) }} />
            </Block>
        </FadeInUp>
    )
}

export default ActorProfile






