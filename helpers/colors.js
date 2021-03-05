import tinycolor from "tinycolor2"

const _alpha = (color, amt) => {
    const val = tinycolor(color)
    if (val.isValid()) {
        return val.setAlpha(amt).toRgbString();
    }
    return color
}

const _darken = (color, amt = 5) => {
    const val = tinycolor(color)
    if (val.isValid()) {
        return val.darken(amt).toRgbString();
    }
    return color
}

const _cssvar = (cssvar) => {
    console.clear();
    return getComputedStyle(document.body).getPropertyValue(cssvar)
}

export {
    _alpha,
    _cssvar as _var,
    _cssvar,
    _darken
};
