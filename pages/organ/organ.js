Page({
  data: {
    cityName:"",
    cityID:"",
    cityList:[
      
    ]
  },
  onLoad(options) {

  },
  search:function() {
    var that = this;
    var cityName = this.data.cityName;
    var cityID="";
    wx.request({
      url: 'http://apis.juhe.cn/springTravel/citys?key=94ffd0fa8053282223b784b6db087397',
      success(res){
        var list = res.data.result;
        for(var i = 0; i < list.length;i++)
        {
          for(var j = 0; j < list[i].citys.length;j++)
          {
            var cityname = list[i].citys[j].city
            if(cityName == cityname){
              cityID = list[i].citys[j].city_id;
              break;
            }
          }
        }
        wx.request({
          url: 'http://apis.juhe.cn/springTravel/hsjg?key=94ffd0fa8053282223b784b6db087397&city_id='+cityID,
          success(res){
            that.setData({
              cityList:res.data.result.data
            })
          }
        })
      }
    })
  }
})