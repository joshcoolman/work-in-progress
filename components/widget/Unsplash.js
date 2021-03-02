import { useState } from 'react';
import Block from "../ui/Block"
import Gallery from "../ui/Gallery"
import StaggerItems from "../animated/StaggerItems"
import useUnsplash from "../../hooks/useUnsplash"
import SearchBar from "../ui/SearchBar"
import { Icon } from "../../icons"

export default function GalleryUnsplash(props) {

    const { initial = "car wallpaper" } = props;
    const [images, setTerm] = useUnsplash(initial)
    const [layout, setLayout] = useState('gallery')


    const updateLayout = (layout) => {

        switch (layout) {
            case 'list':
                setLayout('list')
                break;
            case 'grid':
                setLayout('grid')
                break;
            case 'gallery':
                setLayout('gallery')
                break;
            default:
                setLayout('gallery')
                break;
        }
    }


    return <div>

        <SearchBar onChange={(term) => setTerm(term)} initial={initial} >
            <Icon type="gallery" bg={layout === 'gallery' ? '#000' : '#222'} onClick={() => updateLayout('gallery')} />
            <Icon type="list" bg={layout === 'list' ? '#000' : '#222'} onClick={() => updateLayout('list')} />
            <Icon type="grid" bg={layout === 'grid' ? '#000' : '#222'} onClick={() => updateLayout('grid')} />
        </SearchBar>

        {layout === 'gallery' ? (
            <Gallery mobile={false} data={images} image_path={['urls', 'regular']} base_url="" prefix="Photo:" useLinks />
        ) : (
                <Block nm np gap={5} grid={layout === 'list' ? "1fr" : "1fr 1fr"} style={{ gridRowGap: 15 }}>
                    <StaggerItems>
                        {images.map((item, i) => {
                            return (
                                <div key={item.id} style={{ position: 'relative' }} >
                                    <div style={styles.imgWrap} >
                                        <img style={styles.img} src={item.urls.regular} alt={item.alt_description} />
                                    </div>
                                    <div style={{ ...styles.credit, zIndex: 999, transform: 'translateY(12px)' }}>
                                        <p style={{ fontSize: 8, whiteSpace: 'nowrap', lineHeight: '1em' }}>{item.user.name}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </StaggerItems>
                </Block>
            )}
        <style jsx>{`
                        .selected {
                       
                        }
            
            `}</style>
    </div>
}


const styles = {
    img: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    imgWrap: {
        position: 'relative',
        paddingTop: '57%',
        background: 'black'
    },
    credit: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 2,
        background: 'rgba(0,0,0,0.7',
        textAlign: 'right',
        padding: 2
    },
    text: {
        fontSize: 10,
        lineHeight: '1em'
    }
}
















