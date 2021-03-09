import { Fragment } from 'react'

const Layout = (props) => {
    const {
        bg = 'black',
        color = 'inherit',
        width = 650,
        mt = 0,
        mb = 0
    } = props;
    return (
        <Fragment>
            <div className="wrap">
                <span />
                <div>
                    {props.children}
                </div>
                <span />
            </div>
            <style jsx>{`
            .wrap{
                display:grid;
                padding-top:${mt}px;
                padding-bottom:${mb}px;
                grid-template-columns: 1fr minmax(0, ${width}px) 1fr;
                background: ${bg};
                min-height:${'100vh'};
            }
        `}</style>
        </Fragment>
    )
}

export default Layout

