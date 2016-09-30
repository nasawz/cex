import React from 'react'
import Grids from 'cex/components/grid/grids.jsx'
import Grid from 'cex/components/grid/grid.jsx'
import Divider from 'cex/components/divider/divider.jsx'
import Avatar from 'cex/components/image/avatar.jsx'

const VAvatar = React.createClass({
    render () {
        return (
            <div>
                <Divider>avatar</Divider>
                <Grids>
                    <Grid>
                        <Avatar src='http://tva1.sinaimg.cn/crop.6.0.500.500.180/6a0576a9jw8f6r59lnv5ej20e80dwgm3.jpg' />
                    </Grid>
                    <Grid>
                        <Avatar src='http://tva3.sinaimg.cn/crop.0.0.1125.1125.180/4a335019jw8eya6tqgr0rj20v90v9gnm.jpg' />
                    </Grid>
                    <Grid>
                        <Avatar src='http://tva2.sinaimg.cn/crop.1.0.637.637.180/67ffebf6jw8f641id9olfj20hs0hp0to.jpg' />
                    </Grid>
                    <Grid>
                        <Avatar
                            src='http://tva1.sinaimg.cn/crop.6.0.500.500.180/6a0576a9jw8f6r59lnv5ej20e80dwgm3.jpg'
                            plus={require('../../../img/gj_vip_025.png')}
                            />
                    </Grid>
                    <Grid>
                        <Avatar src='http://tva3.sinaimg.cn/crop.0.0.1125.1125.180/4a335019jw8eya6tqgr0rj20v90v9gnm.jpg'
                        plus={require('../../../img/gj_vip_042.png')}
                        />
                    </Grid>
                    <Grid>
                        <Avatar src='http://tva2.sinaimg.cn/crop.1.0.637.637.180/67ffebf6jw8f641id9olfj20hs0hp0to.jpg'
                        plus={require('../../../img/gj_vip_053.png')}
                        />
                    </Grid>
                    <Grid>
                        <Avatar
                            src='http://tva1.sinaimg.cn/crop.6.0.500.500.180/6a0576a9jw8f6r59lnv5ej20e80dwgm3.jpg'
                            plus={require('../../../img/gj_vip_025.png')}
                            icon={require('../../../img/xing.png')}
                            />
                    </Grid>
                    <Grid>
                        <Avatar src='http://tva3.sinaimg.cn/crop.0.0.1125.1125.180/4a335019jw8eya6tqgr0rj20v90v9gnm.jpg'
                        plus={require('../../../img/gj_vip_042.png')}
                        icon={require('../../../img/xing.png')}
                        />
                    </Grid>
                    <Grid>
                        <Avatar src='http://tva2.sinaimg.cn/crop.1.0.637.637.180/67ffebf6jw8f641id9olfj20hs0hp0to.jpg'
                        plus={require('../../../img/gj_vip_053.png')}
                        icon={require('../../../img/xing.png')}
                        />
                    </Grid>

                </Grids>
                <Divider>mini</Divider>
                <Grids small>
                    <Grid>
                        <Avatar size={30} src='http://tva1.sinaimg.cn/crop.6.0.500.500.180/6a0576a9jw8f6r59lnv5ej20e80dwgm3.jpg' />
                    </Grid>
                    <Grid>
                        <Avatar size={30} src='http://tva3.sinaimg.cn/crop.0.0.1125.1125.180/4a335019jw8eya6tqgr0rj20v90v9gnm.jpg' />
                    </Grid>
                    <Grid>
                        <Avatar size={30} src='http://tva2.sinaimg.cn/crop.1.0.637.637.180/67ffebf6jw8f641id9olfj20hs0hp0to.jpg' />
                    </Grid>
                    <Grid>
                        <Avatar size={30} src='http://tva1.sinaimg.cn/crop.6.0.500.500.180/6a0576a9jw8f6r59lnv5ej20e80dwgm3.jpg' />
                    </Grid>
                    <Grid>
                        <Avatar size={30}
                            src='http://tva1.sinaimg.cn/crop.6.0.500.500.180/6a0576a9jw8f6r59lnv5ej20e80dwgm3.jpg'
                            plus={require('../../../img/gj_vip_025.png')}
                            />
                    </Grid>
                    <Grid>
                        <Avatar size={30} src='http://tva3.sinaimg.cn/crop.0.0.1125.1125.180/4a335019jw8eya6tqgr0rj20v90v9gnm.jpg'
                        plus={require('../../../img/gj_vip_042.png')}
                        />
                    </Grid>
                    <Grid>
                        <Avatar size={30} src='http://tva2.sinaimg.cn/crop.1.0.637.637.180/67ffebf6jw8f641id9olfj20hs0hp0to.jpg'
                        plus={require('../../../img/gj_vip_053.png')}
                        />
                    </Grid>
                    <Grid>
                        <Avatar size={30}
                            src='http://tva1.sinaimg.cn/crop.6.0.500.500.180/6a0576a9jw8f6r59lnv5ej20e80dwgm3.jpg'
                            plus={require('../../../img/gj_vip_025.png')}
                            />
                    </Grid>
                    <Grid>
                        <Avatar size={30}
                            src='http://tva1.sinaimg.cn/crop.6.0.500.500.180/6a0576a9jw8f6r59lnv5ej20e80dwgm3.jpg'
                            plus={require('../../../img/gj_vip_025.png')}
                            icon={require('../../../img/xing.png')}
                            />
                    </Grid>
                    <Grid>
                        <Avatar size={30} src='http://tva3.sinaimg.cn/crop.0.0.1125.1125.180/4a335019jw8eya6tqgr0rj20v90v9gnm.jpg'
                        plus={require('../../../img/gj_vip_042.png')}
                        icon={require('../../../img/xing.png')}
                        />
                    </Grid>
                    <Grid>
                        <Avatar size={30} src='http://tva2.sinaimg.cn/crop.1.0.637.637.180/67ffebf6jw8f641id9olfj20hs0hp0to.jpg'
                        plus={require('../../../img/gj_vip_053.png')}
                        icon={require('../../../img/xing.png')}
                        />
                    </Grid>
                    <Grid>
                        <Avatar size={30}
                            src='http://tva1.sinaimg.cn/crop.6.0.500.500.180/6a0576a9jw8f6r59lnv5ej20e80dwgm3.jpg'
                            plus={require('../../../img/gj_vip_025.png')}
                            icon={require('../../../img/xing.png')}
                            />
                    </Grid>
                </Grids>
            </div>
        )
    }
})

export default VAvatar
