// index.js
const toast = require('../../utils/extendApi')
Page({
  data:{
    indicatorActiveColor: "#ffffff",
    banners: [
      {
        id: '1',
        url: '/image/banner1.png'
      },
      {
        id: '2',
        url: '/image/banner2.png'
      },
      {
        id: '3',
        url: '/image/banner3.png'
      }
    ],
    menu: [
      {
        id: '1',
        iconUrl: '/image/menu1.png',
        text: '新品推荐'
      },
      {
        id: '2',
        iconUrl: '/image/menu2.png',
        text: '限时特惠'
      },
      {
        id: '3',
        iconUrl: '/image/menu3.png',
        text: '每日疯抢'
      },
      {
        id: '4',
        iconUrl: '/image/menu4.png',
        text: '领优惠券'
      }
    ],
    notice:[
      {
        id:'1',
        text: '早餐搭配，松软到怀疑人生的酵母'
      },
      {
        id:'2',
        text:'年货盛典，温暖带回家'
      }
    ],
    products: [
      {
          id: 1,
          name: "商品1",
          price: "14.90",
          image: "/image/goods1.png",
          memo: "测试"
      },
      {
          id: 2,
          name: "商品2",
          price: "229.00",
          image: "/image/goods2.png",
          memo: "测试"
      },
      {
          id: 3,
          name: "商品3",
          price: "29.90",
          image: "/image/goods3.png",
          memo: "测试"
      },
      {
          id: 4,
          name: "商品4",
          price: "11.30",
          image: "/image/goods4.png",
          memo: "测试"
      },
      {
          id: 5,
          name: "商品5",
          price: "33.90",
          image: "/image/goods5.png",
          memo: "测试"
      },
      {
          id: 6,
          name: "商品6",
          price: "33.50",
          image: "/image/goods6.png",
          memo: "测试"
      }
    ],
  

  }
})

toast.toast({
    title: '数据加载完毕',
    icon: 'success'
  })

  export const asyncBatchGetStorage = (key) => {
    return new Promise((resolve) => {
      wx.batchGetStorage({
        keyList: [key],
        complete(res){
          resolve(res.dataList)
        }
      })
  
    })
  }