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
                    <div :class="type==3?'active1':''">机构数据</div>
                </div>
                <div class="header_item header_login">
                    <div class="login">登录<img src="../assets/images/login.png"/></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'headers',
    props:{type:Number},
    methods:{
        Go_index(){
            this.$router.push({path:'/index'}).catch(()=>{})
        },
        Go_indent(){
            this.$router.push({name:'indent'})
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
                top: 2px;
                left: 5px;
            }
        }
        .header_login:hover{
            background: #fff;
            color: #4086F7;
        }
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