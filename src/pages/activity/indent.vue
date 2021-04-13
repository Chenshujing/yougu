<template>
    <div class="container_write">
        <headers :type="2"></headers>
        <div class="box-container">
            <div class="booking_wrapper">
        <div v-show="!map">
        
        <div class="wrap">
           <step :type="1"></step>
        <div class="bind"  v-if="orgaList.orgaId!=null">
            <div>
                <div class="title">当前绑定机构</div>
                <div class="about">{{orgaList.orgaName}}</div>
            </div>
        </div>
        <div v-if="orgaList.orgaId ==null">
            <serve @ORGA="Orga" :getValue="getValue" @clickMap="clickMap" :orgaAddr="orgaAddr" @OrgaContent="OrgaContent"></serve>
        </div>
        <div class="activitys">
            <div class="title">
                <div class="buy">活动订购，请选择活动类型</div>
                <div class="serve"  @click="open">活动包含服务<span><img class="ac_serve" src="../../assets/images/ac_serve.png"/></span></div>               
            </div>
            <div>
                <booking :book="book" @GetActivePrice="TypePrice(arguments)"></booking>
            </div>
            <div class="order">
                <div class="title">增值服务订购，请选择具体服务项</div>
                <div>
                    <sliders :servece="service" @servecePrice="servecePrice(arguments)" ></sliders>
                </div>
            </div>
        </div>
        </div>
        <div class="consent box-container">
          <!-- <van-checkbox v-model="checked" icon-size="16">
              <span class="agress">我已同意</span>
              <span @click="Go_protocol" class="protocol">《活动服务协议》</span>
          </van-checkbox> -->
          <div class="agress_box">
            <div class="agress_choose">
                <img src="../../assets/images/no_choose.png" v-if="!checked" @click="checked = true"/>
                <img src="../../assets/images/choose.png" v-if="checked" @click="checked = false"/>
                <span class="agress">我已同意</span>
                <span @click="Go_protocol" class="protocol">《活动服务协议》</span>
            </div>
                <div class="contact"><a href="https://kef.m.iyougu.com/api/mobileweb/home?channel_id=10351&channel_key=10351oirg&wechatapp_id=198360&key=33790wo28"> 对价格有疑问<span class="question"><img src="../../assets/images/question.png"/></span></a></div>
            </div>
        </div>
        <div class="order_form">
            <order @order="cr_order" :AllPrice="AllPrice" :disable="disable"></order>
        </div>
        </div>
        <maps v-if="map" @MapAddress="MapAddress" @back_map="back_map"></maps>
    </div>
    </div>
    <user :dialogVisible="userBlow" @close="closeUser"></user>
    </div>
</template>
<script>
import Headers from '@/components/header'
import Booking from '@/components/booking'
import Sliders from '@/components/sliders'
import Order from '@/components/order'
import Serve from '@/components/serve'
import Step from '@/pages/activity/step'
import Maps from '@/pages/map.vue'
import user from '@/components/useragree'
export default {
    components:{Headers,Booking,Sliders,Order,Serve,Step,Maps,user},
    computed:{
        AllPrice(){
            return this.activityPrice + this.sPrice
        }
    },
    data(){
        return{
            title:'选择活动服务',
            checked:false,
            OrgaStatus:false,
            show: false,
            book:[],
            service:[],
            orgaList:[],
            orgaUp:{},
            serviceIds:[],
            getValue:false,
            activityTypeId:'',
            activityPrice:0,
            sPrice:0,
            bindOrgaId:0,
            disable:false,
            map:false,
            orgaAddr:'',
            userBlow:false
        }
    },
    methods:{
    closeUser(){
        this.userBlow=false
    },
    open() {
        this.$alert('<ul class="list_content"><li>活动策划</li><li>活动banner图1张、全屏图1张</li><li>服务器负载均衡</li><li>作品云存储、数据同步</li><li>活动时间设置</li><li>分组别报名</li><li>作品投票</li><li>转发作品增加投票次数</li><li>推荐朗读素材功能</li><li>作品生成留声卡功能</li><li>限制参赛地区功能</li><li>参赛码验证参赛人员</li><li>生成活动宣传海报功能</li><li>海量资源库使用</li><li>制作符合活动主题的朗读素材</li><li>活动作品审核</li><li>提供活动数据及作品下载</li></ul>', '活动包含服务',{
            dangerouslyUseHTMLString: true,
            showConfirmButton:true,
            center: true,
            width:'640px',
        });
      },
      ChooseAgress(event){
        console.log(event)
      },
        showPopup() {
            this.show = true;
        },
        getActivityTypes(){
            let params = {
                "sessionId": this.$cookies.get('sessionId'),
            }
            this.axios.post('/api/v1/packages/getActivityTypes',params).then(res=>{
                this.book = res.data.data
            },error=>{
                if(error.response.data.message=='缓存用户信息不存在'){
                    this.$cookies.remove("sessionId")
                    this.$router.push({path:'/login'})
                }
            })
        },
        getServices(){
            let params = {
                "sessionId": this.$cookies.get('sessionId'),
            }
            this.axios.post('/api/v1/packages/getServices',params).then(res=>{
                this.service = res.data.data
            },error=>{
                if(error.response.data.message=='缓存用户信息不存在'){
                    this.$cookies.remove("sessionId")
                    this.$router.push({path:'/login'})
                }
            })
        },
        getUserInfo(){
            let params = {
                "sessionId": this.$cookies.get('sessionId'),
            }
            this.axios.post('/api/v1/user/getUserInfo',params).then(res=>{
                this.orgaList = res.data.data
                if(res.data.data.orgaId != null){
                    this.bindOrgaId = res.data.data.orgaId
                }
                
            },error=>{
                if(error.response.data.message=='缓存用户信息不存在'){
                    this.$cookies.remove("sessionId")
                    this.$router.push({path:'/login'})
                }
            })
        },
        Orga(data){
            this.orgaUp = data
            if(this.orgaUp.bindOrgaId != null){
                this.bindOrgaId = this.orgaUp.bindOrgaId
            }
            if(!this.disable){
                this.getValue = false
                return
            }
            if(!this.checked){
              this.$message('请先同意活动服务协议')
              this.getValue = false
              return
            }
            this.createOrder()        
            // this.createOrder()
        },
        CheckForm(){
            if(this.orgaList.orgaId != null){
                if(this.activityPrice != 0 || this.sPrice !=0){
                    this.disable = true
                }else{
                    this.disable = false
                }
            }else{
                if(this.OrgaStatus && this.AllPrice != 0){
                    this.disable = true
                }else{
                    this.disable = false
                }
            }
        },
        OrgaContent(type){
            this.OrgaStatus = type
            this.CheckForm()
        },
        cr_order(){         
            if(this.orgaList.orgaId!=null){
              if(!this.disable){
                  return
              }
              if(!this.checked){
                this.$message('请先同意活动服务协议')
                return
              }
              this.createOrder()
            }else{
              this.getValue = true
            }       
            
        },
        TypePrice(arg){
            this.activityPrice = arg[0]
            this.activityTypeId = arg[1]
            this.CheckForm()
        },
        servecePrice(arg){
            this.sPrice = arg[0]
            this.serviceIds = arg[1]
            this.CheckForm()
        },
        createOrder(){
            let params = {
                  "data": {
                    "activityTypeId": this.activityTypeId,
                    // "bindOrgaId": this.bindOrgaId,
                    "serviceIds": this.serviceIds,
                    "orgaAddr":this.orgaUp.orgaAddr,
                    "orgaName":this.orgaUp.orgaName,
                    "orgaType":this.orgaUp.orgaType
                    },
                "sessionId": this.$cookies.get('sessionId'),
            }
            if(this.bindOrgaId != 0){
                params.data.bindOrgaId = this.bindOrgaId
            }
            this.axios.post('/api/v1/order/createOrder',params).then(res=>{
                if(res.data.code=="200000"){
                    this.$router.push({
                        path:`/pay/${res.data.data.orderNo}`
                    })
                }
                
            },error=>{
                if(error.response.data.message=='缓存用户信息不存在'){
                    this.$cookies.remove("sessionId")
                    this.$router.push({path:'/login'})
                }
            })
            
        },
        MapAddress(addr){
            this.map = false
            this.orgaAddr = addr.cityname + addr.poiaddress + addr.poiname
        },
        clickMap(type){
            this.map = true
        },
        back_map(type){
            this.map = false
        },
        Go_protocol(){
            // this.$router.push({path:'/protocol'})
            this.userBlow=true
        }
    },
    mounted(){
        this.getUserInfo()
        this.getActivityTypes()
        this.getServices()
    },
    watch:{
        
    }
}
</script>
<style lang="scss" scoped>
.container_write{
    background: #FAFAFA;
}
.booking_wrapper{
    
}
.wrap{
    padding: 40px 17%;
    margin-top: 30px;
    background: #fff;
    box-sizing: border-box;
}
.ac_serve{
  width: 28px;
  height: 28px;
}
.agress_box{
    padding: 0 17%;
    overflow: hidden;
    background: #FAFAFA;
}
.protocol{
  background:#FAFAFA;
}
.agress_choose{
    float: left;
    img{
        cursor: pointer;
        vertical-align: sub;
    }
}
.bind{
    .title{
        font-size: 16px;
        line-height: 22px;
        color: #999;
    }
    .about{
        font-size: 24px;
        line-height: 48px;
        font-weight: 800;
    }
}
.activitys{
    .title{
        line-height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 32px 0 11px 0;
        .buy{
            font-size: 16px;            
            color: #999;
        }
        .serve{
            font-size: 16px;
            color: #666;
            cursor: pointer;
            span{
                position: relative;
                top: 2px;
                margin-left: 5px;
                img{
                    width: 16px;
                    height: 16px;
                    vertical-align: baseline;
                }
            }
        }
    }
    .content_detail{
        padding: 0 30px 60px 30px;
        .content_title{
            font-size: 40px;
            line-height: 56px;
            font-family: 'alibaba_B';
            margin:48px 0 64px 0;
            text-align: center;
        }
        
    }
}
.order{
    padding-bottom: 82px;
    .title{
        margin:0 0 20px 0 ;
        color: #999;
        font-size: 16px;
    }
}
.consent{
    padding:0 24px;
    height: 60px;
    background: #fff;
    line-height: 60px;
    font-size: 21px;
    // position: fixed;
    // bottom: 172px;
    align-items: center;
    box-sizing: border-box;
    .question{
        position: relative;
        top: 4px;
        margin-left: 6px;
        color: #666;
        img{
            vertical-align: baseline;
        }
    }
    .agress{
        color: #999;
        margin: 0 6px;
    }
    .protocol{
        color: #4086F7;
        cursor: pointer;
    }
    
}
.order_form{
    background: #fff;
    // height:172px;
    // position: fixed;
    // bottom: 0;
}
.contact{
    float: right;
    a{
        color: #666666;
    }
}
/deep/ .el-message-box{
  width: 640px;
}
</style>