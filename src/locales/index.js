import {LANGUAGE} from "../tools/constants";
import {uz} from "./UZ";
import {ru} from "./RU";
import {en} from "./EN";

export const getLanguage = () => {
    return localStorage.getItem(LANGUAGE);
};
// console.log(localStorage.getItem(LANGUAGE))

export const getText = (word) => {
    return getLanguage() === "ru" ?
        ru[word] : (getLanguage() === "uz" ? uz[word] : en[word])
};
