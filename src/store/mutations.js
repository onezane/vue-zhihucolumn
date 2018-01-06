import * as types from './mutation-types'

const mutations = {
  [types.SET_FIND](state, find) {
    state.find = find
  },
  [types.SET_COLUMN](state, column) {
    state.column = column
  },
  [types.SET_SHOWARTICLE](state, flag) {
    state.showArticle = flag
  },
  [types.SET_ARTICLECONTENT](state, articleContent) {
    state.articleContent = articleContent
  }
}

export default mutations