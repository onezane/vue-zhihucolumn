<template>
  <div class="loading">
    <img class="img" src="./loading.gif">
    <p class="desc">{{title}}</p>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: '正在载入...'
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .loading
    width: 100%
    text-align: center
    .img
      width: 24px
      height: 24px
    .desc
      line-height: 20px
      font-size: $font-size-small
      color: $color-text-d
</style>
