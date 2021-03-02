function getShape(arr) {
    return (
        <div>
            <pre>
                {JSON.stringify(arr[0], null, 2)}
            </pre>
        </div>
    )
}

function rando() {
    return Math.random().toString(36).substring(2);
}

function tidyTitle(txt) {
    let str = txt.toString();

    // remove stuff after '/' including the '/'
    if (str.indexOf('/') > 0) {
        str = str.substr(str.indexOf('/') + 1)
    }
    //Remove (words with parens)
    str.replace(/ *\([^)]*\) */g, "").trim();

    return str.trim()
}

export {
    rando,
    getShape,
    tidyTitle
}