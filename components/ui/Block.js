const Block = (props) => {
    let {
        m = 10,     // margin
        mb,         // margin bottom
        mt,         // margin top
        ml,         // margin left
        mr,         // margin right
        p = 10,     // padding
        rc = 5,     // rounded corners
        bg,         // background color
        c,          // flex column center
        np,         // no padding
        nm,         // no margin
        nc,         // no color (background)
        grid,       // grid-template-columns
        gap = 10,
        onClick,
        style
    } = props;

    if (nm) {
        m = 0
    }
    if (np) {
        p = 0
    }
    if (nc) {
        bg = "transparent"
    }

    const handleClick = () => {
        onClick && onClick();
    }

    let colorProps = ``;
    if (bg) {
        colorProps += `background:${bg};`
    }

    let borderProps = ``
    if (rc) {
        borderProps += ` border-radius:${rc}px;`
    }

    let gridProps = ``;
    if (grid) {
        gridProps += `
            display:grid;
            grid-template-columns:${grid};
            gap:${gap}px;
        `
    }

    let marginProps = `
        margin-top:${m}px;
        margin-right:${m}px;
        margin-bottom:${m}px;
        margin-left:${m}px;
    `;
    if (Array.isArray(m)) {
        const styleProps = [
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left']
        marginProps = ``;
        m.map((val, i) => {
            marginProps += `${styleProps[i]}:${val}px;`;
        })
    }

    if (mb) {
        marginProps += `
            margin-bottom:${mb}px;
        `;
    }
    if (mt) {
        marginProps += `
            margin-top:${mt}px;
        `;
    }

    let paddingProps = `
        padding-top:${p}px;
        padding-right:${p}px;
        padding-bottom:${p}px;
        padding-left:${p}px;
    `;
    if (Array.isArray(p)) {
        const styleProps = [
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left']
        paddingProps = ``;
        p.map((val, i) => {
            paddingProps += `${styleProps[i]}:${val}px;`;
        })
    }


    let flexProps = ``;
    if (c) {
        flexProps = `
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction: column;
        text-align:center;`
    }

    if (c && c === 'v') {
        flexProps = `
        display:flex;
        justify-content:flex-start;
        align-items:center;
        flex-direction: column;
        text-align:left;`
    }




    return (
        <>
            <div
                className="block"
                onClick={handleClick}
                style={{ ...style }}
                className={props.className}
            >
                {props.children}
            </div>
            <style jsx>{`
                ${flexProps}
                ${gridProps}
                ${paddingProps}
                ${marginProps}
                ${colorProps}
                ${borderProps}
                transition: background 1.2s;
            `}</style>
        </>
    )
}

export default Block;
