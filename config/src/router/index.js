import Vue from 'vue'
import Router from 'vue-router'
// 获取首页的路由
import index from '../components/index'
// 获取用户的路由
import username from '../components/username'
// 获取弹出提示框的路由
import alert from '../components/alert'
// 获取提示信息的路由
import tips from '../components/tips'
// 获取用户头像信息录入的路由
import video from '../components/video'
// 录入成功
import success from '../components/success'
// 录入失败路由
import luruError from '../components/luruError'
// 直接识别
import tips1 from '../components/tips1'
// 识别中的路由
import shibiezhong from '../components/shibiezhong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // 访问的路径
      name: 'index', // 组件的名称
      component: index // 引入组件的名称
    },
    {
      path: '/username', // 访问的路径
      name: 'username', // 组件的名称
      component: username // 引入组件的名称
    },
    {
      path: '/alert', // 访问的路径
      name: 'alert', // 组件的名称
      component: alert // 引入组件的名称
    },
    {
      path: '/tips', // 访问的路径
      name: 'tips', // 组件的名称
      component: tips // 引入组件的名称
    },
    {
      path: '/video', // 访问的路径
      name: 'video', // 组件的名称
      component: video // 引入组件的名称
    },
    {
      path: '/success', // 访问的路径
      name: 'success', // 组件的名称
      component: success // 引入组件的名称
    },
    {
      path: '/luruError', // 访问的路径
      name: 'luruError', // 组件的名称
      component: luruError // 引入组件的名称
    },
    {
      path: '/tips1', // 访问的路径
      name: 'tips1', // 组件的名称
      component: tips1 // 引入组件的名称
    }
    ,
    {
      path: '/shibiezhong', // 访问的路径
      name: 'shibiezhong', // 组件的名称
      component: shibiezhong // 引入组件的名称
    }
  ]
})
