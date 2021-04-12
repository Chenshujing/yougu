<template>
<div>
  <el-dialog title="提交汇款信息" :visible.sync="outerVisible">
  <div class="submit">
    <!-- <div class="header">
      <span class="headerT">提交汇款信息</span>
      <span class="headerC">x</span>
    </div> -->
    <div class="progress">
      <img src="../assets/images/information/status2.png" alt="">
    </div>
    <div class="inputFrom clearfix">
      <div class="SubmitImg">
        <p class="title"><span>*</span>付款凭证</p>
        <!-- <van-uploader :after-read="afterRead" class="photograph" /> -->
        <!-- <div style="display: flex; flex-direction: row;"> -->
        <!-- <van-uploader v-model="fileList" :multiple="false" :after-read="afterRead" :max-count="3" :before-delete="before_delete"/> -->
        <!-- </div> -->
        <div class="upImg">
        <el-upload
          :action="`/api/api/v1/order/uploadImgUrl?sessionId=${this.$cookies.get('sessionId')}`"
          list-type="picture-card"
          :limit="3"
          :on-exceed="handleExceed"
          :on-success="onSuccess"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          >
            <i slot="default" class="el-icon-plus"></i>
            
            <!-- <div slot="file" slot-scope="{file}">
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url" alt=""
              >
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <i class="el-icon-zoom-in"></i>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file,fileList)"
                >
                  <i class="el-icon-delete"></i>
                </span>
              </span>
            </div> -->
        </el-upload>
        </div>
      </div>
      <div class="submitInformation">
        <p class="title"><span>*</span>付款银行户名</p>
        <input type="text" placeholder="请输入付款银行户名" @input="bank($event)" />
        <div class="input_error_tip" v-if="this.bankName.length > 50">付款银行户名不能超过50字</div>
      </div>
      <div class="submitInformation">
        <p class="title"><span>*</span>付款银行账号</p>
        <input v-model="backUser" type="number" placeholder="请输入付款银行账号" @input="user($event)" />
        <div class="input_error_tip" v-if="this.backUser.length > 50">付款银行账户不能超过50字</div>
      </div>
      <div class="submitInformation">
        <p class="title"><span>*</span>联系手机</p>
        <input v-model="phone" type="number" placeholder="请输入联系手机" @input="myPhone($event)" @blur="checkPhone()"/>
        <div class="input_error_tip" v-if="phoneStatus && this.phone.length<11">请输入11位的手机号码</div>
        <div class="input_error_tip" v-if="this.phone.length>11">请输入11位的手机号码</div>
      </div>
      <div class="submitInformation">
        <p>付款日期</p>
        <!-- <input type="text" readonly="readonly" placeholder="请选择付款日期" @click="show = true" :value="date">
        <img src="../assets/images/information/date.png" @click="show = true" :value="date" /> -->
        <div class="block">
          <el-date-picker
          v-model="date"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
        </div>
        
        <!-- <van-cell title="选择单个日期" :value="date" @click="show = true" /> -->
        <!-- <van-calendar v-model="show" @confirm="onConfirm" :min-date="minDate" color="#4086F7"/> -->
      </div>
      <div class="submitInformation">
        <p class="title">备注</p>
        <input v-model="note" type="text" placeholder="请输入备注信息">
      </div>
    </div>
    
    <!-- <div class="submitBtn">
      <button :disabled="!disable" :class="disable?'submit':'submitFalse'" @click="submitVoucher()" class="btn">提交汇款信息</button>
      <button class="canle">取 消</button>
    </div> -->
  </div>
  <div slot="footer" class="dialog-footer">
      <el-button @click="outerVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitVoucher">提交汇款信息</el-button>
    </div>
  <el-dialog :visible.sync="dialogVisible" append-to-body>
    <img width="100%" :src="dialogImageUrl" alt="">
  </el-dialog>
</el-dialog>
</div>
</template>
<script>
export default {
  props:{outerVisible:Boolean,orderNo:String},
  data() {
    return {
      date: '',
      title:'提交汇款信息',
      show: false,
      minDate: new Date(2021, 0, 1),
      fileList: [],
      disable: false,
      bankName: '',
      backUser: '',
      phone: '',
      note: '',
      phoneStatus:false,
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      imgList:[]
    }
  },
  methods: {
    onSuccess(response, file, fileList){
      // this.fileList.push({'url':response.data})
      this.imgList = []
      if(fileList.length>0){
        for(let i=0;i<fileList.length;i++){
          this.imgList.push(fileList[i].response.data)
        }
      }else{
        this.imgList=[]
      }
      console.log(this.imgList)
    },
    handleRemove(file,fileList) {
      this.imgList = []
      if(fileList.length>0){
        for(let i=0;i<fileList.length;i++){
          this.imgList.push(fileList[i].response.data)
        }
      }else{
        this.imgList=[]
      }
      console.log(this.imgList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleExceed(){
      this.$message.warning('凭证最多上传三张')
    },
    bank(event) {
        this.bankName = event.currentTarget.value;
        this._datelength()
      },
      user(event) {
        this.backUser = event.currentTarget.value;
        this._datelength()
      },
      myPhone(event) {
        this.phone = event.currentTarget.value;
        if(this.phone.length>=11){
          this.phoneStatus = false
        }
        this._datelength()
      },
      checkPhone(){
        if(this.phone.length<11){
          this.phoneStatus = true
        }else{
          this.phoneStatus = false
        }
      },
      _datelength() {
        // console.log(this.fileList.length)
        if (this.bankName.length <= 50 && this.backUser.length <= 50 && this.phone.length >= 11 && this.fileList.length != 0) {
          this.disable = true
        } else {
          this.disable = false
        }
      },
      submitVoucher(){
        let params = {
          "data": {
            "account": this.bankName,
            "accountName": this.backUser,
            "orderNo": this.orderNo,
            "payTime": this.formatDate(this.date),
            "phoneNumber": this.phone,
            "remark": this.note,
            "voucherImgs": this.imgList
          },
          "sessionId": this.$cookies.get('sessionId')
        }
         this.axios.post('/api/v1/order/submitVoucher',params).then(res=>{
            if(res.data.code=="200000"){
                this.$emit('successful')
            }
            
        },error=>{
          if(error.response.data.message=='缓存用户信息不存在'){
              this.$cookies.remove("sessionId")
              this.$router.push({path:'/login'})
          }
      })

      },
      formatDate(date) {
        return `${date.getFullYear()}-${(date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1)}-${date.getDate()}`;
      },
      onConfirm(date) {
        this.show = false;
        this.date = this.formatDate(date);
      },
  },
}
</script>
<style scoped lang="scss">
  @import url(../assets/css/submit.css);
  /deep/.el-upload--picture-card{
    width: 68px;
    height: 68px;
  }
  .SubmitImg{
    margin-top: 8px;
    text-align:left;
    margin-left: 24px;
    overflow: hidden;
    .title{
      float: left;
      width: 128px;
    }
  .upImg{
      float: left;
    }
  }
  .SubmitImg p {
    font-size: 14px;
    color: #666666;
  }

  .SubmitImg span {
    color: #FE4600;
  }
  .submitInformation{
    margin-top: 8px;
    text-align:left;
    margin-left: 24px;
    float: left;
    .title{
      width: 128px;     
    }
    
  }
  .submitInformation p{
    font-size: 14px;
    color: #666666;
    float: left;
    line-height: 32px;
  }
  .submitInformation span{
    color: #FE4600;
  }
  .submitInformation input{
    float: left;
    height: 32px;
    /* border: none; */
    padding-left: 12px;
    float: left;
  }
  .submit{
    position: relative;
  }
  .submitBtn{
    position: absolute;
    bottom: 0;
  }
.TitleS{
  width: 592px;
  margin:  0 auto;
  margin-top: 24px;
}
.TitleS p{
  font-size: 14px;
  color: #333;
  text-align: left;
}
.information{
  width: 592px;
  margin: 0 auto;
  padding-bottom: 16px;
  border-bottom: 1px dashed #DDDDDD;
}
.information li{
  width: 50%;
  float: left;
  text-align: left;
  margin-top: 16px;
}
.information li span{
  display: inline-block;
  text-align: left;
}
.infoA{
  width: 96px;
  font-size: 14px;
  color: #666666;
}
.infoB{
  font-size: 14px;
  color: #333333;
}
.money{
  display: inline-block;
  color: #FE4600;
  font-size: 24px;
  position: absolute;
  top: -10px;
}
.biao{
  font-size: 14px;
}
.titleb{
  
}
.titleb p{
  float: left;
}
.titleb img{
  float: left;
  width: 15px;
  height: 15px;
  margin-top: 2px;
  margin-left: 16px;

}
.titleb span{
  float: left;
  font-size: 12px;
  margin-left: 3px;
  margin-top: 2px;
  color: #999999;
}
.chooseDate{
  position: relative;
}



/* 123 */

</style>