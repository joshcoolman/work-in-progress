import tinycolor from "tinycolor2"

const _alpha = (color, amt) => {
    const val = tinycolor(color)
    if (val.isValid()) {
        return val.setAlpha(amt).toRgbString();
    }
    return color
}

export {
    _alpha
};
