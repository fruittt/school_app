Page({
  data: {
  tipsHidden: true,
  r:"",
  g:"",
  b:"",
  hex:"098765",
  HEX:"",
  RGB:""
  },
  toHide: function () {
    this.setData({
      tipsHidden: true
    });
  },
  toShow: function () {
    this.setData({
      tipsHidden: false
    });
  },
  setrgb: function(e){
    if (e.currentTarget.dataset.id == 1){
      this.setData({
        r: e.detail.value
      });
    }
    if (e.currentTarget.dataset.id == 2) {
      this.setData({
        g: e.detail.value
      });
    }
    if (e.currentTarget.dataset.id == 3) {
      this.setData({
        b: e.detail.value
      });
    }
  },
  sethex: function(e){
    this.setData({
      hex : e.detail.value
    });
  },
  toHexString: function() {
    var r = this.data.r;
    var g = this.data.g;
    var b = this.data.b;
    if (r > 255 || g > 255 || b > 255 || r.trim().length < 1 || g.trim().length < 1 || b.trim().length < 1 ){
      this.toShow();
    }else{
      var a = ("00000" + (r << 16 | g << 8 | b).toString(16)).slice(-6);
      this.setData({
        HEX: a
      });
      }
    },
    toRgbString: function(){
      var hex = this.data.hex;
      var arr = new Array();
    for(let i = 0; i < 6; i += 2){
      var h = parseInt("0x"+hex.substring(i,i+2));
      arr.push(h);
      this.setData({
        RGB : arr.join(",")
      });
    }
  }
})