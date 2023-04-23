<!--
 * @Author: laowang rxxxm@fxxl.com
 * @Date: 2023-04-23 13:51:10
 * @LastEditors: laowang
 * @LastEditTime: 2023-04-23 14:01:09
 * @Description: file content
-->
<template>
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose"
  >
    <span />
    <span slot="footer">
      <el-button @click="cancelBtn">Cancel</el-button>
      <el-button type="primary" @click="okBtn">OK</el-button>
    </span>
  </el-dialog>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
