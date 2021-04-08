<template>
  <div>
    <div class="login">
      <div class="loginLR">
        <div class="loginIcon">
          <img src="./../assets//images/login/loginLeft.png" alt="" />
        </div>
        <div class="loginInfomation">
          <div class="close">
            <img src="./../assets/images/login/colse.png" alt="">
          </div>
          <div class="institutions">
            <img src="./../assets/images/login/fail.png" alt="">
            <p style="font-size: 18px; color: #FE4600;margin-top: 10px;">机构绑定成功</p>
            <p style="font-size: 14px; color: #666666;margin-top: 4px;">机构不存在，账号不正确</p>
          </div>
          
         
          <div class="btn">
            <button class="btnYes" v-bind:disabled="dataFrom">进行绑定</button>
          </div>
          <div class="jump">
            <p>暂时跳过  ></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<style scoped>
@import url(./../assets/css/login.css);
.institutions{
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
}
.institutions img{
  width: 80px;
  height: 80px;
}

</style>