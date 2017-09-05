<template>
  <div id="flowmoduleconfig">
  <!-- 头部 -->
    <el-col :span="24" class="header">
      <el-row>
        <span>
          <i class="el-icon-menu"></i>返回上一级
        </span>
        <span>当前流程:</span>
        当前状态：
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-row>
    </el-col>
  <!-- 新增 -->  
  <div class="addFlowModule"></div>     
  <!-- 模型列表 -->
  <div class="flowModuleList"></div> 
  </div>
</template>
<script>
  export default {
    name: 'flowModuleConfig',
    data () {
      return {
        options: [{
          value: '1',
          label: '全部'
        }, {
          value: '2',
          label: '启用'
        }, {
          value: '3',
          label: '停用'
        }, {
          value: '4',
          label: '新增'
        }],
        value: '1'
      }
    }
  }
</script>

<style scoped>
  * {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }

  html, body {
    height: 100%;
    overflow: auto;
  }

  body {
    margin: 0;
    overflow: aoto;
  }

  div {
    color: #6B6B74;
    font-size: 13px;
  }

  
  .header{
    padding: 1rem 1rem 0 1rem;
      
  }
  .header .el-col {
    height: 28px;
  } 
</style>