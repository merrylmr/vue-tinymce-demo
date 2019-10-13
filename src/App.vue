<template>
  <div id="app">
    <TinymceEditor v-model="content"></TinymceEditor>
    <!--inline模式-->
    <h2>inline 模式</h2>
    <TinymceEditor v-model="content" :inline="true"></TinymceEditor>
  </div>
</template>

<script>
  import TinymceEditor from './components/tinymce/Tinymce.vue'

  export default {
    name: 'app',
    components: {
      TinymceEditor
    },
    data() {
      return {
        content: '我是富文本编辑器'
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
