import Vue from 'vue'
import Router from 'vue-router'
import _ from 'lodash'
import Hello from '@/components/Hello'
import flowModuleConfigRouter from './flowModuleConfig/flowModuleConfig'

Vue.use(Router)

Vue.use(Router)
const rootRouter = [{
  path: '/',
  name: 'Hello',
  component: Hello,
  redirect: '/Hello'
}]

var route = _.concat(rootRouter, flowModuleConfigRouter)
export default new Router({
  routes: route
})

