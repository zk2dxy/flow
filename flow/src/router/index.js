import Vue from 'vue'
import Router from 'vue-router'
import _ from 'lodash'
import flowModuleConfigRouter from './flowModuleConfig/flowModuleConfig'
import FlowModelDef from '@/components/flowModelDef/FlowModelDef'

Vue.use(Router)
const rootRouter = [{
  path: '/',
  name: 'flowModelDef',
  component: FlowModelDef,
  redirect: '/flowModelDef'
}]

var route = _.concat(rootRouter, flowModuleConfigRouter)
export default new Router({
  routes: route
})

