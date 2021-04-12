<template>
  <div>
    <div class="message_wrapper">
            <div class="pop_wrapper">
    <div class="login">
      <div class="loginLR">
        <div class="loginIcon">
          <img src="./../assets//images/login/loginLeft.png" alt="" />
        </div>
        <div class="loginInfomation">
          <div class="close" @click="close">
            <img src="./../assets/images/login/colse.png" alt="">
          </div>
          <div class="successTitle">
            <div class="titile clearfix">
              <img src="./../assets/images/login/icon.png" alt="">
              <span>登录成功</span>
            </div>
            <p class="success1">请选择机构进行绑定</p>
            <p class="success2">套餐服务将基于当前绑定机构进行下单</p>
          </div>
          <div class="infomationTitle">
            <p>机构名称</p>
            <input type="text" placeholder="请输入机构名称进行选择" v-model="search"/>
            <ul class="showChoose" v-if="chooseBlock">
              <li v-for="(item,index) in list" @click="showItem($event,item.orgaId)" :key="index">
                <span>{{item.orgaName.substr(0,item.orgaName.toUpperCase().indexOf(search.toUpperCase()))}}</span><span
                  style="color:#2A70FE">{{item.orgaName.substr(item.orgaName.toUpperCase().indexOf(search.toUpperCase()),search.length)}}</span><span>{{item.orgaName.substr(item.orgaName.toUpperCase().indexOf(search.toUpperCase())+search.length)}}</span>
              </li>
              <li v-if="NONETEXT">暂无数据</li>
              <!-- v-for="(item,index) in items"{{item.orgaName}} -->
            </ul>
          </div>
          <div class="Customer">
            <p>仅可选择已购买开通优谷朗读产品服务机构（如购买过活动套餐/优谷朗读亭/留声墙/小舞台等），若有疑问请<br/><a>联系客服</a></p>
          </div>
          <div class="btn">
            <button :class="dataFrom?'btnNO':'btnYes'" v-bind:disabled="dataFrom" @click="nextGo">进行绑定</button>
          </div>
          <div class="jump" @click="close">
            <p>暂时跳过  ></p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        dataFrom:true,
        chooseBlock: false,
        NONETEXT: false,
        search: '',
        list: [],
        orgaId: '',
      }
    },
    methods: {
      showItem(event, id) {
        this.search = event.currentTarget.innerText
        this.chooseBlock = false
        this.orgaId = id
        this.dataFrom=false
        if (this.orgaId != '' && this.search != null) {
          this.btnClick = true
        } else {
          this.btnClick = false
        }
      },
      institutionInfo() {
        if (this.search) {
          this.chooseBlock = true
        } else {
          this.chooseBlock = false
          this.orgaId = ''
        }
        // this.orgaId = ''
        this.btnClick = false
        this.dataFrom=true
        this.axios.post('/api/v1/login/searchOrgaInfos', {
          data: {
            pageNum: 1,
            pageSize: 10,
            searchContent: this.search ? this.search : ''
          }
        }).then(res => {
          if (res.data.data.total == 0) {
            this.NONETEXT = true
            this.list = []
          }else{
            this.list = res.data.data.records
            this.NONETEXT = false
          }
          

          
        },error=>{
          if(error.response.data.message=='缓存用户信息不存在'){
              this.$cookies.remove("sessionId")
              this.$router.push({path:'/login'})
          }
      })
      },
      nextGo(){
        this.axios.post('/api/v1/login/bindOrga', {
          "data": {
            "orgaId": this.orgaId
          },
          "sessionId": this.$cookies.get('sessionId')
        }).then(res=>{
          this.$cookies.set('orgaId',this.orgaId,60 * 60 * 24)
          // this.$router.push({path:"/success",query:{id:this.orgaId}})
          this.$emit('ident',true)
        },error=>{
          if(error.response.data.message=='缓存用户信息不存在'){
              this.$cookies.remove("sessionId")
              this.$router.push({path:'/login'})
          }
      })
      },
      close(){
      this.$emit('close')
    },
    },
    watch:{
      search(newVal,ordVal){
        for(let i=0;i<this.list.length;i++){        
            if (newVal == this.list[i].orgaName){
                this.chooseBlock = false
                this.list = []
                return
            }
        }
        this.list = []
        this.institutionInfo()
        },
        orgaId:function(newVal,ordVal){
          console.log(this.orgaId)
          if(this.orgaId != ''){
            this.dataFrom=false
          }else{
            this.dataFrom=true
          }
        }
    }
  }
</script>
<style scoped>
  @import url(./../assets/css/login.css);
.successTitle{
  position: absolute;
  left: 40px;
  top: 84px;
}

.titile img{
float:left;
margin-top: 10px;
}
.titile span{
float: left;
margin-left: 8px;
font-size: 24px;
color: #333333;
}
.success1{
  font-size: 18px;
  color: #333333;
  text-align: left;
  line-height: 36px;
}
.success2{
  font-size: 14px;
  color: #999999;
  text-align: left;
}
.infomationTitle{
  position: absolute;
  top: 192px;
  left: 40px;

}
.infomationTitle p{
  font-size: 14px;
  color: #666666;
  text-align: left;
}
.infomationTitle input{
  width: 304px;
  line-height: 24px;
  border: none;
  border-bottom: 1px solid #CCCCCC;
  margin-top: 10px;
  font-size: 14px;
}
.Customer{
  width: 304px;
  position: absolute;
  left: 40px;
  bottom: 180px;
}
.Customer p{
  font-size: 12px;
  color: #999999;
  margin-top: 10px;
  line-height: 17px;
  text-align: left;
}
.Customer p a{
  color: #4086F7;
}

  .showChoose{
    width: 304px;
    background: #fff;
    position: relative;
    z-index: 99;
    border: 1px solid #CCCCCC;
    border-top: none;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
    padding: 10px 0;
  }
  .showChoose li{
    text-align: left;
    font-size: 14px;
    line-height: 24px;
    text-indent: 1em;
    cursor: pointer;
  }
</style>