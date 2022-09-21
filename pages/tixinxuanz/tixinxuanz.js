// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    rotelist: [
      "/pages/room_vote/room_vote",
      "/pages/room_manage/room_manage",
      "/pages/room_notice/room_notice",
      "/pages/room_sign/room_sign",
      "/pages/room_task/room_task",
      "/pages/tixinxuanz/tixinxuanz"
    ],
    showShare: false,
    options: [{
        name: '投票',
        icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png'
      },
      {
        name: '成员分组',
        icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png'
      },
      {
        name: '公告',
        icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png'
      },
      {
        name: '课程签到',
        icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png'
      },
      {
        name: '课程任务',
        icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png'
      },
      {
        name: '发布题型',
        icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png'
      },

    ],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.active) {
      this.setData({
        active: +options.active
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
  handleInvitation: function () {
    wx.navigateTo({
      url: '/pages/start_invitation/start_invitations'
    })
  },
  handleRoute: function () {
    wx.navigateTo({
      url: '/pages/start_class/start_class'
    })
  },
  handleTabRoute: function (e) {
    const url = e.target.dataset.url
    wx.navigateTo({
      url: url
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