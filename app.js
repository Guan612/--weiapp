App({
  onLaunch() {
    try {
      const res = wx.getStorageSync('userinfo')
      if (!res) {
        setTimeout(() => {
          wx.reLaunch({
            url: '/pages/login/index'
          })
        }, 100)
      }
    } catch (e) {}
  },
  globalData: {
    userInfo: null
  }
})