<template>
    <div class="footer_container">
        <div class="box_wrapper">
            <div class="info">
                <p class="name">广州优谷信息技术有限公司</p>
                <p class="tel">400-8110807</p>
                <p class="email">邮箱：support@iyougu.com</p>
                <div class="address">
                    <p class="f_left">地址：广州市天河区棠东东路3号123房</p>
                    <p class="f_right">Copyright 2020 iyougu.com All Rights Reserved   粤ICP备16065445</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.footer_container{
    width: 100%;
    height: 170px;
    padding: 50px 0;
    background: #2F343F;
    .info{
        padding:0 113px;
        .name{
            font-size: 32px;
            line-height: 44px;
            color: #fff;
        }
        .tel{
            font-size: 40px;
            line-height: 55px;
            color: #4086F7;
        }
        .email{
            font-size: 16px;
            line-height: 30px;
            color: #fff;
            opacity: 0.5;
        }
        .address{
            font-size: 16px;
            line-height: 30px;
            color: #fff;
            opacity: 0.5;
            .f_left{
                float: left;
            }
            .f_right{
                float:right;
            }
        }
    }
}
</style>