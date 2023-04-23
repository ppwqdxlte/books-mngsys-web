<!--
 * @Author: laowang rxxxm@fxxl.com
 * @Date: 2023-04-23 13:51:10
 * @LastEditors: laowang
 * @LastEditTime: 2023-04-23 15:26:27
 * @Description: file content
-->
<template>
  <el-dialog
    :title="title"
    :visible.sync="visible"
    :width="width"
    :height="height"
    :before-close="handleClose"
  >
    <span>这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  // props里面的属性值都是父组件，比如sysUserList.vue传递过来的
  props: {
    title: {
      type: String,
      default: '标题'
    },
    visible: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 600
    },
    height: {
      type: Number,
      default: 400
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
