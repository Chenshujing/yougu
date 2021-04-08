<template>
    <div>
        <div class="step">
          <div class="step_solid">
            <div class="step_solid_content" :class="type != 1?'step_solid_active':''"></div>
            <div class="step_solid_content step_short_content" :class="type==3?'step_short_content_active':'' || type==4?'step_short_content_error':'' || type==5?'step_success':''"></div>
            <div class="step_solid_content step_short_content" :class="type==5?'step_success':''"></div>
          </div>
          <div class="step_1" v-if="type==1">
            <div class="icon icon_1"></div>
            <div class="icon icon_2"></div>
            <div class="icon icon_3"></div>
          </div>
          <div class="step_2" v-if="type==2">
            <div class="icon icon_1"></div>
            <div class="icon icon_2"></div>
            <div class="icon icon_3"></div>
          </div>
          <div class="step_3" v-if="type==3">
            <div class="icon icon_1"></div>
            <div class="icon icon_2"></div>
            <div class="active_icon"></div>
            <div class="icon icon_3"></div>
          </div>
          <div class="step_4" v-if="type==4">
            <div class="icon icon_1"></div>
            <div class="icon icon_2"></div>
            <div class="icon icon_3"></div>
          </div>
          <div class="step_5" v-if="type==5">
            <div class="icon icon_1"></div>
            <div class="icon icon_2"></div>
            <div class="icon icon_3"></div>
          </div>
        </div>
        <div class="step_words">
            <div>选择服务</div>
            <div class="pay_order">支付订单</div>
            <div>服务跟进</div>
        </div>
        <div class="no_pass" v-if="type==4">
            <div class="error"></div>
            <div class="error_detail">
                <div class="error_title">
                    <div>核实不通过原因</div>
                    <div class="error_word">核实不通过</div>
                </div>
                <div class="error_r">{{remark}}</div>
                <div class="godetail" @click="record">重新提交凭证 > </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        type:Number, // type = 1 选择服务 2 订单支付 3 核实中 4 失败 5 跟进服务,
        remark:String
    },
    methods:{
        record(){
            this.$emit('records')
        }
    }
}
</script>
<style lang="scss" scoped>
.step{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 48px;
    position: relative;
    .step_solid{
      display: flex;
      flex-direction:row;
      width:86%;
      .step_solid_content{
        width: 50%;
        height:4px;
        background: #EEEEEE;
      }
      .step_short_content{
        width:25%;
      }
      .step_solid_active{
        background: #4086F7;
      }
      .step_short_content_active{
        background: #4086F7;
      }
      .step_short_content_error{
        background: #FE4600;
      }
      .step_success{
        background: #4086F7;
      }
    }
    .icon{
        width: 12px;
        height:12px;
        background: #4086F7;
        border-radius: 50%;
    }
    .step_1{
      
      .icon_1{
        background: url('../../assets/images/ing.png') no-repeat;
        background-size: cover;
        width: 30px;
        height: 30px;
        position: absolute;
        left: 16px;
        top: -8px;
      }
      .icon_2{
        position: absolute;
        left: 50%;
        margin-left: -10px;
      }
    }
    .step_2{
      .icon_2{
        background: url('../../assets/images/ing.png') no-repeat;
        background-size: cover;
        width: 30px;
        height: 30px;
        position: absolute;
        left:50%;
        margin-left:-26px;
        top:-8px;
      }
      .icon_1{
        background: url('../../assets/images/wancheng.png') no-repeat;
        background-size: cover;
        width: 30px;
        height: 30px;
        position: absolute;
        left: 16px;
        top: -12px;
      }
    }
    .step_3{
      .icon_2{
        background: url('../../assets/images/wancheng.png') no-repeat;
        background-size: cover;
        width: 30px;
        height: 30px;
        position: absolute;
        left:50%;
        margin-left:-26px;
        top:-16px;
      }
      .icon_1{
        background: url('../../assets/images/wancheng.png') no-repeat;
        background-size: cover;
        width: 30px;
        height: 30px;
        position: absolute;
        left: 16px;
        top: -12px;
      }
      .active_icon{
        background: url('../../assets/images/heshi.png');
        background-size: cover;
        width: 38px;
        height: 38px;
        position: absolute;
        right: 25%;
        margin-right: -26px;
        top: -26px;
      }
    }
    .step_4{
      .icon_1{
        background: url('../../assets/images/wancheng.png') no-repeat;
        background-size: cover;
        width: 30px;
        height: 30px;
        position: absolute;
        left: 16px;
        top: -12px;
      }
      .icon_2{
        background: url('../../assets/images/error.png') no-repeat;
        background-size: cover;
        width: 38px;
        height: 38px;
        position: absolute;
        left: 50%;
        margin-left: -26px;
        top: -16px;
      }
    }
    .step_5{
      .icon_1{
        background: url('../../assets/images/wancheng.png') no-repeat;
        background-size: cover;
        width: 40px;
        height: 40px;
        position: absolute;
        left: 16px;
        top: -18px;
      }
      .icon_2{
        background: url('../../assets/images/wancheng.png') no-repeat;
        background-size: cover;
        width: 30px;
        height: 30px;
        position: absolute;
        left: 50%;
        margin-left: -26px;
        top: -22px;
      }
      .icon_3{
        background: url('../../assets/images/ing.png') no-repeat;
        background-size: cover;
        width: 30px;
        height: 30px;
        position: absolute;
        right: 14px;
        
        top: -22px;
      }
    }
    .step1{
        .icon{
            width: 16px;
            height:16px;
            background: #4086F7;
            border-radius: 50%;
            position:relative;
            z-index: 2;
        }
        .icon_active{
            background: url('../../assets/images/ing.png') no-repeat;
            background-size: cover;
            width: 30px;
            height: 30px;
            border-radius: 0;
            // span{
            //     display: inline-block;
            //     border: 4px solid #fff;
            //     width: 16px;
            //     height: 16px;
            //     background:#4086F7;
            //     border-radius: 50%;
            //     float: left;
            //     margin-top: 9px;
            //     margin-left: 9px;
            // }
        }
        .success{
            background: url('../../assets/images/wancheng.png') no-repeat;
            background-size: cover;
            width: 30px;
            height: 30px;
            border-radius: 0;
            
        }
        .error{
            width: 50px;
            height: 48px;
            img{
                width:100%;
            }
        }
        
    }
    .step2{
      position: relative;
      left: -5px;
    }
    .solid{
        width: 256px;
        height: 4px;
        background: #EEEEEE;
        position: relative;
        left: -5px;
        z-index: 1;
    }
    
    .error_solid{
        background: #FE4600;
    }
    .solid_active{
        background: #4086F7;
    }
    .verify{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .s_l{
            width: 87px;
            height: 4px;
            display: inline-block;
            background: #4086F7;
        }
        .s_r{
            width: 87px;
            height: 4px;
            display: inline-block;
            background: #EEEEEE;
        }
        .s_t{
            background: url('../../assets/images/heshi.png');
            background-size: cover;
            width: 38px;
            height: 38px;
            display: inline-block;
            position: relative;
            left: -6px;
        }
    }
}
.step_words{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 32px;
    font-size: 16px;
    line-height: 34px;
    padding-right: 10px;
    .pay_order{
      padding-left: 10px;
    }
}
.no_pass{
    position: relative;
    min-height: 330px;
    margin-bottom: 80px;
    .error{
        background: url('../../assets/images/nopass.png');
        background-size: cover;
        width: 710px;
        height: 20px;
        position: absolute;
        left: -26px;
    }     
    .error_detail{
        background: #fff;
        width: 610px;
        height: 324px;
        padding:0 30px;
        border-bottom-left-radius: 32px;
        border-bottom-right-radius: 32px;
        position: absolute;
        top: 10px;
        left:-6px ;
        z-index: 2;
        box-shadow: 12px 12px 12px #eee;
        .error_title{
            font-size: 34px;
            line-height: 48px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 20px 0 8px 0;
            .error_word{
                color: #FE4600;
            }
        }
        .error_r{
            background: #F9F9F9;
            padding: 20px 20px 14px 20px;
            font-size:28px;
            line-height: 40px;
            height: 126px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
        }
        .godetail{
            font-size: 34px;
            line-height: 48px;
            padding: 20px 0;
            color: #4086F7;
            text-align: right;
        }
    }
}

</style>