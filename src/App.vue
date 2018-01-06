<template>
  <div id="app">
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <Article></Article>
  </div>
</template>

<script>
import Tab from 'components/tab/tab'
import Article from 'components/article/article'

export default {
  components: {
    Tab,
    Article
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
