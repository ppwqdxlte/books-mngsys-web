/*
 * @Author: laowang rxxxm@fxxl.com
 * @Date: 2023-04-01 16:40:14
 * @LastEditors: laowang
 * @LastEditTime: 2023-04-18 13:15:22
 * @Description: file content
 */
import defaultSettings from '@/settings'

const { showSettings, fixedHeader, sidebarLogo,tagsView } = defaultSettings

const state = {
  showSettings: showSettings,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo,
  tagsView: tagsView
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value
    }
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

