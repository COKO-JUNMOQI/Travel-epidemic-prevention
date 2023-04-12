const app = getApp()

Page({
  data: {
    username:"",
    password:"",
    userInfo: {},
  },
  onLoad(option) {
    var that = this;
    wx.login({
      success (res) {
        if (res.code) {
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wxb369b96bfebc2e4e&secret=dab54feb6f8d9b6832037b598640304d&js_code='+res.code+'&grant_type=authorization_code',
            success(res){
              that.setData({
                openid:res.data.openid
              })
            }
          })
        } 
      }
    })
    that.getUserDetail();
  },
  getUserDetail:function() {
    var that = this;
    wx.showModal({
      title: '微信授权',
      content: '是否使用完整版',
      success (res) {
        if (res.confirm) {
          wx.getUserProfile({
                            desc: '用于完善用户资料',
                            success: (res) => {
                            that.setData({
                                  userInfo: res.userInfo,
                                })
                            }
                        })
            }
          }
    })
  },
  login:function() {
    var username = this.data.username;
    var password = this.data.password;
    //var jsessionid = app.globalData.jsessionid;
    //wx.request({
    //  url: 'login;jsessionid='+jsessionid+'?username='+username+"&password="+password,
    //})
    wx.switchTab({
      url: '/pages/index/index',
    })
  }
})

