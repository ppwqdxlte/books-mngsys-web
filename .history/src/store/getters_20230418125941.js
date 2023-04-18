/*
 * @Author: laowang rxxxm@fxxl.com
 * @Date: 2023-04-01 16:40:14
 * @LastEditors: laowang
 * @LastEditTime: 2023-04-18 12:59:41
 * @Description: file content
 */
const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews
}
export default getters
