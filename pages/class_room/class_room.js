// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    value1: 0,
    value2: 'a',
    option1: [
      { text: '第一学期', value: 0 },
      { text: '第二学期', value: 1 },
      { text: '第三学期', value: 2 },
    ],
    option2: [
      { text: '技术类', value: 'a' },
      { text: '综合类', value: 'b' },
      { text: '艺术类', value: 'c' },
    ],
    list: [{
      id: 1,
      num: '',
      price: '',
      desc: '上午8:15',
      title: '服务器配置',
      status: '已结束',
      imageURL: '/images/ipad.jpg',
      order: '123456'
    }, {
      id: 2,
      num: '',
      price: '',
      desc: '上午8:15开课',
      title: 'PHP程序设计',
      status: '正在上课',
      imageURL: '/images/ipad.jpg',
      order: '123456'
    }, {
      id: 3,
      num: '',
      price: '',
      desc: '上午8:15开课',
      title: 'PBL',
      status: '正在上课',
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
  handleRoute: function () {
    wx.navigateTo({
      url: '/pages/room_moids/room_moids'
    })
  },
})