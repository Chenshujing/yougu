<template>
  <div class="container_order">
    <div class="nav_bar">
      <ul>
        <li :class="type==index?'active':''" v-for="(item,index) in tabtype" :key="index"  @click="tab_type(index)">{{tabtype[index]}}</li>
      </ul>
    </div>
    <div>
      <OrdersList :orderList="orderContent" :tatol="tatol"></OrdersList>
    </div>
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
</template>

<script>
  import OrdersList from './../components/ActiveOrdersList'
  export default {
    name: "order",
    data() {
      return {
        a:60,
        orderContent: [],
        active: '',
        tatol: 0,
        size: 1,
        pages:'',
        loading:false,
        finished: false,
        Once: true,
        queryType:0,
        tabtype:['全部','待支付','凭证核实','已支付'],
        type:'0'
      }
    },
    components: {
      OrdersList
    },
    mounted() {
      this.getOrder()
    },
    methods: {
      getOrder() {
        if(!this.Once){return}

        if(this.pages!=''&&this.pages<=(this.size-1)){
          this.finished = true
          return
        }
        this.Once = false
        this.axios.post('/api/v1/user/getOrderLists', {
          "data": {
            "pageNum": this.size,
            "pageSize": 10,
            "queryType": this.queryType
          },
          "sessionId": this.$cookies.get('sessionId')
        }).then(res => {
          if(res.data.data.records.length==0){
            this.finished = true

          }else{
            this.orderContent = res.data.data.records
            this.tatol = res.data.data.total
            this.pages = res.data.data.pages
            this.size = this.size+1
            this.loading=false
            this.finished = false
          }
          this.Once = true

        },error=>{
            if(error.response.data.message=='缓存用户信息不存在'){
                this.$cookies.remove("sessionId")
                this.$router.push({path:'/login'})
            }
        }).catch((response) => {
          this.Once = true

        })
      },
      page(currentPage){
        this.size = currentPage
        this.getOrder()
      },
       tab_type(index){
          this.type = index
          this.queryType = index
          this.orderContent = []
          this.loading = false
          this.pages=''
          this.size = 1
          this.tatol = ''
          this.getOrder()
       }
    },
  }
</script>
<style lang="scss" scoped>
.container_order{
  min-height: 600px;
  position: relative;
  .nav_bar{
    ul{
      overflow: hidden;
      margin-bottom: 24px;
      li{
        float: left;
        font-size: 14px;
        color: #999999;
        height: 24px;
        line-height: 26px;
        cursor: pointer;
        padding:0 16px;
        text-align: center;
      }
      .active{
        
        // height: 24px;
        // line-height: 24px;
        background: #4086F7;
        color: #fff;
        border-radius:12px;
        text-align: center;
      }
    }
  }
  .pagination{
    position: absolute;
    bottom: 20px;
    width: 100%;
    text-align: center;
  }
}
.listmore {
  width: 100%;
  min-height: 1334px;
  background-color: #FAFAFA;
  margin-top: 20px;
}
.contan {
  margin-bottom: 20px;
}
</style>


