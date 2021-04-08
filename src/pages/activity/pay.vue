<template>
    <div class="pay">
        <headers :title="title"></headers>
        <div class="box-container">
        <div class="booking_wrapper">     
        <div class="step_list"><step :type="2"></step></div> 
        <div class="order_title">订单服务信息</div>       
        <div class="pay_content">
            <div class="choose_type box_content">
                <div class=" ">
                    <div class="type_title">当前活动类型<span class="type_detail">{{orderList.activityType}}</span></div>                  
                </div>                
            </div>
            <div class="copy_content box_content">
                <div class="type_title">订单编号<span class="type_detail">{{orderList.orderNo}}</span></div>
            </div>
            <div class="all_price box_content" >
                <p class="type_title">总费用<span class="price type_detail"><span>¥</span>{{orderList.amount}}</span></p>
                
            </div>
            <div class="bind_type box_content">
                <div class="type_title">当前绑定机构<span class="type_detail">{{orderList.orgaName}}</span></div>            
            </div>
            <div class="box_content">
                <div class="type_title">订单状态<span class="type_detail">待支付</span></div>            
            </div>
        </div>
        <div class="pay_way">
            <div class="order_title order_title_no">交易类型</div>
            <ul>
                <li>
                    <el-radio v-model="radio" label="1">对公转账</el-radio>
                </li>
                <li>
                    <el-radio v-model="radio" label="2" disabled>微信支付（暂未开通）</el-radio>
                </li>
                <li>
                    <el-radio v-model="radio" label="3" disabled>支付宝（暂未开通）</el-radio>
                </li>
            </ul>
        </div>
        
        <div class="order_title order_title_no">已选择服务总览</div>
        <div class="about_serve">       
            <div class="service_about">
                <div class="serve_all">{{orderList.activityType}}+增值服务（2）</div>             
            <div class="ac_serve" > 
                
                <div v-show="this.orderList.activityType != null">
                  <h4 class="ac_title_s">活动类型包含</h4>
                  <div class="content_detail">
                      <ul class="list_contents">
                          <li>活动策划</li><li>活动banner图1张、全屏图1张</li><li>服务器负载均衡</li>
                          <li>作品云存储、数据同步</li><li>活动时间设置</li><li>分组别报名</li>
                          <li>作品投票</li><li>转发作品增加投票次数</li><li>推荐朗读素材功能</li>
                          <li>作品生成留声卡功能</li><li>限制参赛地区功能</li><li>参赛码验证参赛人员</li>
                          <li>生成活动宣传海报功能</li><li>海量资源库使用</li><li>制作符合活动主题的朗读素材</li>
                          <li>活动作品审核</li><li>提供活动数据及作品下载</li>
                      </ul>
                  </div>
                </div>
                <div v-for="(item,index) in orderList.services" :key="index">
                    <h4 class="ac_title_s">{{item.typeName}}</h4>
                    <div class="content_detail border_list">
                        <ul class="list_contents">
                            <li v-for="(list,i) in item.childs" :key="i">{{list.serviceName}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <footers :title="title" :step="1" @go_pay="go_pay"></footers>
        </div>
        </div>
    </div>
</template>
<script>
import Headers from '@/components/header'
import Footers from '@/pages/activity/bottom'
import Step from '@/pages/activity/step'
export default {
    name:'pay',
    components:{Headers,Footers,Step},
    data(){
        return {
            title:'支付订单',
            data:'',
            orderList:{},
            radio:'1'
        }
    },
    mounted(){
        this.queryOrder()
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
                    this.orderList = res.data.data
                    this.data = res.data.data.orderNo
                    // this.orderList.amount = returnFloat(this.orderList.amount)
                }
                
            },error=>{
                if(error.response.data.message=='缓存用户信息不存在'){
                    this.$cookies.remove("sessionId")
                    this.$router.push({path:'/login'})
                }
            })
            
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
        },
        go_pay(){
            this.$router.push({
                path:`/detail/${this.$route.params.id}`
            })
            
        },
        copyCode(){
            this.$toast('复制成功')
        },
        copyCodeError(){
            this.$toast('复制失败')
        }
    }
}
</script>
<style lang="scss" scoped>
.pay{
    background: #fafafa;
}
.pay_way{
    ul{
        padding-left: 14px;
        overflow: hidden;
        margin-bottom: 40px;
        li{
            float: left;
            margin-right:40px ;
            
        }
    }
}
.box-container{
    background: #fff;
}
.booking_wrapper{
    padding: 10px 0;
    margin-top: 20px;
}
.order_title{
    font-size: 16px;
    line-height: 24px;
    padding-left: 14px;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
}
.order_title_no{
    border:0;
}
.pay_content{
    background: #fff;
    margin-bottom: 40px;
    overflow: hidden;
    padding-left: 14px;
    padding-top: 8px;
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
            font-size: 14px;
        }
    }
    .type_detail{
        font-size: 14px;
        line-height: 22px;
        color: #333;
        margin-left: 16px;
        
    }
    .type_title{
        font-size: 14px;
        line-height: 22px;
        color: #666666;
    }
    .pay_status{}
    .copy_content {
        .type_detail{
            color: #333;
            margin-left: 16px;
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
.about_serve{
    padding: 0 14px;
    .service_about{
        border: 1px solid #eee;
        padding-bottom: 20px;
    }
    .serve_all{
            background: #FAFAFA;
            height: 44px;
            line-height: 44px;
            font-size: 14px;
            padding-left: 24px;
        }
    .ac_serve{
        
        padding:0 24px;
        
        .ac_title{
            font-size: 36px;
            line-height: 50px;
            font-family: 'alibaba_M';
        }
        .ac_title_s{
            margin: 16px 0 12px 0;
            font-size: 14px;
            line-height: 22px;

        }
    }
    
    .content_detail{
        
       
        .list_contents{
            overflow: hidden;
            font-size: 14px;
            line-height: 20px;
            li{
                float: left;
                padding: 0 32px 0 0;
                margin-bottom: 8px;
                &:before{
                    content:'';
                    display:inline-block;
                    width: 8px;
                    height: 8px;
                    border: 1px solid #4086F7;
                    transform: rotate(45deg);
                    margin-right: 10px;
                    margin-left: 2px;
                }
            }
            
        }
    }
    .border_list{
        border-top: 1px solid #eee;
    }
    .all_price{
      height: 300px;
      line-height: 300px;
      width: 710px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    //   background: url('../../assets/images/price_bg.png');
    //   background-size: cover;
        .allPrice{
            font-family: "alibaba_M";
        }
        p{
            font-size: 36px;
            padding-left: 40px;
            span{
                font-size: 28px;
            }
            
        }
        
    }
}
.step_list{
    width: 650px;
    margin: 0 auto;
}
.title_icon_slider{
  &:before{
    content: '';
    display: inline-block;
    width: 4px;
    height: 20px;
    background: #4086F7;
    margin-right: 10px;
    position: relative;
    top: -4px;
  }
}
</style>