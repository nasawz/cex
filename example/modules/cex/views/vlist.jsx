import React from 'react'
import List from 'cex/components/list/list.jsx'
import Item from 'cex/components/list/item.jsx'
import ItemMedia from 'cex/components/list/item-media.jsx'
import ItemTitle from 'cex/components/list/item-title.jsx'
import ItemContent from 'cex/components/list/item-content.jsx'
import ItemSubtitle from 'cex/components/list/item-sub-title.jsx'
import ItemText from 'cex/components/list/item-text.jsx'
import ItemTitleRow from 'cex/components/list/item-title-row.jsx'
import ItemCell from 'cex/components/list/item-cell.jsx'
import ItemDivider from 'cex/components/list/item-divider.jsx'
import ItemTitleAfter from 'cex/components/list/item-title-after.jsx'
import Badge from 'cex/components/badge/badge.jsx'
import Icon from 'cex/components/icon/icon.jsx'

const VList = React.createClass({
    render () {
        return (
            <List>
                <ItemCell>
                    <ItemTitle>
                        hello
                    </ItemTitle>
                </ItemCell>
                <ItemCell link>
                    <ItemMedia>
                        <Icon className='icon-spa'/>
                    </ItemMedia>
                    <ItemTitle>
                        hello
                    </ItemTitle>
                </ItemCell>
                <ItemCell link>
                    <ItemMedia>
                        <Badge color='primary'>官方</Badge>
                    </ItemMedia>
                    <ItemTitle>
                        hello
                    </ItemTitle>
                </ItemCell>
                <ItemCell>
                    <ItemTitle>
                        hello
                    </ItemTitle>
                    <ItemTitleAfter>
                        66
                    </ItemTitleAfter>
                </ItemCell>
                <ItemCell>
                    <ItemTitle>
                        hello
                    </ItemTitle>
                    <ItemTitleAfter>
                        <Badge>66</Badge>
                    </ItemTitleAfter>
                </ItemCell>
                <ItemDivider>Divider</ItemDivider>
                <ItemCell link>
                    <ItemTitle>
                        hello
                    </ItemTitle>
                    <ItemTitleAfter>
                        66
                    </ItemTitleAfter>
                </ItemCell>
                <ItemCell link>
                    <ItemTitle>
                        hello
                    </ItemTitle>
                    <ItemTitleAfter>
                        <Badge>66</Badge>
                    </ItemTitleAfter>
                </ItemCell>
                <ItemDivider>更多</ItemDivider>
                <Item>
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
                <Item link>
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

        )
    }
})

export default VList
