<template>
    <div class="pay">
        <headers :title="title"></headers>
        <div class="step_list"><step :type="step" @records="records" :remark="remark"></step></div>
        <div class="pay_content">
            <div class="choose_type box_content">
                <div class="type_detail ">
                    <div class="type_title">当前选择活动类型</div>
                    <div class="pay_status">{{arr[dataList.orderStatus-1]}}</div>
                </div>
                <div class="type_detail">{{dataList.activityType}}</div>
            </div>
            <div class="bind_type box_content">
                <div class="type_title">当前绑定机构</div>
                <div class="type_detail">{{dataList.orgaName}}</div>
            </div>
            <div class="copy_content box_content">
                <div class="type_title">订单编号</div>
                <div class="type_detail" ref="copy">
                    <div>{{dataList.orderNo}}</div>
                    <!-- <div class="paste" v-clipboard:copy="data" v-clipboard:success="copyCode" v-clipboard:error="copyCodeError"><img class="copy_no" src="../../assets/images/copy.png" />复制
                    </div> -->
                </div>
            </div>
        </div>
        <div class="about_serve">
            <div class="content">
            <div class="ac_serve"> 
                <h2 class="ac_title title_icon_slider serve_content">包含服务</h2>
                <div>
                  <h4 class="ac_title_s">活动类型包含</h4>
                  <div class="content_detail">
                      <ul class="list_content">
                          <li>活动策划</li><li>活动banner图1张、全屏图1张</li><li>服务器负载均衡</li>
                          <li>作品云存储、数据同步</li><li>活动时间设置</li><li>分组别报名</li>
                          <li>作品投票</li><li>转发作品增加投票次数</li><li>推荐朗读素材功能</li>
                          <li>作品生成留声卡功能</li><li>限制参赛地区功能</li><li>参赛码验证参赛人员</li>
                          <li>生成活动宣传海报功能</li><li>海量资源库使用</li><li>制作符合活动主题的朗读素材</li>
                          <li>活动作品审核</li><li>提供活动数据及作品下载</li>
                      </ul>
                  </div>
                </div>
                <div  v-for="(item,index) in dataList.services" :key="index">
                    <h4 class="ac_title_s">{{item.typeName}}</h4>
                    <div class="content_detail">
                        <ul class="list_content">
                            <li  v-for="(list,i) in item.childs" :key="i">{{list.serviceName}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="all_price">
              <p class="title_icon_slider allPrice">总费用<span>（元）</span></p>
              <div class="price"><span>¥</span>{{dataList.amount}}</div>
            </div>
            <div class="pay_way">
             
                <div class="ac_title title_icon_slider">订单信息</div>
                <ul>
                    <li>
                        <div>下单时间</div>
                        <div class="disable">{{dataList.createTime}}</div>
                    </li>
                    <li>
                        <div>支付方式</div>
                        <div class="disable">对公转账</div>
                    </li>
                    <li class="no_slide">
                        <div>提交凭证</div>
                        <div class="disable">{{dataList.payTime}}</div>
                    </li>
                </ul>
                <div class="look_way" @click="look_pay">查看凭证<van-icon name="arrow" color="#4086F7" size="16" class="look_pay_item"/></div>
                <div class="bg"></div>
            </div>
            </div>
        </div>
        <div class="wchart" v-if="dataList.orderStatus==4">
            <div class="add_kf">添加专属活动运营微信进行活动落地实行</div>
            <div class="add_wx">
                <div class="wx_number">
                    <!-- <img src="../../assets/images/wchat.png"> -->
                    <span class="">{{wx}}</span>
                </div>
                <!-- <div class="paste" v-clipboard:copy="wx" v-clipboard:success="copyCode" v-clipboard:error="copyCodeError"><img class="copy_no" src="../../assets/images/copy.png" />复制微信号
                    </div> -->
            </div>
        </div>
    </div>
</template>
<script>
import Headers from '@/components/header'
import Step from '@/pages/activity/step'
export default {
    name:'pay',
    components:{Headers,Step},
    data(){
        return {
            title:'提交汇款信息',
            data:'',
            wx:'yougulangduting001',
            dataList:{},
            step:3,
            arr:['待支付','核实中','核实不通过','已支付'],
            remark:''
        }
    },
    methods:{
        queryOrder(){
            let params = {
                  "data": {
                    "orderNo":this.$route.params.id
                },
                "sessionId": this.$cookies.get('sessionId'),
            }
            this.axios.post('/api/v1/order/queryOrder',params).then(res=>{
                if(res.data.code=="200000"){
                  res.data.data.amount = this.returnFloat(res.data.data.amount)
                    this.dataList = res.data.data
                    this.step = res.data.data.orderStatus+1
                    this.data = res.data.data.orderNo
                    if(res.data.data.orderStatus==3){
                        this.remark = res.data.data.remark
                    }
                }
                
            },error=>{
                if(error.response.data.message=='缓存用户信息不存在'){
                    this.$cookies.remove("sessionId")
                    this.$router.push({path:'/login'})
                }
            })
        },
        look_pay(){
            this.$router.push({path:'/remittanceInformation',query:{id:this.dataList.orderNo}})
        },
        copyCode(){
            this.$toast('复制成功')
        },
        copyCodeError(){
            this.$toast('复制失败')
        },
        records(){
            this.$router.push({path:'/SubmitInformation',query:{id:this.dataList.orderNo}})
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
.pay{
    background: #fff;
    margin-bottom: 360px;
}
.look_way{
    color: #4086F7;
    text-align: right;
    height: 184px;
    width: 730px;
    font-size: 32px;
    line-height: 44px;
    // background: url('../../assets/images/price_b.png');
    // background-size: cover;
    position: absolute;
    bottom: -150px;
    left: -20px;
    .look_pay_item{
        position: relative;
        top: 8px;
        margin: 0 6px 0 6px;
    }
}
.pay_content{
    background: #fff;
    .box_content{
        margin-top: 36px;
        padding: 0 40px;
    }
    .choose_type{
        .type_detail{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        .pay_status{
            font-size: 28px;
            color: #666;
        }
    }
    .type_detail{
        font-size: 34px;
        line-height: 48px;
        font-family: 'alibaba_M';
    }
    .type_title{
        font-size: 28px;
        line-height: 40px;
        color: #999999;
    }
    .pay_status{}
    .copy_content {
        .type_detail{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            line-height: 56px;
        }
        
    }
    

}
.paste{
        /* width: 152px; */
        padding: 0 26px 0 32px;
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

.about_serve{
    padding: 14px 20px 0 20px;
    background: #ffffff;
    margin-bottom:230px;
    margin-top: 32px;
    .content{
        background: #fff;
        border-radius: 6px;
        box-shadow: 0 -2px 4px #eee, -10px 20px 20px #eee, 10px 10px 10px #eee;  
        width: 100%;
    }
    .ac_serve{
        padding: 0 30px;
        padding-bottom: 60px;
        .ac_title{
            font-size: 36px;
            line-height: 50px;
            font-family: 'alibaba_M';
            padding: 12px 0;
        }
        .serve_content{
            padding-top: 30px;
        }
        .ac_title_s{
            margin: 32px 0 24px 0;
            font-size: 28px;
            line-height: 40px;

        }
    }
    .content_detail{
        
        .list_content{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            font-size: 24px;
            line-height: 34px;
            li{
                padding: 0 50px 0 0;
                margin-bottom: 32px;
                &:before{
                    content:'';
                    display:inline-block;
                    width: 14px;
                    height: 14px;
                    border: 2px solid #4086F7;
                    transform: rotate(45deg);
                    margin-right: 10px;
                }
            }
            
        }
    }
    .all_price{
        height: 300px;
        line-height: 300px;
        width: 710px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        // background: url('../../assets/images/price_bg.png');
        // background-size: cover;
        p{
            font-size: 36px;
            font-family: "alibaba_M";
            padding-left:40px;
            span{
                font-size: 28px;
            }
            &:before{
                content: '';
                display: inline-block;
                width: 6px;
                height: 22px;
                background: #4086F7;
                margin-right: 10px;
                position:relative;
                top: -2px;
            }
        }
        .price{
            font-size: 64px;
            color: #FE4600;
            padding-right:40px;
            span{
                font-size: 36px;
                padding-right: 6px;
            }
        }
    }
    .pay_way{
      position: relative;
        .ac_title{
            font-size: 36px;
            line-height: 50px;
            margin: 62px 0 30px;
            padding:0 30px;
            font-family: "alibaba_M";
        }
        ul{
            padding-bottom: 30px;
            li{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                padding:0 30px;
                height: 112px;
                line-height: 112px;
                font-size: 36px;
                img{
                    width: 48px;
                    height: 50px;
                    vertical-align: middle;
                    margin-right: 34px;
                }
                .choosed{
                    width: 36px;
                    height: 36px;
                    border: 1px solid #4086F7;
                    border-radius: 50%;                   
                    float:left;
                    &:before{
                        content:' ';
                        width: 28px;
                        height: 28px;
                        border-radius: 50%;
                        background: #4086F7;
                        float:left;
                        margin-left: 4px;
                        margin-top: 4px;
                    }
                }
            }
        }
    }
}
.wchart{
    height: 202px;
    box-sizing: border-box;
    background: #fff;
    padding: 32px 40px;
    position: fixed;
    bottom: 0;
    left: 0;
    width:100%;
    box-sizing: border-box;
    box-shadow: 2px -4px 10px #ccc;

    .add_kf{
        font-size: 34px;
        line-height: 48px;
        font-family: 'alibaba_M';
        margin-bottom: 14px;
    }
    .add_wx{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .wx_number{
          display: flex;
          flex-direction: row;
          
          align-items: center;
          span{
            font-size: 28px;
            line-height: 44px;
            margin-left: 16px;
          }
        }
        img{
            width: 76px;
            height: 76px;
        }
        .copy_no{
          width: 34px;
          height:32px;
          position:relative;
          top:6px;
          right:6px;
      }
    }
}
.step_list{
    padding: 0 48px;
}
.title_icon_slider{
  &:before{
    content: '';
    display: inline-block;
    width: 4px;
    height: 22px;
    background: #4086F7;
    margin-right: 10px;
    position:relative;
    top: -2px;
  }
  

}
</style>