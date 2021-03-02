import React from "react";

const Dot = (props) => {
    const { selected = false, size = 4, focus = '#95e3d6', blur = '#555' } = props
    const easing = "cubic-bezier(0.22, 1, 0.36, 1)";
    const timing = '.3s';
    const dotSize = selected ? size : size / 2;
    const dotColor = selected ? focus : blur;

    return (
        <>

            <div />
            <style jsx>{`
            div{
                display: inline;
                width: ${dotSize}px;
                height: ${dotSize}px;
                background-color: ${dotColor};
                border-radius: 100%;
                margin:  0 ${selected ? 3 : 2}px;
                transition: width ${timing} ${easing}, height ${timing} ${easing}, background ${timing} ${easing};
                padding:0;
            }
            `}</style>
        </>
    )
}

export default Dot