import React from 'react'
import Bell from './bell.svg';
import Messenger from './messenger.svg';
import Caret from './caret.svg';
import Plus from './plus.svg';
import Cog from './cog.svg';
import Chevron from './chevron.svg';
import Arrow from './arrow.svg';
import Bolt from './bolt.svg';
import Sun from './sun.svg';
import Moon from "./moon.svg"
import Hamburger from "./hamburger.svg"
import Heart from "./heart.svg"
import Check from "./check.svg"
import Badge from "./badge.svg"
import Gallery from "./gallery.svg"
import List from "./list.svg"
import Grid from "./grid.svg"
import Search from "./search.svg"
import Close from "./close.svg"



const icons = {
    bell: Bell,
    messenger: Messenger,
    caret: Caret,
    plus: Plus,
    cog: Cog,
    chevron: Chevron,
    arrow: Arrow,
    bolt: Bolt,
    sun: Sun,
    moon: Moon,
    menu: Hamburger,
    heart: Heart,
    check: Check,
    badge: Badge,
    gallery: Gallery,
    list: List,
    grid: Grid,
    search: Search,
    close: Close
};

const IconMap = ({ color = "#ccc" }) => {
    const _icons = Object.keys(icons).sort()

    return (
        <div className="grid">
            {_icons.map((icon) => {
                return (
                    <div key={icon} className="flex-center">
                        <Icon type={icon} color={color} />
                        <p style={{ color: color }}>{icon}</p>
                    </div>
                )
            })}
            <style jsx>{`
                .flex-center{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
                    grid-gap: 10px;
                }
            `}</style>
        </div>
    )
}

const Icon = props => {
    let {
        type = "bolt",
        color = "#ccc",
        bg,
        size = 30,
        rotate,
        flip,
        up,
        btn,
        down,
        onClick
    } = props

    const Icomponent = icons[type] || icons['bolt'];

    let rotation = rotate ? rotate : flip ? 180 : 0;

    if (down || up) {
        rotation = down ? 90 : -90
    }




    const styles = {
        icon: {
            fill: color,
            width: bg ? '90%' : '100%',
            height: bg ? '90%' : '100%',
            maxHeight: size,
            transform: type === 'chevron' ? `translateX(10%)` : null

        },
        nowrap: {
            width: size,
            height: size,
            transform: `rotate(${rotation}deg)`,
        },
        wrap: {
            overflow: 'hidden',
            transform: `rotate(${rotation}deg)`,
            width: size,
            height: size,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '50%',
            background: bg ? bg : 'transparent',
            border: `5px solid ${bg ? bg : 'transparent'}`
        }

    }






    return bg ? (
        <div style={{ ...styles.wrap }} onClick={() => onClick && onClick()}>
            <Icomponent style={styles.icon} />
        </div>
    ) : (
            <div style={{ ...styles.nowrap }} onClick={() => onClick && onClick()}>
                <Icomponent style={styles.icon} />
            </div>
        )
}

export {
    IconMap,
    Icon,
    Bell,
    Messenger,
    Caret,
    Plus,
    Cog,
    Chevron,
    Arrow,
    Bolt,
    Sun
}