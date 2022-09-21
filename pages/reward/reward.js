// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    list: [{
      id: 1,
      num: '',
      price: '',
      desc: '哒哒哒',
      title: '同学一',
      imageURL: '/images/ipad.jpg',
      order: '123456'
    }, {
      id: 2,
      num: '',
      price: '',
      desc: '',
      title: '系统消息',
      imageURL: '/images/ipad.jpg',
      order: '123456'
    }],

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
  handleClick: function () {
    wx.navigateTo({
      url: '/pages/reward_add/reward_add'
    })
  },
  handleAction: function () {
    wx.navigateTo({
      url: '/pages/reward_action/reward_action'
    })
  }
})