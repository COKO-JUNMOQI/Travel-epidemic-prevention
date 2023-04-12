Page({ //页面对象
  data:{ //变量
    cities:[
      
    ],
    indicatorDots:true,
    autoplay:true,
    interval:2000,
    duration:2000,
    background:["/images/banner1.jpg","/images/banner2.jpg","/images/banner3.jpg"]
  },
  onLoad:function(){ //预加载函数
    var that = this;
    wx.request({
      url: 'https://apis.juhe.cn/springTravel/citys?key=94ffd0fa8053282223b784b6db087397',
      success(res){
        that.setData({
          cities:res.data.result
        })
      }
    })
  },
  cityPolicy:function(event) {
    //获得当前点击城市的ID
    var cid = event.currentTarget.id;
    //将城市ID当参数传递给城市政策页面
    wx.navigateTo({
      url: '/pages/policy/policy?id='+cid,
    })
  }
})