
import { useEffect, useRef, useState } from "react";
import { motion, animate, useMotionValue } from 'framer-motion'
import tinycolor from "tinycolor2"



const Rating = (props) => {
    const { color = 'teal', colors, total = 50, dark = true, bg, size = 150, ...rest } = props;


    let _color = tinycolor(color);
    _color = _color.isValid() ? _color : tinycolor('lime');

    if (colors && Array.isArray(colors)) {
        if (colors.length >= 3) {
            if (total > 0 && total <= 40) {
                _color = tinycolor(colors[2])
            }
            if (total > 40 && total <= 68) {
                _color = tinycolor(colors[1])
            }
            if (total > 68) {
                _color = tinycolor(colors[0])
            }
        }
    }

    const theme = {
        percent: _color.toRgbString(),
        progress: _color.toRgbString(),
        track: _color.setAlpha(.2).toRgbString(),
    };



    const [_total, _setTotal] = useState(total);
    const [prog, setProg] = useState(0);
    const nodeRef = useRef();
    const mval = useMotionValue(0)
    const width = size / 9; //stroke width
    const radius = size / 2 - (width / 2);
    const fontSize = size / 3;
    const circ = radius * 2 * Math.PI;

    useEffect(() => {
        _setTotal(total)
    }, [total])


    useEffect(() => {
        const node = nodeRef.current;
        const controls = animate(mval, _total, {
            type: "spring",
            stiffness: 900,
            damping: 200,
            onPlay: () => {
                setProg(circ - _total / 100 * circ)
            },
            onUpdate: v => {
                const num = Math.floor(v);
                node.textContent = num
            },
            onComplete: v => {
                node.textContent = _total;
            }
        })
        return controls.stop
    }, [_total])


    return (
        <>

            <div className="wrap">

                <h1 ref={nodeRef} />
                <div className='circle'>

                    <motion.svg
                        width={size}
                        height={size}

                    >
                        <circle
                            className="progress"
                            stroke="white"
                            strokeWidth={width}
                            fill="transparent"
                            strokeDasharray={`${circ}, ${circ}`}
                            strokeDashoffset={prog}
                            style={{
                                transition: `stroke-dashoffset 1.2s, stroke 1.2s`,
                                transform: 'rotate(-90deg)',
                                transformOrigin: '50% 50%'
                            }}
                            r={radius}
                            cx={size / 2}
                            cy={size / 2} />
                    </motion.svg>
                </div>
                <div className='circle background'>

                    <svg
                        width={size}
                        height={size}

                    >
                        <circle
                            className="back"
                            stroke={theme.track}
                            strokeWidth={width}
                            fill="transparent"
                            style={{
                                transition: 'stroke-dashoffset 1.2s, stroke 1.2s',
                                transform: 'rotate(-90deg)',
                                transformOrigin: '50% 50%'
                            }}
                            r={radius}
                            cx={size / 2}
                            cy={size / 2} />
                    </svg>
                </div>
            </div>
            <style jsx>{`
         .wrap{
             display:flex;
             justify-content: center;
             align-items: center;
             width:${size}px;
             height:${size}px;
             position: relative;
         }
         .circle{
             position:absolute;
             z-index: 1;
         }
         .circle.background{
             z-index: 0;
         }
         circle.back{
         }
         circle.progress{
             stroke:${theme.progress};
             transition: all 1s ease-in
         }

          p{
            color:${theme.text};
            font-size: 1.4rem;
            line-height: 1.8rem;
            padding: 5px 0;
            text-align: center;
            transition: color 1.2s;

          }
          h1{
            color:${theme.percent};
            font-family: "B612 Mono", monospace;
            font-size: ${fontSize}px;
            transition: color 1.2s;
          }
          `}</style>

        </>
    );
}

export default Rating



















