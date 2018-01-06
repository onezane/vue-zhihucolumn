import * as types from './mutation-types'

export const selectArticle = ({commit, state}, list) => {
  commit(types.SET_SHOWARTICLE, true)
  commit(types.SET_ARTICLECONTENT, list)
}

export const hideArticle = ({commit, state}) => {
  commit(types.SET_SHOWARTICLE, false)
}