/**
 * create by nasa.wang
 */

import {PropTypes} from 'react'
import {navigate,replaceNavigate} from 'react-mini-router'

import join from 'lodash/join'
import {stringify} from './utils.js'

module.exports = {
    contextTypes: {
        runType: PropTypes.string.isRequired
    },
    generatePath(params,querys,runType){
        if (!runType) runType = this.context.runType
        if (runType == 'spa') {
            return '/'+join(params,'/')+(querys?'?'+stringify(querys):'')
        }else{
            return join(params,'-')+'.html'+(querys?'?'+stringify(querys):'')
        }
    },
    navTo(params,querys,runType){
        if (!runType) runType = this.context.runType
        let path = this.generatePath(params,querys)
        if (runType == 'spa') {
            navigate(path)
        }else{
            window.location.href = path
        }
    },
    navReplace(params,querys,runType){
        if (!runType) runType = this.context.runType
        let path = this.generatePath(params,querys)
        if (runType == 'spa') {
            replaceNavigate(path)
        }else{
            window.location.href = path
        }
    },
}
