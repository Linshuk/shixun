// pages/login/login.js
const http = require('../../utils/http')
const config = require('../../utils/config')
const api = require('../../utils/extendApi')
const crypto = require('../../utils/crypto')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isRegister: false,
    userName: '',
    passWord: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

    if(!this.data.userName.trim()){
      api.toast({
        title: '请输入用户'
      })
    }

    if(!this.data.password.trim()){
      api.toast({
        title: '请输入密码'
      })
    }

  },

  getInputVal(e){
    console.log(e);
    if(e.currentTarget.dataset.type == 'account'){
      this.setData({
        userName: e.detail.value,
      })
    }else if(e.currentTarget.dataset.type == 'password'){
      this.setData({
        passWord: e.detail.value,
      })
    }
 
   
  },


  /***
   * 
   * 用户登录或者注册
   * 
   */
  handleLoginOrRegister(e){

    var page = this
    var params = {
      url: config.loginUrl,
      method: "POST",
      data: {
        userName: this.data.userName,
        passWord: crypto.encrypt(this.data.passWord)
      },
      callBack(res){
        console.log(res);
      },
      errCallBack(res){
      }
    }
    console.log(params);
    http.request(params)
  },


  changeLoginOrRegister(){
    console.log('changeLoginOrRegister');
    this.setData({
      isRegister: !this.data.isRegister
    })
  },
})