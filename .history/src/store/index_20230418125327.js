/*
 * @Author: laowang rxxxm@fxxl.com
 * @Date: 2023-04-01 16:40:14
 * @LastEditors: laowang
 * @LastEditTime: 2023-04-18 12:53:26
 * @Description: file content
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import permission from './modules/permission'
import settings from './modules/settings'
import user from './modules/user'
import tagsView from './modules/tagsView'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    permission,
    settings,
    user,
    tagsView
  },
  getters
})

export default store
