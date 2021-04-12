<template>
    <div>
        <el-dialog title="提交汇款信息" :visible.sync="dialogVisible" width="680px">
            <div class="step">
                <div class="progress">
                    <img src="../assets/images/information/status3.png" alt="">
                    <p class="texta">确定订单信息</p>
                    <p class="textb">输入汇款信息</p>
                    <p class="textc">提交成功</p>
                </div>
            </div>
            <div class="success">
                <img src="../assets/images/successicon.png"/>
                <p class="success_word">提交成功</p>
                <p class="tip">提交汇款信息后，系统将在1个工作日内完成审核，审核通过后会进行短信通知</p>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="comfirm">返回活动列表</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    props:{dialogVisible:Boolean},
    data(){
        return {
            
        }
    },
    methods:{
        comfirm(){
            this.$router.push({name:'user'})
        }
    }
}
</script>
<style lang="scss" scoped>
/deep/ .el-step__head.is-success{
    color: #4086F7;
    border-color: #4086F7;
}
/deep/ .el-step__title.is-success{
    color: #333;
    font-size: 16px;
}
/deep/ .el-step__head.is-process{
    color: #999;
    border-color: #999;
}
/deep/ .el-step__title.is-process{
    color: #999;
}
.success{
    text-align: center;
    padding: 70px 0;
    .success_word{
        color: #4086F7;
        font-size: 16px;
        padding: 10px 0 4px 0;
    }
    .tip{
        color: #666666;
        width: 280px;
        margin: 0 auto;
        font-size: 14px;
    }
}
.step{
    margin-left: 36px;
}
.progress{
    width: 570px;
    position: relative;
}
.progress img{
    width: 570px;
}
.progress p{
    font-size: 16px;
}
.texta{
position: absolute;
bottom: -26px;
left: -29px;
}
.textb{
position: absolute;
bottom: -26px;
left: 237px;
}
.textc{
position: absolute;
bottom: -26px;
right: -10px;
}
</style>