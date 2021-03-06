import { randomString, getTitle } from "../../helpers/words"
import { useEffect, useRef } from "react";
import { animate } from 'framer-motion'
import { shuffle } from "lodash"
import { useState } from "react";
import Block from '../ui/Block'
import Tappable from "../animated/Tappable"

const initText = text => {
    let word = [];
    let filler = [];
    let letters = randomString(text.length).split("");

    text.split("").map((el, i) => {
        for (let j = 0; j < text.length; j++) {
            let diff = text.length - i;
            let seed = shuffle(letters).join("");
            let fill = seed.substring(0, diff);
            filler.push(fill);
            word.push(text.substr(0, i) + fill);
        }
    });

    return word;
};



const GenerateName = (props) => {
    const [name, setName] = useState();
    const [nameList, setNameList] = useState([]);
    const nodeRef = useRef();
    const { color = 'teal', bg } = props;
    const theme = {
        background: bg,
        text: color,
        heading: color,
    }

    useEffect(() => {
        setName(getTitle("-", true).toUpperCase())
    }, [])

    useEffect(() => {
        if (name) {
            setNameList(initText(name));
        }
    }, [name])

    useEffect(() => {
        if (nameList) {
            const node = nodeRef.current;
            const controls = animate(0, nameList.length - 1, {
                type: "spring",
                stiffness: 19,
                bounce: false,
                onUpdate: v => {
                    node.textContent = nameList[Math.floor(v)]
                },
                onComplete: v => {
                    node.textContent = name;
                }
            })
            return controls.stop
        }
    }, [nameList])

    const handleClick = () => {
        setName(getTitle("-", true).toUpperCase());
    }

    return (

        <Tappable onClick={handleClick} >
            <Block c  >
                <h1 ref={nodeRef} />
            </Block>
            <style jsx>{`
            h1{
                color:${theme.heading};
                font-size: 2.5rem;
                font-family: "B612 Mono", monospace;
            }
          `}</style>
        </Tappable>
    );
}

export default GenerateName



















