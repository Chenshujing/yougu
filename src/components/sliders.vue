<template>
<div>
    <div class="wrap_list" @click="show_list()">
        <div class="cart">
            <img src="../assets/images/serve_icon.png" alt="">
            <div class="content">增值服务<div class="content_detail">最终订单价格由活动套餐+增值服务数，可根据活动需求购买选配，也可直接购买增值服务。</div></div>           
        </div>
        <div class="control" v-if="!flag"><span>展开</span><span class="icon_list"><i class="el-icon-arrow-down"></i></span></div>
        <div class="control" style="color:#4086F7" v-else><span>收起</span><span class="icon_list"><i class="el-icon-arrow-up"></i></span></div>
    </div>
    <div class="detail_info" v-show="flag">
        <div class="choose">
            <div class="design" v-for="(item,index) in servece" :key="index">
                <h2 class="list_title">{{item.typeName}}</h2>
                <div>
                    <el-checkbox-group v-model="result">
                        <ul>
                    <li v-for="(list,i) in item.childs" :key="i">
                      <div class="checkbox_choose">
                        <el-checkbox @change="checkbox(list)" ref="checkbox" :label="list.serviceId"></el-checkbox>
                        <span class="leason">{{list.serviceName}}</span>
                        <span class="count_number">({{list.unit}})</span>
                      </div>
                        
                    </li>
                </ul>
                    </el-checkbox-group>
                </div>                
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    props:{
        servece:Array,
        getValue:Boolean
    },
    data() {
        return {
            flag:false,
            result: [],
            radio: '1',
            servecePrice:0
        };
    },
    methods:{
        show_list(){
            this.flag = !this.flag
        },
        checkbox(list){
            if (this.result.indexOf(list.serviceId)!= -1){
                this.servecePrice = this.servecePrice + list.price
            }else{
                this.servecePrice = this.servecePrice - list.price
            }
            this.$emit('servecePrice',this.servecePrice,this.result)
        }
    },
    // watch:{
    //     getValue(newVal,ordVal){
    //         this.$emit('serviceIds',this.result)
    //     }
    // }
    
}
</script>
<style lang="scss" scoped>
/deep/ .el-checkbox__label{
    display: none;
}
.count_number{
  color: #666666;
}
.wrap_list{
    
    height: 100px;
    margin: 0 auto;
    background: #FAFAFA;
    border-radius: 12px;
    position: relative;
    .control{
        position: absolute;
        top: 20px;
        right: 40px;
        font-size: 14px;
        line-height: 34px;
        color: #666;
        cursor: pointer;
        .icon_list{
            margin-left: 4px;
        }
    }
    .cart{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 23px 40px;
        box-sizing: border-box;
        cursor: pointer;
        img{
            width: 46px;
            margin-right: 30px;
        }
        .content{
            font-size: 16px;
            line-height: 28px;
        }
        .content_detail{
            font-size: 14px;
            line-height: 28px;
            color: #999;
        }
    }
}
    .detail_info{
        background: #FAFAFA;
        padding-bottom: 56px;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        position: relative;
        top: -8px;
        .choose{
            ul{
                overflow: hidden;
                padding-left: 32px;
            }
            li{
                float: left;
                font-size: 14px;
                line-height: 22px;
                padding:8px 0;
                margin-right: 24px;
                .leason{
                    margin-left: 4px;
                }
            }
            // .checkbox_choose{
            //   display: flex;
            //   flex-direction: row;
            //   align-items: center;
            //   width: 77%;
            // }
        }
        .list_title{
            font-size: 14px;
            line-height: 22px;
            color: #333;
            padding-left: 32px;
            padding-top: 16px;
            padding-bottom: 8px;
            &:before{
                content:' ';
                width: 2px;
                height: 8px;
                background: #4086F7;
                display: inline-block;
                margin-right: 6px;
                position:relative;
                top:-2px;
            }
        }
    }
</style>