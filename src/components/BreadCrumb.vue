<template>
<div class="breadcrumb">
  <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item v-if="route">{{route}}</el-breadcrumb-item>

</el-breadcrumb>
</div>
</template>

<script>

export default {
  computed:{
    // 计算面包屑
   route() {
      let matched = this.$route.matched;
    return matched[matched.length - 1].meta.title !== "首页"? matched[matched.length - 1].meta.title: "";
    
    },
    // mounted() {
    //   this.$router.push(()=>{})
    // },
  }
}
</script>

<style>

</style>