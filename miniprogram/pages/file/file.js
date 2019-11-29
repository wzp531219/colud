// pages/file/file.js
const util = require('../utils/utils.js')
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
    tempFilePath: '',
    savedFilePath: '',
    logs: []
  },
  chooseImage: function () {
    const that = this
    wx.chooseImage({
      count: 1,
      success(res) {
        that.setData({
          tempFilePath: res.tempFilePaths[0]
        })
      }
    })
  },
  saveImage: function () {
    const that = this
    wx.saveFile({
      tempFilePath: this.data.tempFilePath,
      success(res) {
        that.setData({
          savedFilePath: res.savedFilePath
        })
        wx.setStorageSync('savedFilePath', res.savedFilePath)
      },
    })
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
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
    console.log('未格式化的时间', new Date())
    console.log('格式化后的时间', util.formatTime(new Date()))
    console.log('格式化后的数值', util.formatNumber(9));
    console.log('2019年9月2日map处理后的结果', [2019, 9, 2].map(util.formatNumber))
    console.log('上午9点13分4秒map处理后的结果', [9, 13, 4].map(util.formatNumber))
    this.setData({
      savedFilePath: wx.getStorageSync('savedFilePath')
    })
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