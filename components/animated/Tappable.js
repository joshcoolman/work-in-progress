import { motion } from "framer-motion"
import { useRouter } from 'next/router'

const Tappable = ({ style, href, onClick, ...props }) => {
    const router = useRouter();

    const handleClick = () => {
        if (onClick) {
            onClick();
            return false;
        }
        if (href) {
            router.push(href);
        }
        return false;
    }

    return (
        <motion.div {...props} onClick={handleClick}
            style={{ ...style, cursor: 'pointer' }}
            whileTap={{ scale: 0.95 }}
        >
            {props.children}
        </motion.div>
    )
}

export default Tappable