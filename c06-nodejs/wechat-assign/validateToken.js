

var jsSHA = require('jssha')

function validateToken(req, res) {
  var token = 'weixin'
  var signature = req.query.signature //微信加密签名
  var timestamp = req.query.timestamp //时间戳
  var echostr = req.query.echostr //随机字符串
  var nonce = req.query.nonce //随机数

  var oriArray = []
  oriArray[0] = nonce
  oriArray[1] = timestamp
  oriArray[2] = token
  oriArray.sort()

  var original = oriArray.join('')
  var shaObj = new jsSHA(original, 'TEXT')
  var scyptoString = shaObj.getHash('SHA-1', 'HEX')

  if (signature === scyptoString) {
    // 验证成功
    res.send(echostr)
    console.log('Confirm and send echo back');
  } else {
    // 验证失败
    res.end('false')
    console.log('Failed');
  }
}

module.exports = validateToken



