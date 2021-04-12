<template>
    <div class="viewpager">
        <swiper :options="swiperOption1" ref="mySwiper1">
            <swiper-slide v-for="(item,index) in banner_List" :key="index" >
                <img :src="item.images" class="banner-image"/>
                <div class="detail">
                    <div class="qrcode">
                        <p>{{item.typeName}}</p>
                        <img :src="item.qrcodeUrl"> 
                    </div>
                    <p class="details">{{item.details}}</p>
                </div>
            </swiper-slide>
        </swiper>
        <div class="swiper-button-prev prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
        <div class="swiper-button-next next"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->    
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
        banner_List:Array
    },
    data(){
        let self = this
        return {       
            List:{},
            flag:false,
            swiperOption1: {
                loop: false,
                // centeredSlides:true,
                slidesPerView: 'auto',
                spaceBetween: 16,
                // centeredSlides: true,
                // centeredSlidesBounds: true,
                navigation: {
                    nextEl: '.swiper-button-next.next',
                    prevEl: '.swiper-button-prev.prev',
                },
                observer:true,
                observeParents:true,
                initialSlide:0,
                preventClicksPropagation : true,
                on:{
                    slideChange: function(){
                        self.flag = false
                    },
                    reachEnd:function(){
                        self.$emit('NoMore')
                    }
                },
            }
        }
    },
    computed: { swiper() { return this.$refs.mySwiper1.swiper; } },
    methods:{
        ShowPop(item){
            this.List = item
            this.flag = !this.flag
        },
        a(){
            this.$refs.mySwiper1.swiper
        }
    }
}
</script>
<style lang="scss" scoped>
.viewpager{
    position: relative;
}
.swiper-container{
	height: 330px;
	width: 80%;
    padding: 6px;
}
.swiper-slide {
    width: 270px;
    height:330px;
    background-color: #ffffff;
    border-radius: 8px;
    text-align: center;
    box-shadow: 2px 2px 4px #eee,-2px 2px 4px #eee;
    .banner-image {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      width: 270px;
      height: 180px;
    }
    .detail{
        background: #fff;
        padding: 0 10px;
        .qrcode{
            overflow: hidden;
            margin-bottom: 10px;
            p{
              font-size: 24px;
              line-height: 60px;
              float: left;  
            }
            img{
                width: 60px;
                height: 60px;
                float: right;
            }
        }
        .details{
            font-size: 16px;
            color: #666666;
            line-height: 20px;
            text-align: left;
        }
    }
  }
//   .swiper-slide-active{
//       transform: scale(1);
//   }
//   .swiper-slide-prev {
//     transform: scale(0.85);
//   }
//   .swiper-slide-next {
//     transform: scale(0.85);
//   }
.swiper-button-next{
    background: url('../assets/images/right.png');
    background-size: cover;
    width: 61px;
    height: 61px;
}
.swiper-button-prev{
    background: url('../assets/images/left.png');
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