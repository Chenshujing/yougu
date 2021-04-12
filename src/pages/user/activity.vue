<template>
  <div>
    <div class="conten">
       <el-timeline>
          <el-timeline-item :timestamp="item.beginTime + '     发布了活动'" :color="colorTime(item.beginTime,item.endTime)" placement="top"  v-for="(item,index) in orderContent" :key="index" >
            <div class="activity_wrapper">
              
            <div class="activity activity_card">
              <div class="start_type" :class="DateTime(item.beginTime,item.endTime)==1?'start_type1':'' || DateTime(item.beginTime,item.endTime)==2?'start_type2':'' ">{{Start[DateTime(item.beginTime,item.endTime)]}}</div>
              <img class="activityImg" :src="item.imageUrl" alt="">
              <div class="activityInfo">
                <div class="activityTime">
                  <p class="activityName">{{item.activityName}}</p>
                  <span>{{item.beginTime}} - {{item.endTime}}</span>
                </div>
              </div>
            </div>
            <div class="activityNum">
              <div class="Num_item">
                <div class="glue"><span><img src="../../assets/images/user/icon3.png"/></span>活动作品数</div>
                <div class="people_counting">{{item.opusNum}}</div>
                <p>参与活动作品数量</p>
              </div>
              <div class="Num_item">
                <div class="glue"><span><img src="../../assets/images/user/icon2.png"/></span>报名人数</div>
                <div class="people_counting">{{item.signNum}}</div>
                <p>参与活动人数</p>
              </div>
              <div class="Num_item">
                <div class="glue"><span><img src="../../assets/images/user/icon4.png"/></span>活动投票数</div>
                <div class="people_counting">{{item.signNum}}</div>
                <p>活动全部作品投票数</p>
              </div>
            </div>
            </div>
          </el-timeline-item>
        </el-timeline>

      <!-- <van-overlay :show="show" @click="show = false">
        <div class="wrapper" @click.stop>
          <div class="qcode">
            <img :src="src" />
            <p>需使用微信扫码/识别查看活动</p>
            <p>长按二维码保存到相册</p>
            <div class="close_qc" @click="show = false">
              <van-icon name="close" color="#fff" size="28" />
            </div>
          </div>
        </div>
      </van-overlay> -->
    <div class="pagination">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="10"
        :hide-on-single-page="true"
        @current-change="page"
        :total="tatol">
      </el-pagination>
    </div>
    </div>


  </div>
</template>
<script>
  export default {
    name: 'activity',
    data() {
      return {
        items: [],
        orderContent: [],
        show: false,
        src: '',
        tatol: 0,
        size: 1,
        pages:'',
        loading:false,
        finished: false,
        Once: true,
        title:'我的活动',
        Start:['未开始','进行中','已结束']
      }
    },
    mounted() {
      this.getActive()
    },
    computed: {
    },
    methods: {
      dateFormat(fmt, date) {
        let ret = "";
        date = new Date(date);
        const opt = {
          'Y+': date.getFullYear().toString(), // 年
          'm+': (date.getMonth() + 1).toString(), // 月
          'd+': date.getDate().toString(), // 日
          'H+': date.getHours().toString(), // 时
          'M+': date.getMinutes().toString(), // 分
          'S+': date.getSeconds().toString() // 秒
          // 有其他格式化字符需求可以继续添加，必须转化成字符串
        }
        for (let k in opt) {
          ret = new RegExp('(' + k + ')').exec(fmt)
          if (ret) {
            fmt = fmt.replace(
              ret[1],
              ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, '0')
            )
          }
        }
        return fmt
      },
      DateTime(StartTime,EndTime){
        let date1= new Date(StartTime).getTime();
        let date2= new Date().getTime();
        let date3= new Date(EndTime).getTime();
        if(date2-date1<0){
          return '0' // 未开始
        }else if(date2-date1>0 && date3-date2>0){
          return '1' // 进行中
        }else if(date3-date2<0){
          return '2' // 已结束
        }
      },
      colorTime(StartTime,EndTime){
        let index = this.DateTime(StartTime,EndTime)
        if(index==0){
          return '#1CAD7D'
        }else if(index==1){
          return '#1677FF'
        }else{
          return '#CCCCCC'
        }

      },
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
        this.axios.post('/api/v1/user/getActivityLists', {
          "data": {
            "pageNum": this.size,
            "pageSize": 10,
          },
          "sessionId": this.$cookies.get('sessionId')
        }).then(res => {
          this.orderContent = res.data.data.records
          this.tatol = res.data.data.total
          this.pages = res.data.data.pages
          if(this.tatol==0){
            this.finished=true
            this.Once = true
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
      showModelList(item) {
        this.show = true
        this.src = item.qrcodeUrl
      },
    },
  }
</script>
<style lang="scss">
.pagination{
  width: 100%;
  text-align: center;
}
  .wrapper {
    position: absolute;
    top: 25%;
    left: 10%;
    width: 80%;
  }

  .qcode {
    text-align: center;

  }

  .qcode img {
    width: 320px;
    height: 320px;
    margin-bottom: 40px;
    border-radius: 16px;
  }

  .qcode p {
    font-size: 34px;
    line-height: 48px;
    color: #fff;
    text-align: center;
  }

  .close_qc {
    margin-top: 40px;
  }


  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }

  .activityNum {
    float: left;
    width: 60%;
    overflow: hidden;
    margin-left: 4%;
    margin-top: 26px;
    .Num_item{
      width: 33.3%;
      float: left;
      text-align: center;
      p{
        font-size: 16px;
        color: #CCCCCC;
      }
    }
  }

  .activityNum sapn {
    font-size: 24px;
  }

  .glue {
    color: #666;
    font-size: 18px;
    margin-right: 8px;
    span{
        img{
            width: 16px;
            height: 16px;
            margin-right: 10px;
            margin-top: 4px;
        }
    }
  }
  .people_counting{
    font-size: 40px;
    margin: 32px 0 28px 0;
  }
  .activityTime {
    width: 95%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 42px;
    line-height: 42px;
    .activityName{
      width: 58%;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
  }

  .activityTime p {
    font-size: 14px;
    font-weight: 600;
  }

  .activityTime span {
    font-size: 12px;
    color: #999999;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }

  .conten {
    padding-left: 30px;
  }
.activity_wrapper{
  
  &::after{
    content: "";
    display: block;
    height: 0;
    clear:both;
    visibility: hidden;
  }
}
  .activity {
    width: 31%;
    // height: 192px;
    border-radius: 8px;
    margin-top: 6px;
    box-shadow: 0px 20px 31px -20px rgba(0, 0, 0, 0.16), 0px 0px 20px -10px rgba(0, 0, 0, 0.04);
    float: left;
    position: relative;
    .start_type{
      position: absolute;
      right: 0;
      top: -30px;
      color: #1CAD7D;
      font-size: 16px;
    }
    .start_type1{
      color: #1677FF;
    }
    .start_type2{
      color: #CCCCCC;
    }
  }

  .activityImg {
    width: 100%;
    // height: 150px;
    overflow: hidden;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .activity_card{
    border-radius: 10px;
  }
</style>