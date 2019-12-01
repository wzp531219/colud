// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: '/images/user-unlogin.png',
    nickName: "用户未登陆",
    city: "未知",
    imgurl: "",
    fileUrl:''
  },
  getUserInfomation: function (event) {
    console.log('getUserInfomation打印的事件对象', event)
    let { avatarUrl, city, nickName } = event.detail.userInfo
    avatarUrl = avatarUrl.split("/")
    avatarUrl[avatarUrl.length - 1] = 0;
    avatarUrl = avatarUrl.join('/');
    this.setData({
      avatarUrl, city, nickName
    })
  },
  uploadimg() {
    wx.cloud.callFunction({
      name: 'uploadimg',
      success: res => {
        console.log(res)
      }
    })
  },
  chooseImg: function () {
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        console.log(res)
        const filePath = res.tempFilePaths[0];
        // const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0];

        const cloudPath = `cloudbase/${Date.now()}-${Math.floor(Math.random(0, 1) * 1000)}` + filePath.match(/\.[^.]+?$/)[0];
        console.log(cloudPath, filePath )
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('上传成功后获得的res：', res)
            const imgurl = res.fileID
            this.setData({
              imgurl
            })
          },
        })
        console.log(res.tempFilePaths)
      }
    })
  },
  chooseMsgFile() {
    wx.chooseMessageFile({
      count: 1,
      type: 'video',
      success:(res) => {
        // tempFilePath可以作为img标签的src属性显示图片
        const filePath = res.tempFiles[0].path
        console.log(res)
        const cloudPath = `cloudbase/${Date.now()}-${Math.floor(Math.random(0, 1) * 1000)}` + filePath.match(/\.[^.]+?$/)[0]
        console.log(cloudPath, filePath)
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('上传成功后获得的res：', res)
            const fileUrl = res.fileID
            this.setData({
              fileUrl
            })
          },

        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              let { avatarUrl, city, nickName } = res.userInfo
              this.setData({
                avatarUrl, city, nickName
              })
            }
          })
        }
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})