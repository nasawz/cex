import React from 'react'
import List from 'cex/components/list/list.jsx'
import ItemTitle from 'cex/components/list/item-title.jsx'
import ItemCell from 'cex/components/list/item-cell.jsx'
import Clocker from 'cex/components/clocker/clocker.jsx'

const VClocker = React.createClass({
    getInitialState(){
        return {
            clock1:'<span class="cex-day">_D1</span> <span class="cex-day">_D2</span> 天 <span class="cex-day">_H1</span> <span class="cex-day">_H2</span> 时 <span class="cex-day">_M1</span> <span class="cex-day">_M2</span> 分 <span class="cex-day">_S1</span> <span class="cex-day">_S2</span> 秒',
            clock2:'<span style="color:red">_D</span> 天<span style="color:blue"> _H</span> 时 _M分',
        }
    },

    render () {
        return (
            <List>
                <ItemCell>
                    <ItemTitle>
                        <div>
                            默认: &emsp;<Clocker time="2016-10-13 12:58:10" />
                        </div>
                    </ItemTitle>
                </ItemCell>

                <ItemCell>
                    <ItemTitle>
                        <div>
                            带参:&emsp;
                            <Clocker time="2016-10-14 18:00:00" tplData={this.state.clock1} />
                        </div>
                    </ItemTitle>
                </ItemCell>

                <ItemCell>
                    <ItemTitle>
                        <div>
                            带参:&emsp;
                            <Clocker time="2016-10-18 18:00:00" tplData={this.state.clock2} />
                        </div>
                    </ItemTitle>
                </ItemCell>
            </List>
        )
    }
})

export default VClocker
