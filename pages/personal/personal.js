//获取应用实例
var app = getApp()
Page({
  data: {
    columnFloatTop: 'hidden',
    columnFloat: 'visible',
    nickNameHidden: 'hidden',
    scrollTop: 0,
    userInfo: {},
    toView: 'personal-avatar-view',
    coupons:[
      {
        id: 77701,
        name: '优惠券1',
        type: '1'
      },
      {
        id: 77702,
        name: '优惠券2',
        type: '2'
      },
      {
        id: 77703,
        name: '优惠券3',
        type: '3'
      }
    ],
    collects:[
      {
        id: 8001,
        name: '芝士丸'
      }
    ],
    records: [
      {
        id:60001
      },
      {
        id:60002
      }
    ],
    balance: '20'
  },
  personal_tableview_scrollToTop: function(event){
    console.log(event.detail.scrollTop);
  },
  personal_tableview_scrollToBottom: function(event){
  },
  personal_tableview_scroll: function(event) {
    console.log(event.detail.scrollTop);
    if(event.detail.scrollTop > 120) {
      this.setData({
        columnFloatTop: 'visible',
        columnFloat: "hidden"
      });
    } else {
      this.setData({
        columnFloatTop: 'hidden',
        columnFloat: "visible"
      });
    }
    if(event.detail.scrollTop > 102) {
      var nickName = this.data.userInfo.nickName;
      wx.setNavigationBarTitle({
        title: nickName
      })
    } else {
      wx.setNavigationBarTitle({
        title: "付小姐在成都"
      })
    }
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log('onLoad')
  },
  onReady:function(){

    
  },
  onShow:function(){
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
    //   //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
    
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  
  
  
})
