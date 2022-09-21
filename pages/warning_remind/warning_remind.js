// pages/warning_remind/warning_remind.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      order: '203063021 小雨',
      data1: '作业 20%',
      data2: '出勤 20%',
      data3: '平时成绩 20%'
    }, {
      order: '203063021 钢镚',
      data1: '作业 20%',
      data2: '出勤 20%',
      data3: '平时成绩 20%'
    }, {
      order: '203063021 小王',
      data1: '作业 20%',
      data2: '出勤 20%',
      data3: '平时成绩 20%'
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
  handleRoute: function () {
    wx.navigateTo({
      url: '/pages/warning_proportion/warning_proportion'
    })
  }
})