import React from 'react'
import Card from 'cex/components/card/card.jsx'
import CardContent from 'cex/components/card/card-content.jsx'
import CardHeader from 'cex/components/card/card-header.jsx'
import CardFooter from 'cex/components/card/card-footer.jsx'
import CardImage from 'cex/components/card/card-image.jsx'
import CardTitle from 'cex/components/card/card-title.jsx'
import CardTools from 'cex/components/card/card-tools.jsx'
import List from 'cex/components/list/list.jsx'
import Item from 'cex/components/list/item.jsx'
import ItemMedia from 'cex/components/list/item-media.jsx'
import ItemTitle from 'cex/components/list/item-title.jsx'
import ItemContent from 'cex/components/list/item-content.jsx'
import ItemSubtitle from 'cex/components/list/item-sub-title.jsx'
import ItemText from 'cex/components/list/item-text.jsx'
import ItemTitleRow from 'cex/components/list/item-title-row.jsx'
import ItemTitleAfter from 'cex/components/list/item-title-after.jsx'
import IconButton from 'cex/components/icon/icon-button.jsx'

const VCard = React.createClass({
    render () {
        return (
            <div>
                <Card>
                    <CardContent>
                        card
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        header
                    </CardHeader>
                    <CardContent>
                        card
                    </CardContent>
                    <CardFooter>
                        footer
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Cex.js</CardTitle>
                        <CardTools>
                            <IconButton icon='icon-add_a_photo' />
                        </CardTools>
                    </CardHeader>
                    <CardContent>
                        card
                    </CardContent>
                    <CardFooter>
                        <IconButton icon='icon-favorite'>喜欢</IconButton>
                        <IconButton icon='icon-chat'>评论</IconButton>
                        <IconButton icon='icon-share'>分享</IconButton>
                    </CardFooter>
                </Card>
                <Card>
                    <CardImage src='http://ces00.b0.upaiyun.com/2016/07/27/upload_3184ba6f69a11468104cc90c2c546b43.png!480x174' >
                        <CardTitle>微家</CardTitle>
                    </CardImage>
                    <CardContent>
                        card
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <List>
                            <Item>
                                <ItemMedia>
                                    <img src="http://ugc.qpic.cn/gbar_pic/PYnx3ZdPvsTiaj9aNylwCQbvWIcE2J9lRBkUxb5Sx1s9H7AqhrKx3zw/"/>
                                </ItemMedia>
                                <ItemContent>
                                    <ItemTitleRow>
                                        <ItemTitle>德玛西亚</ItemTitle>
                                        <ItemTitleAfter>2014-12-23</ItemTitleAfter>
                                    </ItemTitleRow>
                                    <ItemSubtitle>
                                        网通二区
                                    </ItemSubtitle>
                                    <ItemText>
                                        德玛西亚，原为著名竞技游戏英雄联盟中的一个势力，也是中国区一个服务器（网通二区）的名称。
                                    </ItemText>
                                </ItemContent>
                            </Item>
                        </List>
                    </CardContent>
                    <CardFooter>
                        <IconButton icon='icon-favorite'>喜欢</IconButton>
                        <IconButton icon='icon-chat'>评论</IconButton>
                    </CardFooter>
                </Card>
            </div>
        )
    }
})

export default VCard
