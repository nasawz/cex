import {_stringify} from './common.js'
import {setCookie,getCookie,deleteCookie} from './cookie-processing.js'
/**
 * @browser localstorage processing
 */

/**
 * set localstorage
 * @param {String} key [key]
 * @param {String} val [value]
 */
export function setItem(key, val){
    val = _stringify(val)
    if (typeof(window.Storage) !== 'undefined') {
        localStorage.setItem(key,val)
    }
    else {
        setCookie(key,val)
    }
}

/**
 * get localstorage
 * @param  {String} key [key]
 * @return {String}     [value]
 */
export function getItem(key){
    if (typeof(window.Storage) !== 'undefined') {
        return localStorage.getItem(key) && localStorage.getItem(key)
    }
    else {
        return getCookie(key)
    }
}

/**
 * delete localstorage
 * @param  {String} key [key]
 * @return {String}     [value]
 */
export function delItem(key) {
    if (typeof(window.Storage) !== 'undefined') {
        delete localStorage[key]
    }
    else {
        deleteCookie(key)
    }
}
