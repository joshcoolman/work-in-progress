import { Fragment } from 'react'
import { _alpha } from "../../helpers/colors"



const Card = (props) => {
    let {
        nc, // no color (transparent background)
        bg = '#222',
        color = 'inherit',
        p = 10,
        m = 20,
        r = 4,
        img,
        opacity,
        area,
        style
    } = props;

    let styles = ''

    if (area) {
        let arr = area.split(',');
        let [a, b, c, d] = arr;
        styles += `
            grid-column: ${a ? a : 'inherit'} / span ${b ? b : 0};
            grid-row: ${c ? c : 'inherit'} / span ${d ? d : 0};
        `
    }

    if (img) {
        opacity = opacity || 0.75
    }


    bg = nc ? 'transparent' : _alpha(bg, opacity)



    return (
        <Fragment>
            <div style={style}>
                {props.children}
            </div>
            <style jsx>{`
            div{
                border: ${'none'};
                border-radius:${r}px;
                padding: ${p}px;
                margin: ${m}px;
                background: ${!img ? bg : `linear-gradient( ${_alpha(bg, opacity)}, ${_alpha(bg, opacity)} ), url(${img})`};
                color: ${color};
                background-size:cover;
                background-position:center top;
                ${styles}
            }
        `}</style>
        </Fragment>
    )
}

export default Card



