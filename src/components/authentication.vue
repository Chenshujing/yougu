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
            <img src="./../assets/images/login/ok.png" alt="">
            <p style="font-size: 18px; color: #4086F7;margin-top: 10px;">认证成功</p>
            <p style="font-size: 14px; color: #666666;margin-top: 4px;">{{textTow}}</p>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
    export default{
      data() {
        return {
          textTow:'',
        }
      },
      mounted() {
      var a =4
      setInterval(() => {
        a--
        this.textTow=a+'秒后自动跳转至首页'
        if(a==0){
          // this.$router.push('index')
        }
      }, 1000);
      
    },
    }
  </script>
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