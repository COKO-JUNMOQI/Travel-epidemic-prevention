Page({
  data: {
    high_count:0,
    middle_count:0,
    low_count:0,
    high_list:[],
    middle_list:[],
    low_list:[]
  },
  onLoad(options) {
    var that = this;
    wx.request({
      url: 'https://apis.juhe.cn/springTravel/risk?key=94ffd0fa8053282223b784b6db087397',
      success(res){
        that.setData({
          high_count:res.data.result.high_count,
          middle_count:res.data.result.middle_count,
          low_count:res.data.result.low_count,
          high_list:res.data.result.high_list,
          middle_list:res.data.result.middle_list,
          low_list:res.data.result.low_list
        })
      }
    })
  },
})