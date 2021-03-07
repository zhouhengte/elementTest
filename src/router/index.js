import Vue from 'vue'
import Router from 'vue-router'
import menus from '@/config/menu-config'

Vue.use(Router)

var routes = []

menus.forEach((item) => {
  item.sub.forEach((sub) => {
    
    if(sub.children){
      routes.push({
        path: `/${sub.componentName}`,
        name: sub.componentName,
        component: () => import(`@/components/${sub.componentName}`),
        //有嵌套路由加入嵌套路由
        children: sub.children
      })
    }else{
      routes.push({
        path: `/${sub.componentName}`,
        name: sub.componentName,
        component: () => import(`@/components/${sub.componentName}`)
      })
    }
  })
})

// var routes = [
//   {
//     path:'/BasicLayout',
//     name: 'Layout 布局',
//     componentName: 'BasicLayout',
//     params:{zzz:'abc'},
//     component: () => import(`@/components/BasicLayout`)
//   }, {
//     path:'/BasicContainer',
//     name: 'Container 布局容器',
//     componentName: 'BasicContainer',
//     component: () => import(`@/components/BasicContainer`)
//   },
// {
//     path:'/FormRadio',
//     name: 'Radio 单选框',
//     componentName: 'FormRadio',
//     component: () => import(`@/components/FormRadio`)
//   }, {
//     path:'/FormCheckbox',
//     name: 'Checkbox 多选框',
//     componentName: 'FormCheckbox',
//     component: () => import(`@/components/FormCheckbox`)
//   }
// ]

export default new Router({ routes })

