<template>
  <div class="map_wrapper">
    <div class="header_pub">
        <div class="title"><span>{{title}}</span></div>
    </div>  
    <iframe id="mapPage" width="100%" height="667px" frameborder=0
    src="https://apis.map.qq.com/tools/locpicker?search=1&type=1&key=XFUBZ-LMD65-VUGII-QKAZL-ZADU5-BTBFU&referer=myapp">
</iframe>
  </div>
</template>
<script>
export default {
  data(){
    return {
      title:'获取位置',
    }
  },
  mounted() {
    let self = this
    window.addEventListener('message', function(event) {
        // 接收位置信息，用户选择确认位置点后选点组件会触发该事件，回传用户的位置信息
        var loc = event.data;
        if (loc && loc.module == 'locationPicker') {//防止其他应用也会向该页面post信息，需判断module是否为'locationPicker'
          self.$emit('MapAddress',loc)
        }
    }, false);
  },
  methods:{
    back_map(){
      this.$emit('back_map',false)
    }
  }
}
</script>
<style lang="scss" scoped>
.map_wrapper{
  margin-top: 20px;
  width: 960px;
  margin: 30px auto;
}
.header_pub{
    padding:26px 0;
    background: #fff;
    .title{
        text-align: center;
        font-size: 24px;
        position: relative;
        .back{
            position: absolute;
            left: 30px;
            top: 0px;
        }
    }
}

</style>