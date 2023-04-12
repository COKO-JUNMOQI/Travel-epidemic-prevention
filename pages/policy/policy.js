
Page({
  data: {
    cityname:"",
    codename:"",
    codeiimg:"",
    inpolicy:"",
    outpolicy:""

  },
  onLoad(options) {
    var that = this;
    var id = options.id;
    wx.request({
      url: 'http://apis.juhe.cn/springTravel/query?key=94ffd0fa8053282223b784b6db087397&from='+id+'&to='+id,
      success(res){
        that.setData({
          codename:res.data.result.from_info.health_code_name,
          codeimg:res.data.result.from_info.health_code_picture,
          inpolicy:res.data.result.from_info.low_in_desc,
          outpolicy:res.data.result.from_info.out_desc,
          cityname:res.data.result.from_info.city_name
        })
      }
    })
  },
})