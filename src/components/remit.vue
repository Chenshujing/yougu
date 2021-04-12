<template>
    <el-dialog title="查看汇款信息" :visible.sync="outerVisible" width="640px">
        <div class="inputFrom clearfix">
            <div class="submitInformation">
                <p class="title">付款银行户名</p>
                <p class="content">{{list.accountName}}</p>
            </div>
            <div class="submitInformation ">
                <p class="title title1">付款日期</p>
                <p class="content">{{list.payTime}}</p>
            </div>
            <div class="submitInformation">
                <p class="title">付款银行账号</p>
                <p class="content">{{list.account}}</p>
            </div>
            <div class="submitInformation">
                <p class="title title1">联系手机</p>
                <p class="content">{{list.phoneNumber}}</p>
            </div>
            <div class="submitInformation">
                <p class="title">备注</p>
                <p class="content">{{list.remark}}</p>
            </div>
        </div>
    </el-dialog>
</template>
<script>
export default {
    props:{outerVisible:Boolean,orderNo:String},
    data(){
        return {
            list:{}
        }
    },
    methods:{
        queryVoucher(){
            this.axios.post('/api/v1/order/queryVoucher', {
                "data": {
                    "orderNo":this.orderNo
                },
                "sessionId": this.$cookies.get('sessionId')
            }).then(res=>{
                this.list = res.data.data
            },error=>{
                if(error.response.data.message=='缓存用户信息不存在'){
                    this.$cookies.remove("sessionId")
                    this.$router.push({path:'/login'})
                }
            })
      
        }
    },
    mounted(){
        this.queryVoucher()
    }
}
</script>
<style lang="scss" scoped>
.submitInformation{
    margin-top: 8px;
    text-align:left;
    float: left;
    .title{
        width: 128px;
        font-size: 14px;
        color: #666666;
        float: left;
        line-height: 32px;     
    }
    .title1{
        width: 60px;
    }
    .content{
        float: left;
        height: 32px;
        padding-left: 12px;
        float: left;
        line-height: 32px;
    }
  }
</style>