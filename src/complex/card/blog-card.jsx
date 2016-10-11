import React from 'react'
import classNames from 'classnames'
import Card from 'cex/components/card/card.jsx'
import CardContent from 'cex/components/card/card-content.jsx'
import CardFooter from 'cex/components/card/card-footer.jsx'
import List from 'cex/components/list/list.jsx'
import Item from 'cex/components/list/item.jsx'
import ItemMedia from 'cex/components/list/item-media.jsx'
import ItemTitle from 'cex/components/list/item-title.jsx'
import ItemContent from 'cex/components/list/item-content.jsx'
import ItemSubtitle from 'cex/components/list/item-sub-title.jsx'
import ItemTitleRow from 'cex/components/list/item-title-row.jsx'
import ItemTitleAfter from 'cex/components/list/item-title-after.jsx'
import 'cex/components/list/item-text.less'
import IconButton from 'cex/components/icon/icon-button.jsx'
import Gallery from 'cex/components/image/gallery.jsx'
import GalleryItem from 'cex/components/image/gallery-item.jsx'
import Avatar from 'cex/components/image/avatar.jsx'
import AddressLabel from 'cex/components/label/address-label.jsx'
// import ColorLabel from 'cex/components/label/color-label.jsx'
import TimeLabel from 'cex/components/label/time-label.jsx'

import {contentParse} from '../../helpers/content-parse.js'

const BlogCard = React.createClass({
    toggleShowAll(e){
        e.stopPropagation()
        e.preventDefault()
        this.setState({
            showAllTxt: !this.state.showAllTxt
        })
    },
    getDefaultProps() {
        return {
            avatar: {
                img:'http://shp.qpic.cn/bizmp/bzxzibRQFVkIzjofrT0SOmuI9vZ0kWCJ4BicF1rw5qibVkKuYwiaxJnOPA/',
                icon:null,
                plus:null
            },
            txt:'女王的头冠，现在国博展览。 有没有人想干票大的？[太开心]女王的头冠，现在国博展览。 有没有人想干票大的？[太开心]女王的头冠，现在国博展览。 有没有人想干票大的？[太开心][太开心]女王的头冠，现在国博展览。 有没有人想干票大的？[太开心][太开心]女王的头冠，现在国博展览。 有没有人想干票大的？[太开心][太开心]女王的头冠，现在国博展览。 有没有人想干票大的？[太开心][太开心]女王的头冠，现在国博展览。 有没有人想干票大的？[太开心][太开心]女王的头冠，现在国博展览。 有没有人想干票大的？[太开心][太开心]女王的头冠，现在国博展览。 有没有人想干票大的？[太开心]',
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
    renderMoreBtn(hasMore){
        if (hasMore) {
            let str = this.state.showAllTxt?'收起':'展开'
            return <a onClick={this.toggleShowAll}>{str}</a>
        }
    },
    renderFavoriteBtn(){
        let {favoriteNum} = this.props
        let color = this.props.isFavorite?'#FFAE46':null
        let str = favoriteNum==0?'点赞':favoriteNum
        return <IconButton size={16} color={color} icon='icon-thumb_up'>{str}</IconButton>
    },
    renderCommentBtn(){
        let {commentNum} = this.props
        let str = commentNum==0?'评论':commentNum
        return <IconButton size={16} icon='icon-chat'>{str}</IconButton>
    },
    renderGallery(){
        let {gallery} = this.props
        if (gallery.length == 0) return
        let items = []
        for (var i = 0; i < gallery.length; i++) {
            items.push(<GalleryItem key={i} src={gallery[i]} />)
            if (i>9) break
        }
        return (
            <Gallery>
                { items }
            </Gallery>
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
            <Card>
                <CardContent>
                    <List>
                        <Item>
                            <ItemMedia>
                                { this.renderAvatar() }
                            </ItemMedia>
                            <ItemContent>
                                <ItemTitleRow>
                                    <ItemTitle>朱文英</ItemTitle>
                                    <ItemTitleAfter>
                                        <IconButton icon='icon-keyboard_arrow_down'></IconButton>
                                    </ItemTitleAfter>
                                </ItemTitleRow>
                                <ItemSubtitle>
                                    <TimeLabel style={{fontSize:'10px',color:'#777'}} time='2016-010-10T11:58:15.524502Z' />
                                </ItemSubtitle>
                                <div className={classNames(classes_cont)} dangerouslySetInnerHTML={txtHTML}></div>
                                { this.renderMoreBtn(txtObj.hasMore) }
                                { this.renderGallery() }
                                <div>
                                    <AddressLabel mode='view' txt='北京，朝阳区，远洋国际中心' />
                                </div>
                            </ItemContent>
                        </Item>
                    </List>
                </CardContent>

                <CardFooter>
                    { this.renderCommentBtn() }
                    { this.renderFavoriteBtn() }
                </CardFooter>
            </Card>
        )
    }
})

export default BlogCard
