import { useState, useEffect } from "react";
import '@styles/globals.scss'
import '@styles/materialColors.css'
import ThemeContext from "../helpers/ThemeContext"
import Block from "../components/ui/Block"
import useBreakpoints from "../hooks/useBreakpoints"

const Responsive = () => {
  const breakPoint = useBreakpoints();
  useEffect(() => {
    document.body.className = 'size-' + breakPoint;
  }, [breakPoint]);
  return null
}

function Application({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Responsive />
      <Block nm p={[20, 0, 20, 0]} grid="1fr minmax(0, 1000px) 1fr">
        <div />
        <Component {...pageProps} />
        <div />
      </Block>
    </ThemeContext.Provider>
  )
}


export default Application
