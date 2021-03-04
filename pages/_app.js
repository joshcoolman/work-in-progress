import { useState, useEffect } from "react";
import '@styles/globals.scss'
import '@styles/materialColors.css'
import ThemeContext from "../helpers/ThemeContext"
import Block from "../components/ui/Block"
import useBreakpoints from "../hooks/useBreakpoints"

const Responsive = ({ onChange }) => {
  const breakPoint = useBreakpoints();
  useEffect(() => {
    document.body.className = 'size-' + breakPoint;
    onChange && onChange(breakPoint)
  }, [breakPoint]);
  return null
}

function Application({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark')
  const [viewSize, setViewSize] = useState(0);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, viewSize }}>
      <Responsive onChange={size => setViewSize(size)} />
      <Block nm p={[20, 0, 20, 0]} grid="1fr minmax(0, 650px) 1fr">
        <div />
        <Component {...pageProps} />
        <div />
      </Block>
    </ThemeContext.Provider>
  )
}


export default Application
