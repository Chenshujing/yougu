<template>
    <div class="order_confirm box-container">
        <div class="price_bottom">
            <div class="price"><span class="icon">¥</span>{{AllPrice}}.00</div>
            <div class="order_buttom" :class="!disable?'disable':''" @click="go_order()">生成订单</div>
        </div>
        
    </div>
</template>
<script>
export default {
    props:{
        AllPrice:Number,
        disable:Boolean
    },
    methods:{
        go_order(){
            // this.$router.push({path:'/pay'})
            this.$emit('order')
        }
    }
}
</script>
<style lang="scss" scoped>
.disable{
    opacity: 0.5;
}
.order_confirm{
    align-items: center;
    padding: 30px 20px 30px 32px;
    height:120px;
    box-sizing: border-box;

    .price_bottom{
        padding: 0 17%;
        overflow: hidden;
    }
    .price{
        float: left;
        color: #FE4600;
        font-size: 48px;
        .icon{
            font-size: 27px;
        }
    }
    .order_buttom{
        float: right;
        width: 200px;
        height: 60px;
        background: #4086F7;
        border-radius: 4px;
        font-size: 24px;
        color: #fff;
        line-height: 60px;
        text-align: center;
        cursor: pointer;
    }
}
</style>