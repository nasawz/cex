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
    onClickLink(obj) {
        this.navTo(obj.params)
    },
    render () {
        return (
            <List>
                <Flexbox className='flex-center'>
                    <div  style={{width:'220px',padding:'20px'}}>
                        <img src={require('../../../img/logo.png')} style={{width:'100%'}} />
                    </div>
                </Flexbox>
                <ItemDivider>复合控件</ItemDivider>
                <ItemCell link={{params:['example','postform']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        postform
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','blogcard']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        blogcard
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','commentcard']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        commentcard
                    </ItemTitle>
                </ItemCell>
                <ItemDivider>基础控件</ItemDivider>
                <ItemCell link={{params:['example','search']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        search
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','selector']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        selector
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','blur']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        blur
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','switch']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        switch
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','dialog']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        dialog
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','alert']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        alert
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','confirm']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        confirm
                    </ItemTitle>
                </ItemCell>
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
                <ItemCell link={{params:['example','input']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        input
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
                <ItemCell link={{params:['example','loading']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        loading
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','toast']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        toast
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','checker']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        checker
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','checklist']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        checklist
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','clocker']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        clocker
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','popup']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        popup
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','popup-picker']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        popup-picker
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','datetime']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        datetime
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','reddot']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        reddot
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','qrcode']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        qrcode
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','shake']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        shake
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','orientation']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        orientation
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','progress']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        progress
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','radio']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        radio
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','range']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        range
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','step']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        step
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','timeline']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        timeline
                    </ItemTitle>
                </ItemCell>
                <ItemCell link={{params:['example','masker']}} onClickLink={this.onClickLink}>
                    <ItemTitle>
                        masker
                    </ItemTitle>
                </ItemCell>
            </List>
        )
    }
})

export default Home
