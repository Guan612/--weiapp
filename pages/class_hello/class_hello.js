// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  handleRoute: function () {
    wx.reLaunch({
      url: '/pages/index/index'
    })
  },

})