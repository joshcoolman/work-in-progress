import { transform } from 'framer-motion';
import React from 'react';
import { Icon } from "../../icons";
import Dot from "./Dot"
import { uniqueId } from "lodash";




const SlideControls = ({ items, pos, onClick, height, mobile = false, ...props }) => {

    const styles = {
        flexButtons: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        navIcon: {
            position: 'relative',
            top: -((height / 2 + 15)),
            zIndex: 9999
        }

    }

    const handleNext = () => {
        onClick && onClick('next')
    }

    const handlePrev = () => {
        onClick && onClick('prev')
    }

    const bump = (num) => {
        return {
            transform: `translateX(${num}px)`
        }
    }

    return mobile ? (
        <div style={{ ...styles.flexButtons, justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                {items.map((item, i) => <Dot selected={i === pos} key={uniqueId()} />)}
            </div>
        </div>
    ) : (
            <div style={styles.flexButtons}>
                <div style={{ ...styles.navIcon, ...bump(-8), opacity: pos }}>
                    <Icon type="chevron" size={30} flip onClick={handlePrev} bg={props.bg || '#222'} />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {items.map((item, i) => <Dot selected={i === pos} key={uniqueId()} />)}
                </div>
                <div style={{ ...styles.navIcon, ...bump(8) }}>
                    <Icon type="chevron" size={30} style={styles.nextprev} onClick={handleNext} bg={props.bg || '#222'} />
                </div>
            </div>

        )
}

export default SlideControls