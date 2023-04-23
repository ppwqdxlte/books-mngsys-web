<!--
 * @Author: laowang rxxxm@fxxl.com
 * @Date: 2023-04-23 13:51:10
 * @LastEditors: laowang
 * @LastEditTime: 2023-04-23 13:57:05
 * @Description: file content
-->
<template>
  <el-dialog
    title=""
    :visible.sync=""
    width="30%"
    @close="">
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
