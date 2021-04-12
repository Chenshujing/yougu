<template>
  <div class="booking">
    <div class="booking_item" :class="flag && num==index?'active_item':''" v-for="(item,index) in book" :key="index"
      @click="Tab(index,item.typeId,item.price)">
      
      <p class="bold"><img :src="images[index]"/>{{item.typeName}}</p>
      <p class="detail">{{item.remark}}</p>
      <i class="choose" :class="flag && num==index?'choose1':''"></i>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      book: Array,

    },
    data() {
      return {
        // flag:'a',
        flag: false,
        num: '',
        images:[require('../assets/images/icon/type1.png'),require('../assets/images/icon/type2.png'),require('../assets/images/icon/type3.png'),require('../assets/images/icon/type4.png'),require('../assets/images/icon/type5.png'),require('../assets/images/icon/type6.png')],
        active_images:[require('../assets/images/icon/active1.png'),require('../assets/images/icon/active2.png'),require('../assets/images/icon/active4.png'),require('../assets/images/icon/active3.png'),require('../assets/images/icon/active5.png'),require('../assets/images/icon/active6.png')],
        normal_images:[require('../assets/images/icon/type1.png'),require('../assets/images/icon/type2.png'),require('../assets/images/icon/type3.png'),require('../assets/images/icon/type4.png'),require('../assets/images/icon/type5.png'),require('../assets/images/icon/type6.png')],
      }
    },
    methods: {
      Tab(index, id, price) {
        
        if (index != this.num) {
          this.flag = false
        }
        this.num = index
        this.flag = !this.flag
        
        if(this.flag && this.num==index){
          this.$emit('GetActivePrice', price, id)
          this.images = JSON.parse(JSON.stringify(this.normal_images))
          this.images[index] = this.active_images[index]
        }else{
          this.$emit('GetActivePrice', 0, '')
          this.images = this.normal_images
          // this.images[index] = this.normal_images[index]
        }
      }
    },
    // watch:{
    //     getValue(newVal,ordVal){
    //         this.$emit('ATypeId',this.activityTypeId)
    //     }
    // }
  }
</script>
<style lang="scss" scoped>
  .booking {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    .booking_item {
      padding:24px 15px;
      width: 32%;
      height: 150px;
      background: #FAFAFA;
      // display: flex;
      // flex-direction: column;
      // align-items: center;
      box-sizing: border-box;
      margin-bottom: 20px;
      border-radius: 10px;
      cursor: pointer;
      position: relative;
      .choose{
        position: absolute;
        top: 16px;
        right: 16px;
        width: 24px;
        height: 24px;
        border: 1px solid #dddddd;
        border-radius: 50%;
      }
      .choose1{
        border:0;
        border-radius: 0;
        background: url('../assets/images/agress.png');
      }
    }

    .active_item {
      background-image: linear-gradient(#3154ED, #3997F5);
      color: #fff;
      box-shadow: 2px 4px 10px #a3a8bd;
      .detail {
        color: #fff;
      }
    }

    img {
      width: 32px;
      vertical-align: text-bottom;
      margin-right: 16px;
    }

    .bold {
      font-size: 16px;
      text-align: left;
      line-height: 32px;
      margin-bottom: 10px;
    }

    .detail {
      font-size: 14px;
      line-height: 20px;
      color: #999;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
  }
</style>