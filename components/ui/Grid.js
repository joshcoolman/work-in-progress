import { Fragment } from 'react';
const Grid = (props) => {
    const {
        cols = 3,
        gap = 5
    } = props;
    return (
        <Fragment>
            <div>
                {props.children}
            </div>
            <style jsx>{`
            div{
                display:grid;
                grid-template-columns: ${`repeat(${cols}, 1fr)`};
                gap:${`${gap}px`};
            }
        `}</style>
        </Fragment>
    )
}

export default Grid