<template>
  <div class="page-wrapper">
    <navigator title="新闻详情"></navigator>
    <scroller class="main">
      <div class="title-wrapper"><text class="title">{{detail.title}}</text></div>
      <div class="info">
        <text class="info-text">{{detail.releaseTime}}</text>
      </div>
      <html :inner="detail.content"></html>
    </scroller>
  </div>
</template>

<script>
import Navigator from '../components/navigator.vue'
import Tabbar from '../components/tabbar.vue'
import Html from '../components/html.vue'
const modal = weex.requireModule('modal')
const stream = weex.requireModule('stream')
export default {
  components: { Navigator, Tabbar, Html },
  data: function() {
    return {
      wzid: '',
      detail: {"author":"刘伟生","content":"<p align=\"center\"><strong>学习形式多样&nbsp;&nbsp;&nbsp;&nbsp;学习热情高涨</strong></p>\r\n<p align=\"center\">——市信访局党员干部“两学一做”学习教育氛围浓厚</p>\r\n<p></p>\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp; 连日来，习惯于提前上班的市信访局全体党员干部每天来到办公室做的第一件事不再是开开电脑、翻翻报纸、弄弄茶水，而是首先拿出“两学一做”相关学习读本资料，拿出学习笔记，翻一翻、看一看、记一记，对“两学一做”相关学习内容进行自学。</p>\r\n<p>&nbsp;&nbsp;&nbsp; 自5月23日市信访局召开“两学一做”学习教育动员会以来，局全体党员干部按照局学习教育实施方案要求，及时制定个人自学计划，合理安排自学时间，迅速开展学习党章党规以及习近平总书记系列讲话活动。为了做到学习、工作“两不误”“两促进”“两提高”，全体党员干部灵活安排个人自学时间，充分利用正式上班前这一时间段，读一读党章党规，学一学系列讲话，时不时还可以与同事谈一谈“党员标准”，论一论“我的中国梦”，及时记录自己的所学所悟、所思所想。每天正式上班前这十几二十分钟的时间俨然成为了局全体党员干部学党章党规、学系列讲话的“早课”，全局上下处处洋溢着浓厚的学习氛围。</p>\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp; 为了使全体党员更好地交流、学习，局党支部还建立了党员干部微信群，确定一名党员专门负责及时将“两学一做”的学习计划、学习动态及相关学习内容上传至微信群，同时要求全体党员充分利用各种网络平台资源，采用各种灵活便捷的学习形式，经常性学习、深入地学习，力求学得精深、学有所得、以学促做。</p>\r\n<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p>\r\n<p align=\"left\"><img style=\"width:533px;height:367px;\" title=\"两学一做图片（1）.png\" border=\"0\" alt=\"两学一做图片（1）.png\" align=\"center\" src=\"https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg\" width=\"300\" height=\"367\" /></p>\r\n<p align=\"left\">市信访局党员干部在认真学习党章党规（5月27日摄）</p>\r\n<p align=\"left\"><img style=\"width:542px;height:367px;\" title=\"两学一做图片（2）.png\" border=\"0\" alt=\"两学一做图片（2）.png\" align=\"center\" src=\"https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg\" width=\"300\" height=\"367\" /></p>\r\n<p align=\"left\">信访局各科室党员干部在认真学习党章党规（5月27日摄）</p>","releaseTime":"2016-05-27","title":"学习形式多样    学习热情高涨","typeName":"工作要闻","wzid":"93c8895c54ef989c0154f1400e4803b6"}
    }
  }
}
</script>


<style scoped>
  .main {
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
  .title-wrapper {
    padding: 40px;
    align-items: center;
    justify-content: center;
  }
  .title {
    font-size: 42px;
    font-weight: bold;
  }
  .info {
    padding-bottom: 20px;
    flex-direction: row;
    justify-content: center;
  }
  .info-text {
    padding-left: 20px;
    padding-right: 20px;
  }
</style>