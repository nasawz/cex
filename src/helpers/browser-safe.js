/* eslint-disable */

import trim from 'trim'
import {isArray} from './is-type.js'
/**
 * @browser safe functions
 */

/**
 * html实体编码
 * @param  {String} str html文本
 * @return {String}     经html实体编码后的html文本
 */
export function encodeHTML(str) {
    //&gt; 实体标签
    //&#34; Unicode 编码（可以用charCodeAt方法查看某字符对应的unicode编码）
    var s = "";
    if(!str || str.length == 0) return "";
    s = str.replace(/&/g, "&#38;");
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/\'/g, "&#39;");
    s = s.replace(/\"/g, "&quot;");
    //空格和换行其实可以不转
    s = s.replace(/ /g, "&nbsp;");
    s = s.replace(/\n/g, "<br>");
    return s;
}

/**
 * html实体编码转义
 * @param  {String} str html文本
 * @return {String}     经html实体编码转义后的html文本
 */
export function decodeHTML(str) {
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&#38;/g, "&");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/&#39;/g, "\'");
    s = s.replace(/&quot;/g, "\"");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/<br>/g, "\n");
    return s;
}

/**
 * Safely encode the given string
 *
 * @param {String} str
 * @return {String}
 * @api private
 */
export function encode(str) {
  try {
    return encodeURIComponent(str);
  } catch (e) {
    return str;
  }
};

/**
 * Safely decode the string
 *
 * @param {String} str
 * @return {String}
 * @api private
 */
export function decode(str) {
  try {
    return decodeURIComponent(str.replace(/\+/g, ' '));
  } catch (e) {
    return str;
  }
}

/**
 * Parse the given query `str`.
 *
 * @param {String} str
 * @return {Object}
 * @api public
 */
export function parse(str){
  var pattern = /(\w+)\[(\d+)\]/;
  if ('string' != typeof str) return {};

  str = trim(str);
  if ('' == str) return {};
  if ('?' == str.charAt(0)) str = str.slice(1);

  var obj = {};
  var pairs = str.split('&');
  for (var i = 0; i < pairs.length; i++) {
    var parts = pairs[i].split('=');
    var key = decode(parts[0]);
    var m;

    if (m = pattern.exec(key)) {
      obj[m[1]] = obj[m[1]] || [];
      obj[m[1]][m[2]] = decode(parts[1]);
      continue;
    }

    obj[parts[0]] = null == parts[1]
      ? ''
      : decode(parts[1]);
  }

  return obj;
};

/**
 * Stringify the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api public
 */
export function stringify(obj){
  if (!obj) return '';
  var pairs = [];

  for (var key in obj) {
    var value = obj[key];

    if (isArray(value)) {
      for (var i = 0; i < value.length; ++i) {
        pairs.push(encode(key + '[' + i + ']') + '=' + encode(value[i]));
      }
      continue;
    }

    pairs.push(encode(key) + '=' + encode(obj[key]));
  }

  return pairs.join('&');
};
