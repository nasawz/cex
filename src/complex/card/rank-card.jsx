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
            data: {
              rank:0,
                name: '朱朱',
                avatar: {
                    img: 'http://shp.qpic.cn/bizmp/bzxzibRQFVkIzjofrT0SOmuI9vZ0kWCJ4BicF1rw5qibVkKuYwiaxJnOPA/',
                    icon: null,
                    plus: null
                },
            },

        }
    },
    getInitialState() {
        return {
            showAllTxt: this.props.showAllTxt
        }
    },
    renderAvatar() {
        let {avatar} = this.props.data
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
      let {rank} = this.props.data
      console.log(rank)
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
        switch (rank) {
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
            content = <div style={numStyle}>{rank}</div>
        }
        return (
            content
        )
    },
    render() {
      let {data,filter} = this.props
      let source
      if(filter=='exp'){
        source=data.experience
      }else if(filter=='gold'){
        source=data.rewards
      }

        return (
            <Card onClick={this.goUserProfile}>
                <Item style={{ background: '#fff' }}>
                {this.renderOrder() }
                <ItemMedia>
                    { this.renderAvatar() }
                </ItemMedia>
                <ItemContent>
                    <ItemTitleRow>
                        <ItemTitle style={{ 'color': '#536893' }}>{data.screen_name}</ItemTitle>
                        <ItemTitleAfter>{source}</ItemTitleAfter>
                    </ItemTitleRow>

                </ItemContent>
            </Item>
            </Card>


        )
    }
})

export default CommentCard
