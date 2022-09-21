// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,

    list: [{
      title: '钱包',
      url: '/pages/wallet/wallet'
    }, {
      title: '悬赏币',
      url: '/pages/coin/coin'
    }, {
      title: '我的资源',
      url: '/pages/resources/resources'
    }, {
      title: '修改信息',
      url: '/pages/modify/modify'
    }, {
      title: '查看分数',
      url: '/pages/fraction/fraction'
    }],
    avatarUrl: '',
    nickName: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const res = wx.getStorageSync('userinfo')
    if (res) {
      this.setData({
        avatarUrl: res.avatarUrl,
        nickName: res.nickName,
      })
    }
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
    this.setData({
      show: true
    })
  }
})