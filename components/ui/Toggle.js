import tinycolor from "tinycolor2"

const Toggle = (props) => {
    const {
        size = 50,
        on = false,
        gap = 5,
        color = '#ccc',
    } = props;

    const bg = tinycolor(color).setAlpha(.2).toRgbString();
    const handleClick = () => {
        props.onClick && props.onClick();
    }


    return (
        <>
            <div className="outer" onClick={handleClick}>
                <div className="inner" />
            </div>

            <style jsx>{`
                .outer{
                    width: ${size * 2}px;
                    height: ${size}px;
                    display:flex;
                    border-radius:${size / 2}px;
                    background-color:${bg};
                    border: 1px solid ${color};
                    align-items: center;
                    justify-content: ${on ? 'flex-end' : 'flex-start'};
                    transition: all .25s ease-out;
                    padding: ${gap}px;

                }
                .inner{
                    width:  ${size - (gap * 2)}px;
                    height: ${size - (gap * 2)}px;;
                    border-radius: 100%;
                    background-color:${color};
                    transition: all .25s ease-out;
                    overflow:hidden;
                }
            
            `}</style>
        </>
    )
}





export default Toggle