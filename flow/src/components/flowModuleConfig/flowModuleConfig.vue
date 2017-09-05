<template>
  <div id="flowmoduleconfig">
    <el-row>
        <el-col :span="24">
          <span>
            <i class="sceoIcon sceoIcon-undo2"></i> 返回上一级
          </span>
          <span class="demonstration">当前流程</span>
          当前状态：
        </el-col>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-row>
    
  </div>
</template>
<script>
  export default {
    name: 'flowModuleConfig',
    data () {
      return {
        options: [{
          value: '1',
          label: '黄金糕'
        }, {
          value: '2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '3',
          label: '蚵仔煎'
        }, {
          value: '4',
          label: '龙须面'
        }, {
          value: '5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
  }
</script>
