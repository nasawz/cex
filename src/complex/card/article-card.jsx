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
import ItemText from 'cex/components/list/item-text.jsx'
import ItemContent from 'cex/components/list/item-content.jsx'
import ItemTitleRow from 'cex/components/list/item-title-row.jsx'
import 'cex/components/list/item-text.less'
import LazyImage from 'cex/components/image/lazy-image.jsx'

const ArticleCard = React.createClass({

    goInfo(e) {
        e.stopPropagation()
        e.preventDefault()
        if (this.props.goInfo) {
            this.props.goInfo(this.props.data.id)
        }
    },
    componentDidMount() {

    },

    renderMedia(){
        let thumbnail = this.props.data.thumbnail
        if(thumbnail && thumbnail.length>0){
            return(
                <ItemMedia squarePicture>
                    <LazyImage src={thumbnail} />
                </ItemMedia>
            )          
        }
            
    },

    render() {
        let {data} = this.props
        let styleText={
            textOverflow: 'ellipsis',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
            marginTop: '10px',
        }
        let styleCont={
            justifyContent: 'flex-start',
            WebkitJustifyContent: 'flex-start',
        }
            
        return (
            <Card onClick={this.goInfo}>
                <Item>
                    { this.renderMedia() }
                    <ItemContent style={styleCont}>
                        <ItemTitleRow>
                            <ItemTitle>{data.title}</ItemTitle>
                        </ItemTitleRow>
                        <ItemText style={styleText}>
                            {data.description}
                        </ItemText>
                    </ItemContent>
                </Item>
            </Card>
        )
    }
})

export default ArticleCard
