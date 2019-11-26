//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    id: 233,
    itemurl: "/pages/animation/animation",
    itemclass: "event-item",
    imagesrc: "https://hackwork.oss-cn-shanghai.aliyuncs.com/lesson/weapp/4/weapp.jpg",
    imagemode: "widthFix",
    imagewidth: "100%",
    love1: 520,
    love2: "520",
    forever1: 1314,
    forever2: "1314",
    newstitle: [
      "瑞幸咖啡：有望在三季度达到门店运营的盈亏平衡点",
      "腾讯：广告高库存量还是会持续到下一年",
      "上汽集团云计算数据中心落户郑州，总投资20亿元",
      "京东：月收入超2万元快递小哥数量同比增长163%",
      "腾讯：《和平精英》日活跃用户已超五千万",
    ],
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    interval: 5000,
    duration: 1000,
    indicatorDots: true,
    indicatorColor: "#ffffff",
    activecolor: "#2971f6",
    autoplay: true,
    musicinfo: {
      poster: 'https://wzp-bucket-1300726591.cos.ap-beijing.myqcloud.com/xiaozhan.jpg',
      name: '无羁',
      author: '肖战',
      src: 'https://wzp-bucket-1300726591.cos.ap-beijing.myqcloud.com/%E8%82%96%E6%88%98-%E3%80%90%E4%B8%BB%E9%A2%98%E6%9B%B2%E3%80%91%E6%97%A0%E7%BE%81%EF%BC%88%E8%82%96%E6%88%98%20%E7%8B%AC%E5%94%B1%E7%89%88%EF%BC%89-%E7%94%B5%E8%A7%86%E5%89%A7%E3%80%8A%E9%99%88%E6%83%85%E4%BB%A4%E3%80%8B%E4%B8%BB%E9%A2%98%E6%9B%B2.mp3',
    },
    latitude: 22.540503,
    longitude: 113.934528,
    markers: [{
      id: 1,
      latitude: 22.540503,
      longitude: 113.934528,
      title: '深圳腾讯大厦'
    },
    {
      id: 2,
      latitude: 22.540576,
      longitude: 113.933790,
      title: '万利达科技大厦'
    },
    {
      id: 3,
      latitude: 22.522807,
      longitude: 113.935338,
      title: '深圳腾讯滨海大厦'
    },
    {
      id: 4,
      latitude: 22.547400,
      longitude: 113.944370,
      title: '腾讯C2'
    },
    ],
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '云开发技术训练营',
      path: "pages/home/home",
      imageUrl: "https://hackwork.oss-cn-shanghai.aliyuncs.com/lesson/weapp/4/weapp.jpg",
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  onLoad: function () {
    wx.getNetworkType({
      success(res) {
        console.log(res)
      }
    });
    // console.log(
    //   wx.navigateTo({
    //     url: '/pages/home/imgshow/imgshow'
    //   }))
    // wx.getUserInfo({
    //   success(res) {
    //     console.log(res);
    //   }
    // });
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // saveFormId(e) {
  //   commonApi.saveFormId({
  //     formId: e.detail.formId
  //   })
  // },
})