import { Fragment, useEffect, useState } from 'react'
import Jabber from 'jabber'
import { getName } from "../../helpers/words"

const jabber = new Jabber();

const Filler = (props) => {

    const [items, setItems] = useState([]);
    const {
        size = 16,          // font size
        color = "inherit",  // text color
        count = 1,          // paragraph count 
        words = 30,         // words per paragraph
        fun = false,        // real word goofy titles 
        hdr,                // Text to use for Titles
        txt                 // Text to use instead of paragraph
    } = props;


    const _word = (amt = 5, cap = true) => {
        return jabber.createWord(amt, cap)
    }

    const _title = () => {

        if (hdr) {
            return hdr
        }

        if (fun) {
            return getName(false, " ")
        }
        return `${_word()} ${_word()}`
    }

    const _paragraph = () => {
        if (txt) {
            return txt
        }
        return jabber.createParagraph(words);
    }

    useEffect(() => {
        const _temp = [];
        for (let i = 0; i < count; i++) {
            _temp.push({ title: _title(), text: _paragraph() })
        }
        setItems(_temp);
    }, [])

    return (
        <Fragment>
            {items.map(({ title, text }, i) => {
                return (
                    <div key={i}>
                        <h1>{title}</h1>
                        <p>
                            {text}
                        </p>
                    </div>
                )
            })}
            <style jsx>{`
            
            div p:last-child{
                margin-bottom: ${size}px;
            }
            h1{
                font-size: ${Math.ceil(size * 1.5)}px;
                margin-bottom: ${Math.ceil(size * 0.3)}px;
            }
            p{
               font-size: ${size}px;
               line-height: ${Math.ceil(size * 1.4)}px;
            }
            h1,p{
                color:${color};
            }
        `}</style>
        </Fragment>
    )
}

export default Filler


