<template>
  <transition name="columnDetail">
    <div class="column-detail">
      <div class="top">
        <div class="icon-back" @click="back" ref="iconBack">
          <i class="iconfont">&#xe600;</i>
        </div>
      </div>

      <div class="d-content">
      <scroll class="detail-content" ref="scroll">
      <div>
        <div class="info">
          <div class="icon">
            <img v-lazy="column.image">
          </div>
          <div class="text">
            <h2>{{column.title}}</h2>
            <p>{{column.describe}}</p>
          </div>
        </div>
        <div class="detail-list">
          <ul>
            <li v-for="item in columnDetail" @click="selectItem(item)">
              <div class="list-image">
                <img v-lazy="item.image" @load="loadImage">
              </div>
              <div class="text">
                <div class="title">{{item.title}}</div>
                <div class="more">
                  <div class="avatar">
                    <img v-lazy="item.avatarM">
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

      <div class="loading-cantainer" v-show="!columnDetail.length">
        <Loading></Loading>
      </div>
      </scroll>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import Scroll from 'base/scroll/scroll'
import Loading from 'base/loading/loading'
import {mapGetters, mapActions} from 'vuex'
import {getColumnDetail} from 'api/column-detail'
import ArticleCover from 'common/js/articleCover'

export default {
  data() {
    return {
      columnDetail: []
    }
  },
  computed: {
    ...mapGetters([
      'column'
    ])
  },
  created() {
    this._getColumnDetail()
  },
  methods: {
    selectItem(item) {
      this.selectArticle(item)
    },
    _getColumnDetail() {
      if (!this.column.urlid) {
        this.$router.push('/column')
      }

      getColumnDetail(this.column.urlid).then((res) => {
        this.columnDetail = this._normalizeColumnDetail(res)
      })
    },
    _normalizeColumnDetail(colunms) {
      let items = []
      colunms.forEach((item, index) => {
        items.push(new ArticleCover({
          image: item.titleImage,
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
    back() {
      this.$router.push('./')
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
    Scroll,
    Loading
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
  .column-detail
    position: fixed
    z-index: 100
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: $color-background
    .top
      position: fixed
      top: 0
      left: 0
      width: 100%
      height: 44px
      border-bottom: 1px solid $color-line
      .icon-back
        position: absolute
        z-index: 10
        left:0
        top: 0
        padding: 15px
        color: $color-text
    .d-content
      position: fixed
      width: 100%
      top: 44px
      bottom: 0
      .detail-content
        height: 100%
        overflow: hidden
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
                font-weight: bold
              p
                font-size: $font-size-small
                line-height: $font-size-medium
                color: $color-text-d
                
                overflow: hidden
                text-overflow: ellipsis
                display: -webkit-box
                -webkit-box-orient: vertical
                -webkit-line-clamp: 2
        .detail-list
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
                  
      .loading-cantainer
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
        
  .columnDetail-enter-active, .columnDetail-leave-active
    transition: all 0.3s
    
  .columnDetail-enter, .columnDetail-leave-to
    transform: translateX(100%)
</style>