import api from '../../server/api.js'
import { dealurl } from '../../utils/url.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookStr:'',
    //测试数组
    bookList:[
      {name: 'JavaScript语言精粹',
      id:'TP312/1272',
      author:'Douglas Crockford'},
      {name: 'JavaScript经典实例',
      id:'TP312/2202',
      author: 'Shelley Powers'},
      {name: '算法导论',
      id: 'TP30/630',
      author: 'Thomas H.Cormen等'},
      {name: '编程珠玑',
      id: 'TP311/1702',
      author: 'Jon Bentley'},
      {name: '编程谜题',
      id: 'TP311/1932',
      author: 'codingtmd'}, 
      {name: '在上海寻找上海',
      id: 'I267/3144',
      author: '惜珍'},
      {name: '在无趣的时代活动有趣',
      id: 'I267/3145',
      author: 'Jon Bentley'},
      {name: '世界尽头与冷酷仙境',
      id: 'I313.4/167',
      author: '村上春树'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    api.purl({

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
  
  },

  bindBook: function (e) {
    this.setData({
      bookStr: e.detail.value
    });
    this.style.color
  },
  bookDetail: function (e) {
    wx.navigateTo({
      url: '../bdetail/bdetail?' + dealurl(e),
      success: (res) => { },
      fail: (err) => {
        console.log(err)
      }
    });
  }
})