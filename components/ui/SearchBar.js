import { useState, useEffect } from 'react';
import { Icon } from "../../icons"
import Block from "./Block"

const SearchBar = (props) => {
    const { visible = false, initial = '', p = 20, onChange } = props;

    const [_visible, setVisible] = useState(visible)
    const [input, setInput] = useState(initial)
    const [term, setTerm] = useState(initial)
    useEffect(() => {
        onChange && onChange(term);
        setVisible(false);
    }, [term])

    const handleToggle = () => {
        setVisible(prev => !prev)
    }

    return (
        <div>
            {_visible ? (
                <Block grid="1fr auto auto" p={5} m={5} gap={10}>
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                    <button onClick={() => setTerm(input)}>Search</button>
                    <Icon type='close' onClick={handleToggle} bg="#222" />
                </Block>
            ) : (
                    <Block grid="1fr auto" p={5} m={5} gap={10}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>{props.children}</div>
                        <Icon type='search' onClick={handleToggle} bg="#222" />
                    </Block>
                )}
            <style jsx>{`
                input[type='text'] {
                    background: var(--input-bg);
                    font-size: 2rem;
                    border-radius: var(--radius);
                    padding-left: 10px;
                }

                button {
                    color: white;
                    background-color: var(--light-green-500);
                    width: 60px;
                    padding:0;

                }
            
            `}</style>
        </div>
    )
}

const styles = {
    img: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    imgWrap: {
        position: 'relative',
        paddingTop: '57%',
        background: 'black'
    },
    credit: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 2,
        padding: 4,
        background: 'rgba(0,0,0,0.7',
        textAlign: 'right'
    },
    text: {
        fontSize: 10
    }
}

export default SearchBar















