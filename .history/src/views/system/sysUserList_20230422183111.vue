<!--
 * @Author: laowang rxxxm@fxxl.com
 * @Date: 2023-04-17 20:06:21
 * @LastEditors: laowang
 * @LastEditTime: 2023-04-22 18:30:44
 * @Description: file content
-->
<template>
  <!-- el-main是element-UI的一个标签，逻辑功能等同于主区域的div -->
  <el-main>
    <!-- Main content -->
    <!-- 搜索栏，el-form就是form标签，
            :model      -绑定表单的数据（通常是一个对象）
            ref         -相当于div的id, VUE可通过ref属性找到对应的标签
            :rules       -表单验证的规则(搜索是简单表单，就去掉这个属性不用)
            label-width -表单域标签的宽度
            :inline     -是否同一行显示  -->
    <el-form ref="userSearchRef" :model="userParamList" label-width="80px" :inline="true" size="small">
      <!-- el-form-item 表单项，里面嵌套各种表单标签，
                label       -标签文字 -->
      <el-form-item>
        <el-input v-model="userParamList.nickName" placeholder="请输入姓名" />
      </el-form-item>
      <el-form-item>
        <el-input v-model="userParamList.phone" placeholder="请输入电话号码" />
      </el-form-item>
      <el-form-item>
        <el-button type="info" @click="searchBtn">搜索</el-button>
        <el-button type="warning" @click="resetBtn">重置</el-button>
        <el-button type="success" @click="addBtn">新增</el-button>
      </el-form-item>
    </el-form>
  </el-main>
</template>

<script>
export default {
  data() {
    return {
      userParamList: {
        nickName: '', // 数据库里的字段是nick_name，程序中使用驼峰命名
        phone: ''
      }
    }
  },
  methods: {
    searchBtn() {
    },
    resetBtn() {
    },
    addBtn() {
    }
  }
}
</script>

<style lang="scss" scoped></style>
