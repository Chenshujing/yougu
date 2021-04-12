<template>
  <div>
    <div class="message_wrapper">
            <div class="pop_wrapper">
    <div class="login">
      <div class="loginLR">
        <div class="loginIcon">
          <img src="./../assets//images/login/loginLeft.png" alt="" />
        </div>
        <div class="loginInfomation">
          <div class="close" @click="close">
            <img src="./../assets/images/login/colse.png" alt="">
          </div>
          <div class="institutions">
            <img src="./../assets/images/login/institutions.png" alt="">
            <p style="font-size: 18px; color: #4086F7;margin-top: 10px;">机构绑定成功</p>
            <p style="font-size: 14px; color: #666666;margin-top: 4px;">完成认证后，个人中心内可同步该机构数据</p>
          </div>
          
         
          <div class="btn">
            <button class="btnYes" @click="bind">进行机构身份认证</button>
          </div>
          <div class="jump" @click="close">
            <p>暂时跳过  ></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>
<script>
export default {
  methods:{
    close(){
      this.$emit('close')
    },
    bind(){
      this.$emit('identity',true)
    }
  }
}
</script> 
<style scoped>
@import url(./../assets/css/login.css);
.institutions{
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  text-align: center;
}
.institutions img{
  width: 80px;
  height: 80px;
}

</style>