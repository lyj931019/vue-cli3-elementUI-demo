<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-collapse accordion class="group">
      <el-collapse-item class="item">
        <div slot="title" class="title">
          一致性 Consistency<i class="header-icon el-icon-info"></i>
        </div>
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </el-collapse-item>
    </el-collapse>
    <MyTable></MyTable>
  </div>
</template>

<script>
  import MyTable from '../components/table.vue'
  export default {
      name: 'about',
      components:{
          MyTable
      }
  }
</script>
<style scoped="">
  .about{
    background-color: #aaa;
    padding: 32px;
  }
  .group{
    border:0px;
  }
  .item {
    margin-bottom: 32px;
  }
  .title{
    background-color: #fff;
  }
</style>
