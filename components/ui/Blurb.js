import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { _alpha } from "../../helpers/colors"

const Blurb = props => {
    const { text, color = 'black', limit = 27 } = props;

    if (!text) return null;

    const [show, setShow] = useState(false);
    const words = text.split(" ")
    const isLong = words.length > limit + 10;
    const [display, setDisplay] = useState('')
    const colorStart = _alpha(color, .99);
    const colorMid = _alpha(color, .5);
    const colorEnd = _alpha(color, 0)

    useEffect(() => {
        setDisplay(!show ? getText() : text);
    }, [show, text]);



    const toggleShow = () => {
        setShow(prev => !prev);
    }

    const getText = () => {
        let temp = text;

        if (isLong) {
            temp = text.split(" ", limit).join(" ") + "..."
        }
        return temp;
    }

    const styles = {
        wrap: {
            position: 'relative',
            paddingBottom: 8,
            marginBottom: 10
        },
        fade: {
            display: isLong ? 'block' : 'none',
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
            top: 0,
            background: 'rgb(0,0,0)',
            background: `linear-gradient(0deg, ${colorStart} 0%, ${colorMid} 50%,  ${colorEnd} 60%)`,
            marginLeft: -2,
        },
        text: {
            margin: 0,
            lineHeight: 1.3
        }
    }
    return (
        <motion.div style={styles.wrap} onClick={toggleShow}>
            <p style={styles.text}  >{display}</p>
            {!show && (

                <div style={styles.fade} ></div>
            )}
        </motion.div>
    )

}

export default Blurb