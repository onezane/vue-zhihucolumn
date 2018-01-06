<template>
<transition name="slide" >
  <div class="drawer">
    <div class="drawer-content">
      <div class="bgImage"></div>
      <ul class="info">
        <li class="t">设计</li>
        <li>
          <a href="http://www.zcool.com.cn/u/15243725">
            <div><i class="iconfont icon-zhanku"></i></div>
            <div>油柑鸟梨</div>
          </a>
        </li>
        <li class="t">源码</li>
        <li>
          <a href="https://github.com/jasonwongui/vue-zhihucolumn">
            <div><i class="iconfont icon-github"></i></div>
            <div>jasonwongui</div>
          </a>
        </li>
        <li class="t">联系我</li>
        <li>
          <div>
            <div><i class="iconfont icon-weixin"></i></div>
            <div>819143813</div>
          </div>
        </li>
        <li>
          <div>
            <div><i class="iconfont icon-youxiang"></i></div>
            <div>jasonwongui@163.com</div>
          </div>
        </li>
      </ul>
    </div>

    <div class="drawer-right" ref="drawerRight" @click="back"></div>
  </div>
</transition>
</template>

<script type="text/ecmascript-6">

export default {
  data() {
    return {
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  },
  created() {
    setTimeout((res) => {
      this.$refs.drawerRight.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
    }, 200)
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .drawer
    display: flex
    position: fixed
    width: 100%
    z-index: 100
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: rgba(0, 0, 0, 0)
    .drawer-content
      width: 65%
      height: 100%
      background: $color-background-d
      .bgImage
        height: 0
        padding-top: 85%
        width: 100%
        background-image:url('zhihu-columns.png')
        background-size: 100%
        background-repeat: no-repeat
      .info
        width: 100%
        height: 100%
        li
          padding: 10px
          width: 100%
          box-sizing: border-box
          background: $color-background
          &.t
            font-size: $font-size-small
            color: $color-text-d
            padding-bottom: 10px
            background: $color-background-d
          .iconfont
            font-size: $font-size-large
            padding-right: 10px
            color: $color-text-d
          & a, & div
            display: flex
            align-items: center
            color: $color-text    
    .drawer-right
      width: 35%
      height: 100%
      transition: all 0.2s
      
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s
    
  .slide-enter, .slide-leave-to
    transform: translateX(-100%)
    
  .fade-enter-active, .fade-leave-active
    transition: opacity 0.3s
  
  .fade-enter, .fade-leave-to
    opacity: 0
    
</style>