<template>
  <div class="tabbar-wrapper">
    <div class="tabbar">
      <div class="tab-item" @click="replace(item.url)" v-for="item in tabItems">
        <div><image class="tab-icon" :src="item.image"></image></div>
        <div class="tab-title"><text>{{item.title}}</text></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: function(){
      return{
        index: 0,
        tabItems: [
          {
            index: 0,
            title: '首页',
            titleColor: '#000000',
            icon: '',
            image: 'http://gtms01.alicdn.com/tps/i1/TB1qw.hMpXXXXagXXXX9t7RGVXX-46-46.png',
            selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB16jjPMpXXXXazXVXX9t7RGVXX-46-46.png',
            url: 'home',
            visibility: 'visible',
          }, {
            index: 1,
            title: '我要写信',
            titleColor: '#000000',
            icon: '',
            image: 'http://gtms03.alicdn.com/tps/i3/TB1LEn9MpXXXXaUXpXX9t7RGVXX-46-46.png',
            selectedImage: 'http://gtms02.alicdn.com/tps/i2/TB1qysbMpXXXXcnXXXX9t7RGVXX-46-46.png',
            url: 'rule',
            visibility: 'hidden',
          }, {
            index: 2,
            title: '我要登陆',
            titleColor: '#000000',
            icon: '',
            image: 'http://gtms01.alicdn.com/tps/i1/TB1B0v5MpXXXXcvXpXX9t7RGVXX-46-46.png',
            selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB1NxY5MpXXXXcrXpXX9t7RGVXX-46-46.png',
            url: 'search',
            visibility: 'hidden',
          }, {
            index: 3,
            title: '在线查询',
            titleColor: '#000000',
            icon: '',
            image: 'http://gtms01.alicdn.com/tps/i1/TB1B0v5MpXXXXcvXpXX9t7RGVXX-46-46.png',
            selectedImage: 'http://gtms04.alicdn.com/tps/i4/TB1NxY5MpXXXXcrXpXX9t7RGVXX-46-46.png',
            url: 'consult',
            visibility: 'hidden',
          }
        ],
      }
    },
    ready: function (e) {

    },
    methods: {
    }
  }
</script>

<style>
  .tabbar-wrapper{
    height: 100px;
  }
  .tabbar{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;
    flex-direction: row;
    background: #fff;
    border-top: 1px solid #AAA; 
  }
  .tab-item{
    width: 25%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .tab-icon{
    width: 48px;
    height: 48px;
  }
</style>