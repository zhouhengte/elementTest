// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import NormailizeCss from 'normalize.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

import App from './App'
import router from './router'
import * as echarts from 'echarts'

// 全局引入
// import BaiduMap from 'vue-baidu-map'

// Vue.use(BaiduMap, {
//   ak: 'TqcsnOgGMu2L7RfswFXpv15RcDpKOBzW'
// })

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.component('icon', Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
