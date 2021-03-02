
import style from './SwipeCards.module.scss'
import { getImageUrl } from "../../helpers/tmdb"
import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { motion } from "framer-motion"
import { useSwipeable } from "react-swipeable"
import GalleryNav from "./GalleryNav"
import useDimensions from "../../hooks/useDimensions"


const Gallery = props => {
    const {
        data = [],
        image_path,
        prefix = "",
        image_prop = "backdrop_path",
        base_url = getImageUrl() + 'w500/',
        useLinks = false
    } = props;
    const targetRef = useRef();
    const size = useDimensions(targetRef);
    const [items, setItems] = useState([]);
    const [position, setPosition] = useState(0);
    const [caption, setCaption] = useState();
    const [link, setLink] = useState({ link: '', text: '' });

    const handlers = useSwipeable({
        onSwiped: ({ dir }) => dir === "Left" ? onNext() : onPrev(),
        //delta: 10,
        //preventDefaultTouchmoveEvent: false,
        //trackTouch: true,
        //trackMouse: true,
        //rotationAngle: 0,
    });


    useEffect(() => {
        if (items.length && useLinks) {
            const { links: { html } } = items[position]
            const { first_name, last_name } = items[position].user
            setCaption(`${prefix}${first_name} ${last_name}`)
            setLink({ text: 'View on Unsplash', link: html })
        }
    }, [items, position])

    useEffect(() => {
        const max = 50;
        setItems(data.length < max ? data : data.slice(0, max));
    }, [data])



    const onNext = () => {
        if (position < items.length - 1) {
            setPosition(prev => prev + 1)
        }
    }

    const onPrev = () => {
        if (position > 0) {
            setPosition(prev => prev - 1)
        }
    }

    const variants = {
        hidden: {
            scale: 0,
        },
        visible: (i) => {
            let left;
            if (i === position) {
                left = (i - position) * size.width - (size.width / 2);
            }
            if (i < position) {
                left = (i - position) * size.width - (size.width / 3.5);
            }
            if (i > position) {
                left = (i - position) * (size.width / 4);
            }
            return {
                left: `${left}px`,
                scale: i === position ? .9 : .7,
                opacity: 1,
                transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 40
                }
            }
        },

    }

    const swipeViewStyle = {
        width: size.width,
        height: size.width * 0.57
    }

    const getImagePath = (item) => {
        if (image_path) {
            if (Array.isArray(image_path)) {
                let temp = item;
                image_path.forEach(i => {
                    temp = temp[i]
                });
                return temp
            }
        }

        return base_url + item[image_prop]
    }


    return (
        <>
            <div ref={targetRef} >
                <div className={style.swipeview} {...handlers} style={{ ...swipeViewStyle }} >
                    <div className={style.row}>

                        {items.map((item, i) => {


                            const containerStyle = {
                                zIndex: i === position ? 1 : 0,
                                width: size.width,
                                height: size.width * .57,
                                top: -(size.width * .57) / 2
                            }


                            return (
                                <motion.div
                                    key={i}
                                    custom={i}
                                    className={style.container}
                                    variants={variants}
                                    initial={false}
                                    animate="visible"
                                    style={{ ...containerStyle }}

                                >
                                    <img
                                        key={item.id}
                                        src={getImagePath(item)}
                                        alt={item.title}
                                    />
                                </motion.div>
                            )
                        })}
                    </div>
                </div>

                <GalleryNav height={swipeViewStyle.height} items={items} pos={position} onClick={(dir) => {
                    if (dir === 'next') {
                        onNext();
                    }
                    if (dir === 'prev') {
                        onPrev();
                    }
                }} />
                <div className={style.caption}>
                    <p>{caption}</p>
                    <p><a href={link.link}>{link.text}</a></p>
                </div>
            </div>

        </>
    )
}


export default Gallery