<template>
<div class="tab-wrap">
  <div class="tab">
    <router-link class="tab-item" tag="div" to="/find">
      <span class="tab-link">发现</span>
    </router-link>
    <router-link class="tab-item" tag="div" to="/column">
      <span class="tab-link">专栏</span>
    </router-link>
  </div>
</div>

</template>

<script type="text/ecmascript-6">

export default {
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable'
  
  .tab-wrap
    position: relative
    height: 44px
    text-align: center
    border-bottom: 1px solid $color-line
    .tab
      display: flex
      width: 192px
      line-height: 42px
      margin: 0 auto
      .tab-item
        flex: 1
        &.router-link-active
          color: $color-theme
          border-bottom: 2px solid $color-theme
</style>