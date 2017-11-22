//暂缺
const wxRequest = (detail,url) => {
  wx.request({
    url: url,
    method: detail.method || 'GET',
    data: detail.data || {},
    header: {
      'Content-Type': 'application/json'
    },
    success: (res) => {
      detail.success && detail.success(res)
    },
    fail: (res) => {
      detail.fail && detail.fail(res)
    },
    complete: (res) => {
      detail.complete && detail.complete(res)
    }
  })
}
//传地址
const purl = (detail) => wxRequest(detail, detail.url)