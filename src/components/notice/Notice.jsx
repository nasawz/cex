import React from 'react'
import TimerMixin from 'react-timer-mixin'
import './notice.less'
const Notice = React.createClass({
    mixins: [TimerMixin],
    goHref(e){
        e.stopPropagation()
        e.preventDefault()
        let id = e.target.getAttribute('data-id')
        this.props.onLinkHref(id)
    },
    getDefaultProps(){
        let data = [
            {title:'哈哈',id:'1'},
            {title:'呵呵',id:'2'},
            {title:'嘿嘿',id:'3'},
            {title:'嘻嘻',id:'4'},
        ]
        return{
            data:data,
            src:require('../../img/group.png')
        }
    },
    getInitialState() {
        return {
            total: this.props.data.length,
            curr: 0
        }
    },
    componentDidMount(){
        let self = this
        this.setInterval(
          () => {
              let curr = self.state.curr
              if (self.state.curr<(self.state.total-2)) {
                  curr = curr+2
              }else{
                  curr = 0
              }
              self.setState({
                  curr:curr
              })
          },
          4000
        )
    },
    renderContent(){
        let content = <div />
        if(this.props.data[this.state.curr+1]){
            content = <div className='up'><i className='cex-icon' data-id={this.props.data[this.state.curr+1].id}></i>{this.props.data[this.state.curr+1].title}</div>

        }
        return(
         <div ref='marquee' className='marquee'>
           <div className='up' onClick={this.goHref} data-id={this.props.data[this.state.curr].id}><i className='cex-icon'></i>{this.props.data[this.state.curr].title}</div>
           {content}
         </div>
        )
    },
    render () {

        return (
            <div ref='notice' className='cex-notice'>
                <span className='cex-img'>
                    <img  src={this.props.src} />
                    <i></i>
                </span>
                {this.renderContent() }
            </div>
        )
    }
})

export default Notice
