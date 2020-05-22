//shop.js
//获取应用实例
const app = getApp()

Page({
  data: {
    // baseUrl: "https://www.w3schools.com/html/",
    // baseUrl: "/resources/image/",

    array: [{
        name: '商品1',
        originPrice: 33,
        finalPrice: 30,
        quan: 3,
        kouling: "复制口令打开XXX1",
        avatar: "/resources/image/1.jpg"
      }, {
        name: '商品2',
        originPrice: 54,
        finalPrice: 43,
        quan: 11,
        kouling: "复制口令打开XXX2",
        avatar: "/resources/image/tom.png"
      },
      {
        name: '商品3',
        originPrice: 45,
        finalPrice: 45,
        kouling: "复制口令打开XXX3",
        avatar: "http://img0.imgtn.bdimg.com/it/u=2665326160,1411728692&fm=26&gp=0.jpg"
      },
      {
        name: '商品4 https',
        originPrice: 32,
        finalPrice: 29,
        quan: 3,
        kouling: "复制口令打开XXX4",
        avatar: "https://img1.imgtn.bdimg.com/it/u=3802625352,460221325&fm=26&gp=0.jpg"
      },
      {
        name: '商品5 http',
        originPrice:159,
        finalPrice: 109,
        quan: 50,
        kouling: "复制口令打开XXX5",
        avatar: "http://img1.imgtn.bdimg.com/it/u=3802625352,460221325&fm=26&gp=0.jpg"
      },
      {
        name: '商品6 http',
        originPrice:159,
        finalPrice: 109,
        quan: 50,
        kouling: "复制口令打开XXX6",
        avatar: "http://pic.90sjimg.com/design/00/07/85/23/s_1024_58d0ea69c5aed.png"
      },
      {
        name: '商品7 https',
        originPrice:524,
        finalPrice: 425,
        kouling: "复制口令打开XXX7",
        avatar: "https://pic.90sjimg.com/design/00/07/85/23/s_1024_58d0ea69c5aed.png"
      }
      
    ]
  },
  copyText: function (e) {
    console.log(e)
    wx.setClipboardData({
      data: e.currentTarget.dataset.text,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            // wx.hideToast(); //隐藏复制成功的弹窗提示,根据需求可
            wx.showToast({
              title: '复制成功'
            })
          }
        })
      }
    })
  },
  onLoad: function () {

  }
})