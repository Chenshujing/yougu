<template>
    <div class="footers box-container">
        <div class="go_pay" @click="Go_order()">{{title}}</div>
        <div class="back" @click="Go_prev">上一步</div>
        
    </div>
</template>
<script>
export default {
    props:{
        title:String,
        step:Number
    },
    methods:{
        Go_order(){
            if(this.step==1){
                this.$emit('go_pay') 
            }else if(this.step==2){
                this.$emit('go_info') 
            }                      
        },
        Go_prev(){
            this.$router.go(-1)
        }
    }
}
</script>
<style lang="scss" scoped>
.footers{
    height:120px;
    background: #fff;
    line-height: 120px;
    margin-top: 55px;
    .back{
        font-size: 24px;
        color: #666666;
        float: right;
        cursor: pointer;
    }
    .go_pay{
        width: 200px;
        height: 60px;
        background: #4086F7;
        border-radius: 6px;
        font-size: 24px;
        line-height: 60px;
        text-align: center;
        color: #fff;
        float: right;
        margin: 30px 14px 0 43px;
        cursor: pointer;

    }
}
</style>