<template>
  <div class="header">
    <text class="left-text" v-if="leftItem" @click="go(-1)">&lt;</text>
    <text class="center-text">{{title}}</text>
    <text class="right-text" v-if="rightItem" @click="go(1)">&gt;</text>
  </div>
</template>

<script>
  export default{
    props: {
      title: {
        default: 'Weex-Demo'
      },
      leftItem: {
        default: false
      },
      rightItem: {
        default: false
      }
    }
  }
</script>

<style scoped>
  .header {
    position: sticky;
    width: 750px;
    height: 80px;
    background-color: #F00;
    flex-direction: row;
    justify-content: center;
  }
  .left-text {
    position: absolute;
    top: 17px;
    left: 32px; 
    font-size: 40px;
    text-align: left;  
    color: #FFFFFF;
    font-family: 'Open Sans', sans-serif;
  }
  .center-text {
    position: absolute;
    top: 17px;
    left: 172px; 
    right: 172px;
    font-size: 40px;
    text-align: center;   
    color: #FFFFFF;
  }
  .right-text {
    position: absolute;
    top: 17px;
    right: 32px; 
    font-size: 40px;
    text-align: right;  
    color: #FFFFFF;
    font-family: 'Open Sans', sans-serif;
  }
</style>
