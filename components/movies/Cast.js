import { useState, useEffect } from 'react'
import Block from "../ui/Block"
import GridResponsive from "../ui/GridResponsive"
import ProfileImage from "../ui/ProfileImage"
import { getImageUrl } from "../../helpers/tmdb";
import { tidyTitle, rando } from "../../helpers/utils";



export default function Cast({ data = [], max = 15, ...props }) {
    const [castLimit, setCastLimit] = useState(limit);
    let limit = 3;

    useEffect(() => {
        const size = document.body.className;

        if (size === 'size-xl' || size === 'size-lg') {
            setCastLimit(5)
            limit = 5;
        }
        if (size === 'size-md') {
            setCastLimit(4)
            limit = 4;
        }

        if (size === 'size-sm') {
            setCastLimit(3)
            limit = 3
        }

    }, []);



    const handleClick = () => {
        setCastLimit(prev => prev === limit ? max : limit)
    }

    const handleProfileClick = (id) => {
        props.onClick && props.onClick(id);
    }

    return (
        <>
            <GridResponsive >

                {data.map((item, i) => {
                    const show = !item.profile_path || i > castLimit - 1;
                    return show ? null : (
                        <div onClick={() => handleProfileClick(item.id)} key={rando()}>
                            <Block nc flexcol np nm >
                                <ProfileImage size={"100%"} src={getImageUrl(item.profile_path)} />
                                <h1>{item.name}</h1>
                                <h2>{tidyTitle(item.character)}</h2>
                            </Block>
                        </div>
                    );
                })}
            </GridResponsive >
            <button center onClick={handleClick}>{castLimit === limit ? "More" : "Less"}</button>
            <style jsx>{`
                h1{
                    font-size:1.2rem;
                    font-weight: 400;
                    text-align:center;
                }
                h2{
                    font-size: .8rem;
                    text-align: center;
                }
                `}</style>
        </>
    );
}









