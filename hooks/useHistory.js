import { useRouter } from 'next/router'
import { useRef, useState, useEffect } from "react"
import { Icon } from "../icons"

const useHistory = (key = "id", path = "movies") => {
    const history = useRef(new Array)
    const router = useRouter();
    const [current, setCurrent] = useState();
    useEffect(() => {
        router.beforePopState(({ url, as, options }) => {
            if (history.current.length) {
                removeItem();
                return false
            }
            router.push("/")
        })
    }, [router])

    const addItem = (obj) => {
        history.current.unshift(obj);
        router.push(`/${path}?${key}=${obj[key]}`, undefined, { shallow: true })
    }

    const removeItem = () => {
        let prev = null;
        if (history.current.length) {
            history.current.shift()
            prev = history.current.shift()
        }
        if (prev) {
            setCurrent(prev)
        } else {
            clearHistory();
        }
    }

    const clearHistory = () => {
        setCurrent(null)
        history.current = new Array;
        router.push(`/${path}`, undefined, { shallow: true })
    }



    return [current, addItem, clearHistory];
}

export const RouterBack = (props) => {
    const router = useRouter();
    const handleClick = () => {
        router.back();
    }
    return (
        <div style={styles.back} onClick={handleClick}>
            <Icon type="chevron" flip />
        </div>
    )
}

const styles = {
    back: {
        position: 'fixed',
        top: '15%',
        left: 10,
        zIndex: 99
    }
}

export default useHistory