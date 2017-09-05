<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {
  }
}
</script>
<style>
#app {
  * {
    margin: 0;
    padding: 0;
  }
}
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
</style>
