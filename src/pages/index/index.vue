<template>
    <div class="index_container">      
        <div class="">
            <div class="header_position">
                <headers :type="1" :Index="isLogin" @ChangeLogin="ChangeLogin"></headers>
            </div>       
            <div class="banner">
                <!-- <img src="../../assets/images/index/banner.png" class="banner_images"/> -->
                <div class="banner_images">
                    <div class="box_wrapper">
                    <div class="banner_container">
                        <div class="rf_left">
                            <p class="tip">活动服务订购平台</p>
                            <p class="banner_title">让举办活动更简单</p>
                            <p class="banner_bg">
                                <span>主题朗诵</span>
                                <span>影视配音</span>
                                <span>答题闯关</span>
                            </p>
                            <div class="booking" @click="go_activity">订购活动</div>
                            <img src="../../assets/images/index/icon.png" />
                        </div>
                        <div class="rf_right">
                            <img src="../../assets/images/index/content.png"/>
                        </div>
                    </div>
                    
                </div>
                </div>         
            </div>
            <div class="intro">
                <div class="bg">
                    <div class="box_wrapper">
                        <div class="intro_words">
                            <p><span>「优谷活动帮」</span>活动服务订购平台，专注为学校、图书馆、企事业单位等行业客户提供党建、文化活动整体解决方案，帮助客户推动文化建设、打造文化品牌，目前已服务客户超12000家。</p>
                        </div>
                        
                        <div class="information">
                            <div class="info_item">
                                <p>已服务客户<span>（家）</span></p>
                                <div>1.2<span class="words">万</span><span>+</span></div>
                            </div>
                            <div class="info_item">
                                <p>已支持活动<span>（场）</span></p>
                                <div>3.3<span class="words">万</span><span>+</span></div>
                            </div>
                            <div class="info_item">
                                <p>活动总访问量</p>
                                <div>1.5<span class="words">亿</span><span>+</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="activity_info">
                <div class="title">完整活动服务闭环</div>
                <div class="images container_max">
                    <img src="../../assets/images/index/bg1.png" class=""/>
                </div>           
            </div>
            <div class="activity_serve">
                <div class="title">活动服务</div>
                <div class="box_wrapper">
                    <div class="activity_title">活动类型</div>
                    <banner :banner_List="getServices" @NoMore="NoMore"></banner>
                    <div class="serve_box">
                        <div class="activity_title">标准服务</div>
                        <div class="serve">
                            <ul>
                                <li>
                                    <img src="../../assets/images/index/icon1.png"/>
                                    <p class="ac_title">活动策划</p>
                                    <p class="ac_detail">策划全程跟进确保上线</p>
                                </li>
                                <li>
                                    <img src="../../assets/images/index/icon2.png"/>
                                    <p class="ac_title">活动设计</p>
                                    <p class="ac_detail">活动视觉方案、全屏展示</p>
                                </li>
                                <li>
                                    <img src="../../assets/images/index/icon3.png"/>
                                    <p class="ac_title">活动功能</p>
                                    <p class="ac_detail">11种活动功能使用</p>
                                </li>
                                <li>
                                    <img src="../../assets/images/index/icon5.png"/>
                                    <p class="ac_title">资源使用</p>
                                    <p class="ac_detail">海量素材等你挑选</p>
                                </li>
                                <li>
                                    <img src="../../assets/images/index/icon6.png"/>
                                    <p class="ac_title">素材制作</p>
                                    <p class="ac_detail">定制活动主题的朗读素材</p>
                                </li>
                                <li>
                                    <img src="../../assets/images/index/icon7.png"/>
                                    <p class="ac_title">作品审核</p>
                                    <p class="ac_detail">专业审核团队把控</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="serve_box">
                        <div class="activity_title">增值服务</div>
                        <div class="serve">
                            <ul>
                                <li>
                                    <img src="../../assets/images/index/icon8.png"/>
                                    <p class="ac_title">宣传设计</p>
                                    <p class="ac_detail">活动对外宣传推广设计</p>
                                </li>
                                <li>
                                    <img src="../../assets/images/index/icon9.png"/>
                                    <p class="ac_title">推文代写</p>
                                    <p class="ac_detail">公众号/媒体推文撰写</p>
                                </li>
                                <li>
                                    <img src="../../assets/images/index/icon10.png"/>
                                    <p class="ac_title">奖项评选</p>
                                    <p class="ac_detail">评委对活动作品评分</p>
                                </li>
                                <li>
                                    <img src="../../assets/images/index/icon11.png"/>
                                    <p class="ac_title">奖品代发</p>
                                    <p class="ac_detail">奖品代买和代寄送</p>
                                </li>
                                <li>
                                    <img src="../../assets/images/index/icon12.png"/>
                                    <p class="ac_title">活动复盘</p>
                                    <p class="ac_detail">活动总结PPT制作</p>
                                </li>
                                <li>
                                    <img src="../../assets/images/index/icon13.png"/>
                                    <p class="ac_title">线下活动策划</p>
                                    <p class="ac_detail">线下活动保驾护航</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div class="activity_case">
                <div class="box_wrapper">
                    <div class="title">活动案例</div>
                    <el-tabs v-model="activeName" @tab-click="onClick">
                        <el-tab-pane  v-for="(item,index) in tabList" :key="index" :label="item.typeName" :name="(item.typeId).toString()">
                            <loop :banner_List="banner_List" v-if="loop==item.typeId"></loop>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
            <div class="activity_step">
                <div class="box_wrapper">
                    <div class="title">服务流程</div>
                    <div class="step">
                        <ul>
                            <li>
                                <img src="../../assets/images/index/step1.png"/>
                                <p class="p1 p_after">订购服务</p>
                                <p class="p2">请您按需求选择活动类型和服务功能</p>
                            </li>
                            <li>
                                <img src="../../assets/images/index/step2.png"/>
                                <p class="p1 p_after p_before">确定方案</p>
                                <p class="p2">活动策划经理跟你联系，沟通并确定方案</p>
                            </li>
                            <li>
                                <img src="../../assets/images/index/step3.png"/>
                                <p class="p1 p_after  p_before">活动上线</p>
                                <p class="p2">专业团队完成活动设计、素材制作上线</p>
                            </li>
                            <li>
                                <img src="../../assets/images/index/step4.png"/>
                                <p class="p1  p_before">活动成果</p>
                                <p class="p2">您可以随时查看和下载活动素材</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="activity_castom">
                <div class="box_wrapper">
                    <div class="title">服务客户</div>
                    <div class="castom_detail">优谷朗读已为<span>12000+</span>客户提供活动服务</div>
                    <p>覆盖互联网、政府单位、企业服务、高校、图书馆、中小学等众多领域</p>
                    <div class="castom_bg">
                        <img src="../../assets/images/index/bg2.png"/>
                    </div>
                    <div class="more_case" @click="more_case">更多案例</div>
                </div>
            </div>
            <div class="booking">
                立即订购，让举办活动更简单
                <span @click="go_activity">订购活动</span>
            </div>
            <footers></footers>
        </div>
        
    </div>
</template>
<script>
import Headers from '@/components/header'
import Banner from '@/components/banner'
import Loop from '@/pages/index/loop'
import Footers from '@/components/footer'
export default {
    name: 'index',
    components:{Headers,Banner,Loop,Footers},
    data(){
        return {
            page:1,
            total:0,
            size:10,
            pageNum:1,
            pageAll:0,
            getServices:[],
            tabList:[],
            banner_List:[],
            activeName:'17',
            loop:17,
            isLogin:false
        }
    },
    methods:{
        getActivityServices(){
            if(this.page>1 && this.total <= (this.page-1)*this.size) {
                // this.$toast('没有更多内容了');
                return
            }            
            let params = {
                "data": {
                    "pageNum": this.page,
                    "pageSize": 10
                }
            }
            this.axios.post('/api/v1/activity/getActivityServices',params).then(res=>{
                this.getServices = this.getServices.concat(res.data.data.records)
                this.total = res.data.data.total
                this.page = this.page + 1
            },error=>{
                if(error.response.data.message=='缓存用户信息不存在'){
                    this.$cookies.remove("sessionId")
                    this.$router.push({path:'/login'})
                }
            })
        },
        getCaseTypes(){
          return new Promise((resolve,reject)=>{
            let params = {
                "data": {

                },
            }
            this.axios.post('/api/v1/activity/getCaseTypes',params).then(res=>{
              resolve(res)
              this.tabList = res.data.data
              this.activeName = res.data.data[0].typeId
            },error=>{
                if(error.response.data.message=='缓存用户信息不存在'){
                    this.$cookies.remove("sessionId")
                    this.$router.push({path:'/login'})
                }
            })
          })

        },
        onClick(tab, event) {
            this.activeName = tab.name
            this.loop = tab.name
            this.pageNum = 1
            this.pageAll = 0
            this.banner_List = []
            this.getActivityCases(tab.name)
        },
        getActivityCases(id){
            let params = {
                "data": {
                    "pageNum": 1,
                    "pageSize": 10,
                    "typeId": id
                }
            }
        this.axios.post('/api/v1/activity/getActivityCases',params).then(res=>{
            this.banner_List = this.banner_List.concat(res.data.data.records)
            this.banner_List = this.banner_List.concat(this.banner_List)
            this.pageAll = res.data.data.total
          },error=>{
                if(error.response.data.message=='缓存用户信息不存在'){
                    this.$cookies.remove("sessionId")
                    this.$router.push({path:'/login'})
                }
            })
        },
        getCaseTypes(){
            let params = {
                "data": {
                    
                },
            }
            this.axios.post('/api/v1/activity/getCaseTypes',params).then(res=>{
                this.tabList = res.data.data
            },error=>{
                if(error.response.data.message=='缓存用户信息不存在'){
                    this.$cookies.remove("sessionId")
                    this.$router.push({path:'/login'})
                }
            })
        },
        go_activity(){
          if(this.$cookies.get('sessionId') != null){
            this.$router.push({name:'indent'})
          }else{
            this.isLogin = true
          }
            
        },
        NoMore(){
            this.getActivityServices()
        },
        more_case(){
            this.$router.push({name:'CustomerCase'})
        },
        ChangeLogin(){
          this.isLogin  = false
        }
    },
    mounted(){
       this.getCaseTypes() 
       this.getActivityCases('17')
    }
}
</script>
<style lang="scss" scoped>
.index_container{
    .banner_images{
        background: url('../../assets/images/index/banner.png') no-repeat;
        // background-size: cover;
        width: 100%;
        height: 680px;
        padding-top: 200px;
        box-sizing: border-box;
    }
}
.header_position{
    float: left;
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    .container_header{
        background: none;
        /deep/ .header_detail{
            color: #fff;
        }
        /deep/ .nav_bar{
            div{
                color: #fff;
                opacity: 0.8;
            }
            
        }
        
    }
    
}
.banner{
    width: 100%;
    background: linear-gradient(90deg, #2B9BFB 0%, #0379FF 100%);
    
    img{
        width: 100%;
    }
    .banner_container{
        // position: absolute;
        // top: 31.7%;
        padding: 0 113px;
        overflow: hidden;
        .rf_left{
            float: left;
            color: #fff;
            .tip{
                font-size: 24px;
                line-height: 33px;
                margin-bottom: 10px;
            }
            .banner_title{
                font-size: 48px;
                line-height: 56px;
                margin-bottom: 20px;
            }
            .banner_bg{
                margin-bottom: 40px;
                span{
                    background: url('../../assets/images/index/bg.png') no-repeat;
                    background-size: 100% 100%;
                    font-size: 24px;
                    display: inline-block;
                    width: 138px;
                    height: 48px;
                    line-height: 48px;
                    text-align: center;
                    margin-right: 15px;
                }
            }
            .booking{
                background: #fff;
                width: 200px;
                height: 44px;
                border-radius: 22px;
                text-align: center;
                line-height: 44px;
                color: #4086F7;
                font-size: 20px;
                cursor: pointer;
                &:hover{
                    background: #4086F7;
                    color: #fff;
                }
            }
            img{
                width: 280px;
            }
        }
        .rf_right{
            float: right;
            width:44.8%;     
        }
    }
}
.intro{
    width: 100%;
    padding: 40px 113px;
    box-sizing: border-box;
    
    .bg{
        width: 100%;
        background: url('../../assets/images/index/solid.png') no-repeat;
        background-size: contain;
    }
    .intro_words{
        padding: 0 113px;
        p{
            padding-top: 6px;
            font-size: 32px;
            line-height: 60px;
        }
        span{
            font-weight: 800;
        }
    }
    .information{
        padding: 0 113px;
        margin-top: 50px;
        overflow: hidden;
        .info_item{
            float: left;
            width:32%;
            color: #4086F7;
            padding-left:4%;
            box-sizing: border-box;
            p{
                line-height: 33px;
                font-size: 24px;
                span{
                    font-size: 20px;
                    
                }
            }
            div{
                font-size: 100px;
                span{
                    font-size: 48px;
                    position: relative;
                    top: -6px;
                }
                .words{
                    padding-left: 12px;
                }
            }
        }
    }
}
.title{
    text-align: center;
    margin-bottom: 60px;
    font-size:32px;
    font-weight: 800;
    /* background: url('../../assets/images/index/title.png');
    background-size: 100% 100%; */
    width: 420px;
    margin: 0 auto 60px auto;
}
.activity_title{
    font-size: 22px;
    line-height: 34px;
    width: 80%;
    margin: 0 auto;
}
.activity_info{
    background: #FAFAFA;
    width: 100%;
    padding: 30px 0;
    img{
        width: 100%;
    }
}
.activity_serve{
    width: 100%;
    padding: 30px 0;
}
.serve_box{
    .activity_title{
        margin: 70px auto 30px auto; 
    }
    .serve{
        ul{
            overflow: hidden;
            width: 80%;
            margin: 0 auto;
            li{
                float: left;
                width:16.66%;
                text-align: center;
                .ac_title{
                    font-size: 18px;
                    line-height: 25px;
                }
                .ac_detail{
                    font-size: 15px;
                    line-height: 20px;
                }
                img{
                    width: 39px;
                    height: 39px;
                }
            }
        }
    }
}
.activity_case{
    background: #FAFAFA;
    padding: 30px 0;
    .activity_title{
        margin-bottom: 30px;
    }
    
}
/deep/ .el-tabs__header{
    width: 50%;
    margin: 0 auto 65px;
}
.activity_step{
    padding: 60px 0;
    .activity_title{
        margin-bottom: 30px;
    }
    .step{
        ul{
            overflow: hidden;
            li{
                float: left;
                width: 25%;
                text-align: center;
                position: relative;
                img{
                    width: 108px;
                    height: 100px;
                    
                }
                .p1{
                    font-size: 28px;
                    line-height: 38px;
                    font-weight: 800;
                    padding: 20px 0 10px 0;
                    
                    
                }
                .p_before{
                    &:before{
                        content: '';
                        display: inline-block;
                        width: 20%;
                        height:4px;
                        border-bottom: 2px dotted #4086F7;
                        position: absolute;
                        top: 48px;
                        left: 2px;
                        opacity: 0.6;
                    }
                }
                .p_after{
                    &:after{
                        content: '';
                        display: inline-block;
                        width: 20%;
                        height:4px;
                        border-bottom: 2px dotted #4086F7;
                        position: absolute;
                        top: 48px;
                        right: 0;
                        opacity: 0.6;
                    }
                }
                .p2{
                    font-size: 16px;
                    line-height: 22px;
                    color: #666666;
                    padding-right: 6px;
                }
            }
        }
    }
}
.activity_castom{
    padding: 30px 0;
    text-align: center;
    .activity_title{
        margin-bottom: 30px;
    }
    .castom_detail{
        font-size: 32px;
        line-height: 44px;
        font-weight: 800;
        
        span{
            color: #4086F7;
            padding: 0 16px;
        }
    }
    p{
        font-size: 16px;
        line-height: 22px;
        color: #999999;
        margin-top: 10px;
        margin-bottom: 30px;
    }
    .castom_bg{
        width: 89%;
        margin: 0 auto;
        img{
            width: 100%;
        }
    }
    .more_case{
        width: 89%;
        color: #4086F7;
        font-size: 20px;
        line-height: 26px;
        margin:30px auto;
        text-align: right;
        padding-right: 60px;
        box-sizing: border-box;
        cursor: pointer;
    }
}
.booking{
    width: 100%;
    height: 150px;
    background: #4086F7;
    line-height: 150px;
    color: #fff;
    font-size: 40px;
    text-align: center;
    span{
        display: inline-block;
        width: 200px;
        height: 46px;
        line-height: 46px;
        border: 1px solid #fff;
        color: #fff;
        text-align: center;
        border-radius: 24px;
        font-size: 20px;
        margin-left: 40px;
        cursor: pointer;
        position: relative;
        top: -6px;
        &:hover{
            background: #fff;
            color: #4086F7;

        }
    }
}
</style>