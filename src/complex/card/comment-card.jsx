import React from 'react'
import classNames from 'classnames'
import Card from 'cex/components/card/card.jsx'
import CardContent from 'cex/components/card/card-content.jsx'
import List from 'cex/components/list/list.jsx'
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
            avatar: {
                img:'http://shp.qpic.cn/bizmp/bzxzibRQFVkIzjofrT0SOmuI9vZ0kWCJ4BicF1rw5qibVkKuYwiaxJnOPA/',
                icon:null,
                plus:null
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
        let {avatar} = this.props
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
        let {txt} = this.props
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
            <Card >
                <CardContent>
                    <List>
                        <Item>
                            <ItemMedia>
                                { this.renderAvatar() }
                            </ItemMedia>
                            <ItemContent>
                                <ItemTitleRow>
                                    <ItemTitle style={{'color':'#536893'}}>朱文英</ItemTitle>
                                </ItemTitleRow>
                                <ItemSubtitle>
                                    <TimeLabel style={{fontSize:'10px',color:'#777'}} time='2016-010-10T11:58:15.524502Z' />
                                </ItemSubtitle>
                                <div className={classNames(classes_cont)} dangerouslySetInnerHTML={txtHTML}></div>
                            </ItemContent>
                        </Item>
                        
                    </List>
                </CardContent>
            </Card>
        )
    }
})

export default CommentCard
