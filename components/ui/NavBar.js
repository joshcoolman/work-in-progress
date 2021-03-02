import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { Icon } from "../../icons/"

const NavBar = (props) => {
    const router = useRouter();
    const { data = [], gap = 2, bg = "#222", color = "#ccc" } = props;
    const [open, setOpen] = useState(false)

    const toggleMenu = () => {
        setOpen(prev => !prev)
    }

    const handleClick = (href) => {
        setOpen(false);
        setTimeout(() => {
            router.push(href);
        }, 400);
    }


    return data && data.length ? (
        <nav>
            <Icon type="menu" size={25} color="gray" onClick={toggleMenu} />
            <ul>
                {data.map((item, idx) => {
                    return (
                        <li key={idx} onClick={() => handleClick(item.href)}>
                            <div>
                                {item.text}
                            </div>
                        </li>
                    )
                })}

                {props.children && (
                    <li><div>{props.children}</div></li>
                )}
            </ul>

            <style jsx>{`
                        nav{
                            background:'black'
                            display:flex;
                            justify-content: center;
                        }
                        ul{
                            display:grid;
                            grid-template-columns: repeat(auto-fill, minmax(${(100 - gap * 2) / data.length}%, 1fr));
                            justify-content: space-around;
                            gap:${gap}px;
                        }
                        li{
                            display:flex;
                            justify-content: center;
                            background:${bg};
                            color:${color};
                            padding:10px 0;
                        }

            `}</style>
        </nav>) : null
}

export default NavBar;