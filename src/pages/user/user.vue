<template>
    <div class="user">
        <headers></headers>
        <div class="box-container">
            <div class="user_info">
                <div class="base_infomation">
                    基本信息<span>机构基本数据展示</span>
                </div>
            <div class="tab">
                <el-tabs v-model="activeName" @tab-click="tab(activeName)">
                    <el-tab-pane label="机构专区" name="1">
                        <organ :bindOrgaList="bindOrgaList" :OrgaData="OrgaData" @Change="ChangeOrga" :UserData="UserData"></organ>
                    </el-tab-pane>
                    <el-tab-pane label="我的活动" name="2">
                        <activity></activity>
                    </el-tab-pane>
                    <el-tab-pane label="活动订单" name="3">
                        <order></order>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import Headers from '@/components/header'
import Organ from '@/pages/user/organization'
import Activity from '@/pages/user/activity'
import Order from '@/pages/order'
export default {
   name:'User',
    components:{Headers,Organ,Order,Activity},
    data(){
        return {
            title:'个人中心',
            UserInfo:{},
            bindOrgaList:[],
            OrgaData:{},
            UserData:{},
            orgaId:'',
            show:false,
            activeName:'1'
        }
    },
    // beforeRouteEnter (to, from, next) {
    //   next(vm => {
    //     vm.$store.commit('SET_KEEP_ALIVE', ['User'])
    //   })
    // },
    // beforeRouteLeave (to, from, next) {
    //   if(to.path.indexOf('activity') == -1){
    //     this.$store.commit('SET_KEEP_ALIVE', [])
    //   }　　　　　
    //     next()
    // },
    methods:{
        tab(index){
            if(index==1){
                this.getOrgaLists()
                this.getUserInfo().then((res)=>{          
                  if(res.data.data.orgaId != null){
                    this.orgaId = res.data.data.orgaId
                    this.getOrgaData()
                  }
                  
                })
            }
        },
        out_info(){
            this.show=true
        },
        outCookie(){
            this.$cookies.remove('sessionId')
            this.$router.push('/index')
            this.show=false
        },
        truepoput(){
            this.show=false
        },
        getUserInfo(){
          return new Promise((resolve,reject)=>{let params = {
                "sessionId": this.$cookies.get('sessionId'),
            }
            this.axios.post('/api/v1/user/getUserInfo',params).then(res=>{
                if(res.data.code=="200000"){
                  resolve(res)
                    this.UserInfo = res.data.data
                    this.UserData = this.UserInfo
                }

            },error=>{
                if(error.response.data.message=='缓存用户信息不存在'){
                    this.$cookies.remove("sessionId")
                    this.$router.push({path:'/login'})
                }
            })
          })
        },
        getOrgaLists(){
                let params = {
                    "sessionId": this.$cookies.get('sessionId'),
                }
                this.axios.post('/api/v1/user/getOrgaLists',params).then(res=>{
                    if(res.data.code=="200000"){
                        this.bindOrgaList = res.data.data
                        if(res.data.data.length>0){
                            this.orgaId = res.data.data[0].orgaId
                        }
                    }
                },error=>{
                    if(error.response.data.message=='缓存用户信息不存在'){
                        this.$cookies.remove("sessionId")
                        this.$router.push({path:'/login'})
                    }
                })
        },
        getOrgaData(){
            let params = {
            "data":{
                  "orgaId": this.orgaId
                },
                "sessionId": this.$cookies.get('sessionId'),
            }
            this.axios.post('/api/v1/user/getOrgaData',params).then(res=>{

                if(res.data.code=="200000"){
                    this.OrgaData = res.data.data
                }
            },error=>{
                if(error.response.data.message=='缓存用户信息不存在'){
                    this.$cookies.remove("sessionId")
                    this.$router.push({path:'/login'})
                }else{
                  this.OrgaData = {}
                }
            })

        },
        bindOrga(){
          this.axios.post('/api/v1/login/bindOrga', {
              "data": {
                "orgaId": this.orgaId
              },
              "sessionId": this.$cookies.get('sessionId')
            }).then(res=>{
              
            },error=>{
              if(error.response.data.message=='缓存用户信息不存在'){
                  this.$cookies.remove("sessionId")
                  this.$router.push({path:'/login'})
              }
          })
        },
        ChangeOrga(data){
            this.orgaId = data.orgaId
            this.getOrgaData()
            this.bindOrga()
        }

    },
    mounted(){
        if(this.$route.query.id==2){
          this.flag = false
          this.getUserInfo()
          return
        }
        this.getOrgaLists()
        this.getUserInfo().then((res)=>{          
          if(res.data.data.orgaId != null){
            this.orgaId = res.data.data.orgaId
            this.getOrgaData()
          }
          
        })
        
        
    }
}
</script>
<style lang="scss" scoped>
.user{
    background: #FAFAFA;
    padding-bottom:40px;
    height: 100%;
    margin: 0 auto;
    .user_info{
        background: #fff;
        margin-top: 20px;
        
        padding-left: 24px;
        .base_infomation{
            padding: 24px 0 8px 0;
            font-size: 24px;
            span{
                color: #999999;
                font-size: 14px;
                margin-left: 14px;
            }
        }
    }
}
</style>
