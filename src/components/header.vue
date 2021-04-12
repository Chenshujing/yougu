<template>
    <div class="container_header">
        <div class="box_wrapper">
            <div class="header_detail clear_float">
                <div class="header_item header_img">
                    <img src="../assets/images/logo.png" alt="">
                </div>
                <div class="header_item nav_bar clear_float">
                    <div :class="type==1?'active':''" @click="Go_index()">首页</div>
                    <div :class="type==2?'active1':''" @click="Go_indent()">订购活动</div>
                    <div :class="type==3?'active1':''"  @click="Go_user()">机构数据</div>
                </div>
                <div class="header_item header_login" v-if="!isLogin">
                    <div class="login" @click="login">登录<img src="../assets/images/login.png"/></div>
                </div>
                <div class="header_item login_user" v-if="isLogin">
                    <div class="login">用户：{{mobile}}<img src="../assets/images/tuichu.png" @click="tuichu"/></div>
                </div>
            </div>
        </div>
        
                <login v-if="show" @close="close" @success="success" @olderUser="olderUser"></login>
                <successful v-if="loginStatus" @close="close"  @ident="ident"></successful>
                <institutions  v-if="Status" @close="close" @identity="identity"></institutions>
                <identity v-if="identStatus" @close="close" @successBind="successBind"></identity>
                <authentication v-if="BindStatus"  @close="close"></authentication>
            </div>

</template>
<script>
import Login from '@/components/login'
import successful from '@/components/successful'
import Institutions from '@/components/institutions'
import Identity from '@/components/identity'
import Authentication from '@/components/authentication'
export default {
    name:'headers',
    props:{type:Number,Index:Boolean},
    components:{Login,successful,Identity,Authentication,Institutions},
    data(){
        return {
            show:false,
            loginStatus:false,
            identStatus:false,
            BindStatus:false,
            Status:false,
            isLogin:false
        }
    },
    methods:{
        tuichu(){
            this.$cookies.remove('sessionId')
            this.$cookies.remove('mobile')
            this.$router.go(0)
        },
        Go_index(){
            this.$router.push({path:'/index'}).catch(()=>{})
        },
        Go_indent(){
          if(this.type==1){
            if(this.$cookies.get('sessionId') !=null){
              this.$router.push({name:'indent'})
            }else{
              this.show = true
            }
          }else{
            this.$router.push({name:'indent'})
          }           
        },
        Go_user(){
          if(this.type==1){
            if(this.$cookies.get('sessionId') !=null){
              this.$router.push({name:'user'})
            }else{
              this.show = true
            }
          }else{
            this.$router.push({name:'user'})
          }           
          
        },
        login(){
            this.show=true
        },
        close(){
            this.show=false
            this.loginStatus = false
            this.identStatus = false
            this.Status = false
            this.BindStatus = false
            this.$emit('ChangeLogin')
        },
        success(type){
            this.loginStatus = type
            this.show = !type
            this.userInfo()
        },
        olderUser(type){
            this.show = type
        },
        ident(type){
            this.loginStatus = !type
            this.Status = type
        },
        successBind(type){
            this.identStatus = !type
            this.BindStatus = type
        },
        identity(type){
            this.Status = !type
            this.identStatus = type
        },
        userInfo(){
            let params = {
                "sessionId": this.$cookies.get('sessionId'),
            }
            this.axios.post('/api/v1/user/getUserInfo',params).then(res=>{
                if(res.data.code=="200000"){
                    this.$cookies.set('mobile',res.data.data.mobile,60 * 60 * 24)
                    this.mobile = res.data.data.mobile
                    this.isLogin = true             
                }

            },error=>{
                if(error.response.data.message=='缓存用户信息不存在'){
                    this.$cookies.remove("sessionId")
                    this.isLogin = false
                    this.$router.push({path:'/login'})
                }
            })
        },
        isLoginStatus(){
            if(this.$cookies.get('sessionId')!=null && this.$cookies.get('mobile')==null){
                this.userInfo()
            }else if(this.$cookies.get('sessionId')!=null && this.$cookies.get('mobile')!=null){
                this.mobile = this.$cookies.get('mobile')
                this.isLogin = true 
            }else{
                this.isLogin = false
            }
        }
    },
    mounted(){
        this.isLoginStatus()
    },   
    watch:{
      Index(newVal,ordVal){
        if(newVal){
          this.show = true
        }
      }
    }
}
</script>
<style lang="scss" scoped>
.container_header{
    width: 100%;
    height: 80px;
    background: #FFFFFF;
    box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.05);
    .header_detail{
        padding: 0 113px;
        color: #999999;
        font-size: 16px;
        .header_img{
            line-height: 80px;
            img{
                width: 134px;
                height: 38px;
                vertical-align: middle;
            }
        }
        .header_item{
            float: left;
        }
        .header_login{
            float: right;
            width: 90px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            border-radius: 23px;
            border: 1px solid #FFFFFF;
            margin-top: 23px;
            cursor: pointer;
            img{
                position: relative;
                top: 7px;
                left: 5px;
            }
        }
        .login_user{
           float: right;
           line-height: 80px;
        }
        .login_user img{
            width: 16px;
            height: 16px;
            margin-top: 30px;
            margin-left: 15px;
            cursor: pointer;
        }
        // .header_login:hover{
        //     background: #fff;
        //     color: #4086F7;
        // }
        .nav_bar{
            margin-left: 44%;
            line-height: 80px;
            div{
                float: left;
                margin-left: 40px;
                cursor: pointer;
            }
            div:hover{
                color: #333;
            }
            .active{
                color: #fff;
                opacity: 1;
            }
            .active1{
                color: #333;
            }
        }
    }
}
</style>