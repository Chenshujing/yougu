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
          <div class="phone">
            <div class="loginTiltle">
              <p>手机号</p>
              <input type="text" placeholder="请输入手机号" @input="phoneNum($event)" :class="err?'errPhone':''" />
            </div>
          </div>
          <div class="phoneCode" :class="err?'phoneCodeErr':''">
            <p>验证码</p>
            <div class="code">
              <input type="text" placeholder="请输入验证码" @input="searchCode($event)"/>
              <span>|</span>
              <button @click="sendCode" :disabled="codeBtnStatus" :class="miao?'miao':''">{{codeBtn}}</button>
            </div>
          </div>
          <div class="errer">
            <p>{{errText}}</p>
          </div>
          <div class="Select">
            <img :src="select?yesBtn:noBtn" alt="" @click="me" />
            <span>登录既代表同意<a>用户协议和隐私政策</a></span>
          </div>
          <div class="btn" >
            <button  :class="dataFrom?'btnNO':'btnYes'" v-bind:disabled="dataFrom" @click="login">登&nbsp;&nbsp;录</button>
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
  // props:{
  //   btn:Boolean,
    
  // },
  data() {
    return {
      select:false,
      noBtn:require("../assets/images/login/no.png"),
      yesBtn:require('../assets/images/login/yes.png'),
      myPhone:'',
      dataFrom:true,
      myCode:'',
      codeBtn: '发送验证码',
      codeBtnStatus: false,
      errText:'',
      dbClick:true,
      miao:false,
      err:false,
    }
  },
  watch:{
    errText:function(newVal,oldVal){
      if(this.errText.length>0){
        this.err=true
      }else{
        this.err=false
      }
    }
  },
  methods: {
    close(){
      this.$emit('close')
    },
    me(){
       
      this.select=!this.select;
      // if (this.myPhone.length >= 11 && this.myCode.length >= 4 && this.select==true) {
      //   this.dataFrom = false
      // } else {
      //   this.dataFrom = true
      // }
      // this.$emit('clickMe',this.select)
      this.errText = ''
    },
    phoneNum(event){
      this.myPhone = event.currentTarget.value
      if (this.myPhone.length >= 11 && this.myCode.length >= 4) {
        this.dataFrom = false
      } else {
        this.dataFrom = true
      }
    },
    searchCode(event) {
      this.myCode = event.currentTarget.value
      if (this.myPhone.length >= 11 && this.myCode.length >= 4) {
        this.dataFrom = false
      } else {
        this.dataFrom = true
      }
    },
    login() {
        this.$emit('success',true)
        return 
        if (!(/^1[3456789]\d{9}$/.test(this.myPhone))) {
          this.errText = '*请输入正确的电话号码'
          return
        }else if(this.myCode.length < 4){
          this.errText = '*请输入正确的验证码'
          return
        }else if(this.select==false){
          this.errText = '*请先同意用户协议和隐私政策'
          return
        }else{
          if(!this.dbClick){
            return
          }
          this.dbClick = false
          this.axios.post('/api/v1/login/mobileLogin',{
            "data":{
              mobile:this.myPhone,
              smsCode:this.myCode
            }
          }).then(res=>{
            if(res.data.result==true){
              this.$cookies.set('sessionId',res.data.data.sessionId,60 * 60 * 24)
              if(res.data.data.isNewUser==1){
                this.$emit('success',true)
              }else{
                this.$emit('olderUser',false)
              }
              
            }else if(res.data.result==false){
              this.errText='*'+res.data.message
            }
            this.dbClick = true
          },error=>{
            if(error.response.data.message=='缓存用户信息不存在'){
                this.$cookies.remove("sessionId")
                this.$router.push({path:'/login'})
            }
            this.dbClick = true
          })
        }
      },
    sendCode() {
        // console.log('发送成功')
        if(this.myPhone == ''){
          this.errText = '*手机号码不能为空'
          return false;
        }
        if (!(/^1[3456789]\d{9}$/.test(this.myPhone))) {
          this.errText = '*请输入正确的电话号码'
          return false;
        } else {
          this.errText = ''
          // this.codeBtn = ''
          
          this.axios.post('/api/v1/login/sendSmsCode', {
            data: {
              "mobile": this.myPhone,
            }
          }).then(res => {
            if(res.data.code==600008){
              // this.$toast(res.data.message)
              // console.log(res.data.message)
              this.$message({
                message: '获取验证码太频繁，请稍后重试',
                type: 'warning'
              })
            }
          })
          setTimeout(() => {
            this.countDown(60)
          }, 5)
        }
      },


      countDown(val) {
        //判断定时器是否存在
        if (this.timer) {
          clearInterval(this.timer)
        }
        this.codeBtn = '发送中'
        this.codeBtnStatus = false
        this.miao=true
        //setTiemOut 执行一次
        // setInterval 不断执行，需要条件才会停止
        let tim = val;
        this.timer = setInterval(() => {
          tim--;
          if (tim === 0) {
            clearInterval(this.timer)
            this.codeBtnStatus = false
            this.codeBtn = '重新获取'
            this.miao=false
          } else {
            this.codeBtnStatus = true
            this.codeBtn = `${tim}s`
          }
        }, 1000)
      },
  },
 
}
</script>

<style scoped lang="scss">
  @import url(./../assets/css/login.css);
  .phone{
    width: 304px;
    position: absolute;
    top: 84px;
    left: 40px;
  }
  .phone p{
    width: 304px;
    font-size: 14px;
    color: #666666;
    text-align: left;
    /* display: block; */
  }
  .phone input{
    margin-top: 10px;
    width:304px ;
    font-size: 14px;
    border: none;
    line-height: 24px;
    border-bottom: 1px solid #EEEEEE;
  }
  .phone .errPhone{
    margin-top: 10px;
    width:304px ;
    font-size: 14px;
    border: none;
    line-height: 24px;
    border-bottom: 1px solid #FE4600;
  }
  .phoneCode{
    width: 304px;
    position: absolute;
    top: 177px;
    left: 40px;
    border-bottom: 1px solid #eee;
  }
  .phoneCodeErr{
    width: 304px;
    position: absolute;
    top: 177px;
    left: 40px;
    border-bottom: 1px solid #FE4600;
  }
  .phoneCode p{
    width: 304px;
    font-size: 14px;
    color: #666666;
    text-align: left;
  }
  .code input{
    margin-top: 10px;
    font-size: 14px;
    border: none;
    line-height: 24px;
    float: left;
  }
  .code span{
    margin-top: 12px;
    float: left;
    font-size: 16px;
    color: #eee;
  }
  .code button{
    border: none;
    background: #fff;
    color: #1677FF;
    font-size: 14px;
    float: left;
    margin-top: 12px;
    margin-left: 16px;
  }
  .code{
    button{
      cursor: pointer;
    }
    
  }
  .code .miao{
    border: none;
    background: #fff;
    color: #CCCCCC;
    font-size: 14px;
    float: left;
    margin-top: 12px;
    margin-left: 16px;
  }
  .Select{
    width: 304px;
    position: absolute;
    bottom: 103px;
    left: 40px;
    cursor: pointer;
  }
  .Select img{
    width: 16px;
    height: 16px;
    float: left;
    margin-top: 2px;
  }
  .Select span{
    font-size: 14px;
    float: left;
    margin-left: 8px;
    color: #999999;
  }
  .Select a{
    color: #4086F7;
    margin-left: 8px;
  }
  .btn{
    width: 304px;
    height: 32px;
    position: absolute;
    left: 40px;
    bottom: 40px;
  }
  .btnNO{
    width: 304px;
    height: 32px;
    border: none;
    background: #B9D6FF;
    color: #fff;
    border-radius: 4px;
    font-size: 14px;
  }
  .btnYes{
    width: 304px;
    height: 32px;
    border: none;
    background: #1677FF;
    color: #fff;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
  }
  .errer{
    position: absolute;
    top: 248px;
    left: 40px;
  }
  .errer p{
    font-size: 14px;
    color: #FE4600;
    text-align: left;
  }
</style>