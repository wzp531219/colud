// pages/apidata/apidata.js
//获取应用实例
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weathertype: "now",
    location: "beijing", //location的写法有很多种，具体可以参考技术文档
    heWeather6: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const weathertype = this.data.weathertype;
    let that = this;
    wx.request({
      url: `https://free-api.heweather.net/s6/weather/${weathertype}`,
      data: {
        location: that.data.location,
        key: app.globalData.heweatherKey,
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(res.data)
        that.setData({
          heWeather6 : res.data.HeWeather6
        })
        console.log(encodeURI("北京"))
        console.log(decodeURI("%e9%85%92%e5%ba%97"))
        console.log(decodeURI("https://hackwork.org/handbook/python/174/%e5%86%99%e5%87%ba%e7%ac%ac%e4%b8%80%e8%a1%8cpython%e4%bb%a3%e7%a0%81/"))
      }
    })
    // 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})