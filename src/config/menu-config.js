module.exports = [{
    name: '基础',
    id: 'basic',
    icon: 'th-large',
    sub: [{
      name: 'Layout 布局',
      componentName: 'BasicLayout',
      path:'/BasicLayout'
    }, {
      name: 'Container 布局容器',
      componentName: 'BasicContainer',
      path:'/BasicContainer'
    }]
  }, {
    name: 'Form',
    id: 'form',
    icon: 'beer',
    sub: [{
      name: 'Radio 单选框',
      componentName: 'FormRadio',
      path:'/FormRadio',
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '/FormRadio/BasicContainer',
          name:"BasicContainer2",
          component: () => import(`@/components/BasicContainer`),
        },
      ]
    }, {
      name: 'Checkbox 多选框',
      componentName: 'FormCheckbox',
      path:'/FormCheckbox'
    }]
  }]