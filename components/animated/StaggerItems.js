import React from 'react'
import { motion } from 'framer-motion'


const variants = {
    hidden: { opacity: 0, y: 100 },
    show: (i) => {
        return {
            opacity: 1,
            y: 0,
            transition: {
                delay: .2 + i * 0.03,
                type: 'spring',
                damping: 35,
                stiffness: 500
            },
        };
    },
    exit: {
        opacity: 0
    },
};

const StaggerItems = ({ children, ...props }) => {
    let { style, className, key = 'id' } = props;

    return children && (
        <>
            {React.Children.map(children, (child, i) => {
                return React.isValidElement(child) ? (
                    <motion.div
                        key={child[key]}
                        variants={variants}
                        custom={i}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className={className}
                        style={style}
                    >
                        {React.cloneElement(child)}
                    </motion.div>
                ) : null;
            })}
        </>
    )
};

export default StaggerItems;





