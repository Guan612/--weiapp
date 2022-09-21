Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: '',
    checked: true,
    image: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onShow: function () {

  },
  handleInput(e) {

  },
  getData: async function () {
    wx.reLaunch({
      url: '/pages/index/index'
    })
  },
  onChange(e) {

  },
  handleGetUserInfo(e) {
    wx.getUserProfile({
      desc: '测试', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        const rawData = res.userInfo
        wx.setStorageSync('userinfo', rawData)
        setTimeout(() => {
          wx.redirectTo({
            url: '/pages/userinfo/modify',
          })
        }, 100)
      },
      fail: res => {
        console.log("获取用户信息失败", res)
      }
    })
  },
  async getPhoneNumber(e) {
    console.log(e)

  },

})