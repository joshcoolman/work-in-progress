import { useState, useEffect, useLayoutEffect } from "react";
import '@styles/globals.css'
import '@styles/materialColors.css'
import NavBar from "../components/ui/NavBar"
import ThemeContext from "../helpers/ThemeContext"
import Block from "../components/ui/Block"
import useBreakpoints from "../hooks/useBreakpoints"

const navdata = [
  { text: "Hello", href: "/" },
  { text: 'Movies', href: "/movies" },
]


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
      <Block c>
        <h2>Josh Coolman, Front End Developer</h2>
        <h3>Portland, OR</h3>
      </Block>
      <Block nm np grid="1fr minmax(0, 1000px) 1fr">
        <div />
        <Component {...pageProps} />
        <div />
      </Block>
    </ThemeContext.Provider>
  )
}


export default Application
