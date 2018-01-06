<template>
<div class="find">
  <div class="icon-mine" @click="openDrawer">
    <i class="iconfont">&#xe61c;</i>
  </div>
  <scroll class="find-content" :data="findList" ref="scroll">
  <div>
    <div v-if="finds.length" class="slider-wrapper">
      <slider>
         <div v-for="item in finds" @click="selectItem(item)">
          <div class="image">
            <img :src="item.image" @load="loadImage">
          </div>
          <div class="text">
            <div class="title">{{item.title}}</div>
            <div class="more">
              <div class="avatar">
                <img :src="item.avatar">
              </div>
              <div class="author-name">{{item.authorname}}</div>
              <div class="point">·</div>
              <div class="time">{{item.time}}</div>
            </div>
          </div>
         </div>
       </slider>
    </div>  

    <div class="find-list">
      <ul>
        <li v-for="item in findList" @click="selectItem(item)">
          <div class="list-image">
            <img v-lazy="item.image">
          </div>
          <div class="text">
            <div class="title">{{item.title}}</div>
            <div class="more">
              <div class="avatar">
                <img v-lazy="item.avatar">
              </div>
              <div class="author-name">{{item.authorname}}</div>
              <div class="point">·</div>
              <div class="time">{{item.time}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="loading-container" v-show="!findList.length">
    <loading></loading>
  </div>
  </scroll>
  <router-view></router-view>
</div>
</template>

<script type="text/ecmascript-6">
import Slider from 'base/slider/slider'
import {getFind, getFindList} from 'api/find'
import ArticleCover from 'common/js/articleCover'
import Scroll from 'base/scroll/scroll'
import Loading from 'base/loading/loading'
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      finds: [],
      findList: []
    }
  },
  created() {
    this._getFind()
    this._getFindList()
  },
  methods: {
    openDrawer() {
      this.$router.push({
        path: `/find/drawer`
      })
    },
    selectItem(item) {
      this.selectArticle(item)
    },
    _getFind() { // 获取知乎文章接口数据
      getFind().then((res) => {
        this.finds = this._normalizeFind(res)
      })
    },
    _getFindList() {
      getFindList().then((res) => {
        this.findList = this._normalizeFind(res)
      })
    },
    _normalizeFind(finds) { // 整理接口数据
      let items = []
      finds.forEach((item, index) => {
        items.push(new ArticleCover({
          image: item.image_url,
          title: item.title,
          time: item.publishedTime,
          authorname: item.author.name,
          avatarid: item.author.avatar.id,
          urlid: item.slug,
          content: item.content,
          bio: item.author.bio
        }))
      })
      return items
    },
    loadImage() {
      if (!this.checkLoaded) {
        this.$refs.scroll.refresh() // 父组件通过$refs可以调用到子组件的方法
        this.checkLoaded = true
      }
    },
    ...mapActions([
      'selectArticle'
    ])
  },
  components: {
    Slider,
    Scroll,
    Loading
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  
  .icon-mine
    position: fixed
    left:0
    top: 0
    padding: 15px
    color: $color-text
  .find
    position: fixed
    width: 100%
    top: 44px
    bottom: 0
    .find-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .find-list
        li
          box-sizing: border-box
          .list-image
            padding: 10px 15px
            box-sizing: border-box
            overflow: hidden
            height: 142px
            width: 100%
            img
              display: block
              width: 100%
              background-position: 0 -20%
          .text
            width: 100%
            padding: 0 15px
            box-sizing: border-box
            border-bottom: 1px solid $color-line
            text-align: left
            .title
              width: 100%
              margin: 10px 0
              line-height: $font-size-large
              white-space: normal
              font-weight: bold
              font-size: $font-size-medium-l
            .more
              height: 10px
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
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%) 
</style>