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
          <div class="close"  @click="close">
            <img src="./../assets/images/login/colse.png" alt="">
          </div>
          <div class="successTitle">
            <div class="titile clearfix">
              <img src="./../assets/images/login/icon.png" alt="">
              <span>认证身份</span>
            </div>
            <p class="success1">开始进行机构身份认证</p>
            <p class="success2">完成认证后，个人中心内可同步该机构数据</p>
          </div>
          <div class="infomationTitle">
            <!-- <p>机构名称</p> -->
            <p class="success1">优谷朗读系统机构账号</p>
            <input type="text" placeholder="请输入登录账号" v-model="search" @input="textIdentity($event)"/>
          </div>
          <div class="Customer">
            <p>已入驻机构均有机构账号，若遗忘可<a href="https://kef.m.iyougu.com/api/mobileweb/home?channel_id=10351&channel_key=10351oirg&wechatapp_id=198360&key=33790wo28">联系客服</a>找回</p>
          </div>
          <div class="btn">
            <button :class="next?'btnNO':'btnYes'" v-bind:disabled="next" @click="nextTop">进行绑定</button>
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
  export default{
    data() {
      return {
        next:true,
        search: '',
      }
    },
    methods: {
      close(){
        this.$emit('close')
      },
      nextTop(){
        this.axios.post('/api/v1/login/authOrga', {
          "data": {
            "orgaAccount": this.search,
            "orgaId": this.$cookies.get('orgaId')
          },
          "sessionId": this.$cookies.get('sessionId')
        }).then(res => {
            if(res.data.code == 400001){
              // this.$toast(res.data.message)
              this.$message.error(res.data.message);
              this.$emit('successBind',true)
            }else if(res.data.code = 200000){
              // this.$router.push({path:'/CertificationSuccess'})
              this.$emit('successBind',true)
            }else{
              this.$message.error(res.data.message);
              
            }
        },error=>{
          if(error.response.data.message=='缓存用户信息不存在'){
              this.$cookies.remove("sessionId")
              this.$router.push({path:'/login'})
          }
        })
      },
      textIdentity(event){
        if(event.currentTarget.value!=''){
          this.next=false
        }else{
          this.next = true
        }
      }
    }
  }
</script>
<style scoped>
  @import url(./../assets/css/login.css);
.successTitle{
  position: absolute;
  left: 40px;
  top: 84px;
}

.titile img{
float:left;
margin-top: 10px;
}
.titile span{
float: left;
margin-left: 8px;
font-size: 24px;
color: #333333;
}
.infomationTitle .success1{
  font-size: 18px;
  color: #333333;
  text-align: left;
  line-height: 36px;
}
.success1{
  font-size: 18px;
  color: #333333;
  text-align: left;
  line-height: 36px;
}
.success2{
  font-size: 14px;
  color: #999999;
  text-align: left;
}
.infomationTitle{
  position: absolute;
  top: 192px;
  left: 40px;

}
.infomationTitle p{
  font-size: 14px;
  color: #666666;
  text-align: left;
}
.infomationTitle input{
  width: 304px;
  line-height: 34px;
  height: 34px;
  border: none;
  border-bottom: 1px solid #CCCCCC;
  margin-top: 10px;
  font-size: 14px;
}
.Customer{
  width: 304px;
  position: absolute;
  left: 40px;
  bottom: 200px;
}
.Customer p{
  font-size: 12px;
  color: #999999;
  margin-top: 10px;
  line-height: 17px;
  text-align: left;
}
.Customer p a{
  color: #4086F7;
}

  .showChoose{
    width: 304px;
    background: #fff;
    position: relative;
    z-index: 99;
    border: 1px solid #CCCCCC;
    border-top: none;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
  }
  .showChoose li{
    text-align: left;
    font-size: 14px;
    line-height: 24px;
    text-indent: 1em;
   
  }
</style>