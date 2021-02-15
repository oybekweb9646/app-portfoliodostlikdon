
import {EN} from './En'
import {RU} from './Ru'
import {UZ} from './Uz'
import {SITE_LANG} from "../tools/constants";

export function getText(word){


    if (localStorage.getItem(SITE_LANG) === "en"){
        return EN[word];
    } else if (localStorage.getItem(SITE_LANG) === "ru"){
        return RU[word]
    }
    else {
        return UZ[word]
    }


}

export function getLang(){
    return localStorage.getItem(SITE_LANG);
}