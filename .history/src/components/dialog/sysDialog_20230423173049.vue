<!--
 * @Author: laowang rxxxm@fxxl.com
 * @Date: 2023-04-23 13:51:10
 * @LastEditors: laowang
 * @LastEditTime: 2023-04-23 17:29:32
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
    <div class="container" :height="{height: height + 'px'}">
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
      // 调用父组件的onClose方法，为啥有必要不在组件里写实现呢？因为组件的方法不同场景有不同实现，故而在哪里调用就在哪里定义！
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
  // 当内容高度超过容器高度就会滚动
  .container {
    overflow-x: initial;
    overflow-y: auto;
  }
  // 设置弹窗样式
  .el-dialog__wrapper {
    // ::v-deep深度查找，找到为止
    ::v-deep .el-dialog {
      border-radius: 7px !important;
      .el-dialog__header {
        border-top-left-radius: 7px !important;
        border-top-right-radius: 7px !important;
        background-color: #409EFF;
        height: 45px;
        .el-dialog__title {
          color: #FFF;
          font-size: 15px;
          font-weight: 700;
        }
        .el-dialog__close {
          color: white;
        }
      }
      .el-dialog__body {
        padding: 10px 10px !important;
      }
      .el-dialog__footer {
        border-top: 1px #eee solid;
        padding: 10px !important;
      }
    }
  }
</style>
