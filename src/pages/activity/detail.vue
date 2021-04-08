<template>
    <div class="white_background">
        <headers :title="title"></headers>
        <div class="box-container">
        <div class="booking_wrapper"> 
        <div class="pay_content">
            <div class="bind_type box_content">
                <div class="type_title">当前绑定机构<span class="type_detail">{{dataList.orgaName}}</span></div>
                
            </div>
            <div class="copy_content box_content">
                <div class="type_title">订单编号<span class="type_detail">{{dataList.orderNo}}</span></div>
            </div>
            <div class="box_content">
                <div class="type_title">总费用<span class="type_detail price"><span>¥</span>{{dataList.amount}}</span></div>
            </div>
        </div>
        <div class="info_detail">
            <div class="postInfo">
            <div class="all_price">
                <p class="title_icon_slider">总费用<span>（元）</span></p>
                <div class=""></div>
            </div>
            <div class="pay_info">
                <div class="pay_info_detail title_icon_slider">详细信息</div>
                <div class="pay_detail">注意：请在转账时注明汇款户名，转账后保留汇款凭证或电子回单，并提交汇款信息。</div>
                <div class="pay_bg">
                    <div class="pay_user">
                        <p class="name">公司名称</p>
                        <p>广州优谷信息技术有限公司</p>
                    </div>
                    <div class="pay_user">
                        <p class="name">开户银行</p>
                        <p>中国建设银行广州东圃支行</p>
                    </div>
                    <div class="pay_user">
                        <p class="name">账    号</p>
                        <p>4405 0147 1010 0000 0404</p>
                    </div>
                    <div class="pay_user">
                        <p class="name">开户行号</p>
                        <p>105581017103</p>
                    </div>
                    <div class="price_bg"></div>
                </div>
            </div>
        </div>
        <footers :title="title" :step="2" @go_info="go_info"></footers>
        </div>
        </div>
        </div>
    </div>
</template>
<script>
import Headers from '@/components/header'
import Footers from '@/pages/activity/bottom'
export default {
    components:{Headers,Footers},
    data(){
        return {
            title:'提交汇款信息',
            dataList:{},
            data:''
        }
    },
    methods:{
        queryOrder(){
            let params = {
                "data": {
                    "orderNo": this.$route.params.id
                },
                "sessionId": this.$cookies.get('sessionId'),
            }
            this.axios.post('/api/v1/order/queryOrder',params).then(res=>{
                if(res.data.code=="200000"){
                  res.data.data.amount = this.returnFloat(res.data.data.amount)
                    this.dataList = res.data.data
                    this.data = res.data.data.orderNo
                }
                
            },error=>{
                if(error.response.data.message=='缓存用户信息不存在'){
                    this.$cookies.remove("sessionId")
                    this.$router.push({path:'/login'})
                }
            })
            
        },
        go_info(){
            this.$router.push({path:'/SubmitInformation',query:{id:this.dataList.orderNo}})
        },
        copyCode(){
            this.$toast('复制成功')
        },
        copyCodeError(){
            this.$toast('复制失败')
        },
        returnFloat(value){
            var value=Math.round(parseFloat(value)*100)/100;
            var xsd=value.toString().split(".");
            if(xsd.length==1){
                value=value.toString()+".00";
                return value;
            }
            if(xsd.length>1){
                if(xsd[1].length<2){
                    value=value.toString()+"0";
                }
                return value;
            }
        }
    },
    mounted(){
        this.queryOrder()
    }
}
</script>
<style lang="scss" scoped>
.booking_wrapper{
    background: #fff;
}
.pay_content{
    
    .box_content{
        margin-top: 16px;
       
        float: left;
        width: 33%;
        .price{
        font-size: 24px;
        color: #FE4600;
        padding-right: 40px;
        span{
            font-size: 14px;
            padding-right: 6px;
        }
    }
    }
    .choose_type{
        .type_detail{
            color: #333;
            margin-left: 16px;
        }
        .pay_status{
            font-size: 28px;
            color: #666;
        }
    }
    .type_detail{
        font-size: 14px;
        line-height: 22px;
        color: #333;
        margin-left: 16px;
    }
    .type_title{
        font-size: 28px;
        line-height: 40px;
        color: #999999;
    }
    .copy_content {
        .type_detail{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            line-height: 56px;
        }
        
    }
    .paste{
        width: 152px;
        height: 56px;
        line-height: 56px;
        text-align:center;
        color:#4086F7 ;
        border: 1px solid #4086F7;
        border-radius: 12px;
        font-size: 24px;
        font-family: 'alibaba_R';
       .copy_no{
         width: 34px;
         height:32px;
        position:relative;
        top:6px;
        right:6px;
       }
    }

}
.pay_bg{
  position: relative;
  .pay_user{
    position: relative;
    z-index: 2;
  }
  .price_bg{
    height: 184px;
    width: 730px;
    // background: url('../../assets/images/price_b.png');
    // background-size: cover;
    position: absolute;
    bottom: -100px;
    left: -40px;
    z-index: 1;
  }
}
.info_detail{
    margin-bottom: 220px;
    padding: 0 20px;
    margin-top: 40px;
}
.all_price{
      height: 300px;
      line-height: 230px;
      width: 710px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    //   background: url('../../assets/images/price_money.png');
    //   background-size: 100% 100%;
    p{
        font-size: 36px;
        padding-left:20px;
        span{
            font-size: 28px;
        }
    }
    .price{
        font-size: 64px;
        color: #FE4600;
        padding-right:20px;
        span{
            font-size: 36px;
            padding-right: 6px;
        }
    }
}
.pay_info{
    padding: 0 20px 16px 20px;
    .pay_info_detail{
        font-size: 36px;
        line-height: 50px;
        margin: 0 0 32px 0;
    }
    .pay_detail{
        width: 590px;
        padding: 20px 30px;
        background: #FFFCEF;
        border-radius: 8px;
        color: #F58223;
        font-size: 24px;
        line-height: 34px;
        margin-bottom: 16px;
    }
    .pay_user{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 16px 0;
        .name{
            font-size: 34px;
            font-family: 'alibaba_R';
        }
        p{
            font-family: 'alibaba_M';
            font-size: 28px;
        }
    }
}
.white_background{
    background: #FAFAFA;
    padding-bottom: 30px;
}
.title_icon_slider{
  &:before{
    content: '';
    display: inline-block;
    width: 4px;
    height: 24px;
    background: #4086F7;
    margin-right: 16px;
    position: relative;
    top: -2px;
  }
}
.postInfo{
    box-shadow: 0 -2px 4px #eee, -10px 20px 20px #eee, 10px 10px 10px #eee;
    /* padding: 0 20px; */
    border-radius: 6px;
}
</style>