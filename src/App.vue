<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
.el-message-box{
  width: 650px;
}
.el-message-box__title{
  text-align: center;
}
.list_content{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 16px;
    line-height: 22px;
    padding: 20px 0;
    li{
        padding: 0 50px 0 0;
        margin-bottom: 20px;
        &:before{
            content:'';
            display:inline-block;
            width: 8px;
            height: 8px;
            border: 2px solid #4086F7;
            transform: rotate(45deg);
            margin-right: 10px;
        }
    }
    
}
#app {
  height: 100%;
  margin: 0 auto;
}
</style>
