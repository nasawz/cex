import React from 'react'
import Grids from 'cex/components/grid/grids.jsx'
import Grid from 'cex/components/grid/grid.jsx'
import GridIcon from 'cex/components/grid/grid-icon.jsx'
import GridLabel from 'cex/components/grid/grid-label.jsx'
import Icon from 'cex/components/icon/icon.jsx'
import Divider from 'cex/components/divider/divider.jsx'

const VGrid = React.createClass({
    render () {
        return (
            <div>
                <Divider>default</Divider>
                <Grids>
                    <Grid>
                        <GridLabel>label</GridLabel>
                    </Grid>
                    <Grid>
                        <GridLabel>label</GridLabel>
                    </Grid>
                    <Grid>
                        <GridLabel>label</GridLabel>
                    </Grid>
                    <Grid>
                        <GridIcon><Icon className='icon-spa'/></GridIcon>
                        <GridLabel>label</GridLabel>
                    </Grid>
                    <Grid>
                        <GridIcon><Icon className='icon-account_circle'/></GridIcon>
                        <GridLabel>label</GridLabel>
                    </Grid>
                    <Grid>
                        <GridIcon><Icon className='icon-search'/></GridIcon>
                        <GridLabel>label</GridLabel>
                    </Grid>
                    <Grid>
                        <GridIcon><Icon className='icon-spa'/></GridIcon>
                    </Grid>
                    <Grid>
                        <GridIcon><Icon className='icon-account_circle'/></GridIcon>
                    </Grid>
                    <Grid>
                        <GridIcon><Icon className='icon-search'/></GridIcon>
                    </Grid>
                </Grids>
                <Divider>small</Divider>
                <Grids small>
                    <Grid>
                        <GridLabel>label</GridLabel>
                    </Grid>
                    <Grid>
                        <GridLabel>label</GridLabel>
                    </Grid>
                    <Grid>
                        <GridLabel>label</GridLabel>
                    </Grid>
                    <Grid>
                        <GridLabel>label</GridLabel>
                    </Grid>
                    <Grid>
                        <GridIcon><Icon className='icon-spa'/></GridIcon>
                        <GridLabel>label</GridLabel>
                    </Grid>
                    <Grid>
                        <GridIcon><Icon className='icon-account_circle'/></GridIcon>
                        <GridLabel>label</GridLabel>
                    </Grid>
                    <Grid>
                        <GridIcon><Icon className='icon-search'/></GridIcon>
                        <GridLabel>label</GridLabel>
                    </Grid>
                    <Grid>
                        <GridIcon><Icon className='icon-add_a_photo'/></GridIcon>
                        <GridLabel>label</GridLabel>
                    </Grid>
                    <Grid>
                        <GridIcon><Icon className='icon-spa'/></GridIcon>
                    </Grid>
                    <Grid>
                        <GridIcon><Icon className='icon-account_circle'/></GridIcon>
                    </Grid>
                    <Grid>
                        <GridIcon><Icon className='icon-search'/></GridIcon>
                    </Grid>
                    <Grid>
                        <GridIcon><Icon className='icon-add_a_photo'/></GridIcon>
                    </Grid>
                </Grids>
            </div>
        )
    }
})

export default VGrid
