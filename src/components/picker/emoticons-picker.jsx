import React from 'react'
import Swiper from '../swiper/swiper.jsx'
import SwiperItem from '../swiper/swiper-item.jsx'

import classNames from 'classnames'

import './emoticons-picker.less'

const EmoticonsPicker = React.createClass({
    getEmotionName(e){
        e.stopPropagation();
        e.preventDefault();
        let el = e.currentTarget;
        let name = el.getAttribute('data-target');
        console.log('99999',name);
        this.props.deliverEmotionName(name)
    },
    renderImg(n){
        let emotions = [["呵呵","hehe"],["嘻嘻","xixi"],["哈哈","haha"],["可爱","keai"],["爱你","aini"],["亲亲","qinqin"],["太开心","taikaixin"],["鼓掌","guzhang"],["偷笑","touxiao"],["做鬼脸","zuoguilian"],["害羞","haixiu"],["酷","ku"],["花心","huaxin"],["钱","qian"],["吃惊","chijing"],["馋嘴","chanzui"],["懒得理","landelini"],["思考","sikao"],["嘘","xu"],["疑问","yiwen"],["汗","han"],["困","kun"],["打哈气","dahaqi"],["睡觉","shuijiao"],["哼","heng"],["闭嘴","bizui"],["鄙视","bishi"],["顶","ding"],["委屈","weiqu"],["挖鼻屎","wabishi"],["生病","shengbing"],["晕","yun"],["吐","tu"],["失望","shiwang"],["可怜","kelian"],["泪","lei"],["衰","shuai"],["抓狂","zhuakuang"],["怒骂","numa"],["怒","nu"],["左哼哼","zuohengheng"],["右哼哼","youhengheng"],["赞","zan"],["弱","ruo"],["来","lai"],["ok","ok"],["不要","buyao"],["耶","ye"],["握手","woshou"],["玫瑰","rose"],["心","xin"],["伤心","shangxin"],["钟","zhong"],["太阳","taiyang"],["月亮","yueliang"],["蛋糕","dangao"],["干杯","ganbei"],["咖啡","kafei"],["猪头","zhutou"],["话筒","huatong"],["蜡烛","lazhu"],["闪电","shandian"],["拥抱","yongbao"],["吃饭","chifan"],["足球","zuqiu"],["雨伞","yusan"],["棒棒糖","bangbangtang"],["气球","qiqiu"],["沙发","shafa"],["飞机","feiji"]]
        let src ="http://ces00.b0.upaiyun.com/emotion/png/";
        return (
            emotions.map((item,index) =>{
                for(let i = n;i<n+17;i++){
                    if(index>=n&&index<n+17){
                        return(
                            <img className="cex-img-item" onClick={this.getEmotionName} key={index} data-target={item[0]} src={src+item[1]+".png"}/>
                        )
                        if(i>53){
                            break
                        }
                    }

                }
            })

        )
    },

    renderItems(n){
        return (
            <SwiperItem className='cex-swiper-picker'>
                {this.renderImg(n)}
                <img className="cex-img-item" src="http://shequ.yunzhijia.com/thirdapp/forum/img/phizImg/btn_delete.png" alt="" />
            </SwiperItem>
        )
    },
    render () {
        let classes = {
            'cex-emoticons-picker' : true
        }
        return (
            <div className={classNames(this.props.className,classes)} >
                <Swiper>
                    {this.renderItems(0)}
                    {this.renderItems(17)}
                    {this.renderItems(34)}
                    {this.renderItems(52)}
                </Swiper>
            </div>
        )
    }
})

export default EmoticonsPicker
