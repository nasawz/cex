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
import ItemDivider from 'cex/components/list/item-divider.jsx'
import Flexbox from 'cex/components/flexbox/flexbox.jsx'

import NavigateMixin from '../../common/navigate-mixin.js'

const Home = React.createClass({
    mixins:[NavigateMixin],
    onClickLink(obj){
        this.navTo(obj.params)
    },
    render () {
        return (
            <List>
                <Flexbox className='flex-center'>
                    <div  style={{width:'220px',padding:'20px'}}>
                        <img src={require('../../../img/logo.png')} />
                    </div>
                </Flexbox>
                <ItemDivider>复合控件</ItemDivider>
                <ItemCell link={{params:['example','postform']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        postform
                    </ItemTitle>
                </ItemCell>
                <ItemDivider>基础控件</ItemDivider>
                <ItemCell link={{params:['example','bar']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        bar
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','avatar']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        avatar
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','uploader']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        uploader
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','scroll']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        scroll
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','lazyimage']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        lazyimage
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
                <ItemCell link={{params:['example','grid']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        grid
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','label']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        label
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','gallery']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        gallery
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','emoticonspicker']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        emoticonspicker
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','textarea']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        textarea
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','actionsheet']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        actionsheet
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','picker']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        picker
                    </ItemTitle>
                </ItemCell>
            </List >
        )
    }
})

export default Home
