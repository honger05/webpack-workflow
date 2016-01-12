window.onerror = function(errorMessage, scriptURI, lineNumber) {
	var msgs = [];
	var userAgent = '';
	userAgent = navigator.userAgent;
	if (errorMessage.indexOf("WeixinJSBridge is not defined")>=0){
		return;
	}
	msgs.push("错误信息：" , errorMessage);
	msgs.push("\t出错文件：" , scriptURI);
	msgs.push("\t出错位置：" , lineNumber + '行');
	msgs.push("\t客户端："+userAgent);
	msgs.push("\t地址："+location.href);
	msgs = msgs.join('');
    var postData = {};
    postData["errMsg"] = msgs;
    $.post(
		"http://"+location.host+"/util/reportErr",
		postData,
		function(ret){
			return true;
	   },
	   "json"
	);
}
