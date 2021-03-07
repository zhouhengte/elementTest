<template>
  <div>
    这是：Radio 单选框
    <div style="width:99%;height:311px">
      <div class="tabs">
      <ul>
        <!-- <router-link :to="{name: 'BasicContainer2'}" tag="li" replace>我的收藏</router-link> -->
        <el-button @click="clickItem(1)" type="primary">BasicContainer2</el-button>
      </ul>
    </div>
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
export default {
  methods: {
    clickItem(index){
      if(index == 1){
        this.$router.push({name:'BasicContainer2'})
      }
    }
  }
}
</script>

<style>

</style>
