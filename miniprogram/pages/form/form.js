// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '你还没输入内容呢',
    initvalue: '填写内容复制',
    pasted: '这里会粘贴复制的内容',
    R: 7,
    G: 193,
    B: 96,
    pickerdate: "2019-8-31",
  },
  bindDateChange: function (e) {
    console.log('picker组件的value', e.detail.value)
  },
  valueChanged(e) {
    this.setData({
      initvalue: e.detail.value
    })
  },
  colorChanging(e) {
    console.log(e)
    let color = e.currentTarget.dataset.color
    let value = e.detail.value;
    this.setData({
      [color]: value
    })
  },
  copyText() {
    wx.setClipboardData({
      data: this.data.initvalue,
    })
  },

  pasteText() {
    const self = this
    wx.getClipboardData({
      success(res) {
        self.setData({
          pasted: res.data
        })
      }
    })
  },
  setNaivgationBarTitle(e) {
    console.log(e)
    const navtitle = e.detail.value.navtitle
    wx.setNavigationBarTitle({
      title: navtitle
    })
  },
  submitContact: function (e) {
    const formData = e.detail.value
    wx.addPhoneContact({
      ...formData,
      success() {
        wx.showToast({
          title: '联系人创建成功'
        })
      },
      fail() {
        wx.showToast({
          title: '联系人创建失败'
        })
      }
    })
    // const formData = e.detail.value
    // console.log('打印formData对象', formData)
    // console.log('扩展运算符打印', { ...formData })
  },
  bindKeyInput: function (e) {
    const inputValue = e.detail.value
    console.log('响应式渲染', e.detail)
    this.setData({
      inputValue
    })
  },
  inputSubmit: function (e) {
    console.log('提交的数据信息:', e.detail.value)
  },
  formSubmit: function (e) {
    const gamecheck = e.detail.value.gamecheck
    console.log('表单携带的数据为：', e.detail.value);
    console.log('直接打印的gamecheck', gamecheck)
    console.log('拓展运算符打印的gamecheck', ...gamecheck)
  },
  formReset: function () {
    console.log('表单重置了')
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