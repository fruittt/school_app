// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  turn1: function(){
    wx.navigateTo({
      url: '../search/search'
    });
  },

  turn2: function () {
    wx.navigateTo({
      url: '../book/book'
    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})