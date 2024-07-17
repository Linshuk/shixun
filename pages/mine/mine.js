// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderSection:[
      {
        id: '1',
        status: '1',
        iconUrl: '/image/toPay.png',
        text: '待支付'
      },
      {
        id: '2',
        status:'2',
        iconUrl: '/image/toDelivery.png',
        text: '待发货'
      },
      {
        id: '3',
        status:'3',
        iconUrl: '/image/toTake.png',
        text: '待收货'
      },
      {
        id: '4',
        status:'5',
        iconUrl: '/image/toComment.png',
        text: '已完成'
      }
    ],
    orderInfo: [
      {
        id: '1',
        num: '1',
        text: '我的收藏'
      },
      {
        id: '2',
        num: '5',
        text: '我的消息'
      },
      {
        id: '3',
        num: '3',
        text: '我的足迹'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  onToOrder(e){
    var status = e.currentTarget.dataset.status
    wx.navigateTo({
      url: '/pages/orderList/orderList?status='+status,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})