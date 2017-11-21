// pages//borrow/borrow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:"",
    listArr:[{
      name:"",
      time:"",
      user:""
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
      wx.request({
        url: 'https://izzx.top',//接口地址
        data: {
          id: this.data.id
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          that.setData({
            listArr: res.data.result
          })
        },
        fail: function (res) {
          console.log('接口调用失败');
        }
    })
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
    this.setData({
      id: wx.getStorageSync('id') || ""
    });
    console.log(this.data.id)
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
  
  }
})