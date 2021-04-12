<template>
  <div class='activity_order'>   
      <div class="contan_order" v-for="(item,index) in orderList" :key="index">
        <div class="contents">
          <div class="ordersNum">
            <span class="num">订单号：{{item.orderNo}}</span>
            <p class="status" :class="item.orderStatus==3?'status_active':'' || item.orderStatus==2?'status_hs_active':''">{{StatusText(item.orderStatus)}}</p>
          </div>
          <div class="informationText" @click="Go_detail(item.orderStatus,item.orderNo)">
            <div class="informationTile">
              <p>{{item.orderName}}</p>
              <img src="../assets/images/more.png">
            </div>
            <div class="informationTime">
              <span class="timeName">下单时间：</span>
              <span class="Time">{{item.createTime}}</span>
            </div>
            <div class="informationTime">
              <span class="timeName">绑定机构：</span>
              <span class="Time">{{item.orgaName}}</span>
            </div>
          </div>
          <div class="morry" :class="item.orderStatus==4?'finish':''">
            <div class="invoice" v-if="item.orderStatus==4" @click="ShowTip">电子发票</div>
            <p><span>共计</span><span class="money_icon">￥</span>{{item.amount}}.00</p>
            
          </div>
        </div>
      </div>
    
  </div>
</template>
<script>
  export default {
    // props: ['orderList','total',]
    props:{
      orderList:{
        type:Array
      },
      total:{
        type:Number
      },
    
    },

    data() {
      return {
        list: [],
        finished: false,
        
      }
    },
    // computed:{
    //   flag(){
    //     return this.loading
    //   }
    // },
    // watch:{
    //   loading(NewVal,ordVal){
    //     this.flag =  newVal
    //   }
    // },
    methods: {
      StatusText(num) {
        if (num == 1) {
          return '待支付'
        }else if(num==2){
          return '核实中'
        }else if(num==3){
          return '核实不通过'
        }else if(num==4){
          return '已支付'
        }
      },
      Go_detail(type,id){
        if(type==1){
          this.$router.push({path:`/pay/${id}`})
        }else{
          this.$router.push({path:`/orderdetail/${id}`})
        }   
      },
      ShowTip(){
        this.$toast('后续开放，敬请期待')
      }
    },
  }

</script>
<style lang="scss" scoped>
.activity_order{
  overflow: hidden;
}
  .morry {
    display: flex;
    flex-direction: row-reverse;
    padding: 16px 0;
  }
  .finish{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .morry span {
    font-size: 14px;
    margin-right: 8px;
    color: #666666;
  }
  .morry .money_icon{
    font-size: 16px;
    margin-right: 4px;
    color: #FE4600;
  }

  .morry p {
    color: #FE4600;
    font-size: 24px;
  }

  .informationTime {
    margin-top:8px;
  }

  .timeName {
    font-size: 14px;
    color: #666666;
  }

  .Time {
    font-size: 16px;
    color: #333333;
    font-family: alibaba_M;
  }

  .informationText {
    padding:16px;
    height: 92px;
    background: #F9F9F9;
    border-radius: 4px;
    cursor: pointer;
  }

  .informationTile {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .informationTile p {
    font-size: 24px;
  }

  .informationTile img {
    width: 16px;
    height: 16px;
    margin-top: 8px;
  }
.contan_order{
    width: 48%;
    height: 226px;
    border:1px solid #EEEEEE;
    border-radius: 4px;
    margin-bottom: 24px;
    float: left;
    margin-right: 1%;
  .contents {
    padding: 0 16px;
    
  }
}
  

  .ordersNum {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 0 8px 0;
  }

  .num {
    font-size: 16px;
    color: #666666;
  }

  .status {
    font-size: 16px;
    color: #333333;
  }
  .status_active{
    color:#FE4600;
  }
  .status_hs_active{
    color: #CCCCCC;
  }
  .invoice{
    width: 176px;
    height: 60px;
    color: #fff;
    background: #4086F7;
    border-radius: 26px;
    line-height: 60px;
    text-align: center;
    font-size: 28px;
  }
</style>