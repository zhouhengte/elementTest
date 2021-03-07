<template>
  <div>
    这是：Checkbox 多选框
    <!-- 全局引入不需在html声明ak,在main.js中声明ak -->
    <!-- <baidu-map :center="center" :zoom="zoom" @ready="handler" style="height:1080px" @click="getClickInfo" :scroll-wheel-zoom='true'>
    </baidu-map> -->
    <!-- 局部引入需要在html声明ak -->
    <!-- <baidu-map ak="TqcsnOgGMu2L7RfswFXpv15RcDpKOBzW" :center="center" :zoom="zoom" @ready="handler" style="height:1080px" @click="getClickInfo" :scroll-wheel-zoom='true'>
    </baidu-map> -->
    <el-input v-model="addressKeyword" placeholder="请输入地址来直接查找相关位置"></el-input>
    <baidu-map class="bmView" :scroll-wheel-zoom="true" :center="location" :zoom="zoom" @click="getLocationPoint" ak="TqcsnOgGMu2L7RfswFXpv15RcDpKOBzW">
      <bm-view style="width: 100%; height:450px; flex: 1"></bm-view>
      <bm-local-search :keyword="addressKeyword" :auto-viewport="true" style="display: none"></bm-local-search>
    </baidu-map>
  </div>
</template>

<script>

// 局部引入
import BaiduMap from 'vue-baidu-map/components/map/Map.vue'
import BmView from 'vue-baidu-map/components/map/MapView.vue'
import BmLocalSearch from 'vue-baidu-map/components/search/LocalSearch.vue'

export default {
  name: 'TestBaiDu',
  components: {
      BaiduMap,
      BmView,
      BmLocalSearch
  },
  data () {
    return {
      // center: {lng: 109.45744048529967, lat: 36.49771311230842},
      // zoom: 13,
      location: {
        lng: 116.404,
        lat: 39.915
      },
      zoom: 12.8,
      addressKeyword: "",
    }
  },
  methods: {
    handler ({BMap, map}) {
      var point = new BMap.Point(109.49926175379778, 36.60449676862417)
      map.centerAndZoom(point, 13)
      var marker = new BMap.Marker(point) // 创建标注
      map.addOverlay(marker) // 将标注添加到地图中
      var circle = new BMap.Circle(point, 6, { strokeColor: 'Red', strokeWeight: 6, strokeOpacity: 1, Color: 'Red', fillColor: '#f03' })
      map.addOverlay(circle)
    },
    getClickInfo (e) {
      console.log(e.point.lng)
      console.log(e.point.lat)
      this.center.lng = e.point.lng
      this.center.lat = e.point.lat
    },
    getLocationPoint(e) {
      this.lng = e.point.lng;
      this.lat = e.point.lat;
      /* 创建地址解析器的实例 */
      let geoCoder = new BMap.Geocoder();
      /* 获取位置对应的坐标 */
      geoCoder.getPoint(this.addressKeyword, point => {
        this.selectedLng = point.lng;
        this.selectedLat = point.lat;
      });
      /* 利用坐标获取地址的详细信息 */
      geoCoder.getLocation(e.point, res=>{
          console.log(res);
      })
    }
}}
</script>

<style >
 
</style>