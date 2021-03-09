import tech_words from "./words_startup"
import words from "./words_fun"
import { shuffle } from "lodash";
import Jabber from 'jabber'

const jabber = new Jabber(tech_words, 1);


const cap = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

const randomItem = (arr, capitalize = false) => {
    const item = arr[Math.floor(Math.random() * arr.length)]
    return capitalize ? cap(item) : item;
}

export const randomString = (length = 5) => {
    let str = "";
    for (let i = 0; i < length; i++) {
        str += Math.random()
            .toString(36)
            .substring(2, 34);
    }
    return str.toUpperCase();
}

export const getWord = (amt = 5, cap = true) => {
    return jabber.createWord(amt, cap)
}

export const getParagraph = (word_count) => {
    return jabber.createParagraph(word_count);
}

export const getTitle = (char = " ", fun = false) => {
    let arr = shuffle(fun ? words : tech_words);
    let title = `${randomItem(arr, true)}${char}${randomItem(arr, true)}`;
    return title;
};





