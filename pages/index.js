import { useContext, useState, useEffect } from "react"
import { IconMap, Icon } from "../icons"
import ThemeContext from '../helpers/ThemeContext'
import RatingExample from "../components/widget/Rating"
import Block from "../components/ui/Block"
import Colors from "../components/widget/Colors"
import ToggleTheme from "../components/widget/Theme"
import GenerateName from '../components/widget/Name'
import GalleryUnsplash from "../components/widget/Unsplash"
import ProfileImage from "../components/ui/ProfileImage"
import Tappable from "../components/animated/Tappable"

const bioPic = 'https://firebasestorage.googleapis.com/v0/b/images-aae96.appspot.com/o/jc_profile.jpg?alt=media&token=aab14065-dc7a-4624-80b9-361b8d2c6224';
const linkedIn = 'https://www.linkedin.com/in/joshuacoolman/';
const github = 'https://github.com/joshcoolman/work-in-progress';


export default function Render() {
  const { theme, viewSize } = useContext(ThemeContext)
  const [isDark, setIsDark] = useState(true);
  const [vsmall, setVsmall] = useState(true);

  const _bg = isDark ? "#1B263E" : "#eee"
  const _txt = isDark ? '#b8c1d4' : "#1B263E";
  const _hdr = isDark ? 'tomato' : "green";


  useEffect(() => {
    if (theme) {
      setIsDark(theme === 'dark' ? true : false);
    }
    if (viewSize) {
      setVsmall(viewSize === 'sm')
    }
  }, [theme, viewSize])



  const bump = (x, y) => {
    return {
      transform: `translateX(${x}px) translateY(${y}px)`
    }

  }


  return (
    <div>

      <PageBlock dark={isDark}>
        <Block nc c m={[0, 0, 10, 0]}>
          <ProfileImage size={170} src={bioPic} />
        </Block>

        <div>
          <p>
            Hello, I'm Josh. I'm a front-end developer in Portland OR. I'm seeking full-time remote work (on-site locally). If you need asisstance with visual design and javascript programming I can help.
          <a href={linkedIn}>
              You can reach me via LinkedIn.
          </a>
          </p>

          <p>By way of introduction I have made the code for <a href={github}>this site is available on Github.</a> Have a look and and get in touch if I can help in any way.</p></div>

      </PageBlock>


      <Tappable href="/movies">
        <PageBlock dark={isDark}>
          <Block grid={`${vsmall ? '25%' : '35%'} 1fr auto`} gap={10} nc np nm c='v' style={{ minHeight: vsmall ? 120 : 200 }} >
            <ImageBlock src="./movies.jpg" rc={5} />
            <div style={{ paddingLeft: 10 }}>
              <h2>TMDB Movie App</h2>
              <p>A movie explorer app composed of components listed below using The Movie Database API</p>
            </div>
            <div>
              <Icon size={20} type="chevron" color={_txt}></Icon>
            </div>
          </Block>
        </PageBlock>
      </Tappable>

      <Block np m={[0, 0, 20, 10]} >
        <h1 style={{ fontSize: 'var(--xl)' }}>Component Examples:</h1>
      </Block>

      <PageBlock dark={isDark}>
        <h2>Toggle Component:</h2>
        <p>Dark Mode switch which will affect the appearance of the components on this site. Click to toggle light and dark modes.</p>
        <Block nm np nc c>
          <ToggleTheme color={_txt} />
        </Block>
      </PageBlock>

      <PageBlock dark={isDark} >
        <Block p={0} m={[0, 0, 20, 0]}>
          <h2>Loader Component:</h2>
          <p>Animated SVG and Number using a combination of css transitions and Framer Motion.</p>
        </Block>
        <Block c >
          <RatingExample color={_txt} bg={_bg} dark={isDark} />
          <p>Click to Simulate.</p>
        </Block>
      </PageBlock>

      <PageBlock dark={isDark}  >
        <h2>Name Generator</h2>
        <p>Fun little widget with a "mission impossible" style text animation.</p>
        <GenerateName color={_txt} bg={_bg} dark={isDark} />
      </PageBlock>


      <PageBlock dark={isDark} p={[10, 0, 10, 0]}>
        <Block nc np >
          <h2> Gallery Component</h2>
          <p>Simple gallery component using the Unsplash API. Layout out switcher, swipable gallery mode, and search component.</p>
        </Block>
        <GalleryUnsplash />

      </PageBlock>

      <PageBlock dark={isDark}  >
        <Block nc np m={5} >
          <h2>Material Color Explorer</h2>
          <p>Component used in development to explore the Material Design Color Pallete. Click a color to see all variants</p>
        </Block>
        <Colors />
      </PageBlock>

      <PageBlock dark={isDark} >
        <Block nc np m={5} >
          <h2>SVG Icon Key</h2>
          <p>SVG Icons used for many of the ui elements above. This component spits out names and Icons for reference when developing components.</p>
        </Block>
        <IconMap color={_txt} />

      </PageBlock>

      <style jsx>{`
      h2{
        color: ${_hdr};
        font-size: var(--xl);
      }
      p{
        color: ${_txt};
        font-size: var(--md);
      }
      `}</style>
    </div>
  );
}


const ImageBlock = (props) => {
  const {
    src,
    fit = 'cover',
    width = "100%",
    height = "100%" } = props

  return (
    <>
      <div />
      <style jsx>{`
      div{
        background-image: url(${src});
        background-position: center;
        background-repeat: no-repeat;
        background-size:${fit};
        height: ${width};
        width: ${height};
        overflow: hidden;
        border-radius: ${props.rc || 0}px;
      }
    `}</style>
    </>
  )
}

const PageBlock = ({ dark = true, ...props }) => {
  return (
    <Block bg={dark ? "#1B263E" : "#eee"} p={10} m={[0, 5, 20, 5]}  {...props} >
      {props.children}
    </Block>
  )
}






















