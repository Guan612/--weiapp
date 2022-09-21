// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showShare: false,
    list: [{
      id: 1,
      num: '',
      price: '',
      desc: '评论9:30',
      title: '2030630201 小雨',
      imageURL: '/images/ipad.jpg',
      order: '进入'
    }, {
      id: 2,
      num: '',
      price: '',
      desc: '评论9:30',
      title: '2030630201 小雨',
      imageURL: '/images/ipad.jpg',
      order: '进入'
    }, {
      id: 3,
      num: '',
      price: '',
      desc: '评论9:30',
      title: '2030630201 小雨',
      imageURL: '/images/ipad.jpg',
      order: '已结束'
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
      url: '/pages/start_class/start_class'
    })
  },
  handleClick: function () {
    this.setData({
      showShare: true
    })
  },
  onClick(event) {
    this.setData({
      showShare: true
    });
  },

  onClose() {
    this.setData({
      showShare: false
    });
  },

  onSelect(event) {
    const {
      rotelist
    } = this.data
    wx.navigateTo({
      url: rotelist[event.detail.index]
    })
    this.onClose();
  },
})