// pages/index/insex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logo:"/image/logo.jpg",
    id:"",
    tipsHidden:true
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
  bindId: function (e) {
    this.setData({
      id: e.detail.value
    });
  },
  toHide: function () {
    this.setData({
      tipsHidden:true
    });
  },
  toShow: function () {
    this.setData({
      tipsHidden:false
    });
  },
  /**
   * 查询借书情况
   */
  search: function () {
    if (this.data.id.trim().length < 1){
      this.toShow();
    }else{
      let id = this.data.id;
      wx.navigateTo({
        url: '../borrow/borrow'
      });
      wx.setStorageSync('id',id);
    }
  }
})