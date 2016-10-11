
import truncate from 'lodash/truncate'
import join from 'lodash/join'
import split from 'lodash/split'
import {emotionsParse} from './emotions-parse.js'
/**
 * contentParse - cex 文本内容解析器
 *
 * @param  {type} str description
 * @return {type}     description
 */
export function contentParse(txt){
    // 地址正则
    let regex = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/gi
    if(txt.match(regex)){
        let txt_url = txt.match(regex)
        let a_html = '<a href="javascript:;" data-url='+txt_url+' class="go_url">查看链接地址</a>'
        txt = txt.replace(txt_url,a_html)
    }
    // ＃＊＊＊＊＃识别正则
    let regexTxt = '#[^#]+#'
    if(txt.match(regexTxt)){
        let searchTxt = txt.match(regexTxt)
        let search_html = '<a href="javascript:;" data-search='+searchTxt+' class="go_search">'+searchTxt+'</a>'
        txt = txt.replace(searchTxt,search_html)
    }
    let cate_txt = truncate(txt, {
        'length': 140,
        'omission': '...'
    })
    let hasMore = (cate_txt.length<txt.length)
    if (txt.match(/\n/gi)&&txt.match(/\n/gi).length>6) {
        hasMore = true
        cate_txt = join(split(txt, '\n', 6), '\n')+'...'
    }
    txt = txt.replace(/[\n]+/gi, '<br />')
    cate_txt = cate_txt.replace(/[\n]+/gi, '<br />')
    txt = emotionsParse(txt)
    cate_txt = emotionsParse(cate_txt)
    return {
        txt:txt,
        cate_txt:cate_txt,
        hasMore:hasMore
    }
}
