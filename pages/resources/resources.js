// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,

    list: [{
      title: '我的课件',
      url: '/pages/resources_courseware/resources_courseware'
    }, {
      title: '我的素材',
      url: '/pages/resources_material/resources_material'
    }, {
      title: '我的收藏',
      url: '/pages/resources_collection/resources_collection'
    }, {
      title: '课堂工具箱',
      url: '/pages/room_moids/room_moids?active=1'
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
    this.setData({
      show: true
    })
  }
})