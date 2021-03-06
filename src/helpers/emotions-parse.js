let emotions = [['呵呵','hehe'],['嘻嘻','xixi'],['哈哈','haha'],['可爱','keai'],['爱你','aini'],['亲亲','qinqin'],['太开心','taikaixin'],['鼓掌','guzhang'],['偷笑','touxiao'],['做鬼脸','zuoguilian'],['害羞','haixiu'],['酷','ku'],['花心','huaxin'],['钱','qian'],['吃惊','chijing'],['馋嘴','chanzui'],['懒得理','landelini'],['思考','sikao'],['嘘','xu'],['疑问','yiwen'],['汗','han'],['困','kun'],['打哈气','dahaqi'],['睡觉','shuijiao'],['哼','heng'],['闭嘴','bizui'],['鄙视','bishi'],['顶','ding'],['委屈','weiqu'],['挖鼻屎','wabishi'],['生病','shengbing'],['晕','yun'],['吐','tu'],['失望','shiwang'],['可怜','kelian'],['泪','lei'],['衰','shuai'],['抓狂','zhuakuang'],['怒骂','numa'],['怒','nu'],['左哼哼','zuohengheng'],['右哼哼','youhengheng'],['赞','zan'],['弱','ruo'],['来','lai'],['ok','ok'],['不要','buyao'],['耶','ye'],['握手','woshou'],['玫瑰','rose'],['心','xin'],['伤心','shangxin'],['钟','zhong'],['太阳','taiyang'],['月亮','yueliang'],['蛋糕','dangao'],['干杯','ganbei'],['咖啡','kafei'],['猪头','zhutou'],['话筒','huatong'],['蜡烛','lazhu'],['闪电','shandian'],['拥抱','yongbao'],['吃饭','chifan'],['足球','zuqiu'],['雨伞','yusan'],['棒棒糖','bangbangtang'],['气球','qiqiu'],['沙发','shafa'],['飞机','feiji']]

export function emotionsParse(str){
    let emotionObj = {}
    emotions.map((item) => {
        emotionObj['['+item[0]+']'] = item[1]
    })
    let cc = str.match(/\[(.{1,3})\]/g)
    if (cc && cc.length>0) {
        cc.map((item) => {
            str = str.replace(item, '<img width="16" height="16" src='+'http://ces00.b0.upaiyun.com/emotion/gif/'+emotionObj[item]+'.gif'+' />')
        })
    }
    return str
}

export {emotions}
