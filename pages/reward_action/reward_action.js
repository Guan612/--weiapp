// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    value: '',
    list: [{
      id: 1,
      num: '',
      price: '',
      desc: '提问：阿达萨达挥洒的横扫ID撒后ID好骚ID好骚ID好骚我活动is啊哈都很骚ID好骚ID好骚后',
      title: '群主',
      imageURL: 'http://pic.ik123.com/uploads/allimg/200528/12-20052Q03931.jpg',
      order: '123456'
    }, {
      id: 2,
      num: '',
      price: '',
      desc: '你讲的什么',
      title: '群员1号',
      imageURL: 'http://pic.ik123.com/uploads/allimg/200528/12-20052Q03931.jpg',
      order: '123456'
    }, {
      id: 3,
      num: '',
      price: '',
      desc: '楼主流弊',
      title: '群员2号',
      imageURL: 'http://pic.ik123.com/uploads/allimg/200528/12-20052Q03931.jpg',
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
  handleComplaint: function () {
    wx.navigateTo({
      url: '/pages/reward_complaint/reward_complaint'
    })
  },
  onChange(event) {
    // event.detail 为当前输入的值
    this.setData({
      value: event.detail
    })
  },
  handleInput() {
    const {
      list,
      value
    } = this.data
    list.push({
      ...list[1],
      id: new Date().getTime(),
      desc: value,
      title: `群员${new Date().getTime()}号`,
    })
    this.setData({
      list
    })
  }
})