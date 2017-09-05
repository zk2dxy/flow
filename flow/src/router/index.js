import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< Updated upstream
import _ from 'lodash'
import Hello from '@/components/Hello'
import flowModuleConfigRouter from './flowModuleConfig/flowModuleConfig'
=======
import FlowModelDef from '@/components/FlowModelDef'
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
  routes: route
=======
  routes: [
    {
      path: '/',
      name: 'flowModelDef',
      component: FlowModelDef
    }
  ]
>>>>>>> Stashed changes
})

