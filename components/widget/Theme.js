import { useContext } from 'react'
import ThemeContext from "../../helpers/ThemeContext"
import Block from "../ui/Block"
import Toggle from "../ui/Toggle"
import { Icon } from "../../icons"


function ToggleTheme(props) {
    const { theme, setTheme } = useContext(ThemeContext);
    const { color = 'gray' } = props;

    const handleClick = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark')
    }

    return (
        <Block nc np nm grid="1fr auto 1fr" >
            <Icon type='sun' color={color} size={30} />
            <Toggle
                color={color}
                size={30}
                on={theme === 'dark'}
                dark={theme === 'dark'}
                onClick={handleClick}
            />
            <Icon type='moon' color={color} size={28} />
        </Block>
    )
}

export default ToggleTheme
