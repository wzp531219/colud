// pages/file/file.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // imgurl: "",
    imgurl: [],
    hasImg: false,
    tempFiles: [],
    location: {},
    markers: [{
      iconPath: "/resources/others.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50
    }],
  },
  chooseLocation: function () {
    let that = this
    wx.chooseLocation({
      success: function (res) {
        const location = res
        that.setData({
          location
        })
      },
      fail: function (res) {
        console.log("获取位置失败")
      }
    })
  },
  chooseFile: function () {
    let that = this
    wx.chooseMessageFile({
      count: 5,
      type: 'file',
      success(res) {
        let tempFiles = res.tempFiles
        that.setData({
          tempFiles
        })
      }
    })
  },
  chooseImg: function () {
    let that = this
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        const imgurl = res.tempFilePaths
        console.log('chooseImage回调打印的res', res)
        that.setData({
          imgurl,
          hasImg: true,
        })
        wx.getImageInfo({
          src: res.tempFilePaths[0],
          //也可以这么写：src: that.data.imgurl[0],这里只能看到第一张照片的信息，其他照片的信息需要遍历来获取
          success(res) {
            console.log('getImageInfo回调打印的res', res)
          }
        })
      }
    })
  },
  previewImg: function (e) {
    wx.previewImage({
      current: e.currentTarget.dataset.src,
      urls: this.data.imgurl,
    })
  },
  saveImg: function (e) {
    console.log(e)
    wx.saveImageToPhotosAlbum({
      filePath: "/images/background.jpg",
      success(res) {
        wx.showToast({
          title: '保存成功',
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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