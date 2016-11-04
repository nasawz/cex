import React from 'react'
// import classNames from 'classnames'
import Card from 'cex/components/card/card.jsx'
import Item from 'cex/components/list/item.jsx'
import ItemMedia from 'cex/components/list/item-media.jsx'
import ItemTitle from 'cex/components/list/item-title.jsx'
import Avatar from 'cex/components/image/avatar.jsx'
import ItemContent from 'cex/components/list/item-content.jsx'
import ItemTitleRow from 'cex/components/list/item-title-row.jsx'
import ItemTitleAfter from 'cex/components/list/item-title-after.jsx'

const CommentCard = React.createClass({
    goUserProfile(e) {
        e.stopPropagation()
        e.preventDefault()
        this.props.onGoUserProfile(this.props.data.id)
    },

    getDefaultProps() {
        return {
            order: 4,
            user: {
                name: '朱朱',
                avatar: {
                    img: 'http://shp.qpic.cn/bizmp/bzxzibRQFVkIzjofrT0SOmuI9vZ0kWCJ4BicF1rw5qibVkKuYwiaxJnOPA/',
                    icon: null,
                    plus: null
                },
            },
            txt: '女王的头冠，现在国博展览。',
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
    renderAvatar() {
        let {avatar} = this.props.user
        return (
            <Avatar src={avatar.img}
                plus={avatar.plus}
                icon={avatar.icon}
                style={{ margin: '0px' }}
                size={40}
                />
        )
    },
    renderOrder() {
        let imgStyle = {
            width: '15px',
            height: '20px',
            margin: '20px 10px 0 0'
        }
        let numStyle = {
            padding: '10px 0',
            width: '20px',
            marginRight: '9px',
            flexDirection: 'column',
            display: 'flex',
            color: '#777',
            justifyContent: 'center',
        }
        let content
        switch (this.props.order) {
        case 1:
            content = <img  style={imgStyle} src={require('../../img/icon_award1.png') } />
            break
        case 2:
            content = <img  style={imgStyle} src={require('../../img/icon_award2.png') } />
            break
        case 3:
            content = <img  style={imgStyle} src={require('../../img/icon_award3.png') } />
            break
        default:
            content = <div style={numStyle}>{this.props.order}</div>
        }
        return (
            content
        )

    },
    render() {
        let {data} = this.props
        return (
            <Card onClick={this.goUserProfile}>
                <Item style={{ background: '#fff' }}>
                {this.renderOrder() }
                <ItemMedia>
                    { this.renderAvatar() }
                </ItemMedia>
                <ItemContent>
                    <ItemTitleRow>
                        <ItemTitle style={{ 'color': '#536893' }}>{data.name}</ItemTitle>
                        <ItemTitleAfter>3</ItemTitleAfter>
                    </ItemTitleRow>

                </ItemContent>
            </Item>
            </Card>

            
        )
    }
})

export default CommentCard
