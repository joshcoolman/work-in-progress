import { Fragment, useState, useEffect } from 'react'
import Filler from "../ui/Filler"
import useBreakpoints from "../../hooks/useBreakpoints"
import useUnsplash from "../../hooks/useUnsplash"
import { _alpha } from "../../helpers/colors"
import Card from "../ui/Card"
import Grid from "../ui/Grid"


export default function Render() {

    const [images] = useUnsplash('abstract blur wallpaper')
    const [items, setItems] = useState([]);
    const bp = useBreakpoints();

    useEffect(() => {
        const temp = []
        if (images.length) {
            for (let i = 0; i < 9; i++) {
                const { urls: { regular }, user: { name }, alt_description } = images[i];
                temp.push({ src: regular, name, desc: alt_description })
            }
            setItems(temp)
        }
    }, [images])

    return (
        <Card m={0} p={0} nc >
            <Grid cols={bp === 'sm' ? 2 : 3} gap={10} >
                {items.map(item => {
                    return (
                        <Card key={item.src} m={0} img={item.src} bg="black" opacity={.55} >
                            <Filler hdr={item.name} words={5} txt={item.desc} size={10} color={'#ddd'}></Filler>
                        </Card>
                    )
                })}
            </Grid>
        </Card>

    )
}








