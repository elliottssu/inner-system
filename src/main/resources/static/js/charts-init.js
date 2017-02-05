/*
 * charts related init
 * 
 */
///==============================tags相关初始化============================
// 获取tagsid字符串
function getTagsIdStr(){
	var tags = "";
	$(".tag").each(function(index,value){
		// 最后一个tag
		if($(".tag").size()==index+1){
			tags = tags+$(this).attr("id");
		}else{   	 			
			tags = tags+$(this).attr("id")+",";
		}					
  	});
  	return tags;
}

// 获取tags id array
function getTagsIdArray(){
	var tagsArray = new Array();
	$(".tag").each(function(index,value){
		tagsArray.push($(this).attr("id"));			
  	});
  	return tagsArray;
}
// 获取tags map
function tagsMap(){
	var tagsMap = new Map();
	$(".tag").each(function(index,value){
		// 最后一个tag
		tagsMap.set($(this).attr("id"),$(this).find("span").text());				
  	});
  	return tagsMap;
}

// 获取时间范围
function getTimeRang(){
	var startDate = $(".startDate").val();
	var endDate = $(".endDate").val();
	if(startDate!="" && endDate!="" && startDate>endDate){		
		alert("查询起始日期不能大于终止日期");
	}
	return startDate+","+endDate;
}

//获取时间维度
function getTimeDim(pickerId){
	return $("#"+pickerId+" option:selected").val();
}


///==============================图表数据相关初始化============================
// 标准面积图  series data
function initAreaLineItem(){
	var item = {
       	name:'',
        type:'line',
        smooth:true,
        itemStyle: {normal: {areaStyle: {type: 'default'}}},
        data:[]
	}
	return item;
}

// 堆积面积图 series data
function initStackLineItem(){
	var item = {
       	name:'',
        type:'line',
        stack: '总量',
        itemStyle: {normal: {areaStyle: {type: 'default'}}},
        data:[]
	}
	return item;
}

// 简单折线图 series data
function initSimpleLineItem(){
	var item = {
       	name:'',
        type:'line',
//        stack: '总量',
        data:[]
	}
	return item;
}

//普通柱状图 series data
function initBarItem(){
	var item = {
         name: '',
         type: 'bar',
         label: {
             normal: {
                 show: true,
                 position: 'inside'
             }
         },
         data: []
     }
	return item;
	
}

// 堆积柱状图 series data
function initStackBarItem(){
	var item = {
         name: '',
         type: 'bar',
		 stack: '总量',
         label: {
             normal: {
                 show: true,
                 position: 'inside'
             }
         },
         data: []
     }
	return item;
	
}

function initPieItem(){
	var item ={
        name: '',
        type: 'pie',
        radius : '55%',
        center: ['50%', '60%'],
        data:[],
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }
	
	return item;
	
}

// 预测数据格式化
function initForcastData(){
	var data = {
		value:'', 
		symbol:'circle',
		symbolSize:10
	}
	return data;
}

// tooltip
function setTooltip(){
	var tooltip = {
		trigger: 'axis',
		formatter:function(data){
			var title = '';
			var str = '';
			if(typeof(data[0].data)=="string"){
				title  =  "历史数据 "+ data[0].name +"</br>";
			}else{
				title  = "预测数据 "+ data[0].name + "</br>";
			}

			$.each(data,function(index,eachItem){	
				if(eachItem.value==undefined){
					eachItem.value="-";
				}	
				eachItem.color
				str = str +"<div class='text-left' style='width:100%'><i class='fa fa-circle' style=\'color:"+eachItem.color+"\'></i> "+ eachItem.seriesName+": "+eachItem.value+"</br></div>";				
			})
			return title+str;		
		}
	}
	return tooltip;
	
}

function initFactorPieChart(chartId, title, legend, innerData, outerData) {
	var chartObj = echarts.init(document.getElementById(chartId), 'macarons');
	var option = {
		title : {
			left : 'center',
			text : title,
		},
		tooltip : {
			trigger : 'item',
			formatter : "{a} <br/>{b}: {c} ({d}%)"
		},
		legend : {
			orient : 'vertical',
			x : 'right',
			data : legend
		},
		series : [{
				name : '影响因子',
				type : 'pie',
				selectedMode : 'single',
				radius : [0, '30%'],

				label : {
					normal : {
						position : 'inner'
					}
				},
				labelLine : {
					normal : {
						show : false
					}
				},
				data : innerData
			}, {
				name : '属性',
				type : 'pie',
				radius : ['40%', '55%'],
				data : outerData
			}
		]
	};
	chartObj.setOption(option);
	return chartObj;
}

function initFactorScatterChart(chartId, title, subtitle, scatterData, xname, xunit, yname, yunit) {
	var chartObj = echarts.init(document.getElementById(chartId), 'macarons');
	var option = {
		title : {
			text : title,
			subtext : subtitle,
			left : 'center'
		},
		grid : {
			left : '3%',
			right : '12%',
			bottom : '3%',
			containLabel : true
		},
		tooltip : {
			trigger : 'axis',
			showDelay : 0,
			formatter : function (params) {
				if (params.value.length > 1) {
					return xname + ' : ' + params.value[0] + ' ' + xunit + '<br/>' + yname + ' : '
					 + params.value[1] + ' ' + yunit + ' ';
				} else {
					return yname + params.name + ' : ' + params.value + ' ' + yunit + ' ';
				}
			},
			axisPointer : {
				show : true,
				type : 'cross',
				lineStyle : {
					type : 'dashed',
					width : 1
				}
			}
		},
		xAxis : [{
				type : 'value',
				scale : true,
				axisLabel : {
					formatter : '{value}'
				},
				name : xname + '(' + xunit + ')',
				splitLine : {
					lineStyle : {
						type : 'dashed'
					}
				}
			}
		],
		yAxis : [{
				type : 'value',
				scale : true,
				axisLabel : {
					formatter : '{value}'
				},
				name : yname + '(' + yunit + ')',
				splitLine : {
					lineStyle : {
						type : 'dashed'
					}
				}
			}
		],
		series : [{
				type : 'scatter',
				data : scatterData,
				markPoint : {
					data : [{
							type : 'max',
							name : '最大值'
						}, {
							type : 'min',
							name : '最小值'
						}
					]
				},
				markLine : {
					data : [{
							type : 'average',
							name : '平均值'
						}
					]
				}
			}
		]
	};
	chartObj.setOption(option);
	return chartObj;
}
