

/**
 * ajax 请求封装
 * @param url
 * @param method
 * @param data
 * @param fn
 */

function post(url, method, data, fn,dataType) {
	var _dataType;
	if(!dataType){
		_dataType="html";
	}else{
		_dataType=dataType
	}
	var params = {
		url : url,
		type : method,
		dataType : _dataType,
		contentType : 'application/json;charset=UTF-8',
		data : data,
		success : function(data) {
			//console.log(data);
			// alert(JSON.stringify(data));
			if (fn) {
				fn(data);
			}
		},
		error : function(e) {
			console.log(e)
		}
	};
	$.ajax(params);
}

/*时间格式化  */
Date.prototype.format = function(format) {
	var o = {
		"M+" : this.getMonth() + 1, //month 
		"d+" : this.getDate(), //day 
		"h+" : this.getHours(), //hour 
		"m+" : this.getMinutes(), //minute 
		"s+" : this.getSeconds(), //second 
		"q+" : Math.floor((this.getMonth() + 3) / 3), //quarter 
		"S" : this.getMilliseconds()
	}
	if (/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + "")
				.substr(4 - RegExp.$1.length));
	}
	for ( var k in o) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
					: ("00" + o[k]).substr(("" + o[k]).length));
		}
	}
	return format;
}

/*日期加减，获得新日期  */
function dateAdd(date, strInterval, Number) { //参数分别为日期对象，增加的类型，增加的数量 
	var dtTmp = date;
	switch (strInterval) {
	case 'second':
	case 's':
		return new Date(Date.parse(dtTmp) + (1000 * Number));
	case 'minute':
	case 'n':
		return new Date(Date.parse(dtTmp) + (60000 * Number));
	case 'hour':
	case 'h':
		return new Date(Date.parse(dtTmp) + (3600000 * Number));
	case 'day':
	case 'd':
		return new Date(Date.parse(dtTmp) + (86400000 * Number));
	case 'week':
	case 'w':
		return new Date(Date.parse(dtTmp) + ((86400000 * 7) * Number));
	case 'month':
	case 'm':
		return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number,
				dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(),
				dtTmp.getSeconds());
	case 'year':
	case 'y':
		return new Date((dtTmp.getFullYear() + Number), dtTmp.getMonth(),
				dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(),
				dtTmp.getSeconds());
	}
}

// format数字 格式XXX,XXX
function formatNum(s) {  
    s = parseFloat((s + "").replace(/[^\d\.-]/g, "")) + "";  
    var l = s.split(".")[0].split("").reverse(), r = s.split(".")[1];  
    t = "";  
    for (i = 0; i < l.length; i++) {  
        t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? "," : "");  
    }  
    return t.split("").reverse().join("");  
} 

