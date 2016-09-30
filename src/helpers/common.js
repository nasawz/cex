import {isObject} from './is-type.js'

/**
 * stringify value
 * @param  {String} val [value]
 * @return {String}     [stringified value]
 */
export function _stringify(val) {
    var returnVal = isObject(val) ? JSON.stringify(val) : val
    return returnVal
}

/**
 * parse string
 * @param  {String} val [vlaue]
 * @return {String}     [object value]
 */
export function _parse(val) {
    var returnVal = JSON.parse(val)
    returnVal = isObject(returnVal) ? returnVal : val
    return returnVal
}

/**
 * [extend object]
 * @param  {Object} src [src object]
 * @param  {Object} des [extended object]
 * @param  {Integer} d   [depth]
 */
export function extend(src, des, d) {
    var depth = (d) ? d : 0
    for (var key in src) {
        var isObject = isObject(src[key])
        var isArray = isArray(src[key])
        if (isObject || isArray) {
            if (depth) {
                if (isObject) {
                    des[key] = {}
                    extend(src[key], des[key], depth - 1)
                }
                else if (isArray) {
                    des[key] = []
                    extend(src[key], des[key], depth - 1)
                }
            }
        }
        else {
            des[key] = src[key]
        }
    }
}
