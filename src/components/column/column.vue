<template>
  <div class="column">
  <div class="icon-mine" @click="openDrawer">
    <i class="iconfont">&#xe61c;</i>
  </div>
    <scroll class="column-content" ref="scroll">
      <div>
         <ul>
          <li class="column-item" v-for="item in columns" @click="selectItem(item)">
            <div class="icon">
              <img v-lazy="item.image"  @load="loadImage">
            </div>
            <div class="text">
              <h2>{{item.title}}</h2>
              <p>{{item.describe}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="loading-cantainer" v-show="!columns.length">
        <Loading></Loading>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import {getColumn} from 'api/column'
import Column from 'common/js/column'
import Scroll from 'base/scroll/scroll'
import Loading from 'base/loading/loading'
import {mapMutations} from 'vuex'

export default {
  data() {
    return {
      columns: []
    }
  },
  created() {
    this._getColumn()
  },
  methods: {
    openDrawer() {
      this.$router.push({
        name: 'drawer',
        params: {
          id: 'drawer'
        }
      })
    },
    selectItem(item) {
      this.$router.push({
        name: 'columnDetail',
        params: {
          id: `${item.urlid}`
        }
      })
      this.setColumn(item)
    },
    _getColumn() {
      getColumn().then((res) => {
        this.columns = this._normalizeColumn(res)
      })
    },
    _normalizeColumn(columns) {
      let items = []
      columns.forEach((item, index) => {
        items.push(new Column({
          id: item.avatar.id,
          title: item.name,
          describe: item.description,
          urlid: item.slug
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
    ...mapMutations({
      setColumn: 'SET_COLUMN'
    })
  },
  components: {
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
  .column
    position: fixed
    top: 44px
    bottom: 0
    width: 100%
    .column-content
      height: 100%
      overflow: hidden
      ul
        .column-item
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
              font-size: $font-size-medium
              font-weight: bold
              line-height: 1.2
              margin-bottom: 6px
              color: $color-text
            p
              font-size: $font-size-small
              line-height: $font-size-medium
              color: $color-text-d
              
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
      .loading-cantainer
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
        
</style>