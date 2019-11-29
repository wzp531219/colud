//app.js
App({
  onLaunch: function (opts) {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'wzp-nouoh',
        traceUser: true,
      })
    }
    console.log('onLaunch监听小程序初始化。', opts);
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    heweatherKey: "c25c8902bfdb4f0aa62339f1fe4ce065", // 和风天气key
    mapKey: "IWVBZ-LA5WF-SWMJI-NHOYH-6HVB6-A2F6W", // 腾讯地图key
    mapSecretKey: "v749AwGfKrCH49lvLfmFWiU8gvaHGBwF", // 腾讯Secretkey
    tcbData: {
      title: "云开发训练营",
      year: 2019,
      company: "腾讯Tencent",
      eventInfo: 'eventInfo'
    },
  },
  onShow(opts) {
    console.log('onShow监听小程序启动或切前台', opts)
  },
  onHide() {
    console.log('onHide监听小程序切后台')
  },
})