<!--
 * @Author: laowang rxxxm@fxxl.com
 * @Date: 2023-04-23 13:51:10
 * @LastEditors: laowang
 * @LastEditTime: 2023-04-23 16:39:32
 * @Description: file content
-->
<template>
  <el-dialog
    :title="title"
    :visible.sync="visible"
    :width="width + 'px'"
    :height="height + 'px'"
    :before-close="onClose"
  >
    <div :height="{height: height + 'px'}">
      <slot name="content" />
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="warning text" @click="onClose">取消</el-button>
      <el-button type="primary" @click="onConfirm">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  // 0.props里面的属性值都是父组件，比如sysUserList.vue传递过来的
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
  },
  methods: {
    // 弹窗的关闭
    onClose() {
      this.$emit('onClose')
    },
    // 弹窗的确定
    onConfirm() {
      this.$emit('onClose')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
