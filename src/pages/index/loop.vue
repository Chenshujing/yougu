<template>
    <div class="viewpager">
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(item,index) in banner_List" :key="index" :style="{'background-color': item.themeColor}" >
              <div class="banner_loop" >
                <img :src="item.images" class="banner-image"/>
                <img src="../../assets/images/guang.png" class="banner_bg"/>
                <p class="orgaName">{{item.orgaName}}</p>
                <p class="activityName">{{item.activityName}}</p>
                <div class="let_more" @click="let_more(index)" v-if="!show && type==index">了解更多</div>
                <p class="activityName" v-if="show && type==index">需使用微信扫码/识别查看活动</p>
                <div class="qrcode" v-if="show && type==index">
                  <img :src="item.qrcodeUrl"/>
                </div>     
              </div>
            </swiper-slide>
        </swiper>
       <div class="swiper-button-prev prev1"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
        <div class="swiper-button-next next1"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->     
    </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
    components: {
        swiper,
        swiperSlide
    },
    props:{
        banner_List:Array,
    },
    data(){
        let self = this
        return {       
            List:{},
            flag:true,
            color:'#4086F7',
            clickIndex:1,
            Status:1,
            qr:[],
            type:2,
            show:false,
            swiperOption: {
                loop: false,
                centeredSlides:true,
                // slideToClickedSlide: true,
                slidesPerView: 'auto',
                spaceBetween: 0,
                centeredSlides: true,
                centeredSlidesBounds: true,
                observer:true,
                observeParents:true,
                initialSlide:2,
                preventClicksPropagation : true,
                navigation: {
                    nextEl: '.swiper-button-next.next1',
                    prevEl: '.swiper-button-prev.prev1',
                },
                on:{
                  slideChangeTransitionStart:function(){
                    self.type = this.activeIndex
                    self.show = false
                     
                    },
                    reachEnd:function(){
                        self.$emit('NoMore')
                    },
                    init:function(){
                     
                    }
                },
            }
        }
    },
    computed: { 
      swiper() { return this.$refs.mySwiper.swiper; }
    },
    watch:{
      banner_List(newVal,ordVal){
        if(this.Status==1){
          if(newVal.length<2){
            this.List = newVal[0]
          }else{
            this.List = newVal[1]
          }      
          this.Status = this.Status + 1
        }       
      }
    },
    methods:{
        a(){
            this.$refs.mySwiper.swiper
        },
        let_more(index){
          this.type = index
          this.show = true
        }
    },
    mounted() {
     
    },
}
</script>
<style lang="scss" scoped>
.let_more1{
  // display: none;
}
.viewpager{
    position: relative;
}
.swiper-container{
	height: 560px;
	width: 80%;
  padding-top: 80px;
}
.banner_loop{
  position: relative;
  height: 400px;
  border-radius: 8px;
}
.swiper-slide {
    width: 240px;
    height:400px;
    // opacity: 0.64;
    border-radius: 8px;
    text-align: center;
    .banner_loop{
      opacity: 0.64;
      background: #000;
    }
    .banner-image {
      
      width: 100%;
      border-top-left-radius:6px;
      border-top-right-radius:6px;
    }
    .banner_bg{
        position: absolute;
        top: 155px;
        left: 0;
        width: 100%;
    }
    .orgaName{
      font-size: 24px;
      line-height: 33px;
      color: #fff;
      position: relative;
      margin-top: 58px;
      &::after{
        content:'';
        display: inline-block;
        width: 38px;
        height: 2px;
        background: #fff;
        position: absolute;
        top: 50px;
        left: 50%;
        margin-left: -19px;
      }
    }
    .activityName{
      font-size: 16px;
      opacity: 0.5;
      color: #fff;
      margin-top: 30px;
    }
    .let_more{
      width: 160px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      border: 1px solid #D8D8D8;
      border-radius: 4px;
      color: #fff;
      font-size: 16px;
      margin: 30px auto 0;
      cursor: pointer;
      position: relative;
    }
    .qrcode{
      width: 140px;
      margin: 0 auto;
      img{
        width: 100%;
        border-radius: 10px;
        margin-top: 12px;
      }
    }
  }
  .swiper-slide-active{
      // transform: scale(1.78,1.4);
      width: 380px;
      height: 560px;
      opacity: 1;
      // position: relative;
      z-index: 3;
      position: relative;
      top: -80px;
      left: -40px;
      .banner_loop{
        opacity: 1;
        background: none;
        height: 560px;
      }
      // .orgaName{
      //   font-size: 16px;
      //   line-height: 22px;
      //   margin-top: 38px;
      //   &::after{
      //     width: 25px;
      //     height: 1px;
      //     top: 33px;
      //     margin-left: -12px;
      //   }
      // }
      // .activityName{
      //   font-size: 10px;
      //   opacity: 0.5;
      //   color: #fff;
      //   margin-top: 20px;
      // }
      // .qrcode{
      //   width: 128px;
      // }
      // .let_more{
      //   width: 106px;
      //   height: 26px;
      //   text-align: center;
      //   line-height: 26px;
      //   border: 1px solid #D8D8D8;
      //   border-radius: 4px;
      //   color: #fff;
      //   font-size: 11px;
      //   margin: 30px auto 0;
      //   cursor: pointer;
      //   position: relative;
      // }
  }
  .swiper-slide-prev {
      position: relative;
      left: -20px;
      z-index: 2;
  }
  .swiper-slide-next {
      position: relative;
      left: -60px;
      z-index: 2;
  }
  div.swiper-slide-next + div{
    position: relative;
    left: -80px;
  }
.swiper-button-next{
    background: url('../../assets/images/right.png');
    background-size: cover;
    width: 61px;
    height: 61px;
}
.swiper-button-prev{
    background: url('../../assets/images/left.png');
    background-size: cover;
    width: 60px;
    height: 60px;
}
  .swiper-container {
    --swiper-theme-color: #fff;
  }
  .swiper-pagination.swiper-pagination-bullets {
    width: auto;
    right: 60px;
    text-align: right;
  }
  .swiper-pagination-bullet {
    width: 6px;
    height: 6px;
    background: #FFFFFF;
    border-radius: 4px;
  }
  .swiper-pagination-bullet-active {
    width: 20px;
    height: 6px;
    border-radius: 5px;
  }
.title_icon_slider{
  &:before{
    content: '';
    display: inline-block;
    width: 4px;
    height: 14px;
    background: #4086F7;
    margin-right: 8px;
    position: relative;
    top: -5px;
  }
  

}
</style>