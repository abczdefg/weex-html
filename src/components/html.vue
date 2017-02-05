<template>
  <div :style="style">
    <text :style="item.style" v-for="item in templateArr" v-if="!item.img">
      {{item.content}}
    </text>
    <image resize="cover" v-else :style="item.img.style" :src="item.img.src"></image>    
  </div>
</template>

<script>
  export default {
    props: {
      inner: {
        default: ""
      },
      style: {
        width: '750px'
      }
    },
    computed: {
      templateArr: function() {
        return this.transform(this.inner);
      }
    },  
    methods: {
      transform: function (html){
        var arr = html.match(/<p.*?>(.*?)<.*?\/p>/g);
        if (!arr || !arr.length) return;
        var templateArr = [];
        for (var i = 0; i < arr.length; i++) {
          var obj = {
            content: '',
            style: {},
            img: false
          };
          //处理外层p的align
          if(/<p.*align="(\w+)".*>/.test(arr[i])) {
            obj.style.textAlign = /<p.*?align="(\w+)".*?>/.exec(arr[i])[1];
          }
          var inner = /<p.*?>(.*)<\/p>/.exec(arr[i])[1];
          if (!inner.length) continue;
          if(/<img.*?\/>/.test(inner)) {
            //处理图
            obj.img = true;
            obj.img = {
              style: /style="(.+?)"/.exec(inner)[1],
              src: /src="(.+?)"/.exec(inner)[1]
            };
          }
          else {
            if (/<strong.*?>(.*)<\/strong>/.test(inner)){
                obj.style.fontWeight = 'bold';
                obj.content = contentHandler(/<strong.*?>(.*)<\/strong>/.exec(inner)[1]);
            } else {
                obj.content = contentHandler(inner);
            }
          }
          templateArr.push(obj);
        }
        return templateArr;
        function contentHandler(str) {
          var str2 = str.replace(/&nbsp;/g, '');
          return str2.replace(/<.*?>/g, '');
        }
      }
    }
  }
</script>