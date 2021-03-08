import { Fragment, useState, useEffect } from 'react'
import Filler from "../components/ui/Filler"
import useBreakpoints from "../hooks/useBreakpoints"
import useUnsplash from "../hooks/useUnsplash"
import { _alpha } from "../helpers/colors"
import Card from "../components/ui/Card"


export default function Render() {

    const [images] = useUnsplash('abstract blur wallpaper')
    const [items, setItems] = useState([]);
    const bp = useBreakpoints();

    useEffect(() => {
        const temp = []
        if (images) {
            for (let i = 0; i < 9; i++) {
                const { urls: { regular }, user: { name }, alt_description } = images[i];
                temp.push({ src: regular, name, desc: alt_description })
            }
            setItems(temp)
        }
    }, [images])


    return (

        <Card m={0} p={10} nc >
            <h1 className="mt-20 mb-10" style={{ fontSize: 'var(--lg)' }}>Card Layout Components:</h1>
            <Grid cols={bp === 'sm' ? 2 : 3} gap={10} >
                {items.map(item => {
                    return (
                        <Card key={item.src} m={0} img={item.src} bg="black" opacity={.55} >
                            <Filler hdr={item.name} words={5} txt={item.desc} size={10} color={'#ddd'}></Filler>
                        </Card>
                    )
                })}
            </Grid>
            <h1 className="mt-20 mb-10" style={{ fontSize: 'var(--lg)' }}>Responsive Grid Example:</h1>
            <Grid cols={bp === 'sm' ? 2 : 3} gap={10}>
                <Card color="#ccc" bg="#c22929" opacity={0.5} m={0} area={bp === 'sm' ? '1,2' : '1,2,1,2'}>
                    <Filler fun words={10} size={12} />
                </Card>
                <Card color="#ccc" bg="#274a80" opacity={0.5} m={0} area={bp === 'sm' ? '1,2, 2,3' : ''}>
                    <Filler fun words={10} size={12} />
                </Card>
                <Card color="#ccc" bg="#206148" opacity={0.5} m={0} area={bp === 'sm' ? '1,1' : null}>
                    <Filler fun words={10} size={12} />
                </Card>
                <Card color="#ccc" bg="#923c84" opacity={0.5} m={0} area={bp === 'sm' ? '2,1' : null}>
                    <Filler fun words={10} size={12} />
                </Card>
                <Card color="#ccc" bg="#bd5b0a" opacity={0.5} m={0} area={bp === 'sm' ? '1,2' : '2,2'}>
                    <Filler fun words={10} size={12} />
                </Card>
            </Grid>
        </Card>

    )
}




const Grid = (props) => {
    const {
        cols = 3,
        gap = 5
    } = props;
    return (
        <Fragment>
            <div>
                {props.children}
            </div>
            <style jsx>{`
            div{
                display:grid;
                grid-template-columns: ${`repeat(${cols}, 1fr)`};
                gap:${`${gap}px`};
            }
        `}</style>
        </Fragment>
    )
}



