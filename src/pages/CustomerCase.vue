<template>
  <div class="customer_case">
    <headers></headers>
    <div class="contan">
      <div class="box-container">
      <div class="listChoos">
        <div class="case_title">客户案例<span>打开微信扫一扫二维码了解更多</span></div>
        <el-tabs v-model="typeId" @tab-click="listClick(typeId)">
            <el-tab-pane label="全部" name="0">
                      <div class="CaseList">
       <div class="caseClick">
        <div v-for="(item,index) in orderContent" :key="index" class="case_item"  @mouseenter="showCode(index)" @mouseleave="showCode(index)">
          <div class="case">
            <div class="caseLifeRig">
              <div class="caseImg">
                <img :src="item.images">
              </div>
              <div class="CaseText">
                <div class="caseTilt">
                  <p>{{item.orgaName}}</p>
                  
                  
                </div>
                <div class="Conten">
                  <p>{{item.activityName}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="caseShow" v-show="index==num && flg" style="background-color: #F8FBFF;">
            <div class="caseLifeRig qrcodeImg">
              <div class="caseImg">
                <img :src="item.qrcodeUrl" alt="">
              </div>
              <div class="CaseTextShow">
                
                <div class="showText">
                  <p>使用微信扫码/识别查看活动</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
            </el-tab-pane>
            <el-tab-pane v-for="(item,index) in ListCase" :key="index" :label="item.typeName" :name="(item.typeId).toString()">
                                           <div class="CaseList">
       <div class="caseClick">
        <div v-for="(item,index) in orderContent" :key="index" class="case_item"  @mouseenter="showCode(index)" @mouseleave="showCode(index)">
          <div class="case">
            <div class="caseLifeRig">
              <div class="caseImg">
                <img :src="item.images">
              </div>
              <div class="CaseText">
                <div class="caseTilt">
                  <p>{{item.orgaName}}</p>
                
                </div>
                <div class="Conten">
                  <p>{{item.activityName}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="caseShow" v-show="index==num && flg" style="background-color: #F8FBFF;">
            <div class="caseLifeRig qrcodeImg">
              <div class="caseImg">
                <img :src="item.qrcodeUrl" alt="">
              </div>
              <div class="CaseTextShow">
                
                <div class="showText">
                  <p>使用微信扫码/识别查看活动</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
            </el-tab-pane>
           
        </el-tabs>
        <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="18"
        @current-change="page"
        :total="tatol">
      </el-pagination>
    </div>
      </div>
      

    </div>
    </div>
  </div>
</template>
<script>
import Headers from '@/components/header'
  export default {
    name: 'CustomerCase',
    data() {
      return {
        flg: false,
        ListCase: [],
        ListText: [],
        num: '',
        typeId:'0',
        orderContent: [],
        tatol: 0,
        size: 1,
        pages:'',
        loading:false,
        finished: false,
        Once: true,
        title:'客户案例',
      }
    },
    components: {
      Headers
    },
    mounted() {
      this.axios.post('/api/v1/activity/getCustomerTypes', {
      }).then(res => {
        this.ListCase = res.data.data
      },error=>{
          if(error.response.data.message=='缓存用户信息不存在'){
              this.$cookies.remove("sessionId")
              this.$router.push({path:'/login'})
          }
      })
      this.getActive()
    },
    methods: {
      page(currentPage){
        this.size = currentPage
        this.getActive()
      },
      getActive(){
        if(!this.Once){return}
        
        if(this.pages!=''&&this.pages<=(this.size-1)){
          this.finished = true
          this.loading = false
          return
        }
        this.Once = false
        this.axios.post('/api/v1/activity/getCustomerCases', {
          "data": {
            "pageNum": this.size,
            "pageSize": 18,
            "typeId": this.typeId
          },
          "sessionId": this.$cookies.get('sessionId')
        }).then(res => {
          this.orderContent = this.orderContent.concat(res.data.data.records) 
          this.tatol = res.data.data.total
          this.pages = res.data.data.pages
          if(this.tatol==0){
            this.finished=true
          }else{
            this.size = this.size+1
            this.loading=false
            this.Once = true
            this.finished=false
          }
          
        },error=>{
          if(error.response.data.message=='缓存用户信息不存在'){
              this.$cookies.remove("sessionId")
              this.$router.push({path:'/login'})
          }
      }).catch((response) => {
          this.Once = true
          reject(response)
        })
      },
      showCode(index) {
        if (index != this.num) {
          this.flg = false
        }
        this.num = index
        this.flg = !this.flg
      },
      listClick(ID) {
        this.flg = false
        this.typeId=ID
        this.size=1
        this.pages=''
        this.loading=false
        this.finished= false
        this.Once=true
        this.orderContent=[]
        this.getActive()
      },
    },
    
  }
</script>
<style scoped lang="scss">
.caseClick{
  &::after{
      content: "";
      display: block;
      height: 0;
      clear:both;
      visibility: hidden;
    }
  .case_item{
    position: relative;
    float: left;
    width: 32%;
    height: 90px;
    background: #FFFFFF;
    box-shadow: 2px 6px 6px 0px rgba(0, 0, 0, 0.03),-2px -2px 2px 0px rgba(0, 0, 0, 0.03);
    border-radius: 8px;
    /* padding-top: 16px; */
    margin-top: 16px;
    margin-right: 1.1%;
    cursor: pointer;
  }
}
.customer_case{
    min-height: 100%;
    background: #FAFAFA;
    padding-bottom: 30px;
}
.pagination{
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
}
  .CaseTextShow {
    display: flex;
    /* flex-direction: column; */
    margin-left: 20px;
  }

  .showText {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .showText p {

    font-size: 14px;

    line-height: 40px;
  }

  .CaseList {
    /* margin-top: 20px; */
    padding-top: 16px;
    padding-bottom: 25px;
    margin-left: 3px;
  }

  .case {
    
  }

  .caseShow {
    width: 100%;
    height: 90px;
    // box-shadow: 2px 6px 6px 0px rgba(0, 0, 0, 0.03),-2px -2px 2px 0px rgba(0, 0, 0, 0.03);
    border-radius: 8px;
    margin: 0 auto;
    // margin-top: 16px;
    position: absolute;
    top: 0;
    left: 0;
  }


  .caseLifeRig {
    display: flex;
    flex-direction: row;
    height: 90px;
    // box-sizing: border-box;
    padding-left: 4%;
  }

  .caseImg {
    width:30%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    

  }

  .caseImg img {
    width: 100%;
    max-height: 90px;
  }
  .qrcodeImg{
    
  }
  .qrcodeImg img{
    width: 70px;
  }

  .contan {
    padding-top: 20px;
  }

  .listChoos {
    padding-bottom: 66px;
    background: #fff;
    padding-left: 24px;
    min-height: 600px;
    position: relative;
    .case_title{
      font-size: 24px;
      padding:24px 0 8px 0;
      line-height:32px;
      span{
        font-size: 14px;
        color: #999999;
        margin-left: 32px;
      }
    }
  }

  .listChoos ul {
    display: flex;
    flex-direction: row;
    /* justify-content: */
    flex-wrap: wrap;
  }

  .listChoos li {
    width: 197px;
    height: 48px;
    border-radius: 24px;
    border: 1px solid #CCCCCC;
    text-align: center;
    line-height: 48px;
    margin-left: 40px;
    font-size: 24px;
    color: #666666;
    margin-top: 16px;
  }

  .listChoos .act {
    color: #fff;
    background-color: #4086F7;
    border:1px solid #4086F7;
  }

  .CaseText {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    width: 64%;
  }

  .caseTilt {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 16px;
  }

  .caseTilt p {
    font-size: 16px;
    color: #333333;
    line-height: 22px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }

  .Conten {
    margin-top: 4px;
  }

  .Conten p {
    font-size: 12px;
    color: #666666;
    line-height: 20px;
  }
</style>