<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <span class="dot" v-for="(item, index) in dots" :class="{active: currentPageIndex === index}"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {addClass} from 'common/js/dom'
  export default {
    name: 'slider',
    data() {
      return {
        dots: [],
        currentPageIndex: 0
      }
    },
    props: {
      loop: {
        type: Boolean,
        default: true
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 4000
      },
      click: {
        type: Boolean,
        default: true
      }
    },
    mounted() {
      setTimeout(() => {
        this._setSliderWidth()
        this._initDots()
        this._initSlider()

        if (this.autoPlay) {
          this._paly()
        }
      }, 20)

      window.addEventListener('resize', () => {
        if (!this.slider) {
          return
        }
        this._setSliderWidth(true)
        this.slider.refresh()
      })
    },
    methods: {
      _setSliderWidth(isResize) {
        this.children = this.$refs.sliderGroup.children

        let width = 0
        let sliderWidth = this.$refs.slider.clientWidth
        for (let i = 0; i < this.children.length; i++) {
          let child = this.children[i]
          addClass(child, 'slider-item')

          child.style.width = sliderWidth + 'px'
          child.style.height = 244 + 'px'
          width += sliderWidth
        }

        if (this.loop && !this.isResize) {
          width += 2 * sliderWidth
        }
        this.$refs.sliderGroup.style.width = width + 'px'
      },
      _initDots() {
        this.dots = new Array(this.children.length)
      },
      _initSlider() {
        this.slider = new BScroll(this.$refs.slider, {
          scrollX: true, // 开启横向滚动
          scrollY: false, // 纵向滚动
          momentum: false, // 生成滚动动画
          snap: true,
          snapLoop: this.loop,
          snapThreshold: 0.3,
          snapSpeed: 400,
          click: this.click
        })

        this.slider.on('scrollEnd', () => {
          let pageIndex = this.slider.getCurrentPage().pageX
          if (this.loop) {
            pageIndex -= 1
          }
          this.currentPageIndex = pageIndex

          if (this.autoPlay) {
            clearTimeout(this.timer)
            this._paly()
          }
        })
      },
      _paly() {
        let pageIndex = this.currentPageIndex + 1
        if (this.loop) {
          pageIndex += 1
        }
        this.timer = setTimeout(() => {
          this.slider.goToPage(pageIndex, 0, 400)
        }, this.interval)
      }
    },
    destroyed() {
      clearTimeout(this.timer)
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .slider
    min-height: 1px
    .slider-group
      position: relative
      overflow: hidden
      white-space: nowrap
      .slider-item
        float: left
        box-sizing: border-box
        overflow: hidden
        text-align: center
        .image
          display: block
          overflow: hidden
          height: 156px
          width: 100%
          img
            display: block
            width: 100%
        .text
          width: 100%
          padding: 0 15px
          box-sizing: border-box
          border-bottom: 1px solid $color-line
          text-align: left
          .title
            width: 100%
            min-height: 40px
            margin: 10px 0
            line-height: $font-size-large
            white-space: normal
            font-weight: bold
            font-size: $font-size-medium-l
          .more
            height:10px
            color: $color-text-d
            font-size: $font-size-small
            margin: 0 0 15px 0
            .avatar
              img
                width: 16px
                height: 16px
                border-radius: 50%
            & div
              float: left
              margin-right: 5px
              line-height: 16px
    .dots
      position: absolute
      right: 0
      left: 0
      bottom: 100px
      transform: translateZ(1px)
      text-align: center
      font-size: 0
      .dot
        display: inline-block
        margin: 0 4px
        width: 6px
        height: 6px
        border-radius: 50%
        border: 1px solid #fff
        &.active
          background: #fff
</style>