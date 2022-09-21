// pages/start_class/start_class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked: true,
    list: [{
      label: '大学英语：88分'
    },
    {
      label: '大学英语：88分'
    },
    {
      label: '数学：88分'
    },
    {
      label: '数学A：88分'
    },
    {
      label: '数学B：88分'
    }]
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

  },
  onChange({
    detail
  }) {
    // 需要手动对 checked 状态进行更新
    this.setData({
      checked: detail
    });
  },
  handleClick: function () {
    wx.navigateTo({
      url: '/pages/class_hello/class_hello'
    })
  }
})