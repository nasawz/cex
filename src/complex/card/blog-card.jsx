import React from 'react'
import ReactDOM from "react-dom"
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
    toggleShowAll(e) {
        e.stopPropagation()
        e.preventDefault()
        this.setState({
            showAllTxt: !this.state.showAllTxt
        })
    },
    getDefaultProps() {
        return {
            user: {
                id: '',
                name: '朱朱',
                avatar: {
                    img: 'http://shp.qpic.cn/bizmp/bzxzibRQFVkIzjofrT0SOmuI9vZ0kWCJ4BicF1rw5qibVkKuYwiaxJnOPA/',
                    icon: null,
                    plus: null
                }
            },
            address: '北京，朝阳区，远洋国际中心',
            txt: '女王的头冠，现在国博展览。 有没有人想干票大的？[太开心]女王的头冠，现在国博展览。 有没有人想干票大的？[太开心]女王的头冠，现在国博展览。 有没有人想干票大的？[太开心][太开心]女王的头冠，现在国博展览。 有没有人想干票大的？[太开心][太开心]女王的头冠，现在国博展览。 有没有人想干票大的？[太开心][太开心]女王的头冠，现在国博展览。 有没有人想干票大的？[太开心][太开心]女王的头冠，现在国博展览。 有没有人想干票大的？[太开心][太开心]女王的头冠，现在国博展览。 有没有人想干票大的？[太开心][太开心]女王的头冠，现在国博展览。 有没有人想干票大的？[太开心]',
            showAllTxt: false,
            isFavorite: true,
            favoriteNum: 11,
            commentNum: 10,
            essential: false,
            essentialImg: '',
            time:'2016-10-21',
            gallery: ['http://ces00.b0.upaiyun.com/2016/09/17/upload_6f046a3cba5894c8deb72fd1b568021c.jpg', 'http://ces00.b0.upaiyun.com/2016/10/10/upload_cce5c9c2abe8733ec638b8a3285e5de1.jpg', 'http://ces00.b0.upaiyun.com/2016/10/09/upload_19e65d722b72075383f6ba3cd7d23e32.jpg']
        }
    },
    getInitialState() {
        return {showAllTxt: this.props.showAllTxt}
    },
    renderAvatar() {
        let {avatar} = this.props.user
        return (<Avatar src={avatar.img} onClick={this.onClickAvatar} plus={avatar.plus} icon={avatar.icon} style={{
            margin: '0px'
        }} size={40}/>)
    },
    renderMoreBtn(hasMore) {
        if (hasMore) {
            let str = this.state.showAllTxt
                ? '收起'
                : '展开'
            return <a onClick={this.toggleShowAll}>{str}</a>
        }
    },
    onClickAvatar(e) {
        e.stopPropagation()
        e.preventDefault()
        if (this.props.onClickAvatar) {
            this.props.onClickAvatar(this.props.user)
        }
    },
    onFavorite(e) {
        e.stopPropagation()
        e.preventDefault()
        if (this.props.onFavorite) {
            this.props.onFavorite(this.props.blogId, this.props.isFavorite)
        }
    },
    onActionSheet(e) {
        e.stopPropagation()
        e.preventDefault()
        if (this.props.onActionSheet) {
            this.props.onActionSheet(this.props.blogId,this.props.user.id)
        }
    },
    onComment(e) {
        e.stopPropagation()
        e.preventDefault()
        if (this.props.onComment) {
            let {blogId, commentNum} = this.props
            this.props.onComment(blogId, commentNum)
        }
    },
    goInfo(e) {
        e.stopPropagation()
        e.preventDefault()
        if (this.props.goInfo) {
            this.props.goInfo(this.props.blogId)
        }
    },
    componentDidMount() {
        let self = this
        let el = ReactDOM.findDOMNode(this)
        let go_search = el.querySelector('.go_search')
        if (go_search) {
            go_search.onclick = function(e) {
                e.stopPropagation()
                e.preventDefault()
                let searchTxt = e.currentTarget.getAttribute('data-search')
                if (self.props.goSearch) {
                    self.props.goSearch(searchTxt)
                }
            }
        }
        let go_url = el.querySelector('.go_url')
        if (go_url) {
            go_url.onclick = function(e) {
                e.stopPropagation()
                e.preventDefault()
                let href = e.currentTarget.getAttribute('data-url')
                window.location.href = href
            }
        }
    },
    renderFavoriteBtn() {
        let {favoriteNum} = this.props
        let color = this.props.isFavorite
            ? '#FFAE46'
            : null
        let str = favoriteNum == 0
            ? '点赞'
            : favoriteNum
        return <IconButton onClick={this.onFavorite} size={16} color={color} icon='icon-thumb_up'>{str}</IconButton>
    },
    renderCommentBtn() {
        let {commentNum} = this.props
        let str = commentNum == 0
            ? '评论'
            : commentNum
        return <IconButton onClick={this.onComment} size={16} icon='icon-chat'>{str}</IconButton>
    },
    renderGallery() {
        let {gallery} = this.props
        if (gallery.length == 0)
            return
        let items = []
        for (var i = 0; i < gallery.length; i++) {
            items.push(<GalleryItem key={i} src={gallery[i]}/>)
            if (i > 9)
                break
        }
        return (
            <Gallery>
                {items}
            </Gallery>
        )
    },
    renderAddress() {
        let {address} = this.props
        if (address && address != '') {
            return (
                <div>
                    <AddressLabel mode='view' txt={address}/>
                </div>
            )
        }
    },
    renderCard(){
        let {txt, user, time, essential, essentialImg} = this.props
        let txtObj = contentParse(txt)
        let contHTML = txtObj.txt
        if (essential) {
            contHTML = essentialImg + contHTML
        }
        let txtHTML = {
            __html: contHTML
        }
        let classes_cont = {
            'cex-item-text': true,
            'flod': !this.state.showAllTxt
        }
        if(this.props.isFullScreen){
            return(
                <Item>
                    <ItemContent>
                        <ItemTitleRow>
                            <ItemTitle>
                                <TimeLabel style={{
                                    fontSize: '10px',
                                    color: '#777'
                                }} time={time}/>
                            </ItemTitle>

                            <ItemTitleAfter>
                                <IconButton icon='icon-keyboard_arrow_down' onClick={this.onActionSheet}></IconButton>
                            </ItemTitleAfter>
                        </ItemTitleRow>
                        <ItemSubtitle>
                        </ItemSubtitle>
                        <div className={classNames(classes_cont)} dangerouslySetInnerHTML={txtHTML}></div>
                        {this.renderMoreBtn(txtObj.hasMore)}
                        {this.renderGallery()}
                        {this.renderAddress()}
                    </ItemContent>
                </Item>
            )
        }
        return (
            <Item>
                <ItemMedia>
                    {this.renderAvatar()}
                </ItemMedia>
                <ItemContent>
                    <ItemTitleRow>
                        <ItemTitle>{user.name}</ItemTitle>
                        <ItemTitleAfter>
                            <IconButton icon='icon-keyboard_arrow_down' onClick={this.onActionSheet}></IconButton>
                        </ItemTitleAfter>
                    </ItemTitleRow>
                    <ItemSubtitle>
                        <TimeLabel style={{
                            fontSize: '10px',
                            color: '#777'
                        }} time={time}/>
                    </ItemSubtitle>
                    <div className={classNames(classes_cont)} dangerouslySetInnerHTML={txtHTML}></div>
                    {this.renderMoreBtn(txtObj.hasMore)}
                    {this.renderGallery()}
                    {this.renderAddress()}
                </ItemContent>
            </Item>
        )
    },
    render() {
        let {txt, user, time, essential, essentialImg} = this.props
        return (
            <Card onClick={this.goInfo}>
                <CardContent>
                    <List>
                        {this.renderCard() }
                    </List>
                </CardContent>

                <CardFooter>
                    {this.renderCommentBtn()}
                    {this.renderFavoriteBtn()}
                </CardFooter>
            </Card>
        )
    }
})

export default BlogCard
