import React from 'react'
import Progress from 'cex/components/progress/progress.jsx'

const VProgress = React.createClass({
    cancleProgress(){
        console.log('cancle');
    },
    getInitialState() {
        return {
            percent: 50,
        }
    },
    render () {
        return(
            <div>
                <Progress percent={this.state.percent} cancle={this.cancleProgress} />
                <div style={{height:'10px'}} />
                <Progress percent={this.state.percent} />
            </div>
        )
    }
})

export default VProgress
