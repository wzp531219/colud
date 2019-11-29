// pages/request/request.js
const app = getApp();
const md5 = require('../../utils/md5.min.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "",
    stories: [],
    top_stories: [],
    title: "",
    body: "",
    image: "",
    share_url: "",
    latitude: '',
    longitude: ''
  },
  curLocal(){
    let that = this;
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
        that.setData({
          latitude,
          longitude
        })
        that.getCurLoc();
        console.log(res)
      }
    })
      
  },
  getCurLoc(){
    let that = this;
    const { latitude, longitude } = that.data
    const { mapKey, mapSecretKey } = app.globalData;
    let SIG = md5("/ws/geocoder/v1?key=" + mapKey + "&location=" + latitude + "," + longitude + mapSecretKey)
    wx.request({
      url: 'https://apis.map.qq.com/ws/geocoder/v1',
      data: {
        key: mapKey,
        location: `${latitude},${longitude}`,
        sig: SIG
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(res.data)
        that.setData({
          location: res.data.result
        })
      }
    }) 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    wx.request({
      url: 'https://news-at.zhihu.com/api/4/news/latest', //知乎日报最新话题
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log('网络请求成功之后获取到的数据', res)
        console.log('知乎日报最新话题', res.data)
        let date = res.data.date
        let stories = res.data.stories
        let top_stories = res.data.top_stories
        that.setData({
          date, stories, top_stories
        })
      }
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