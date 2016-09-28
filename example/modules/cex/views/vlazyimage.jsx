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

import LazyImage from 'cex/components/image/lazy-image.jsx'

const VLazyImage = React.createClass({
    render () {
        return (
            <div>
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
                    <CardContent>
                        <LazyImage
                            src='http://ces00.b0.upaiyun.com/2016/09/28/upload_2648cca8524f606b93f2fd54259a5949.jpg!480x174' />
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
                    <CardContent>
                        <LazyImage
                            src='http://ces00.b0.upaiyun.com/2016/09/28/upload_78dded5a6ff30a31d650f1edb1cddbf7.jpg!480x174' />
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
                    <CardContent>
                        <LazyImage
                            src='http://ces00.b0.upaiyun.com/2016/09/28/upload_f71d9cee6ffed80db9c428f64e3d2853.jpg!480x174' />
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
                    <CardContent>
                        <LazyImage
                            src='http://ces00.b0.upaiyun.com/2016/09/28/upload_8fc737ab5ff6d0bf97bb346a36f695ba.jpg!480x174' />
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <LazyImage
                            src='http://ces00.b0.upaiyun.com/2016/09/28/upload_c4c2ac00648c54cdf3a577d0e9f9b62a.jpg!480x174' />
                    </CardContent>
                </Card>
            </div>
        )
    }
})

export default VLazyImage
