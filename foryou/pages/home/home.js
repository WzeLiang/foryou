// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: true,
    selected1: false,
    movies: [
      { url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1613480516,1489768133&fm=27&gp=0.jpg' },
      { url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2244042134,933475436&fm=200&gp=0.jpg' },
      { url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1135537014,4136899083&fm=27&gp=0.jpg' },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }
    ]
    ,logourllist:[
      'http://www.86ps.com/sc/bj/298/3.jpg' ,
        'http://img01.taopic.com/141111/240469-1411110J24089.jpg' ,
       'http://www.moto-one.com.hk/images/upload/Image/2014_honda_cbr1000rr_sp/2014_honda_cbr1000rr_sp_15a.jpg' ,
      'http://www.86ps.com/sc/bj/298/3.jpg' ,
       'http://img01.taopic.com/141111/240469-1411110J24089.jpg' ,
       'http://www.moto-one.com.hk/images/upload/Image/2014_honda_cbr1000rr_sp/2014_honda_cbr1000rr_sp_15a.jpg' ,
       'http://www.86ps.com/sc/bj/298/3.jpg' ,
       'http://img01.taopic.com/141111/240469-1411110J24089.jpg' ,
       'http://www.moto-one.com.hk/images/upload/Image/2014_honda_cbr1000rr_sp/2014_honda_cbr1000rr_sp_15a.jpg' 
    ]    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  selected: function (e) {
    this.setData({
      selected1: false,
      selected: true
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected1: true
    })
  },
  previewImage: function (e) {
    var current = e.target;
    console.log(current);
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: this.data.logourllist // 需要预览的图片http链接列表  
    })
  } ,
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
  
  }
})