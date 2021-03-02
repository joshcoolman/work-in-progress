import { useState, useEffect } from 'react';
import { useWindowWidth } from '@react-hook/window-size'


function useDimensions(targetRef) {
    const width = useWindowWidth();
    const getDimensions = () => {
        return {
            width: targetRef.current ? targetRef.current.offsetWidth : 0,
            height: targetRef.current ? targetRef.current.offsetHeight : 0
        };
    };
    const [dimensions, setDimensions] = useState(getDimensions);

    useEffect(() => {
        setDimensions(getDimensions());
    }, [width]);

    return dimensions;
}

export default useDimensions