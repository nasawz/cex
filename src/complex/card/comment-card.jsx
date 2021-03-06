import React from 'react'
import classNames from 'classnames'
import Item from 'cex/components/list/item.jsx'
import ItemMedia from 'cex/components/list/item-media.jsx'
import ItemTitle from 'cex/components/list/item-title.jsx'
import Avatar from 'cex/components/image/avatar.jsx'
import ItemContent from 'cex/components/list/item-content.jsx'
import ItemTitleRow from 'cex/components/list/item-title-row.jsx'
import TimeLabel from 'cex/components/label/time-label.jsx'
import ItemSubtitle from 'cex/components/list/item-sub-title.jsx'
import {contentParse} from '../../helpers/content-parse.js'

const CommentCard = React.createClass({
    getDefaultProps() {
        return {
            user: {
                name: '朱朱',
                avatar: {
                    img: 'http://shp.qpic.cn/bizmp/bzxzibRQFVkIzjofrT0SOmuI9vZ0kWCJ4BicF1rw5qibVkKuYwiaxJnOPA/',
                    icon: null,
                    plus: null
                },
            },
            txt:'女王的头冠，现在国博展览。',
            showAllTxt: false,
            isFavorite: true,
            favoriteNum: 11,
            commentNum: 10,
            gallery: [
                'http://ces00.b0.upaiyun.com/2016/09/17/upload_6f046a3cba5894c8deb72fd1b568021c.jpg',
                'http://ces00.b0.upaiyun.com/2016/10/10/upload_cce5c9c2abe8733ec638b8a3285e5de1.jpg',
                'http://ces00.b0.upaiyun.com/2016/10/09/upload_19e65d722b72075383f6ba3cd7d23e32.jpg',
            ]
        }
    },
    getInitialState() {
        return {
            showAllTxt: this.props.showAllTxt
        }
    },
    renderAvatar(){
        let {avatar} = this.props.user
        return (
            <Avatar src={avatar.img}
            plus={avatar.plus}
            icon={avatar.icon}
            style={{margin:'0px'}}
            size={40}
            />
        )
    },
    render () {
        let {txt,user,time} = this.props
        let txtObj = contentParse(txt)
        // let contHTML=txtObj.hasMore?(this.state.showAllTxt?txt:txtObj.cate_txt):txtObj.txt
        let contHTML=txtObj.txt
        let txtHTML = {
            __html:contHTML
        }
        let classes_cont = {
            'cex-item-text':true,
            'flod':!this.state.showAllTxt
        }
        return (
            <Item style={{background:'#fff'}}>
                <ItemMedia>
                    { this.renderAvatar() }
                </ItemMedia>
                <ItemContent>
                    <ItemTitleRow>
                        <ItemTitle style={{'color':'#536893'}}>{user.name}</ItemTitle>
                    </ItemTitleRow>
                    <ItemSubtitle>
                        <TimeLabel style={{fontSize:'10px',color:'#777'}} time={time} />
                    </ItemSubtitle>
                    <div className={classNames(classes_cont)} dangerouslySetInnerHTML={txtHTML}></div>
                </ItemContent>
            </Item>
        )
    }
})

export default CommentCard
