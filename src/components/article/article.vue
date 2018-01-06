<template>
<transition name="slide" >
  <div class="article" v-if="showArticle">
      <div class="icon-back" @click="back" ref="iconBack">
        <i class="iconfont">&#xe600;</i>
      </div>
      <div class="topTitle" ref="topTitle">
        <div>{{articleContent.title}}</div>
      </div>
      <div class="bg-image" ref="bgImage" :style="bgStyle">
        <div class="bg-title" ref="bgTitle"></div>
        <div class="filter"></div>
      </div>

      <div class="bg-layer" ref="layer"></div>
      <div class="a-content">
        <scroll :dataObject="articleContent"  @scroll="scroll" class="article-content" ref="scroll" :probe-type="probeType" :listen-scroll="listenScroll">
        <div>
          <!-- 1 -->
          <div class="info">
            <div class="icon">
              <img :src="articleContent.avatarM">
            </div>
            <div class="text">
              <h2>{{articleContent.authorname}}</h2>
              <p>{{articleContent.bio}}</p>
            </div>
          </div>
          <!-- 2 -->
          <div class="title">{{articleContent.title}}</div>
          <!-- 3 -->
          <div class="content-wrap" v-html="articleContent.content" @load="loadContent"></div>
        </div>
        </scroll>
      </div>
    </div>
</transition>
</template>

<script type="text/ecmascript-6">
import Scroll from 'base/scroll/scroll'
import {prefixStyle} from 'common/js/dom'
import {mapGetters, mapActions} from 'vuex'

const transform = prefixStyle('transform')
const RESERVED_HEIGHT = 44
export default {
  data() {
    return {
      scrollY: 0
    }
  },
  computed: {
    ...mapGetters([
      'showArticle',
      'articleContent'
    ]),
    bgStyle() {
      return `background-image:url(${this.articleContent.image})`
    }
  },
  created() {
    this.probeType = 3 // scroll滑动过程中派发回调
    this.listenScroll = true
  },
  methods: {
    loadContent() {
      this.$refs.scroll.refresh()
    },
    back() {
      this.hideArticle()
    },
    scroll(pos) {
      this.scrollY = pos.y
    },
    ...mapActions([
      'hideArticle'
    ])
  },
  updated() {
    if (this.showArticle) {
      this.$refs.topTitle.style.display = 'none'
      this.$refs.bgTitle.style.display = 'none'

      this.imageHeight = this.$refs.bgImage.clientHeight
      this.minTransalteY = -this.imageHeight + RESERVED_HEIGHT

      setTimeout(() => {
        this.loadContent()
      }, 1000)
    }
  },
  watch: {
    scrollY(newY) {
      let translateY = Math.max(this.minTransalteY, newY) // 设置layer最大向上的偏移量
      this.$refs.layer.style[transform] = `translate3d(0,${translateY}px,0)`
      if (newY < this.minTransalteY) {
        this.$refs.iconBack.style.color = '#333'
        this.$refs.topTitle.style.display = 'block'
        this.$refs.bgTitle.style.display = 'block'
        this.$refs.topTitle.style.color = '#333'
        this.$refs.bgTitle.style.backgroundColor = '#fff'
      } else {
        this.$refs.iconBack.style.color = '#fff'
        this.$refs.topTitle.style.display = 'none'
        this.$refs.bgTitle.style.display = 'none'
        this.$refs.topTitle.style.color = '#fff'
        this.$refs.bgTitle.style.backgroundColor = '#333'
      }
    }
  },
  components: {
    Scroll
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  
  .article
    position: fixed
    z-index: 100
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: $color-background
    .icon-back
      position: absolute
      z-index: 10
      left:0
      top: 0
      padding: 15px
      color: $color-background
    .topTitle
      width: calc(100% - 60px)
      position: absolute
      z-index: 10
      left: 47px
      top: 0
      color: $color-text
      line-height: 47px
      div
        box-sizing: border-box
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap
        font-weight: bold
        font-size: $font-size-medium
    .bg-image
      position: relative
      width: 100%
      height: 0
      padding-top: 60%
      transform-origin: top
      background-size: cover
      .bg-title
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 44px
        background: $color-background
        border-bottom: 1px solid $color-line
        z-index: 9;
        transition: all 2s
      .filter
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background: rgba(7, 17, 27, 0.3)
        
    .bg-layer
      position: relative
      height: 100%
      background: $color-background
    .a-content
      position: fixed
      top: 0
      bottom: 0
      padding-top: 60%
      width: 100%
      .article-content
        width: 100%
        height: 100%
        // overflow: hidden
        .info
          display: flex
          align-items: center
          box-sizing: border-box
          padding: 14px 14px
          border-bottom: 1px solid $color-line
          .icon
            padding-right: 20px
            img
              flex: 0 0 50px
              width: 50px
              height: 50px
              border-radius: 50%;
          .text
            dispaly: flex
            flex-direction: column
            justify-content: center
            overflow: hidden
            h2
              font-size: $font-size-medium-x
              line-height: 1.2
              margin-bottom: 10px
              color: $color-text
            p
              font-size: $font-size-small
              line-height: $font-size-medium
              color: $color-text-d
              
              overflow: hidden
              text-overflow: ellipsis
              display: -webkit-box
              -webkit-box-orient: vertical
              -webkit-line-clamp: 2
        .title
          padding: 15px
          font-weight: bold
          font-size: $font-size-large-l
          line-height: 1.3
        .content-wrap
          padding: 15px
          width: 100%
          box-sizing: border-box
          p
            margin: 20px 0
            line-height: 1.5
          figure
            text-align: center
            overflow: hidden
            box-sizing: border-box
          img
            max-width:100%
          h2
            font-size: 24px
            margin: 20px 0
          b
            font-weight: bold
          blockquote
            margin: 20px 0
          a
            color: #175199

  
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s
    
  .slide-enter, .slide-leave-to
    transform: translateX(100%)
    
  // .bgTitle-enter-active, .bgTitle-leave-active
  //   transition: opacity 0.2s ease
    
  // .bgTitle-enter, .bgTitle-leave-to
  //   opacity: 0

</style>