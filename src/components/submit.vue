<template>
<div>
  <el-dialog
  title="提交汇款信息"
  :visible.sync="dialogVisible"
  :before-close="handleClose">
  <div class="submit">
    <div class="progress">
      <img src="../assets/images/information/status1.png" alt="">
    </div>
    <div class="TitleS">
      <p>基本信息</p>
    </div>
    <div class="information clearfix">
      <ul class="clearfix">
        <li>
          <span class="infoA">当前绑定机构</span>
          <span class="infoB">{{dataList.orgaName}}</span>
        </li>
        <li style="position:relative;">
          <span class="infoA">对公转账</span>
          <span class="money"><span class="biao">￥</span>{{dataList.amount}}</span>
        </li>
        <li>
          <span class="infoA">订单编号</span>
          <span class="infoB">{{dataList.orderNo}}</span>
        </li>
      </ul>
    </div>
    <div class="TitleS titleb clearfix">
      <p>详细信息</p>
      <img src="../assets/images/information/attion.png" alt="">
      <span>请在转账时注明汇款户名，转账后保留汇款凭证或电子回单，并提交汇款信息。</span>
    </div>
    <div class="information clearfix" style="border-bottom: none;">
      <ul class="clearfix">
        <li>
          <span class="infoA">转账银行</span>
          <span class="infoB">中国工商银行</span>
        </li>
        <li style="position:relative;">
          <span class="infoA">开户名</span>
          <span class="infoB">广州优谷信息技术有限公司</span>
        </li>
        <li>
          <span class="infoA">开户银行</span>
          <span class="infoB">中国工商银行广州市东圃支行</span>
        </li>
        <li>
          <span class="infoA">开户银行账号</span>
          <span class="infoB">202103111122330320</span>
        </li>
      </ul>
    </div>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="close">取 消</el-button>
    <el-button type="primary" @click="comfirm">提交汇款信息</el-button>
  </span>
  </el-dialog>
  </div>
</template>
<script>
export default {
  // data(){
  //   return {
  //     dialogVisible:false
  //   }
  // },
  props:{dataList:Object,dialogVisible:Boolean},
  methods:{
    close(){
      this.$emit('close')
    },
    handleClose(done){
      this.$emit('close')
    },
    comfirm(){
      this.$emit('next')
    }
  }
}
</script>
<style scoped>
  @import url(../assets/css/submit.css);
.TitleS{
  width: 592px;
  margin:  0 auto;
  margin-top: 24px;
}
.TitleS p{
  font-size: 14px;
  color: #333;
  text-align: left;
}
.information{
  width: 592px;
  margin: 0 auto;
  padding-bottom: 16px;
  border-bottom: 1px dashed #DDDDDD;
}
.information li{
  width: 50%;
  float: left;
  text-align: left;
  margin-top: 16px;
}
.information li span{
  display: inline-block;
  text-align: left;
}
.infoA{
  width: 96px;
  font-size: 14px;
  color: #666666;
}
.infoB{
  font-size: 14px;
  color: #333333;
}
.money{
  display: inline-block;
  color: #FE4600;
  font-size: 24px;
  position: absolute;
  top: -6px;
}
.biao{
  font-size: 14px;
}
.titleb{
  
}
.titleb p{
  float: left;
}
.titleb img{
  float: left;
  width: 15px;
  height: 15px;
  margin-top: 2px;
  margin-left: 16px;

}
.titleb span{
  float: left;
  font-size: 12px;
  margin-left: 3px;
  margin-top: 2px;
  color: #999999;
}

</style>