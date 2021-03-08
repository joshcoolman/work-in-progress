import { useState, useEffect } from "react";
import '@styles/globals.scss'
import '@styles/materialColors.css'
import ThemeContext from "../helpers/ThemeContext"
import Block from "../components/ui/Block"
import Layout from "../components/ui/Layout"
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

  const dev = false;

  if (dev) {
    return (
      <ThemeContext.Provider value={{ theme, setTheme, viewSize }}>
        <Responsive onChange={size => setViewSize(size)} />
        <Component {...pageProps} />
      </ThemeContext.Provider>
    )
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, viewSize }}>
      <Responsive onChange={size => setViewSize(size)} />
      <Layout width={650} bg={'transparent'}>
        <Component {...pageProps} />
      </Layout>
    </ThemeContext.Provider>
  )
}


export default Application
