import { useState, useEffect } from "react"
import { useWindowWidth } from '@react-hook/window-size'
const useBreakpoints = (opts) => {
    const [breakPoint, setBreakPoint] = useState('sm');
    const size = useWindowWidth();
    const breakPoints = {
        sm: opts && opts.sm || 375,
        md: opts && opts.md || 700,
        lg: opts && opts.lg || 900,
    }

    useEffect(() => {

        let { sm, lg, md } = breakPoints;

        if (size < sm) {
            setBreakPoint('sm')
        }

        if (size > sm && size < md) {
            setBreakPoint('md')
        }

        if (size > md && size < lg) {
            setBreakPoint('lg')
        }

        if (size > lg) {
            setBreakPoint('xl')
        }

    }, [size]);

    return breakPoint
}

export default useBreakpoints