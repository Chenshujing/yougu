<template>
    <div class="wrap">
        <div class="organization" >
            <div class="cart">
                <div class="title" v-if="bindOrgaList.length<=0">
                    <div class="name">暂无绑定机构</div>
                    <div class="go_bind" @click="go_bind"><span></span>去绑定</div>
                </div>
                <div class="title" v-if="bindOrgaList.length>0">
                    <div class="name">{{orgaItem.orgaName}}
                        <span class="icon"  v-if="orgaItem.isAuth==1"></span>
                        <span class="show_detail" v-if="orgaItem.isAuth==0">机构数据需认证后获取展示</span>
                    </div>
                    <div class="tab_cart" @click="showPopup">
                      <el-dropdown @command="handleCommand">
                        <div class="el-dropdown-link">
                          <span></span>
                          切换机构
                        </div>
                        
                        <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item v-for="(item,index) in bindOrgaList" :key="index" :command="item">{{item.orgaName}}</el-dropdown-item>
  
                          <el-dropdown-item divided command="0" class="bind"><span></span>去绑定</el-dropdown-item>
                        </el-dropdown-menu>
                      </el-dropdown>
                    </div>                   
                </div>
                <div class="detail" v-if="bindOrgaList.length>0">
                    <img src="../../assets/images/user/logo.png" />
                    <div class="time orga_time">
                        <div class="">平台授权<span class="highlight">{{arr[OrgaData.authStatus]}}</span></div>
                        <div class="date">到期时间<span>{{OrgaData.endTime}}</span></div>
                        <span class="icon2" v-if="orgaItem.isAuth==0" @click="bindOrga(orgaItem.orgaId)">去认证<span></span></span>
                    </div>
                </div>
                <div class="detail" v-else>
                    <div class="time">
                        <div class="">平台授权<span> -- </span></div>
                        <div class="date">到期时间<span> -- </span></div>
                    </div>
                </div>
            </div>
            <div class="activity_more">
                <div class="num">
                    <!-- v-if="orgaItem.isAuth==1" -->
                    <ul>
                        <li>
                            <p><span><img src="../../assets/images/user/icon1.png"/></span>举办活动数</p>
                            <p class="num_l" v-if="orgaItem.isAuth==1">{{OrgaData.activityNum}}</p>
                            <p class="num_l" v-else>0</p>
                            <p class="info_detail">机构主办活动数量</p>
                        </li>
                        <li>
                            <p><span><img src="../../assets/images/user/icon2.png"/></span>报名人数</p>
                            <p class="num_l"  v-if="orgaItem.isAuth==1">{{OrgaData.signNum}}</p>
                            <p class="num_l" v-else>0</p>
                            <p class="info_detail">全部活动参与人数</p>
                        </li>
                        <li>
                            <p><span><img src="../../assets/images/user/icon3.png"/></span>活动作品数</p>
                            <p class="num_l"  v-if="orgaItem.isAuth==1">{{OrgaData.opusNum}}</p>
                            <p class="num_l" v-else>0</p>
                            <p class="info_detail">全部活动作品总数</p>
                        </li>
                        <li>
                            <p><span><img src="../../assets/images/user/icon4.png"/></span>活动投票数</p>
                            <p class="num_l" v-if="orgaItem.isAuth==1">{{OrgaData.voteNum}}</p>
                            <p class="num_l" v-else>0</p>
                            <p class="info_detail">全部活动累积投票数</p>
                        </li>
                        <li>
                            <p><span><img src="../../assets/images/user/icon5.png"/></span>作品点赞数</p>
                            <p class="num_l" v-if="orgaItem.isAuth==1">{{OrgaData.likeNum}}</p>
                            <p class="num_l" v-else>0</p>
                            <p class="info_detail">全部活动点赞数量</p>
                        </li>
                        <li>
                            <p><span><img src="../../assets/images/user/icon6.png"/></span>作品分享数</p>
                            <p class="num_l" v-if="orgaItem.isAuth==1">{{OrgaData.shareNum}}</p>
                            <p class="num_l" v-else>0</p>
                            <p class="info_detail">全部活动作品分享次数</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- <div class="organization no_data" v-else>
            <div class="cart">
                <div class="title">
                    <div class="name">暂无绑定机构</div>
                    <div class="go_bind" @click="go_bind"><span></span>去绑定</div>
                </div>
                <div class="no_data_detail">绑定机构并认证后可展示机构活动数据</div>
            </div>
        </div> -->
        <successful v-if="loginStatus" @close="close"  @ident="ident"></successful>
        <institutions  v-if="Status" @close="close" @identity="identity"></institutions>
        <identity v-if="identStatus" @close="close" @successBind="successBind"></identity>
        <authentication v-if="BindStatus"  @close="close"></authentication>
    </div>
</template>
<script>
import successful from '@/components/successful'
import Institutions from '@/components/institutions'
import Identity from '@/components/identity'
import Authentication from '@/components/authentication'
export default {
  components:{successful,Identity,Authentication,Institutions},
    props:{
        bindOrgaList:Array,
        OrgaData:Object,
        UserData:Object
    },
    data(){
        return {
            flag:false,
            orgaItem:{},
            showPopover: false,
            show: false,
            arr:['未开通','授权中','已到期'],
            loginStatus:false,
            identStatus:false,
            BindStatus:false,
            Status:false,
        }
    },
    methods:{
      handleCommand(command){
        if(command==0){
          this.loginStatus = true
        }else{
          this.orgaItem = command;
          this.$emit('Change',command)
        }
        },
      close(){
            this.show=false
            this.loginStatus = false
            this.identStatus = false
            this.Status = false
            this.BindStatus = false
        },
        ident(type){
            this.loginStatus = !type
            this.Status = type
            this.$emit('Info')
        },
        successBind(type){
            this.identStatus = !type
            this.BindStatus = type
            
        },
        identity(type){
            this.Status = !type
            this.identStatus = type
            this.$emit('Info')
        },
        GetOrgaItem(index){
            this.orgaItem = this.bindOrgaList[index]
        },
        showPopup() {
            this.show = true;
        },
        tab_orga(item){
            this.orgaItem = item;
            this.$emit('Change',item)
            this.show = false
        },
        bindOrga(id){
            this.identStatus = true
            this.$cookies.set('orgaId',id)
        },
        go_bind(){
            this.loginStatus = true
        },
        go_myActivity(){
            this.$router.push({path:'/activity'})
        }

    },

    mounted(){
        
    },
    watch:{
      UserData(NewVal,ordVal){
            this.orgaItem = NewVal
        }
    }
    
}
</script>
<style lang="scss" scoped>
.wrap{
    padding: 0 15.4%;
    .organization{

        .cart{
            .title{
                padding: 25px 0 32px 0;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .name{
                    font-size: 24px;
                    span{
                        display: inline-block;
                    }
                    .icon{
                        background: url(../../assets/images/user/icon.png);
                        background-size: cover;
                        width: 50px;
                        height: 18px;
                        margin-left: 12px;
                        
                        position: relative;
                        top: 4px;
                    }
                }
                .show_detail{
                    color:#999999;
                    font-size: 16px;
                    margin-left: 24px;
                }
                .tab_cart{
                    font-size: 14px;
                    cursor: pointer;
                    span{
                        width: 16px;
                        height: 16px;
                        display: inline-block;
                        background:url(../../assets/images/user/tab.png);
                        background-size: cover;
                        margin-right: 8px;
                        position: relative;
                        top: 2px;
                    }
                }
            }
            .detail{
                background: #F9F9F9;
                height: 82px;
                border-radius: 4px;
                position: relative;
                img{
                    float: left;
                    width: 100px;
                    // height: 70px;
                    margin: 24px 0 24px 40px;
                }
                .time{
                    font-size: 16px;
                    line-height: 24px;
                    float: left;
                    margin-left:16.36%;
                    padding: 16px 0;
                    div{
                        
                    }
                    .date{
                        
                    }
                    span{
                        margin-left: 24px;
                    }
                    .highlight{
                        color: #4086F7;
                    }
                    .icon2{
                        color: #4086F7;
                        font-size: 14px;
                        position: absolute;
                        right: 20px;
                        top: 34px;
                        margin-left: 20px;
                        float: right;
                        cursor: pointer;
                        span{
                            background: url('../../assets/images/next.png') no-repeat;
                            background-size: cover;
                            width: 12px;
                            height: 12px;
                            display: inline-block;
                            margin-left: 2px;
                        }
                    }
                }
                .orga_time{
                    margin-left: 40px;
                }
            }
        }
        .activity_more{
            .title{
                padding: 50px 0 30px;
                font-size: 36px;
                line-height: 50px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .name{
                    span{
                        background: #4086F7;
                        width: 6px;
                        height: 24px;
                        display: inline-block;
                        margin-right: 16px;
                        margin-left: 6px;
                        position: relative;
                        top: -2px;
                    }
                }
                .icon{
                    position: relative;
                    top: 6px;
                }
            }
            .num{
                margin-top: 59px;
                ul{
                    overflow: hidden;
                    text-align: center;
                    li{
                        width: 33.3%;
                        float: left;
                        margin-bottom: 76px;
                        .num_l{
                            font-size: 40px;
                            margin: 28px 0;
                        }
                        p{
                            font-size: 18px;
                            line-height: 26px;
                            color: #666666;
                            span{
                                img{
                                    width: 16px;
                                    height: 16px;
                                    margin-right: 10px;
                                }
                            }
                        }
                        .info_detail{
                            font-size: 16px;
                            line-height: 22px;
                            color: #CCCCCC;
                        }
                    }
                }
                .no_data_show{
                    color: #999;
                    font-size: 24px;
                    line-height: 34px;
                    text-align: center;
                    padding-top: 116px;
                }
            }
        }
    }
    .no_data{
        .cart{
            .title{
                height: 56px;
                line-height: 56px;
                padding-top:48px;
            }
            
        }
        .no_data_detail{
            font-size: 28px;
            line-height: 40px;
            padding-left: 6px;
        }
    }
}
.bind{
    font-size: 14px;
    cursor: pointer;
    text-align: center;
    color: #4086F7;
    span{
        width: 16px;
        height: 16px;
        display: inline-block;
        background:url(../../assets/images/user/bind.png);
        background-size: cover;
        position: relative;
        top: 2px;
        left: -8px;
    }
}
.go_bind{
  font-size: 14px;
    cursor: pointer;
    text-align: center;
    color: #4086F7;
    span{
        width: 16px;
        height: 16px;
        display: inline-block;
        background:url(../../assets/images/user/bind.png);
        background-size: cover;
        position: relative;
        top: 2px;
        left: -8px;
    }
}
.wrapper{
    min-width: 50%;
    max-width: 60%;
    background:#ffffff;
    border-radius: 20px;
    min-height: 30%;
    max-height: 50%;
    position: absolute;
    top: 20%;
    left: 50%;
    margin-left: -25%;
    overflow: scroll;
}
.choose_type{
   
    ul{
        padding: 0 20px;
    }
    li{
        line-height: 80px;
        font-size:28px;
        border-bottom: 1px solid #eee;
        overflow:hidden;
        white-space:nowrap;
        text-overflow: ellipsis;
        text-align: center;
    }
}
.activity_bind{
    color:#4086F7 ;
}
</style>