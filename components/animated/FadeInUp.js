import React from 'react'
import { motion } from "framer-motion";
import { uniqueId } from "lodash";
const FadeInUp = props => {
    const { key = uniqueId() } = props;

    const variants = {
        hidden: {
            opacity: 0,
            y: 60,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                when: 'beforeChildren',
                type: 'spring',
                damping: 24,
                stiffness: 160,
            }
        },
        exit: {
            opacity: 0,
            y: 50,
        },
    }

    return (
        <motion.div
            key={key}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
        >
            {props.children}
        </motion.div>
    )
}

export default FadeInUp