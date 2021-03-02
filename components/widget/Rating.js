
import { useState } from "react";
import Tappable from "../animated/Tappable"
import { _alpha } from "../../helpers/colors"
import Rating from "../ui/Rating"



const RatingExample = ({ color = 'teal' }) => {
    const [total, setTotal] = useState(Math.floor(Math.random() * 100));
    const handleClick = () => {
        let newTotal = total;
        if (newTotal >= 70) {
            newTotal = Math.floor(Math.random() * 12) + 2
        } else {
            let base = Math.floor(Math.random() * 12) + 1
            newTotal = 82 + base
        }
        setTotal(newTotal)
    }

    return (
        <Tappable onClick={handleClick} >
            <Rating color={color} total={total}></Rating>
        </Tappable>
    );
}

export default RatingExample



















