import React from 'react'
import List from 'cex/components/list/list.jsx'
// import Item from 'cex/components/list/item.jsx'
// import ItemMedia from 'cex/components/list/item-media.jsx'
import ItemTitle from 'cex/components/list/item-title.jsx'
// import ItemContent from 'cex/components/list/item-content.jsx'
// import ItemSubtitle from 'cex/components/list/item-sub-title.jsx'
// import ItemText from 'cex/components/list/item-text.jsx'
// import ItemTitleRow from 'cex/components/list/item-title-row.jsx'
import ItemCell from 'cex/components/list/item-cell.jsx'
// import ItemDivider from 'cex/components/list/item-divider.jsx'
// import ItemTitleAfter from 'cex/components/list/item-title-after.jsx'
// import Badge from 'cex/components/badge/badge.jsx'
// import Icon from 'cex/components/icon/icon.jsx'

import NavigateMixin from '../../common/navigate-mixin.js'

const Home = React.createClass({
    mixins:[NavigateMixin],
    onClickLink(obj){
        this.navTo(obj.params)
    },
    render () {
        return (
            <List>
                <ItemCell link={{params:['example','scroll']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        scroll
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','card']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        card
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','floatbutton']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        floatbutton
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','button']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        button
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','list']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        list
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','swiper']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        swiper
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','tab']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        tab
                    </ItemTitle>
                </ItemCell>
            </List>
        )
    }
})

export default Home
