// pages/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper:[{title: '',picurl: '../../image/1.png'},
      { title: '', picurl: '../../image/2.jpg'},
      { title: '', picurl: '../../image/3.jpg'}],
    boxlist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  turn: function(e){
    if(e.currentTarget.dataset.id == 1){
      wx.navigateTo({
        url: '../index/index',
      })
    }
    if (e.currentTarget.dataset.id == 2) {
      wx.navigateTo({
        url: '../book/book',
      })
    }
    if (e.currentTarget.dataset.id == 3) {
      wx.navigateTo({
        url: '../tool/color/color',
      })
    }
  }
})