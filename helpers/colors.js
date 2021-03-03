import tinycolor from "tinycolor2"

const _alpha = (color, amt) => {
    const val = tinycolor(color)
    if (val.isValid()) {
        return val.setAlpha(amt).toRgbString();
    }
    return color
}

const _cssvar = (cssvar) => {
    console.clear();
    console.log(getComputedStyle(document.body).getPropertyValue(cssvar))
    return getComputedStyle(document.body).getPropertyValue(cssvar)
}

export {
    _alpha,
    _cssvar as _var,
    _cssvar
};
