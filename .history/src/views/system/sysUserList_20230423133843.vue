<!--
 * @Author: laowang rxxxm@fxxl.com
 * @Date: 2023-04-17 20:06:21
 * @LastEditors: laowang
 * @LastEditTime: 2023-04-23 13:38:43
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
        <el-button type="primary" icon="el-icon-search" @click="searchBtn">搜索</el-button>
        <el-button type="info" icon="el-icon-remove-outline" @click="resetBtn">重置</el-button>
        <el-button type="success" icon="el-icon-document-add" @click="addBtn">新增</el-button>
      </el-form-item>
    </el-form>
    <!-- 用户表格，el-form是表单，而el-table是表格，
        :data   -表格数据源(可以写死也可以从外部获得) -->
    <el-table :height="tableHeight" :data="userList" border stripe>
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="address" label="地址" />
      <el-table-column prop="date" label="日期" />
      <el-table-column label="操作" align="center" width="180">
        <el-button type="primary" icon="el-icon-edit" size="mini" @click="editBtn">编辑</el-button>
        <el-button type="danger" icon="el-icon-delete" size="mini" @click="deleteBtn">删除</el-button>
      </el-table-column>
    </el-table>
    <!-- 分页,el-pagination标签，
        @size-change    -页面显示条数改变时触发
        @current-change -选中页面改变时触发
        :pager-count    -？？当前显示几个可选页面？？
        background      -？？这是啥属性？？ -->
    <el-pagination
      :current-page.sync="userParamList.currentPage"
      :page-size="userParamList.pageSize"
      :page-sizes="[10, 20, 40, 80, 100]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="userParamList.totalNum"
      :pager-count="7"
      background
      @size-change="sizeChange"
      @current-change="currentChange"
    />
  </el-main>
</template>

<script>
export default {
  data() {
    return {
      // 搜索参数列表
      userParamList: {
        nickName: '', // 数据库里的字段是nick_name，程序中使用驼峰命名
        phone: '',
        currentPage: 1,
        pageSize: 10,
        totalNum: 3 // 从后端获得实际数据，默认初始化为0而已
      },
      // 表格数据源
      userList: [
        {
          date: '2023-04-22',
          name: '李某人',
          address: '中国江西省吉安市吉安县'
        },
        {
          date: '2023-04-22',
          name: '李某人',
          address: '中国江西省吉安市吉安县'
        },
        {
          date: '2023-04-22',
          name: '李某人',
          address: '中国江西省吉安市吉安县'
        }
      ],
      // 表格高度,0仅为初始化值
      tableHeight: 0
    }
  },
  mounted() {
    // 设置表格高度
    this.$nextTick(() => {
      this.tableHeight = window.innerHeight - 200
    })
  },
  methods: {
    searchBtn() {
    },
    resetBtn() {
    },
    addBtn() {
    },
    editBtn() {
    },
    deleteBtn() {
    },
    sizeChange(val) {
    },
    currentChange(val) {
    }
  }
}
</script>

<style lang="scss" scoped></style>
