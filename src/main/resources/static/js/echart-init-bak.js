/// 线形图	start
// 基于准备好的dom，初始化echarts实例
	var echartLine = echarts.init(document.getElementById('echart-line'));
	
	// 指定图表的配置项和数据
	echartLineOption = {
	    title: {
	        text: '近一周总体线图'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
	    },
	    calculable: true,
	    toolbox: {
        	show : true,
	        feature : {
	            mark : {show: true},
	            dataView : {show: true, readOnly: false},
	            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
    	},
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis : [
	        {
	            type : 'category',
	            boundaryGap : false,
	            data : ['周一','周二','周三','周四','周五','周六','周日']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'邮件营销',
	            type:'line',
	            stack: '总量',
	            areaStyle: {normal: {}},
	            data:[120, 132, 101, 134, 90, 230, 210]
	        },
	        {
	            name:'联盟广告',
	            type:'line',
	            stack: '总量',
	            areaStyle: {normal: {}},
	            data:[220, 182, 191, 234, 290, 330, 310]
	        },
	        {
	            name:'视频广告',
	            type:'line',
	            stack: '总量',
	            areaStyle: {normal: {}},
	            data:[150, 232, 201, 154, 190, 330, 410]
	        },
	        {
	            name:'直接访问',
	            type:'line',
	            stack: '总量',
	            areaStyle: {normal: {}},
	            data:[320, 332, 301, 334, 390, 330, 320]
	        },
	        {
	            name:'搜索引擎',
	            type:'line',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top'
	                }
	            },
	            areaStyle: {normal: {}},
	            data:[820, 932, 901, 934, 1290, 1330, 1320]
	        }
	    ]
	};	
	
	// 使用刚指定的配置项和数据显示图表。
	//echartLine.setOption(echartLineOption);
/// 线形图	 end 

/// 柱状图  start
	// 基于准备好的dom，初始化echarts实例
	var echartBar = echarts.init(document.getElementById('echart-bar'));
	
	echartBarOption = {
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    legend: {
		        data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
		    },
		    calculable: true,
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis:  {
		        type: 'value'
		    },
		    yAxis: {
		        type: 'category',
		        data: ['周一','周二','周三','周四','周五','周六','周日']
		    },
		    series: [
		        {
		            name: '直接访问',
		            type: 'bar',
		            stack: '总量',
		            label: {
		                normal: {
		                    show: true,
		                    position: 'insideRight'
		                }
		            },
		            data: [320, 302, 301, 334, 390, 330, 320]
		        },
		        {
		            name: '邮件营销',
		            type: 'bar',
		            stack: '总量',
		            label: {
		                normal: {
		                    show: true,
		                    position: 'insideRight'
		                }
		            },
		            data: [120, 132, 101, 134, 90, 230, 210]
		        },
		        {
		            name: '联盟广告',
		            type: 'bar',
		            stack: '总量',
		            label: {
		                normal: {
		                    show: true,
		                    position: 'insideRight'
		                }
		            },
		            data: [220, 182, 191, 234, 290, 330, 310]
		        },
		        {
		            name: '视频广告',
		            type: 'bar',
		            stack: '总量',
		            label: {
		                normal: {
		                    show: true,
		                    position: 'insideRight'
		                }
		            },
		            data: [150, 212, 201, 154, 190, 330, 410]
		        },
		        {
		            name: '搜索引擎',
		            type: 'bar',
		            stack: '总量',
		            label: {
		                normal: {
		                    show: true,
		                    position: 'insideRight'
		                }
		            },
		            data: [820, 832, 901, 934, 1290, 1330, 1320]
		        }
		    ]
		};
	
	
	// 使用刚指定的配置项和数据显示图表。
	echartBar.setOption(echartBarOption);
/// 柱状图  end	
	
/// 饼状图  start		
	// 基于准备好的dom，初始化echarts实例
	var echartPie = echarts.init(document.getElementById('echart-pie'));
	echartPieOption = {
	    backgroundColor: '#49586e',

	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },

	    visualMap: {
	        show: false,
	        min: 80,
	        max: 600,
	        inRange: {
	            colorLightness: [0, 1]
	        }
	    },
	    calculable: true,
	    series : [
	        {
	            name:'同期',
	            type:'pie',
	            radius : '55%',
	            center: ['50%', '50%'],
	            data:[
	                {value:335, name:'淘宝'},
	                {value:310, name:'天猫'},
	                {value:274, name:'京东'},
	                {value:235, name:'线下'}
	            ].sort(function (a, b) { return a.value - b.value}),
	            roseType: 'angle',
	            label: {
	                normal: {
	                    textStyle: {
	                        color: '#fff'
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    lineStyle: {
	                        color: 'rgba(255, 255, 255, 0.3)'
	                    },
	                    smooth: 0.2,
	                    length: 10,
	                    length2: 20
	                }
	            }
	            
	        }
	    ]
	};
	
	// 使用刚指定的配置项和数据显示图表。
	echartPie.setOption(echartPieOption);
/// 饼状图  end		
///散点中国地图-1
	var echartMap = echarts.init(document.getElementById('echart-map'));
	var data = [
	            {name: '海门', value: 9},
	            {name: '鄂尔多斯', value: 12},
	            {name: '招远', value: 12},
	            {name: '舟山', value: 12},
	            {name: '齐齐哈尔', value: 14},
	            {name: '盐城', value: 15},
	            {name: '赤峰', value: 16},
	            {name: '青岛', value: 18},
	            {name: '乳山', value: 18},
	            {name: '金昌', value: 19},
	            {name: '泉州', value: 21},
	            {name: '莱西', value: 21},
	            {name: '日照', value: 21},
	            {name: '胶南', value: 22},
	            {name: '南通', value: 23},
	            {name: '拉萨', value: 24},
	            {name: '云浮', value: 24},
	            {name: '梅州', value: 25},
	            {name: '文登', value: 25},
	            {name: '上海', value: 25},
	            {name: '攀枝花', value: 25},
	            {name: '威海', value: 25},
	            {name: '承德', value: 25},
	            {name: '厦门', value: 26},
	            {name: '汕尾', value: 26},
	            {name: '潮州', value: 26},
	            {name: '丹东', value: 27},
	            {name: '太仓', value: 27},
	            {name: '曲靖', value: 27},
	            {name: '烟台', value: 28},
	            {name: '福州', value: 29},
	            {name: '瓦房店', value: 30},
	            {name: '即墨', value: 30},
	            {name: '抚顺', value: 31},
	            {name: '玉溪', value: 31},
	            {name: '张家口', value: 31},
	            {name: '阳泉', value: 31},
	            {name: '莱州', value: 32},
	            {name: '湖州', value: 32},
	            {name: '汕头', value: 32},
	            {name: '昆山', value: 33},
	            {name: '宁波', value: 33},
	            {name: '湛江', value: 33},
	            {name: '揭阳', value: 34},
	            {name: '荣成', value: 34},
	            {name: '连云港', value: 35},
	            {name: '葫芦岛', value: 35},
	            {name: '常熟', value: 36},
	            {name: '东莞', value: 36},
	            {name: '河源', value: 36},
	            {name: '淮安', value: 36},
	            {name: '泰州', value: 36},
	            {name: '南宁', value: 37},
	            {name: '营口', value: 37},
	            {name: '惠州', value: 37},
	            {name: '江阴', value: 37},
	            {name: '蓬莱', value: 37},
	            {name: '韶关', value: 38},
	            {name: '嘉峪关', value: 38},
	            {name: '广州', value: 38},
	            {name: '延安', value: 38},
	            {name: '太原', value: 39},
	            {name: '清远', value: 39},
	            {name: '中山', value: 39},
	            {name: '昆明', value: 39},
	            {name: '寿光', value: 40},
	            {name: '盘锦', value: 40},
	            {name: '长治', value: 41},
	            {name: '深圳', value: 41},
	            {name: '珠海', value: 42},
	            {name: '宿迁', value: 43},
	            {name: '咸阳', value: 43},
	            {name: '铜川', value: 44},
	            {name: '平度', value: 44},
	            {name: '佛山', value: 44},
	            {name: '海口', value: 44},
	            {name: '江门', value: 45},
	            {name: '章丘', value: 45},
	            {name: '肇庆', value: 46},
	            {name: '大连', value: 47},
	            {name: '临汾', value: 47},
	            {name: '吴江', value: 47},
	            {name: '石嘴山', value: 49},
	            {name: '沈阳', value: 50},
	            {name: '苏州', value: 50},
	            {name: '茂名', value: 50},
	            {name: '嘉兴', value: 51},
	            {name: '长春', value: 51},
	            {name: '胶州', value: 52},
	            {name: '银川', value: 52},
	            {name: '张家港', value: 52},
	            {name: '三门峡', value: 53},
	            {name: '锦州', value: 54},
	            {name: '南昌', value: 54},
	            {name: '柳州', value: 54},
	            {name: '三亚', value: 54},
	            {name: '自贡', value: 56},
	            {name: '吉林', value: 56},
	            {name: '阳江', value: 57},
	            {name: '泸州', value: 57},
	            {name: '西宁', value: 57},
	            {name: '宜宾', value: 58},
	            {name: '呼和浩特', value: 58},
	            {name: '成都', value: 58},
	            {name: '大同', value: 58},
	            {name: '镇江', value: 59},
	            {name: '桂林', value: 59},
	            {name: '张家界', value: 59},
	            {name: '宜兴', value: 59},
	            {name: '北海', value: 60},
	            {name: '西安', value: 61},
	            {name: '金坛', value: 62},
	            {name: '东营', value: 62},
	            {name: '牡丹江', value: 63},
	            {name: '遵义', value: 63},
	            {name: '绍兴', value: 63},
	            {name: '扬州', value: 64},
	            {name: '常州', value: 64},
	            {name: '潍坊', value: 65},
	            {name: '重庆', value: 66},
	            {name: '台州', value: 67},
	            {name: '南京', value: 67},
	            {name: '滨州', value: 70},
	            {name: '贵阳', value: 71},
	            {name: '无锡', value: 71},
	            {name: '本溪', value: 71},
	            {name: '克拉玛依', value: 72},
	            {name: '渭南', value: 72},
	            {name: '马鞍山', value: 72},
	            {name: '宝鸡', value: 72},
	            {name: '焦作', value: 75},
	            {name: '句容', value: 75},
	            {name: '北京', value: 79},
	            {name: '徐州', value: 79},
	            {name: '衡水', value: 80},
	            {name: '包头', value: 80},
	            {name: '绵阳', value: 80},
	            {name: '乌鲁木齐', value: 84},
	            {name: '枣庄', value: 84},
	            {name: '杭州', value: 84},
	            {name: '淄博', value: 85},
	            {name: '鞍山', value: 86},
	            {name: '溧阳', value: 86},
	            {name: '库尔勒', value: 86},
	            {name: '安阳', value: 90},
	            {name: '开封', value: 90},
	            {name: '济南', value: 92},
	            {name: '德阳', value: 93},
	            {name: '温州', value: 95},
	            {name: '九江', value: 96},
	            {name: '邯郸', value: 98},
	            {name: '临安', value: 99},
	            {name: '兰州', value: 99},
	            {name: '沧州', value: 100},
	            {name: '临沂', value: 103},
	            {name: '南充', value: 104},
	            {name: '天津', value: 105},
	            {name: '富阳', value: 106},
	            {name: '泰安', value: 112},
	            {name: '诸暨', value: 112},
	            {name: '郑州', value: 113},
	            {name: '哈尔滨', value: 114},
	            {name: '聊城', value: 116},
	            {name: '芜湖', value: 117},
	            {name: '唐山', value: 119},
	            {name: '平顶山', value: 119},
	            {name: '邢台', value: 119},
	            {name: '德州', value: 120},
	            {name: '济宁', value: 120},
	            {name: '荆州', value: 127},
	            {name: '宜昌', value: 130},
	            {name: '义乌', value: 132},
	            {name: '丽水', value: 133},
	            {name: '洛阳', value: 134},
	            {name: '秦皇岛', value: 136},
	            {name: '株洲', value: 143},
	            {name: '石家庄', value: 147},
	            {name: '莱芜', value: 148},
	            {name: '常德', value: 152},
	            {name: '保定', value: 153},
	            {name: '湘潭', value: 154},
	            {name: '金华', value: 157},
	            {name: '岳阳', value: 169},
	            {name: '长沙', value: 175},
	            {name: '衢州', value: 177},
	            {name: '廊坊', value: 193},
	            {name: '菏泽', value: 194},
	            {name: '合肥', value: 229},
	            {name: '武汉', value: 273},
	            {name: '大庆', value: 279}
	       ];
	       var geoCoordMap = {
	           '海门':[121.15,31.89],
	           '鄂尔多斯':[109.781327,39.608266],
	           '招远':[120.38,37.35],
	           '舟山':[122.207216,29.985295],
	           '齐齐哈尔':[123.97,47.33],
	           '盐城':[120.13,33.38],
	           '赤峰':[118.87,42.28],
	           '青岛':[120.33,36.07],
	           '乳山':[121.52,36.89],
	           '金昌':[102.188043,38.520089],
	           '泉州':[118.58,24.93],
	           '莱西':[120.53,36.86],
	           '日照':[119.46,35.42],
	           '胶南':[119.97,35.88],
	           '南通':[121.05,32.08],
	           '拉萨':[91.11,29.97],
	           '云浮':[112.02,22.93],
	           '梅州':[116.1,24.55],
	           '文登':[122.05,37.2],
	           '上海':[121.48,31.22],
	           '攀枝花':[101.718637,26.582347],
	           '威海':[122.1,37.5],
	           '承德':[117.93,40.97],
	           '厦门':[118.1,24.46],
	           '汕尾':[115.375279,22.786211],
	           '潮州':[116.63,23.68],
	           '丹东':[124.37,40.13],
	           '太仓':[121.1,31.45],
	           '曲靖':[103.79,25.51],
	           '烟台':[121.39,37.52],
	           '福州':[119.3,26.08],
	           '瓦房店':[121.979603,39.627114],
	           '即墨':[120.45,36.38],
	           '抚顺':[123.97,41.97],
	           '玉溪':[102.52,24.35],
	           '张家口':[114.87,40.82],
	           '阳泉':[113.57,37.85],
	           '莱州':[119.942327,37.177017],
	           '湖州':[120.1,30.86],
	           '汕头':[116.69,23.39],
	           '昆山':[120.95,31.39],
	           '宁波':[121.56,29.86],
	           '湛江':[110.359377,21.270708],
	           '揭阳':[116.35,23.55],
	           '荣成':[122.41,37.16],
	           '连云港':[119.16,34.59],
	           '葫芦岛':[120.836932,40.711052],
	           '常熟':[120.74,31.64],
	           '东莞':[113.75,23.04],
	           '河源':[114.68,23.73],
	           '淮安':[119.15,33.5],
	           '泰州':[119.9,32.49],
	           '南宁':[108.33,22.84],
	           '营口':[122.18,40.65],
	           '惠州':[114.4,23.09],
	           '江阴':[120.26,31.91],
	           '蓬莱':[120.75,37.8],
	           '韶关':[113.62,24.84],
	           '嘉峪关':[98.289152,39.77313],
	           '广州':[113.23,23.16],
	           '延安':[109.47,36.6],
	           '太原':[112.53,37.87],
	           '清远':[113.01,23.7],
	           '中山':[113.38,22.52],
	           '昆明':[102.73,25.04],
	           '寿光':[118.73,36.86],
	           '盘锦':[122.070714,41.119997],
	           '长治':[113.08,36.18],
	           '深圳':[114.07,22.62],
	           '珠海':[113.52,22.3],
	           '宿迁':[118.3,33.96],
	           '咸阳':[108.72,34.36],
	           '铜川':[109.11,35.09],
	           '平度':[119.97,36.77],
	           '佛山':[113.11,23.05],
	           '海口':[110.35,20.02],
	           '江门':[113.06,22.61],
	           '章丘':[117.53,36.72],
	           '肇庆':[112.44,23.05],
	           '大连':[121.62,38.92],
	           '临汾':[111.5,36.08],
	           '吴江':[120.63,31.16],
	           '石嘴山':[106.39,39.04],
	           '沈阳':[123.38,41.8],
	           '苏州':[120.62,31.32],
	           '茂名':[110.88,21.68],
	           '嘉兴':[120.76,30.77],
	           '长春':[125.35,43.88],
	           '胶州':[120.03336,36.264622],
	           '银川':[106.27,38.47],
	           '张家港':[120.555821,31.875428],
	           '三门峡':[111.19,34.76],
	           '锦州':[121.15,41.13],
	           '南昌':[115.89,28.68],
	           '柳州':[109.4,24.33],
	           '三亚':[109.511909,18.252847],
	           '自贡':[104.778442,29.33903],
	           '吉林':[126.57,43.87],
	           '阳江':[111.95,21.85],
	           '泸州':[105.39,28.91],
	           '西宁':[101.74,36.56],
	           '宜宾':[104.56,29.77],
	           '呼和浩特':[111.65,40.82],
	           '成都':[104.06,30.67],
	           '大同':[113.3,40.12],
	           '镇江':[119.44,32.2],
	           '桂林':[110.28,25.29],
	           '张家界':[110.479191,29.117096],
	           '宜兴':[119.82,31.36],
	           '北海':[109.12,21.49],
	           '西安':[108.95,34.27],
	           '金坛':[119.56,31.74],
	           '东营':[118.49,37.46],
	           '牡丹江':[129.58,44.6],
	           '遵义':[106.9,27.7],
	           '绍兴':[120.58,30.01],
	           '扬州':[119.42,32.39],
	           '常州':[119.95,31.79],
	           '潍坊':[119.1,36.62],
	           '重庆':[106.54,29.59],
	           '台州':[121.420757,28.656386],
	           '南京':[118.78,32.04],
	           '滨州':[118.03,37.36],
	           '贵阳':[106.71,26.57],
	           '无锡':[120.29,31.59],
	           '本溪':[123.73,41.3],
	           '克拉玛依':[84.77,45.59],
	           '渭南':[109.5,34.52],
	           '马鞍山':[118.48,31.56],
	           '宝鸡':[107.15,34.38],
	           '焦作':[113.21,35.24],
	           '句容':[119.16,31.95],
	           '北京':[116.46,39.92],
	           '徐州':[117.2,34.26],
	           '衡水':[115.72,37.72],
	           '包头':[110,40.58],
	           '绵阳':[104.73,31.48],
	           '乌鲁木齐':[87.68,43.77],
	           '枣庄':[117.57,34.86],
	           '杭州':[120.19,30.26],
	           '淄博':[118.05,36.78],
	           '鞍山':[122.85,41.12],
	           '溧阳':[119.48,31.43],
	           '库尔勒':[86.06,41.68],
	           '安阳':[114.35,36.1],
	           '开封':[114.35,34.79],
	           '济南':[117,36.65],
	           '德阳':[104.37,31.13],
	           '温州':[120.65,28.01],
	           '九江':[115.97,29.71],
	           '邯郸':[114.47,36.6],
	           '临安':[119.72,30.23],
	           '兰州':[103.73,36.03],
	           '沧州':[116.83,38.33],
	           '临沂':[118.35,35.05],
	           '南充':[106.110698,30.837793],
	           '天津':[117.2,39.13],
	           '富阳':[119.95,30.07],
	           '泰安':[117.13,36.18],
	           '诸暨':[120.23,29.71],
	           '郑州':[113.65,34.76],
	           '哈尔滨':[126.63,45.75],
	           '聊城':[115.97,36.45],
	           '芜湖':[118.38,31.33],
	           '唐山':[118.02,39.63],
	           '平顶山':[113.29,33.75],
	           '邢台':[114.48,37.05],
	           '德州':[116.29,37.45],
	           '济宁':[116.59,35.38],
	           '荆州':[112.239741,30.335165],
	           '宜昌':[111.3,30.7],
	           '义乌':[120.06,29.32],
	           '丽水':[119.92,28.45],
	           '洛阳':[112.44,34.7],
	           '秦皇岛':[119.57,39.95],
	           '株洲':[113.16,27.83],
	           '石家庄':[114.48,38.03],
	           '莱芜':[117.67,36.19],
	           '常德':[111.69,29.05],
	           '保定':[115.48,38.85],
	           '湘潭':[112.91,27.87],
	           '金华':[119.64,29.12],
	           '岳阳':[113.09,29.37],
	           '长沙':[113,28.21],
	           '衢州':[118.88,28.97],
	           '廊坊':[116.7,39.53],
	           '菏泽':[115.480656,35.23375],
	           '合肥':[117.27,31.86],
	           '武汉':[114.31,30.52],
	           '大庆':[125.03,46.58]
	       };

	       var convertData = function (data) {
	           var res = [];
	           for (var i = 0; i < data.length; i++) {
	               var geoCoord = geoCoordMap[data[i].name];
	               if (geoCoord) {
	                   res.push({
	                       name: data[i].name,
	                       value: geoCoord.concat(data[i].value)
	                   });
	               }
	           }
	           return res;
	       };

	       echartMapOption = {
	           backgroundColor: '#404a59',
	           title: {
	               text: '全国主要城市空气质量',
	               subtext: 'data from PM25.in',
	               sublink: 'http://www.pm25.in',
	               left: 'center',
	               textStyle: {
	                   color: '#fff'
	               }
	           },
	           tooltip : {
	               trigger: 'item'
	           },
	           legend: {
	               orient: 'vertical',
	               y: 'bottom',
	               x:'right',
	               data:['pm2.5'],
	               textStyle: {
	                   color: '#fff'
	               }
	           },
	           geo: {
	               map: 'china',
	               label: {
	                   emphasis: {
	                       show: false
	                   }
	               },
	               roam: true,
	               itemStyle: {
	                   normal: {
	                       areaColor: '#323c48',
	                       borderColor: '#111'
	                   },
	                   emphasis: {
	                       areaColor: '#2a333d'
	                   }
	               }
	           },
	           series : [
	               {
	                   name: 'pm2.5',
	                   type: 'scatter',
	                   coordinateSystem: 'geo',
	                   data: convertData(data),
	                   symbolSize: function (val) {
	                       return val[2] / 10;
	                   },
	                   label: {
	                       normal: {
	                           formatter: '{b}',
	                           position: 'right',
	                           show: false
	                       },
	                       emphasis: {
	                           show: true
	                       }
	                   },
	                   itemStyle: {
	                       normal: {
	                           color: '#ddb926'
	                       }
	                   }
	               },
	               {
	                   name: 'Top 5',
	                   type: 'effectScatter',
	                   coordinateSystem: 'geo',
	                   data: convertData(data.sort(function (a, b) {
	                       return b.value - a.value;
	                   }).slice(0, 6)),
	                   symbolSize: function (val) {
	                       return val[2] / 10;
	                   },
	                   showEffectOn: 'render',
	                   rippleEffect: {
	                       brushType: 'stroke'
	                   },
	                   hoverAnimation: true,
	                   label: {
	                       normal: {
	                           formatter: '{b}',
	                           position: 'right',
	                           show: true
	                       }
	                   },
	                   itemStyle: {
	                       normal: {
	                           color: '#f4e925',
	                           shadowBlur: 10,
	                           shadowColor: '#333'
	                       }
	                   },
	                   zlevel: 1
	               }
	           ]
	       };
	   	echartMap.setOption(echartMapOption);

///散点中国地图-2
		var echartMap2 = echarts.init(document.getElementById('echart-map2'));
		var geoCoordMap = {
			    "海门":[121.15,31.89],
			    "鄂尔多斯":[109.781327,39.608266],
			    "招远":[120.38,37.35],
			    "舟山":[122.207216,29.985295],
			    "齐齐哈尔":[123.97,47.33],
			    "盐城":[120.13,33.38],
			    "赤峰":[118.87,42.28],
			    "青岛":[120.33,36.07],
			    "乳山":[121.52,36.89],
			    "金昌":[102.188043,38.520089],
			    "泉州":[118.58,24.93],
			    "莱西":[120.53,36.86],
			    "日照":[119.46,35.42],
			    "胶南":[119.97,35.88],
			    "南通":[121.05,32.08],
			    "拉萨":[91.11,29.97],
			    "云浮":[112.02,22.93],
			    "梅州":[116.1,24.55],
			    "文登":[122.05,37.2],
			    "上海":[121.48,31.22],
			    "攀枝花":[101.718637,26.582347],
			    "威海":[122.1,37.5],
			    "承德":[117.93,40.97],
			    "厦门":[118.1,24.46],
			    "汕尾":[115.375279,22.786211],
			    "潮州":[116.63,23.68],
			    "丹东":[124.37,40.13],
			    "太仓":[121.1,31.45],
			    "曲靖":[103.79,25.51],
			    "烟台":[121.39,37.52],
			    "福州":[119.3,26.08],
			    "瓦房店":[121.979603,39.627114],
			    "即墨":[120.45,36.38],
			    "抚顺":[123.97,41.97],
			    "玉溪":[102.52,24.35],
			    "张家口":[114.87,40.82],
			    "阳泉":[113.57,37.85],
			    "莱州":[119.942327,37.177017],
			    "湖州":[120.1,30.86],
			    "汕头":[116.69,23.39],
			    "昆山":[120.95,31.39],
			    "宁波":[121.56,29.86],
			    "湛江":[110.359377,21.270708],
			    "揭阳":[116.35,23.55],
			    "荣成":[122.41,37.16],
			    "连云港":[119.16,34.59],
			    "葫芦岛":[120.836932,40.711052],
			    "常熟":[120.74,31.64],
			    "东莞":[113.75,23.04],
			    "河源":[114.68,23.73],
			    "淮安":[119.15,33.5],
			    "泰州":[119.9,32.49],
			    "南宁":[108.33,22.84],
			    "营口":[122.18,40.65],
			    "惠州":[114.4,23.09],
			    "江阴":[120.26,31.91],
			    "蓬莱":[120.75,37.8],
			    "韶关":[113.62,24.84],
			    "嘉峪关":[98.289152,39.77313],
			    "广州":[113.23,23.16],
			    "延安":[109.47,36.6],
			    "太原":[112.53,37.87],
			    "清远":[113.01,23.7],
			    "中山":[113.38,22.52],
			    "昆明":[102.73,25.04],
			    "寿光":[118.73,36.86],
			    "盘锦":[122.070714,41.119997],
			    "长治":[113.08,36.18],
			    "深圳":[114.07,22.62],
			    "珠海":[113.52,22.3],
			    "宿迁":[118.3,33.96],
			    "咸阳":[108.72,34.36],
			    "铜川":[109.11,35.09],
			    "平度":[119.97,36.77],
			    "佛山":[113.11,23.05],
			    "海口":[110.35,20.02],
			    "江门":[113.06,22.61],
			    "章丘":[117.53,36.72],
			    "肇庆":[112.44,23.05],
			    "大连":[121.62,38.92],
			    "临汾":[111.5,36.08],
			    "吴江":[120.63,31.16],
			    "石嘴山":[106.39,39.04],
			    "沈阳":[123.38,41.8],
			    "苏州":[120.62,31.32],
			    "茂名":[110.88,21.68],
			    "嘉兴":[120.76,30.77],
			    "长春":[125.35,43.88],
			    "胶州":[120.03336,36.264622],
			    "银川":[106.27,38.47],
			    "张家港":[120.555821,31.875428],
			    "三门峡":[111.19,34.76],
			    "锦州":[121.15,41.13],
			    "南昌":[115.89,28.68],
			    "柳州":[109.4,24.33],
			    "三亚":[109.511909,18.252847],
			    "自贡":[104.778442,29.33903],
			    "吉林":[126.57,43.87],
			    "阳江":[111.95,21.85],
			    "泸州":[105.39,28.91],
			    "西宁":[101.74,36.56],
			    "宜宾":[104.56,29.77],
			    "呼和浩特":[111.65,40.82],
			    "成都":[104.06,30.67],
			    "大同":[113.3,40.12],
			    "镇江":[119.44,32.2],
			    "桂林":[110.28,25.29],
			    "张家界":[110.479191,29.117096],
			    "宜兴":[119.82,31.36],
			    "北海":[109.12,21.49],
			    "西安":[108.95,34.27],
			    "金坛":[119.56,31.74],
			    "东营":[118.49,37.46],
			    "牡丹江":[129.58,44.6],
			    "遵义":[106.9,27.7],
			    "绍兴":[120.58,30.01],
			    "扬州":[119.42,32.39],
			    "常州":[119.95,31.79],
			    "潍坊":[119.1,36.62],
			    "重庆":[106.54,29.59],
			    "台州":[121.420757,28.656386],
			    "南京":[118.78,32.04],
			    "滨州":[118.03,37.36],
			    "贵阳":[106.71,26.57],
			    "无锡":[120.29,31.59],
			    "本溪":[123.73,41.3],
			    "克拉玛依":[84.77,45.59],
			    "渭南":[109.5,34.52],
			    "马鞍山":[118.48,31.56],
			    "宝鸡":[107.15,34.38],
			    "焦作":[113.21,35.24],
			    "句容":[119.16,31.95],
			    "北京":[116.46,39.92],
			    "徐州":[117.2,34.26],
			    "衡水":[115.72,37.72],
			    "包头":[110,40.58],
			    "绵阳":[104.73,31.48],
			    "乌鲁木齐":[87.68,43.77],
			    "枣庄":[117.57,34.86],
			    "杭州":[120.19,30.26],
			    "淄博":[118.05,36.78],
			    "鞍山":[122.85,41.12],
			    "溧阳":[119.48,31.43],
			    "库尔勒":[86.06,41.68],
			    "安阳":[114.35,36.1],
			    "开封":[114.35,34.79],
			    "济南":[117,36.65],
			    "德阳":[104.37,31.13],
			    "温州":[120.65,28.01],
			    "九江":[115.97,29.71],
			    "邯郸":[114.47,36.6],
			    "临安":[119.72,30.23],
			    "兰州":[103.73,36.03],
			    "沧州":[116.83,38.33],
			    "临沂":[118.35,35.05],
			    "南充":[106.110698,30.837793],
			    "天津":[117.2,39.13],
			    "富阳":[119.95,30.07],
			    "泰安":[117.13,36.18],
			    "诸暨":[120.23,29.71],
			    "郑州":[113.65,34.76],
			    "哈尔滨":[126.63,45.75],
			    "聊城":[115.97,36.45],
			    "芜湖":[118.38,31.33],
			    "唐山":[118.02,39.63],
			    "平顶山":[113.29,33.75],
			    "邢台":[114.48,37.05],
			    "德州":[116.29,37.45],
			    "济宁":[116.59,35.38],
			    "荆州":[112.239741,30.335165],
			    "宜昌":[111.3,30.7],
			    "义乌":[120.06,29.32],
			    "丽水":[119.92,28.45],
			    "洛阳":[112.44,34.7],
			    "秦皇岛":[119.57,39.95],
			    "株洲":[113.16,27.83],
			    "石家庄":[114.48,38.03],
			    "莱芜":[117.67,36.19],
			    "常德":[111.69,29.05],
			    "保定":[115.48,38.85],
			    "湘潭":[112.91,27.87],
			    "金华":[119.64,29.12],
			    "岳阳":[113.09,29.37],
			    "长沙":[113,28.21],
			    "衢州":[118.88,28.97],
			    "廊坊":[116.7,39.53],
			    "菏泽":[115.480656,35.23375],
			    "合肥":[117.27,31.86],
			    "武汉":[114.31,30.52],
			    "大庆":[125.03,46.58]
			};

			var convertData = function (data) {
			    var res = [];
			    for (var i = 0; i < data.length; i++) {
			        var geoCoord = geoCoordMap[data[i].name];
			        if (geoCoord) {
			            res.push({
			                name: data[i].name,
			                value: geoCoord.concat(data[i].value)
			            });
			        }
			    }
			    return res;
			};

			echartMap2Option = {
			    backgroundColor: '#404a59',
			    title: {
			        text: '全国主要城市空气质量',
			        subtext: 'data from PM25.in',
			        sublink: 'http://www.pm25.in',
			        x:'center',
			        textStyle: {
			            color: '#fff'
			        }
			    },
			    tooltip: {
			        trigger: 'item',
			        formatter: function (params) {
			            return params.name + ' : ' + params.value[2];
			        }
			    },
			    legend: {
			        orient: 'vertical',
			        y: 'bottom',
			        x:'right',
			        data:['pm2.5'],
			        textStyle: {
			            color: '#fff'
			        }
			    },
			    dataRange: {
			        min: 0,
			        max: 200,
			        calculable: true,
			        color: ['#d94e5d','#eac736','#50a3ba'],
			        textStyle: {
			            color: '#fff'
			        }
			    },
			    geo: {
			        map: 'china',
			        label: {
			            emphasis: {
			                show: false
			            }
			        },
			        itemStyle: {
			            normal: {
			                areaColor: '#323c48',
			                borderColor: '#111'
			            },
			            emphasis: {
			                areaColor: '#2a333d'
			            }
			        }
			    },
			    series: [
			        {
			            name: 'pm2.5',
			            type: 'scatter',
			            coordinateSystem: 'geo',
			            data: convertData([
			                {name: "海门", value: 9},
			                {name: "鄂尔多斯", value: 12},
			                {name: "招远", value: 12},
			                {name: "舟山", value: 12},
			                {name: "齐齐哈尔", value: 14},
			                {name: "盐城", value: 15},
			                {name: "赤峰", value: 16},
			                {name: "青岛", value: 18},
			                {name: "乳山", value: 18},
			                {name: "金昌", value: 19},
			                {name: "泉州", value: 21},
			                {name: "莱西", value: 21},
			                {name: "日照", value: 21},
			                {name: "胶南", value: 22},
			                {name: "南通", value: 23},
			                {name: "拉萨", value: 24},
			                {name: "云浮", value: 24},
			                {name: "梅州", value: 25},
			                {name: "文登", value: 25},
			                {name: "上海", value: 25},
			                {name: "攀枝花", value: 25},
			                {name: "威海", value: 25},
			                {name: "承德", value: 25},
			                {name: "厦门", value: 26},
			                {name: "汕尾", value: 26},
			                {name: "潮州", value: 26},
			                {name: "丹东", value: 27},
			                {name: "太仓", value: 27},
			                {name: "曲靖", value: 27},
			                {name: "烟台", value: 28},
			                {name: "福州", value: 29},
			                {name: "瓦房店", value: 30},
			                {name: "即墨", value: 30},
			                {name: "抚顺", value: 31},
			                {name: "玉溪", value: 31},
			                {name: "张家口", value: 31},
			                {name: "阳泉", value: 31},
			                {name: "莱州", value: 32},
			                {name: "湖州", value: 32},
			                {name: "汕头", value: 32},
			                {name: "昆山", value: 33},
			                {name: "宁波", value: 33},
			                {name: "湛江", value: 33},
			                {name: "揭阳", value: 34},
			                {name: "荣成", value: 34},
			                {name: "连云港", value: 35},
			                {name: "葫芦岛", value: 35},
			                {name: "常熟", value: 36},
			                {name: "东莞", value: 36},
			                {name: "河源", value: 36},
			                {name: "淮安", value: 36},
			                {name: "泰州", value: 36},
			                {name: "南宁", value: 37},
			                {name: "营口", value: 37},
			                {name: "惠州", value: 37},
			                {name: "江阴", value: 37},
			                {name: "蓬莱", value: 37},
			                {name: "韶关", value: 38},
			                {name: "嘉峪关", value: 38},
			                {name: "广州", value: 38},
			                {name: "延安", value: 38},
			                {name: "太原", value: 39},
			                {name: "清远", value: 39},
			                {name: "中山", value: 39},
			                {name: "昆明", value: 39},
			                {name: "寿光", value: 40},
			                {name: "盘锦", value: 40},
			                {name: "长治", value: 41},
			                {name: "深圳", value: 41},
			                {name: "珠海", value: 42},
			                {name: "宿迁", value: 43},
			                {name: "咸阳", value: 43},
			                {name: "铜川", value: 44},
			                {name: "平度", value: 44},
			                {name: "佛山", value: 44},
			                {name: "海口", value: 44},
			                {name: "江门", value: 45},
			                {name: "章丘", value: 45},
			                {name: "肇庆", value: 46},
			                {name: "大连", value: 47},
			                {name: "临汾", value: 47},
			                {name: "吴江", value: 47},
			                {name: "石嘴山", value: 49},
			                {name: "沈阳", value: 50},
			                {name: "苏州", value: 50},
			                {name: "茂名", value: 50},
			                {name: "嘉兴", value: 51},
			                {name: "长春", value: 51},
			                {name: "胶州", value: 52},
			                {name: "银川", value: 52},
			                {name: "张家港", value: 52},
			                {name: "三门峡", value: 53},
			                {name: "锦州", value: 54},
			                {name: "南昌", value: 54},
			                {name: "柳州", value: 54},
			                {name: "三亚", value: 54},
			                {name: "自贡", value: 56},
			                {name: "吉林", value: 56},
			                {name: "阳江", value: 57},
			                {name: "泸州", value: 57},
			                {name: "西宁", value: 57},
			                {name: "宜宾", value: 58},
			                {name: "呼和浩特", value: 58},
			                {name: "成都", value: 58},
			                {name: "大同", value: 58},
			                {name: "镇江", value: 59},
			                {name: "桂林", value: 59},
			                {name: "张家界", value: 59},
			                {name: "宜兴", value: 59},
			                {name: "北海", value: 60},
			                {name: "西安", value: 61},
			                {name: "金坛", value: 62},
			                {name: "东营", value: 62},
			                {name: "牡丹江", value: 63},
			                {name: "遵义", value: 63},
			                {name: "绍兴", value: 63},
			                {name: "扬州", value: 64},
			                {name: "常州", value: 64},
			                {name: "潍坊", value: 65},
			                {name: "重庆", value: 66},
			                {name: "台州", value: 67},
			                {name: "南京", value: 67},
			                {name: "滨州", value: 70},
			                {name: "贵阳", value: 71},
			                {name: "无锡", value: 71},
			                {name: "本溪", value: 71},
			                {name: "克拉玛依", value: 72},
			                {name: "渭南", value: 72},
			                {name: "马鞍山", value: 72},
			                {name: "宝鸡", value: 72},
			                {name: "焦作", value: 75},
			                {name: "句容", value: 75},
			                {name: "北京", value: 79},
			                {name: "徐州", value: 79},
			                {name: "衡水", value: 80},
			                {name: "包头", value: 80},
			                {name: "绵阳", value: 80},
			                {name: "乌鲁木齐", value: 84},
			                {name: "枣庄", value: 84},
			                {name: "杭州", value: 84},
			                {name: "淄博", value: 85},
			                {name: "鞍山", value: 86},
			                {name: "溧阳", value: 86},
			                {name: "库尔勒", value: 86},
			                {name: "安阳", value: 90},
			                {name: "开封", value: 90},
			                {name: "济南", value: 92},
			                {name: "德阳", value: 93},
			                {name: "温州", value: 95},
			                {name: "九江", value: 96},
			                {name: "邯郸", value: 98},
			                {name: "临安", value: 99},
			                {name: "兰州", value: 99},
			                {name: "沧州", value: 100},
			                {name: "临沂", value: 103},
			                {name: "南充", value: 104},
			                {name: "天津", value: 105},
			                {name: "富阳", value: 106},
			                {name: "泰安", value: 112},
			                {name: "诸暨", value: 112},
			                {name: "郑州", value: 113},
			                {name: "哈尔滨", value: 114},
			                {name: "聊城", value: 116},
			                {name: "芜湖", value: 117},
			                {name: "唐山", value: 119},
			                {name: "平顶山", value: 119},
			                {name: "邢台", value: 119},
			                {name: "德州", value: 120},
			                {name: "济宁", value: 120},
			                {name: "荆州", value: 127},
			                {name: "宜昌", value: 130},
			                {name: "义乌", value: 132},
			                {name: "丽水", value: 133},
			                {name: "洛阳", value: 134},
			                {name: "秦皇岛", value: 136},
			                {name: "株洲", value: 143},
			                {name: "石家庄", value: 147},
			                {name: "莱芜", value: 148},
			                {name: "常德", value: 152},
			                {name: "保定", value: 153},
			                {name: "湘潭", value: 154},
			                {name: "金华", value: 157},
			                {name: "岳阳", value: 169},
			                {name: "长沙", value: 175},
			                {name: "衢州", value: 177},
			                {name: "廊坊", value: 193},
			                {name: "菏泽", value: 194},
			                {name: "合肥", value: 229},
			                {name: "武汉", value: 273},
			                {name: "大庆", value: 279}
			            ]),
			            symbolSize: 12,
			            label: {
			                normal: {
			                    show: false
			                },
			                emphasis: {
			                    show: false
			                }
			            },
			            itemStyle: {
			                emphasis: {
			                    borderColor: '#fff',
			                    borderWidth: 1
			                }
			            }
			        }
			    ]
			}
		   	echartMap2.setOption(echartMap2Option);
///散点中国地图-3
			var echartMap3 = echarts.init(document.getElementById('echart-map3'));
			var dataBJ = [
			              [1,55,9,56,0.46,18,6,"良"],
			              [2,25,11,21,0.65,34,9,"优"],
			              [3,56,7,63,0.3,14,5,"良"],
			              [4,33,7,29,0.33,16,6,"优"],
			              [5,42,24,44,0.76,40,16,"优"],
			              [6,82,58,90,1.77,68,33,"良"],
			              [7,74,49,77,1.46,48,27,"良"],
			              [8,78,55,80,1.29,59,29,"良"],
			              [9,267,216,280,4.8,108,64,"重度污染"],
			              [10,185,127,216,2.52,61,27,"中度污染"],
			              [11,39,19,38,0.57,31,15,"优"],
			              [12,41,11,40,0.43,21,7,"优"],
			              [13,64,38,74,1.04,46,22,"良"],
			              [14,108,79,120,1.7,75,41,"轻度污染"],
			              [15,108,63,116,1.48,44,26,"轻度污染"],
			              [16,33,6,29,0.34,13,5,"优"],
			              [17,94,66,110,1.54,62,31,"良"],
			              [18,186,142,192,3.88,93,79,"中度污染"],
			              [19,57,31,54,0.96,32,14,"良"],
			              [20,22,8,17,0.48,23,10,"优"],
			              [21,39,15,36,0.61,29,13,"优"],
			              [22,94,69,114,2.08,73,39,"良"],
			              [23,99,73,110,2.43,76,48,"良"],
			              [24,31,12,30,0.5,32,16,"优"],
			              [25,42,27,43,1,53,22,"优"],
			              [26,154,117,157,3.05,92,58,"中度污染"],
			              [27,234,185,230,4.09,123,69,"重度污染"],
			              [28,160,120,186,2.77,91,50,"中度污染"],
			              [29,134,96,165,2.76,83,41,"轻度污染"],
			              [30,52,24,60,1.03,50,21,"良"],
			              [31,46,5,49,0.28,10,6,"优"]
			          ];

			          var dataGZ = [
			              [1,26,37,27,1.163,27,13,"优"],
			              [2,85,62,71,1.195,60,8,"良"],
			              [3,78,38,74,1.363,37,7,"良"],
			              [4,21,21,36,0.634,40,9,"优"],
			              [5,41,42,46,0.915,81,13,"优"],
			              [6,56,52,69,1.067,92,16,"良"],
			              [7,64,30,28,0.924,51,2,"良"],
			              [8,55,48,74,1.236,75,26,"良"],
			              [9,76,85,113,1.237,114,27,"良"],
			              [10,91,81,104,1.041,56,40,"良"],
			              [11,84,39,60,0.964,25,11,"良"],
			              [12,64,51,101,0.862,58,23,"良"],
			              [13,70,69,120,1.198,65,36,"良"],
			              [14,77,105,178,2.549,64,16,"良"],
			              [15,109,68,87,0.996,74,29,"轻度污染"],
			              [16,73,68,97,0.905,51,34,"良"],
			              [17,54,27,47,0.592,53,12,"良"],
			              [18,51,61,97,0.811,65,19,"良"],
			              [19,91,71,121,1.374,43,18,"良"],
			              [20,73,102,182,2.787,44,19,"良"],
			              [21,73,50,76,0.717,31,20,"良"],
			              [22,84,94,140,2.238,68,18,"良"],
			              [23,93,77,104,1.165,53,7,"良"],
			              [24,99,130,227,3.97,55,15,"良"],
			              [25,146,84,139,1.094,40,17,"轻度污染"],
			              [26,113,108,137,1.481,48,15,"轻度污染"],
			              [27,81,48,62,1.619,26,3,"良"],
			              [28,56,48,68,1.336,37,9,"良"],
			              [29,82,92,174,3.29,0,13,"良"],
			              [30,106,116,188,3.628,101,16,"轻度污染"],
			              [31,118,50,0,1.383,76,11,"轻度污染"]
			          ];

			          var dataSH = [
			              [1,91,45,125,0.82,34,23,"良"],
			              [2,65,27,78,0.86,45,29,"良"],
			              [3,83,60,84,1.09,73,27,"良"],
			              [4,109,81,121,1.28,68,51,"轻度污染"],
			              [5,106,77,114,1.07,55,51,"轻度污染"],
			              [6,109,81,121,1.28,68,51,"轻度污染"],
			              [7,106,77,114,1.07,55,51,"轻度污染"],
			              [8,89,65,78,0.86,51,26,"良"],
			              [9,53,33,47,0.64,50,17,"良"],
			              [10,80,55,80,1.01,75,24,"良"],
			              [11,117,81,124,1.03,45,24,"轻度污染"],
			              [12,99,71,142,1.1,62,42,"良"],
			              [13,95,69,130,1.28,74,50,"良"],
			              [14,116,87,131,1.47,84,40,"轻度污染"],
			              [15,108,80,121,1.3,85,37,"轻度污染"],
			              [16,134,83,167,1.16,57,43,"轻度污染"],
			              [17,79,43,107,1.05,59,37,"良"],
			              [18,71,46,89,0.86,64,25,"良"],
			              [19,97,71,113,1.17,88,31,"良"],
			              [20,84,57,91,0.85,55,31,"良"],
			              [21,87,63,101,0.9,56,41,"良"],
			              [22,104,77,119,1.09,73,48,"轻度污染"],
			              [23,87,62,100,1,72,28,"良"],
			              [24,168,128,172,1.49,97,56,"中度污染"],
			              [25,65,45,51,0.74,39,17,"良"],
			              [26,39,24,38,0.61,47,17,"优"],
			              [27,39,24,39,0.59,50,19,"优"],
			              [28,93,68,96,1.05,79,29,"良"],
			              [29,188,143,197,1.66,99,51,"中度污染"],
			              [30,174,131,174,1.55,108,50,"中度污染"],
			              [31,187,143,201,1.39,89,53,"中度污染"]
			          ];

			          var schema = [
			              {name: 'date', index: 0, text: '日'},
			              {name: 'AQIindex', index: 1, text: 'AQI指数'},
			              {name: 'PM25', index: 2, text: 'PM2.5'},
			              {name: 'PM10', index: 3, text: 'PM10'},
			              {name: 'CO', index: 4, text: '一氧化碳（CO）'},
			              {name: 'NO2', index: 5, text: '二氧化氮（NO2）'},
			              {name: 'SO2', index: 6, text: '二氧化硫（SO2）'}
			          ];


			          var itemStyle = {
			              normal: {
			                  opacity: 0.8,
			                  shadowBlur: 10,
			                  shadowOffsetX: 0,
			                  shadowOffsetY: 0,
			                  shadowColor: 'rgba(0, 0, 0, 0.5)'
			              }
			          };

			          echartMap3Option = {
			              backgroundColor: '#333',
			              color: [
			                  '#dd4444', '#fec42c', '#80F1BE'
			              ],
			              legend: {
			                  y: 'top',
			                  data: ['北京', '上海', '广州'],
			                  textStyle: {
			                      color: '#fff',
			                      fontSize: 16
			                  }
			              },
			              grid: {
			                  x: '10%',
			                  x2: 150,
			                  y: '18%',
			                  y2: '10%'
			              },
			              tooltip: {
			                  padding: 10,
			                  backgroundColor: '#222',
			                  borderColor: '#777',
			                  borderWidth: 1,
			                  formatter: function (obj) {
			                      var value = obj.value;
			                      return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
			                          + obj.seriesName + ' ' + value[0] + '日：'
			                          + value[7]
			                          + '</div>'
			                          + schema[1].text + '：' + value[1] + '<br>'
			                          + schema[2].text + '：' + value[2] + '<br>'
			                          + schema[3].text + '：' + value[3] + '<br>'
			                          + schema[4].text + '：' + value[4] + '<br>'
			                          + schema[5].text + '：' + value[5] + '<br>'
			                          + schema[6].text + '：' + value[6] + '<br>';
			                  }
			              },
			              xAxis: {
			                  type: 'value',
			                  name: '日期',
			                  nameGap: 16,
			                  nameTextStyle: {
			                      color: '#fff',
			                      fontSize: 14
			                  },
			                  max: 31,
			                  splitLine: {
			                      show: false
			                  },
			                  axisLine: {
			                      lineStyle: {
			                          color: '#777'
			                      }
			                  },
			                  axisTick: {
			                      lineStyle: {
			                          color: '#777'
			                      }
			                  },
			                  axisLabel: {
			                      formatter: '{value}',
			                      textStyle: {
			                          color: '#fff'
			                      }
			                  }
			              },
			              yAxis: {
			                  type: 'value',
			                  name: 'AQI指数',
			                  nameLocation: 'end',
			                  nameGap: 20,
			                  nameTextStyle: {
			                      color: '#fff',
			                      fontSize: 16
			                  },
			                  axisLine: {
			                      lineStyle: {
			                          color: '#777'
			                      }
			                  },
			                  axisTick: {
			                      lineStyle: {
			                          color: '#777'
			                      }
			                  },
			                  splitLine: {
			                      show: false
			                  },
			                  axisLabel: {
			                      textStyle: {
			                          color: '#fff'
			                      }
			                  }
			              },
			              visualMap: [
			                  {
			                      left: 'right',
			                      top: '10%',
			                      dimension: 2,
			                      min: 0,
			                      max: 250,
			                      itemWidth: 30,
			                      itemHeight: 120,
			                      calculable: true,
			                      precision: 0.1,
			                      text: ['圆形大小：PM2.5'],
			                      textGap: 30,
			                      textStyle: {
			                          color: '#fff'
			                      },
			                      inRange: {
			                          symbolSize: [10, 70]
			                      },
			                      outOfRange: {
			                          symbolSize: [10, 70],
			                          color: ['rgba(255,255,255,.2)']
			                      },
			                      controller: {
			                          inRange: {
			                              color: ['#c23531']
			                          },
			                          outOfRange: {
			                              color: ['#444']
			                          }
			                      }
			                  },
			                  {
			                      left: 'right',
			                      bottom: '5%',
			                      dimension: 6,
			                      min: 0,
			                      max: 50,
			                      itemHeight: 120,
			                      calculable: true,
			                      precision: 0.1,
			                      text: ['明暗：二氧化硫'],
			                      textGap: 30,
			                      textStyle: {
			                          color: '#fff'
			                      },
			                      inRange: {
			                          colorLightness: [1, 0.5]
			                      },
			                      outOfRange: {
			                          color: ['rgba(255,255,255,.2)']
			                      },
			                      controller: {
			                          inRange: {
			                              color: ['#c23531']
			                          },
			                          outOfRange: {
			                              color: ['#444']
			                          }
			                      }
			                  }
			              ],
			              series: [
			                  {
			                      name: '北京',
			                      type: 'scatter',
			                      itemStyle: itemStyle,
			                      data: dataBJ
			                  },
			                  {
			                      name: '上海',
			                      type: 'scatter',
			                      itemStyle: itemStyle,
			                      data: dataSH
			                  },
			                  {
			                      name: '广州',
			                      type: 'scatter',
			                      itemStyle: itemStyle,
			                      data: dataGZ
			                  }
			              ]
			          };
			          echartMap3.setOption(echartMap3Option);
///散点图中国地图-4
						var echartMap4 = echarts.init(document.getElementById('echart-map4'));
						echartMap4.showLoading();
						$.get('data/asset/data/life-expectancy.json', function (data) {
						    echartMap4.hideLoading();

						    var itemStyle = {
						        normal: {
						            opacity: 0.8,
						            shadowBlur: 10,
						            shadowOffsetX: 0,
						            shadowOffsetY: 0,
						            shadowColor: 'rgba(0, 0, 0, 0.5)'
						        }
						    };

						    var sizeFunction = function (x) {
						        var y = Math.sqrt(x / 5e8) + 0.1;
						        return y * 40;
						    };
						    // Schema:
						    var schema = [
						        {name: 'Income', index: 0, text: '人均收入', unit: '美元'},
						        {name: 'LifeExpectancy', index: 1, text: '人均寿命', unit: '岁'},
						        {name: 'Population', index: 2, text: '总人口', unit: ''},
						        {name: 'Country', index: 3, text: '国家', unit: ''}
						    ];

						    echartMap4Option = {
						        baseOption: {
						            timeline: {
						                axisType: 'category',
						                orient: 'vertical',
						                autoPlay: true,
						                inverse: true,
						                playInterval: 1000,
						                left: null,
						                right: 0,
						                top: 20,
						                bottom: 20,
						                width: 55,
						                height: null,
						                label: {
						                    normal: {
						                        textStyle: {
						                            color: '#999'
						                        }
						                    },
						                    emphasis: {
						                        textStyle: {
						                            color: '#fff'
						                        }
						                    }
						                },
						                symbol: 'none',
						                lineStyle: {
						                    color: '#555'
						                },
						                checkpointStyle: {
						                    color: '#bbb',
						                    borderColor: '#777',
						                    borderWidth: 2
						                },
						                controlStyle: {
						                    showNextBtn: false,
						                    showPrevBtn: false,
						                    normal: {
						                        color: '#666',
						                        borderColor: '#666'
						                    },
						                    emphasis: {
						                        color: '#aaa',
						                        borderColor: '#aaa'
						                    }
						                },
						                data: []
						            },
						            backgroundColor: '#333',
						            title: {
						                'text': data.timeline[0],
						                textAlign: 'center',
						                left: '63%',
						                top: '55%',
						                textStyle: {
						                    fontSize: 100,
						                    color: 'rgba(255, 255, 255, 0.7)'
						                }
						            },
						            tooltip: {
						                padding: 5,
						                backgroundColor: '#222',
						                borderColor: '#777',
						                borderWidth: 1,
						                formatter: function (obj) {
						                    var value = obj.value;
						                    return schema[3].text + '：' + value[3] + '<br>'
						                            + schema[1].text + '：' + value[1] + schema[1].unit + '<br>'
						                            + schema[0].text + '：' + value[0] + schema[0].unit + '<br>'
						                            + schema[2].text + '：' + value[2] + '<br>';
						                }
						            },
						            grid: {
						                left: '12%',
						                right: '110'
						            },
						            xAxis: {
						                type: 'log',
						                name: '人均收入',
						                max: 100000,
						                min: 300,
						                nameGap: 25,
						                nameLocation: 'middle',
						                nameTextStyle: {
						                    fontSize: 18
						                },
						                splitLine: {
						                    show: false
						                },
						                axisTick: {
						                    lineStyle: {
						                        color: '#ccc'
						                    }
						                },
						                axisLine: {
						                    lineStyle: {
						                        color: '#ccc'
						                    }
						                },
						                axisLabel: {
						                    formatter: '{value} $',
						                    textStyle: {
						                        color: '#ccc'
						                    }
						                }
						            },
						            yAxis: {
						                type: 'value',
						                name: '平均寿命',
						                max: 100,
						                nameTextStyle: {
						                    color: '#ccc',
						                    fontSize: 18
						                },
						                axisLine: {
						                    lineStyle: {
						                        color: '#ccc'
						                    }
						                },
						                axisTick: {
						                    lineStyle: {
						                        color: '#ccc'
						                    }
						                },
						                splitLine: {
						                    show: false
						                },
						                axisLabel: {
						                    formatter: '{value} 岁',
						                    textStyle: {
						                        color: '#ccc'
						                    }
						                }
						            },
						            visualMap: [
						                {
						                    show: false,
						                    dimension: 3,
						                    categories: data.counties,
						                    calculable: true,
						                    precision: 0.1,
						                    textGap: 30,
						                    textStyle: {
						                        color: '#ccc'
						                    },
						                    inRange: {
						                        color: ['#bcd3bb', '#e88f70', '#edc1a5', '#9dc5c8', '#e1e8c8', '#7b7c68', '#e5b5b5', '#f0b489', '#928ea8', '#bda29a']
						                    }
						                }
						            ],
						            series: [
						                {
						                    type: 'scatter',
						                    itemStyle: itemStyle,
						                    data: data.series[0],
						                    symbolSize: function(val) {
						                        return sizeFunction(val[2]);
						                    }
						                }
						            ],
						            animationDurationUpdate: 1000,
						            animationEasingUpdate: 'quinticInOut'
						        },
						        options: []
						    };

						    for (var n = 0; n < data.timeline.length; n++) {
						        option.baseOption.timeline.data.push(data.timeline[n]);
						        option.options.push({
						            title: {
						                show: true,
						                'text': data.timeline[n] + ''
						            },
						            series: {
						                name: data.timeline[n],
						                type: 'scatter',
						                itemStyle: itemStyle,
						                data: data.series[n],
						                symbolSize: function(val) {
						                    return sizeFunction(val[2]);
						                }
						            }
						        });
						    }

						    echartMap4.setOption(echartMap4Option);

						});

///散点中国地图-5
						var echartMap5 = echarts.init(document.getElementById('echart-map5'));

						var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
						        '7a', '8a', '9a','10a','11a',
						        '12p', '1p', '2p', '3p', '4p', '5p',
						        '6p', '7p', '8p', '9p', '10p', '11p'];
						var days = ['Saturday', 'Friday', 'Thursday',
						        'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

						var data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]];

						echartMap5Option = {
						    title: {
						        text: 'Punch Card of Github',
						        link: 'https://github.com/pissang/echarts-next/graphs/punch-card'
						    },
						    legend: {
						        data: ['Punch Card'],
						        left: 'right'
						    },
						    polar: {},
						    tooltip: {
						        formatter: function (params) {
						            return params.value[2] + ' commits in ' + hours[params.value[1]] + ' of ' + days[params.value[0]];
						        }
						    },
						    angleAxis: {
						        type: 'category',
						        data: hours,
						        boundaryGap: false,
						        splitLine: {
						            show: true,
						            lineStyle: {
						                color: '#ddd',
						                type: 'dashed'
						            }
						        },
						        axisLine: {
						            show: false
						        }
						    },
						    radiusAxis: {
						        type: 'category',
						        data: days,
						        axisLine: {
						            show: false
						        },
						        axisLabel: {
						            rotate: 45
						        }
						    },
						    series: [{
						        name: 'Punch Card',
						        type: 'scatter',
						        coordinateSystem: 'polar',
						        symbolSize: function (val) {
						            return val[2] * 2;
						        },
						        data: data
						    }]
						};
				        echartMap5.setOption(echartMap5Option);

				        
//折线图-1
				        var echartDcf = echarts.init(document.getElementById('echart-dcf'));
				        var base = +new Date(1968, 9, 3);
				        var oneDay = 24 * 3600 * 1000;
				        var date = [];

				        var data = [Math.random() * 300];

				        for (var i = 1; i < 20000; i++) {
				            var now = new Date(base += oneDay);
				            date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-'));
				            data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
				        }

				        echartDcfOption = {
				            tooltip: {
				                trigger: 'axis'
				            },
				            title: {
				                left: 'center',
				                text: '大数据量折线图',
				            },
				            legend: {
				                top: 'bottom',
				                data:['意向']
				            },
				            toolbox: {
				                show: true,
				                feature: {
				                    dataView: {show: true, readOnly: false},
				                    magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
				                    restore: {show: true},
				                    saveAsImage: {show: true}
				                }
				            },
				            xAxis: {
				                type: 'category',
				                boundaryGap: false,
				                data: date
				            },
				            yAxis: {
				                type: 'value',
				                boundaryGap: [0, '100%']
				            },
				            dataZoom: [{
				                type: 'inside',
				                start: 0,
				                end: 10
				            }, {
				                start: 0,
				                end: 10
				            }],
				            series: [
				                {
				                    name:'模拟数据',
				                    type:'line',
				                    smooth:true,
				                    symbol: 'none',
				                    sampling: 'average',
				                    itemStyle: {
				                        normal: {
				                            color: 'rgb(255, 70, 131)'
				                        }
				                    },
				                    areaStyle: {
				                        normal: {
				                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
				                                offset: 0,
				                                color: 'rgb(255, 158, 68)'
				                            }, {
				                                offset: 1,
				                                color: 'rgb(255, 70, 131)'
				                            }])
				                        }
				                    },
				                    data: data
				                }
				            ]
				        };
				        echartDcf.setOption(echartDcfOption);
				        
///折线图-2
				        var echartDcf1 = echarts.init(document.getElementById('echart-dcf1'));
				        echartDcf1Option = {
				        	    title: {
				        	        text: '堆叠区域图'
				        	    },
				        	    tooltip : {
				        	        trigger: 'axis'
				        	    },
				        	    legend: {
				        	        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
				        	    },
				        	    toolbox: {
				        	        feature: {
				        	            saveAsImage: {}
				        	        }
				        	    },
				        	    grid: {
				        	        left: '3%',
				        	        right: '4%',
				        	        bottom: '3%',
				        	        containLabel: true
				        	    },
				        	    xAxis : [
				        	        {
				        	            type : 'category',
				        	            boundaryGap : false,
				        	            data : ['周一','周二','周三','周四','周五','周六','周日']
				        	        }
				        	    ],
				        	    yAxis : [
				        	        {
				        	            type : 'value'
				        	        }
				        	    ],
				        	    series : [
				        	        {
				        	            name:'邮件营销',
				        	            type:'line',
				        	            stack: '总量',
				        	            areaStyle: {normal: {}},
				        	            data:[120, 132, 101, 134, 90, 230, 210]
				        	        },
				        	        {
				        	            name:'联盟广告',
				        	            type:'line',
				        	            stack: '总量',
				        	            areaStyle: {normal: {}},
				        	            data:[220, 182, 191, 234, 290, 330, 310]
				        	        },
				        	        {
				        	            name:'视频广告',
				        	            type:'line',
				        	            stack: '总量',
				        	            areaStyle: {normal: {}},
				        	            data:[150, 232, 201, 154, 190, 330, 410]
				        	        },
				        	        {
				        	            name:'直接访问',
				        	            type:'line',
				        	            stack: '总量',
				        	            areaStyle: {normal: {}},
				        	            data:[320, 332, 301, 334, 390, 330, 320]
				        	        },
				        	        {
				        	            name:'搜索引擎',
				        	            type:'line',
				        	            stack: '总量',
				        	            label: {
				        	                normal: {
				        	                    show: true,
				        	                    position: 'top'
				        	                }
				        	            },
				        	            areaStyle: {normal: {}},
				        	            data:[820, 932, 901, 934, 1290, 1330, 1320]
				        	        }
				        	    ]
				        	};

				        	echartDcf1.setOption(echartDcf1Option);
				        	
///折线图-3	
				        	var echartDcf2 = echarts.init(document.getElementById('echart-dcf2'));
				        	function init_dcf2(){
				        		function randomData() {
					        	    now = new Date(+now + oneDay);
					        	    value = value + Math.random() * 21 - 10;
					        	    return {
					        	        name: now.toString(),
					        	        value: [
					        	            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-'),
					        	            Math.round(value)
					        	        ]
					        	    }
					        	}
				        		var data = [];
					        	var now = +new Date(1997, 9, 3);
					        	var oneDay = 24 * 3600 * 1000;
					        	var value = Math.random() * 1000;
					        	for (var i = 0; i < 1000; i++) {
					        	    data.push(randomData());
					        	}
					        	echartDcf2Option = {
					        	    title: {
					        	        text: '动态数据 + 时间坐标轴'
					        	    },
					        	    tooltip: {
					        	        trigger: 'axis',
					        	        formatter: function (params) {
					        	            params = params[0];
					        	            var date = new Date(params.name);
					        	            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
					        	        },
					        	        axisPointer: {
					        	            animation: false
					        	        }
					        	    },
					        	    xAxis: {
					        	        type: 'time',
					        	        splitLine: {
					        	            show: false
					        	        }
					        	    },
					        	    yAxis: {
					        	        type: 'value',
					        	        boundaryGap: [0, '100%'],
					        	        splitLine: {
					        	            show: false
					        	        }
					        	    },
					        	    series: [{
					        	        name: '模拟数据',
					        	        type: 'line',
					        	        showSymbol: false,
					        	        hoverAnimation: false,
					        	        data: data
					        	    }]
					        	};
					        	setInterval(function () {
					        		for (var i = 0; i < 5; i++) {
					        	        data.shift();
					        	        data.push(randomData());
					        	    }

					        		echartDcf2.setOption({
					        	        series: [{
					        	            data: data
					        	        }]
					        	    });
					        	}, 1000);
				        	}
				        	init_dcf2();
				        	echartDcf2.setOption(echartDcf2Option);
				        	
///折线图-4
				        	var echartDcf3 = echarts.init(document.getElementById('echart-dcf3'));
				        	echartDcf3Option = {
				        		    title: {
				        		        text: '未来一周气温变化',
				        		        subtext: '纯属虚构'
				        		    },
				        		    tooltip: {
				        		        trigger: 'axis'
				        		    },
				        		    legend: {
				        		        data:['最高气温','最低气温']
				        		    },
				        		    toolbox: {
				        		        show: true,
				        		        feature: {
				        		            dataZoom: {},
				        		            dataView: {readOnly: false},
				        		            magicType: {type: ['line', 'bar']},
				        		            restore: {},
				        		            saveAsImage: {}
				        		        }
				        		    },
				        		    xAxis:  {
				        		        type: 'category',
				        		        boundaryGap: false,
				        		        data: ['周一','周二','周三','周四','周五','周六','周日']
				        		    },
				        		    yAxis: {
				        		        type: 'value',
				        		        axisLabel: {
				        		            formatter: '{value} °C'
				        		        }
				        		    },
				        		    series: [
				        		        {
				        		            name:'最高气温',
				        		            type:'line',
				        		            data:[11, 11, 15, 13, 12, 13, 10],
				        		            markPoint: {
				        		                data: [
				        		                    {type: 'max', name: '最大值'},
				        		                    {type: 'min', name: '最小值'}
				        		                ]
				        		            },
				        		            markLine: {
				        		                data: [
				        		                    {type: 'average', name: '平均值'}
				        		                ]
				        		            }
				        		        },
				        		        {
				        		            name:'最低气温',
				        		            type:'line',
				        		            data:[1, -2, 2, 5, 3, 2, 0],
				        		            markPoint: {
				        		                data: [
				        		                    {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
				        		                ]
				        		            },
				        		            markLine: {
				        		                data: [
				        		                    {type: 'average', name: '平均值'}
				        		                ]
				        		            }
				        		        }
				        		    ]
				        		};
				        	echartDcf3.setOption(echartDcf3Option);
				        	
///柱状图-1
				        	var echartCol = echarts.init(document.getElementById('echart-col'));
				        	echartColOption = {
				        		    tooltip : {
				        		        trigger: 'axis',
				        		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				        		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				        		        }
				        		    },
				        		    legend: {
				        		        data:['利润', '支出', '收入']
				        		    },
				        		    grid: {
				        		        left: '3%',
				        		        right: '4%',
				        		        bottom: '3%',
				        		        containLabel: true
				        		    },
				        		    xAxis : [
				        		        {
				        		            type : 'value'
				        		        }
				        		    ],
				        		    yAxis : [
				        		        {
				        		            type : 'category',
				        		            axisTick : {show: false},
				        		            data : ['周一','周二','周三','周四','周五','周六','周日']
				        		        }
				        		    ],
				        		    series : [
				        		        {
				        		            name:'利润',
				        		            type:'bar',
				        		            label: {
				        		                normal: {
				        		                    show: true,
				        		                    position: 'inside'
				        		                }
				        		            },
				        		            data:[200, 170, 240, 244, 200, 220, 210]
				        		        },
				        		        {
				        		            name:'收入',
				        		            type:'bar',
				        		            stack: '总量',
				        		            label: {
				        		                normal: {
				        		                    show: true
				        		                }
				        		            },
				        		            data:[320, 302, 341, 374, 390, 450, 420]
				        		        },
				        		        {
				        		            name:'支出',
				        		            type:'bar',
				        		            stack: '总量',
				        		            label: {
				        		                normal: {
				        		                    show: true,
				        		                    position: 'left'
				        		                }
				        		            },
				        		            data:[-120, -132, -101, -134, -190, -230, -210]
				        		        }
				        		    ]
				        		};
				        	echartCol.setOption(echartColOption);
///柱状图-2
				        	var echartCol1 = echarts.init(document.getElementById('echart-col1'));
				        	echartCol1Option = {
				        		    tooltip : {
				        		        trigger: 'axis',
				        		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				        		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				        		        }
				        		    },
				        		    legend: {
				        		        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
				        		    },
				        		    grid: {
				        		        left: '3%',
				        		        right: '4%',
				        		        bottom: '3%',
				        		        containLabel: true
				        		    },
				        		    xAxis : [
				        		        {
				        		            type : 'category',
				        		            data : ['周一','周二','周三','周四','周五','周六','周日']
				        		        }
				        		    ],
				        		    yAxis : [
				        		        {
				        		            type : 'value'
				        		        }
				        		    ],
				        		    series : [
				        		        {
				        		            name:'直接访问',
				        		            type:'bar',
				        		            data:[320, 332, 301, 334, 390, 330, 320]
				        		        },
				        		        {
				        		            name:'邮件营销',
				        		            type:'bar',
				        		            stack: '广告',
				        		            data:[120, 132, 101, 134, 90, 230, 210]
				        		        },
				        		        {
				        		            name:'联盟广告',
				        		            type:'bar',
				        		            stack: '广告',
				        		            data:[220, 182, 191, 234, 290, 330, 310]
				        		        },
				        		        {
				        		            name:'视频广告',
				        		            type:'bar',
				        		            stack: '广告',
				        		            data:[150, 232, 201, 154, 190, 330, 410]
				        		        },
				        		        {
				        		            name:'搜索引擎',
				        		            type:'bar',
				        		            data:[862, 1018, 964, 1026, 1679, 1600, 1570],
				        		            markLine : {
				        		                lineStyle: {
				        		                    normal: {
				        		                        type: 'dashed'
				        		                    }
				        		                },
				        		                data : [
				        		                    [{type : 'min'}, {type : 'max'}]
				        		                ]
				        		            }
				        		        },
				        		        {
				        		            name:'百度',
				        		            type:'bar',
				        		            barWidth : 5,
				        		            stack: '搜索引擎',
				        		            data:[620, 732, 701, 734, 1090, 1130, 1120]
				        		        },
				        		        {
				        		            name:'谷歌',
				        		            type:'bar',
				        		            stack: '搜索引擎',
				        		            data:[120, 132, 101, 134, 290, 230, 220]
				        		        },
				        		        {
				        		            name:'必应',
				        		            type:'bar',
				        		            stack: '搜索引擎',
				        		            data:[60, 72, 71, 74, 190, 130, 110]
				        		        },
				        		        {
				        		            name:'其他',
				        		            type:'bar',
				        		            stack: '搜索引擎',
				        		            data:[62, 82, 91, 84, 109, 110, 120]
				        		        }
				        		    ]
				        		};
				        	echartCol1.setOption(echartCol1Option);
///柱状图-3
				        	var echartCol2 = echarts.init(document.getElementById('echart-col2'));
				        	echartCol2Option = {
				        		    title: {
				        		        text: '深圳月最低生活费组成（单位:元）',
				        		        subtext: 'From ExcelHome',
				        		        sublink: 'http://e.weibo.com/1341556070/AjQH99che'
				        		    },
				        		    tooltip : {
				        		        trigger: 'axis',
				        		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				        		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				        		        },
				        		        formatter: function (params) {
				        		            var tar = params[0];
				        		            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
				        		        }
				        		    },
				        		    grid: {
				        		        left: '3%',
				        		        right: '4%',
				        		        bottom: '3%',
				        		        containLabel: true
				        		    },
				        		    xAxis: {
				        		        type : 'category',
				        		        splitLine: {show:false},
				        		        data : ['总费用','房租','水电费','交通费','伙食费','日用品数']
				        		    },
				        		    yAxis: {
				        		        type : 'value'
				        		    },
				        		    series: [
				        		        {
				        		            name: '辅助',
				        		            type: 'bar',
				        		            stack:  '总量',
				        		            itemStyle: {
				        		                normal: {
				        		                    barBorderColor: 'rgba(0,0,0,0)',
				        		                    color: 'rgba(0,0,0,0)'
				        		                },
				        		                emphasis: {
				        		                    barBorderColor: 'rgba(0,0,0,0)',
				        		                    color: 'rgba(0,0,0,0)'
				        		                }
				        		            },
				        		            data: [0, 1700, 1400, 1200, 300, 0]
				        		        },
				        		        {
				        		            name: '生活费',
				        		            type: 'bar',
				        		            stack: '总量',
				        		            label: {
				        		                normal: {
				        		                    show: true,
				        		                    position: 'inside'
				        		                }
				        		            },
				        		            data:[2900, 1200, 300, 200, 900, 300]
				        		        }
				        		    ]
				        		};
				        	echartCol2.setOption(echartCol2Option);
				        	
///柱状图-4
				        	var echartCol4 = echarts.init(document.getElementById('echart-col3'));
				        	echartCol4Option = {
				        		    tooltip : {
				        		        trigger: 'axis',
				        		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
				        		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				        		        }
				        		    },
				        		    legend: {
				        		        data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
				        		    },
				        		    grid: {
				        		        left: '3%',
				        		        right: '4%',
				        		        bottom: '3%',
				        		        containLabel: true
				        		    },
				        		    xAxis:  {
				        		        type: 'value'
				        		    },
				        		    yAxis: {
				        		        type: 'category',
				        		        data: ['周一','周二','周三','周四','周五','周六','周日']
				        		    },
				        		    series: [
				        		        {
				        		            name: '直接访问',
				        		            type: 'bar',
				        		            stack: '总量',
				        		            label: {
				        		                normal: {
				        		                    show: true,
				        		                    position: 'insideRight'
				        		                }
				        		            },
				        		            data: [320, 302, 301, 334, 390, 330, 320]
				        		        },
				        		        {
				        		            name: '邮件营销',
				        		            type: 'bar',
				        		            stack: '总量',
				        		            label: {
				        		                normal: {
				        		                    show: true,
				        		                    position: 'insideRight'
				        		                }
				        		            },
				        		            data: [120, 132, 101, 134, 90, 230, 210]
				        		        },
				        		        {
				        		            name: '联盟广告',
				        		            type: 'bar',
				        		            stack: '总量',
				        		            label: {
				        		                normal: {
				        		                    show: true,
				        		                    position: 'insideRight'
				        		                }
				        		            },
				        		            data: [220, 182, 191, 234, 290, 330, 310]
				        		        },
				        		        {
				        		            name: '视频广告',
				        		            type: 'bar',
				        		            stack: '总量',
				        		            label: {
				        		                normal: {
				        		                    show: true,
				        		                    position: 'insideRight'
				        		                }
				        		            },
				        		            data: [150, 212, 201, 154, 190, 330, 410]
				        		        },
				        		        {
				        		            name: '搜索引擎',
				        		            type: 'bar',
				        		            stack: '总量',
				        		            label: {
				        		                normal: {
				        		                    show: true,
				        		                    position: 'insideRight'
				        		                }
				        		            },
				        		            data: [820, 832, 901, 934, 1290, 1330, 1320]
				        		        }
				        		    ]
				        		};
				        	 echartCol4.setOption(echartCol4Option);
				        	 
///柱状图-5
				        	 var echartCol5 = echarts.init(document.getElementById('echart-col4'));
				        	 echartCol5Option = {
				        			    title: {
				        			        text: '动态数据',
				        			        subtext: '纯属虚构'
				        			    },
				        			    tooltip: {
				        			        trigger: 'axis'
				        			    },
				        			    legend: {
				        			        data:['最新成交价', '预购队列']
				        			    },
				        			    toolbox: {
				        			        show: true,
				        			        feature: {
				        			            dataView: {readOnly: false},
				        			            restore: {},
				        			            saveAsImage: {}
				        			        }
				        			    },
				        			    dataZoom: {
				        			        show: false,
				        			        start: 0,
				        			        end: 100
				        			    },
				        			    xAxis: [
				        			        {
				        			            type: 'category',
				        			            boundaryGap: true,
				        			            data: (function (){
				        			                var now = new Date();
				        			                var res = [];
				        			                var len = 10;
				        			                while (len--) {
				        			                    res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
				        			                    now = new Date(now - 2000);
				        			                }
				        			                return res;
				        			            })()
				        			        },
				        			        {
				        			            type: 'category',
				        			            boundaryGap: true,
				        			            data: (function (){
				        			                var res = [];
				        			                var len = 10;
				        			                while (len--) {
				        			                    res.push(len + 1);
				        			                }
				        			                return res;
				        			            })()
				        			        }
				        			    ],
				        			    yAxis: [
				        			        {
				        			            type: 'value',
				        			            scale: true,
				        			            name: '价格',
				        			            max: 20,
				        			            min: 0,
				        			            boundaryGap: [0.2, 0.2]
				        			        },
				        			        {
				        			            type: 'value',
				        			            scale: true,
				        			            name: '预购量',
				        			            max: 1200,
				        			            min: 0,
				        			            boundaryGap: [0.2, 0.2]
				        			        }
				        			    ],
				        			    series: [
				        			        {
				        			            name:'预购队列',
				        			            type:'bar',
				        			            xAxisIndex: 1,
				        			            yAxisIndex: 1,
				        			            data:(function (){
				        			                var res = [];
				        			                var len = 10;
				        			                while (len--) {
				        			                    res.push(Math.round(Math.random() * 1000));
				        			                }
				        			                return res;
				        			            })()
				        			        },
				        			        {
				        			            name:'最新成交价',
				        			            type:'line',
				        			            data:(function (){
				        			                var res = [];
				        			                var len = 0;
				        			                while (len < 10) {
				        			                    res.push((Math.random()*10 + 5).toFixed(1) - 0);
				        			                    len++;
				        			                }
				        			                return res;
				        			            })()
				        			        }
				        			    ]
				        			};
				        	 		var count=0;
				        			setInterval(function (){
				        			    axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
				        			    var data0 = echartCol5Option.series[0].data;
				        			    var data1 = echartCol5Option.series[1].data;
				        			    data0.shift();
				        			    data0.push(Math.round(Math.random() * 1000));
				        			    data1.shift();
				        			    data1.push((Math.random() * 10 + 5).toFixed(1) - 0);
				        			    echartCol5Option.xAxis[0].data.shift();
				        			    echartCol5Option.xAxis[0].data.push(axisData);
				        			    echartCol5Option.xAxis[1].data.shift();
				        			    echartCol5Option.xAxis[1].data.push(count++);
					        			echartCol5.setOption(echartCol5Option);
				        			}, 2100);
				        			
				        			
	//柱状图-6
				        			var echartCol6 = echarts.init(document.getElementById('echart-col5'));
				        			echartCol6Option = {
				        				    tooltip: {
				        				        trigger: 'axis'
				        				    },
				        				    toolbox: {
				        				        feature: {
				        				            dataView: {show: true, readOnly: false},
				        				            magicType: {show: true, type: ['line', 'bar']},
				        				            restore: {show: true},
				        				            saveAsImage: {show: true}
				        				        }
				        				    },
				        				    legend: {
				        				        data:['蒸发量','降水量','平均温度']
				        				    },
				        				    xAxis: [
				        				        {
				        				            type: 'category',
				        				            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
				        				        }
				        				    ],
				        				    yAxis: [
				        				        {
				        				            type: 'value',
				        				            name: '水量',
				        				            min: 0,
				        				            max: 250,
				        				            interval: 50,
				        				            axisLabel: {
				        				                formatter: '{value} ml'
				        				            }
				        				        },
				        				        {
				        				            type: 'value',
				        				            name: '温度',
				        				            min: 0,
				        				            max: 25,
				        				            interval: 5,
				        				            axisLabel: {
				        				                formatter: '{value} °C'
				        				            }
				        				        }
				        				    ],
				        				    series: [
				        				        {
				        				            name:'蒸发量',
				        				            type:'bar',
				        				            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
				        				        },
				        				        {
				        				            name:'降水量',
				        				            type:'bar',
				        				            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
				        				        },
				        				        {
				        				            name:'平均温度',
				        				            type:'line',
				        				            yAxisIndex: 1,
				        				            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
				        				        }
				        				    ]
				        				};

				        			 echartCol6.setOption(echartCol6Option);
///柱状图-7
				        			 var echartCol7 = echarts.init(document.getElementById('echart-col6'));
				        			 var dataMap = {};
				        			 function dataFormatter(obj) {
				        			     var pList = ['北京','天津','河北','山西','内蒙古','辽宁','吉林','黑龙江','上海','江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东','广西','海南','重庆','四川','贵州','云南','西藏','陕西','甘肃','青海','宁夏','新疆'];
				        			     var temp;
				        			     for (var year = 2002; year <= 2011; year++) {
				        			         var max = 0;
				        			         var sum = 0;
				        			         temp = obj[year];
				        			         for (var i = 0, l = temp.length; i < l; i++) {
				        			             max = Math.max(max, temp[i]);
				        			             sum += temp[i];
				        			             obj[year][i] = {
				        			                 name : pList[i],
				        			                 value : temp[i]
				        			             }
				        			         }
				        			         obj[year + 'max'] = Math.floor(max / 100) * 100;
				        			         obj[year + 'sum'] = sum;
				        			     }
				        			     return obj;
				        			 }

				        			 dataMap.dataGDP = dataFormatter({
				        			     //max : 60000,
				        			     2011:[16251.93,11307.28,24515.76,11237.55,14359.88,22226.7,10568.83,12582,19195.69,49110.27,32318.85,15300.65,17560.18,11702.82,45361.85,26931.03,19632.26,19669.56,53210.28,11720.87,2522.66,10011.37,21026.68,5701.84,8893.12,605.83,12512.3,5020.37,1670.44,2102.21,6610.05],
				        			     2010:[14113.58,9224.46,20394.26,9200.86,11672,18457.27,8667.58,10368.6,17165.98,41425.48,27722.31,12359.33,14737.12,9451.26,39169.92,23092.36,15967.61,16037.96,46013.06,9569.85,2064.5,7925.58,17185.48,4602.16,7224.18,507.46,10123.48,4120.75,1350.43,1689.65,5437.47],
				        			     2009:[12153.03,7521.85,17235.48,7358.31,9740.25,15212.49,7278.75,8587,15046.45,34457.3,22990.35,10062.82,12236.53,7655.18,33896.65,19480.46,12961.1,13059.69,39482.56,7759.16,1654.21,6530.01,14151.28,3912.68,6169.75,441.36,8169.8,3387.56,1081.27,1353.31,4277.05],
				        			     2008:[11115,6719.01,16011.97,7315.4,8496.2,13668.58,6426.1,8314.37,14069.87,30981.98,21462.69,8851.66,10823.01,6971.05,30933.28,18018.53,11328.92,11555,36796.71,7021,1503.06,5793.66,12601.23,3561.56,5692.12,394.85,7314.58,3166.82,1018.62,1203.92,4183.21],
				        			     2007:[9846.81,5252.76,13607.32,6024.45,6423.18,11164.3,5284.69,7104,12494.01,26018.48,18753.73,7360.92,9248.53,5800.25,25776.91,15012.46,9333.4,9439.6,31777.01,5823.41,1254.17,4676.13,10562.39,2884.11,4772.52,341.43,5757.29,2703.98,797.35,919.11,3523.16],
				        			     2006:[8117.78,4462.74,11467.6,4878.61,4944.25,9304.52,4275.12,6211.8,10572.24,21742.05,15718.47,6112.5,7583.85,4820.53,21900.19,12362.79,7617.47,7688.67,26587.76,4746.16,1065.67,3907.23,8690.24,2338.98,3988.14,290.76,4743.61,2277.35,648.5,725.9,3045.26],
				        			     2005:[6969.52,3905.64,10012.11,4230.53,3905.03,8047.26,3620.27,5513.7,9247.66,18598.69,13417.68,5350.17,6554.69,4056.76,18366.87,10587.42,6590.19,6596.1,22557.37,3984.1,918.75,3467.72,7385.1,2005.42,3462.73,248.8,3933.72,1933.98,543.32,612.61,2604.19],
				        			     2004:[6033.21,3110.97,8477.63,3571.37,3041.07,6672,3122.01,4750.6,8072.83,15003.6,11648.7,4759.3,5763.35,3456.7,15021.84,8553.79,5633.24,5641.94,18864.62,3433.5,819.66,3034.58,6379.63,1677.8,3081.91,220.34,3175.58,1688.49,466.1,537.11,2209.09],
				        			     2003:[5007.21,2578.03,6921.29,2855.23,2388.38,6002.54,2662.08,4057.4,6694.23,12442.87,9705.02,3923.11,4983.67,2807.41,12078.15,6867.7,4757.45,4659.99,15844.64,2821.11,713.96,2555.72,5333.09,1426.34,2556.02,185.09,2587.72,1399.83,390.2,445.36,1886.35],
				        			     2002:[4315,2150.76,6018.28,2324.8,1940.94,5458.22,2348.54,3637.2,5741.03,10606.85,8003.67,3519.72,4467.55,2450.48,10275.5,6035.48,4212.82,4151.54,13502.42,2523.73,642.73,2232.86,4725.01,1243.43,2312.82,162.04,2253.39,1232.03,340.65,377.16,1612.6]
				        			 });

				        			 dataMap.dataPI = dataFormatter({
				        			     //max : 4000,
				        			     2011:[136.27,159.72,2905.73,641.42,1306.3,1915.57,1277.44,1701.5,124.94,3064.78,1583.04,2015.31,1612.24,1391.07,3973.85,3512.24,2569.3,2768.03,2665.2,2047.23,659.23,844.52,2983.51,726.22,1411.01,74.47,1220.9,678.75,155.08,184.14,1139.03],
				        			     2010:[124.36,145.58,2562.81,554.48,1095.28,1631.08,1050.15,1302.9,114.15,2540.1,1360.56,1729.02,1363.67,1206.98,3588.28,3258.09,2147,2325.5,2286.98,1675.06,539.83,685.38,2482.89,625.03,1108.38,68.72,988.45,599.28,134.92,159.29,1078.63],
				        			     2009:[118.29,128.85,2207.34,477.59,929.6,1414.9,980.57,1154.33,113.82,2261.86,1163.08,1495.45,1182.74,1098.66,3226.64,2769.05,1795.9,1969.69,2010.27,1458.49,462.19,606.8,2240.61,550.27,1067.6,63.88,789.64,497.05,107.4,127.25,759.74],
				        			     2008:[112.83,122.58,2034.59,313.58,907.95,1302.02,916.72,1088.94,111.8,2100.11,1095.96,1418.09,1158.17,1060.38,3002.65,2658.78,1780,1892.4,1973.05,1453.75,436.04,575.4,2216.15,539.19,1020.56,60.62,753.72,462.27,105.57,118.94,691.07],
				        			     2007:[101.26,110.19,1804.72,311.97,762.1,1133.42,783.8,915.38,101.84,1816.31,986.02,1200.18,1002.11,905.77,2509.14,2217.66,1378,1626.48,1695.57,1241.35,361.07,482.39,2032,446.38,837.35,54.89,592.63,387.55,83.41,97.89,628.72],
				        			     2006:[88.8,103.35,1461.81,276.77,634.94,939.43,672.76,750.14,93.81,1545.05,925.1,1011.03,865.98,786.14,2138.9,1916.74,1140.41,1272.2,1532.17,1032.47,323.48,386.38,1595.48,382.06,724.4,50.9,484.81,334,67.55,79.54,527.8],
				        			     2005:[88.68,112.38,1400,262.42,589.56,882.41,625.61,684.6,90.26,1461.51,892.83,966.5,827.36,727.37,1963.51,1892.01,1082.13,1100.65,1428.27,912.5,300.75,463.4,1481.14,368.94,661.69,48.04,435.77,308.06,65.34,72.07,509.99],
				        			     2004:[87.36,105.28,1370.43,276.3,522.8,798.43,568.69,605.79,83.45,1367.58,814.1,950.5,786.84,664.5,1778.45,1649.29,1020.09,1022.45,1248.59,817.88,278.76,428.05,1379.93,334.5,607.75,44.3,387.88,286.78,60.7,65.33,461.26],
				        			     2003:[84.11,89.91,1064.05,215.19,420.1,615.8,488.23,504.8,81.02,1162.45,717.85,749.4,692.94,560,1480.67,1198.7,798.35,886.47,1072.91,658.78,244.29,339.06,1128.61,298.69,494.6,40.7,302.66,237.91,48.47,55.63,412.9],
				        			     2002:[82.44,84.21,956.84,197.8,374.69,590.2,446.17,474.2,79.68,1110.44,685.2,783.66,664.78,535.98,1390,1288.36,707,847.25,1015.08,601.99,222.89,317.87,1047.95,281.1,463.44,39.75,282.21,215.51,47.31,52.95,305]
				        			 });

				        			 dataMap.dataSI = dataFormatter({
				        			     //max : 26600,
				        			     2011:[3752.48,5928.32,13126.86,6635.26,8037.69,12152.15,5611.48,5962.41,7927.89,25203.28,16555.58,8309.38,9069.2,6390.55,24017.11,15427.08,9815.94,9361.99,26447.38,5675.32,714.5,5543.04,11029.13,2194.33,3780.32,208.79,6935.59,2377.83,975.18,1056.15,3225.9],
				        			     2010:[3388.38,4840.23,10707.68,5234,6367.69,9976.82,4506.31,5025.15,7218.32,21753.93,14297.93,6436.62,7522.83,5122.88,21238.49,13226.38,7767.24,7343.19,23014.53,4511.68,571,4359.12,8672.18,1800.06,3223.49,163.92,5446.1,1984.97,744.63,827.91,2592.15],
				        			     2009:[2855.55,3987.84,8959.83,3993.8,5114,7906.34,3541.92,4060.72,6001.78,18566.37,11908.49,4905.22,6005.3,3919.45,18901.83,11010.5,6038.08,5687.19,19419.7,3381.54,443.43,3448.77,6711.87,1476.62,2582.53,136.63,4236.42,1527.24,575.33,662.32,1929.59],
				        			     2008:[2626.41,3709.78,8701.34,4242.36,4376.19,7158.84,3097.12,4319.75,6085.84,16993.34,11567.42,4198.93,5318.44,3554.81,17571.98,10259.99,5082.07,5028.93,18502.2,3037.74,423.55,3057.78,5823.39,1370.03,2452.75,115.56,3861.12,1470.34,557.12,609.98,2070.76],
				        			     2007:[2509.4,2892.53,7201.88,3454.49,3193.67,5544.14,2475.45,3695.58,5571.06,14471.26,10154.25,3370.96,4476.42,2975.53,14647.53,8282.83,4143.06,3977.72,16004.61,2425.29,364.26,2368.53,4648.79,1124.79,2038.39,98.48,2986.46,1279.32,419.03,455.04,1647.55],
				        			     2006:[2191.43,2457.08,6110.43,2755.66,2374.96,4566.83,1915.29,3365.31,4969.95,12282.89,8511.51,2711.18,3695.04,2419.74,12574.03,6724.61,3365.08,3187.05,13469.77,1878.56,308.62,1871.65,3775.14,967.54,1705.83,80.1,2452.44,1043.19,331.91,351.58,1459.3],
				        			     2005:[2026.51,2135.07,5271.57,2357.04,1773.21,3869.4,1580.83,2971.68,4381.2,10524.96,7164.75,2245.9,3175.92,1917.47,10478.62,5514.14,2852.12,2612.57,11356.6,1510.68,240.83,1564,3067.23,821.16,1426.42,63.52,1951.36,838.56,264.61,281.05,1164.79],
				        			     2004:[1853.58,1685.93,4301.73,1919.4,1248.27,3061.62,1329.68,2487.04,3892.12,8437.99,6250.38,1844.9,2770.49,1566.4,8478.69,4182.1,2320.6,2190.54,9280.73,1253.7,205.6,1376.91,2489.4,681.5,1281.63,52.74,1553.1,713.3,211.7,244.05,914.47],
				        			     2003:[1487.15,1337.31,3417.56,1463.38,967.49,2898.89,1098.37,2084.7,3209.02,6787.11,5096.38,1535.29,2340.82,1204.33,6485.05,3310.14,1956.02,1777.74,7592.78,984.08,175.82,1135.31,2014.8,569.37,1047.66,47.64,1221.17,572.02,171.92,194.27,719.54],
				        			     2002:[1249.99,1069.08,2911.69,1134.31,754.78,2609.85,943.49,1843.6,2622.45,5604.49,4090.48,1337.04,2036.97,941.77,5184.98,2768.75,1709.89,1523.5,6143.4,846.89,148.88,958.87,1733.38,481.96,934.88,32.72,1007.56,501.69,144.51,153.06,603.15]
				        			 });

				        			 dataMap.dataTI = dataFormatter({
				        			     //max : 25000,
				        			     2011:[12363.18,5219.24,8483.17,3960.87,5015.89,8158.98,3679.91,4918.09,11142.86,20842.21,14180.23,4975.96,6878.74,3921.2,17370.89,7991.72,7247.02,7539.54,24097.7,3998.33,1148.93,3623.81,7014.04,2781.29,3701.79,322.57,4355.81,1963.79,540.18,861.92,2245.12],
				        			     2010:[10600.84,4238.65,7123.77,3412.38,4209.03,6849.37,3111.12,4040.55,9833.51,17131.45,12063.82,4193.69,5850.62,3121.4,14343.14,6607.89,6053.37,6369.27,20711.55,3383.11,953.67,2881.08,6030.41,2177.07,2892.31,274.82,3688.93,1536.5,470.88,702.45,1766.69],
				        			     2009:[9179.19,3405.16,6068.31,2886.92,3696.65,5891.25,2756.26,3371.95,8930.85,13629.07,9918.78,3662.15,5048.49,2637.07,11768.18,5700.91,5127.12,5402.81,18052.59,2919.13,748.59,2474.44,5198.8,1885.79,2519.62,240.85,3143.74,1363.27,398.54,563.74,1587.72],
				        			     2008:[8375.76,2886.65,5276.04,2759.46,3212.06,5207.72,2412.26,2905.68,7872.23,11888.53,8799.31,3234.64,4346.4,2355.86,10358.64,5099.76,4466.85,4633.67,16321.46,2529.51,643.47,2160.48,4561.69,1652.34,2218.81,218.67,2699.74,1234.21,355.93,475,1421.38],
				        			     2007:[7236.15,2250.04,4600.72,2257.99,2467.41,4486.74,2025.44,2493.04,6821.11,9730.91,7613.46,2789.78,3770,1918.95,8620.24,4511.97,3812.34,3835.4,14076.83,2156.76,528.84,1825.21,3881.6,1312.94,1896.78,188.06,2178.2,1037.11,294.91,366.18,1246.89],
				        			     2006:[5837.55,1902.31,3895.36,1846.18,1934.35,3798.26,1687.07,2096.35,5508.48,7914.11,6281.86,2390.29,3022.83,1614.65,7187.26,3721.44,3111.98,3229.42,11585.82,1835.12,433.57,1649.2,3319.62,989.38,1557.91,159.76,1806.36,900.16,249.04,294.78,1058.16],
				        			     2005:[4854.33,1658.19,3340.54,1611.07,1542.26,3295.45,1413.83,1857.42,4776.2,6612.22,5360.1,2137.77,2551.41,1411.92,5924.74,3181.27,2655.94,2882.88,9772.5,1560.92,377.17,1440.32,2836.73,815.32,1374.62,137.24,1546.59,787.36,213.37,259.49,929.41],
				        			     2004:[4092.27,1319.76,2805.47,1375.67,1270,2811.95,1223.64,1657.77,4097.26,5198.03,4584.22,1963.9,2206.02,1225.8,4764.7,2722.4,2292.55,2428.95,8335.3,1361.92,335.3,1229.62,2510.3,661.8,1192.53,123.3,1234.6,688.41,193.7,227.73,833.36],
				        			     2003:[3435.95,1150.81,2439.68,1176.65,1000.79,2487.85,1075.48,1467.9,3404.19,4493.31,3890.79,1638.42,1949.91,1043.08,4112.43,2358.86,2003.08,1995.78,7178.94,1178.25,293.85,1081.35,2189.68,558.28,1013.76,96.76,1063.89,589.91,169.81,195.46,753.91],
				        			     2002:[2982.57,997.47,2149.75,992.69,811.47,2258.17,958.88,1319.4,3038.9,3891.92,3227.99,1399.02,1765.8,972.73,3700.52,1978.37,1795.93,1780.79,6343.94,1074.85,270.96,956.12,1943.68,480.37,914.5,89.56,963.62,514.83,148.83,171.14,704.5]
				        			 });

				        			 dataMap.dataEstate = dataFormatter({
				        			     //max : 3600,
				        			     2011:[1074.93,411.46,918.02,224.91,384.76,876.12,238.61,492.1,1019.68,2747.89,1677.13,634.92,911.16,402.51,1838.14,987,634.67,518.04,3321.31,465.68,208.71,396.28,620.62,160.3,222.31,17.44,398.03,134.25,29.05,79.01,176.22],
				        			     2010:[1006.52,377.59,697.79,192,309.25,733.37,212.32,391.89,1002.5,2600.95,1618.17,532.17,679.03,340.56,1622.15,773.23,564.41,464.21,2813.95,405.79,188.33,266.38,558.56,139.64,223.45,14.54,315.95,110.02,25.41,60.53,143.44],
				        			     2009:[1062.47,308.73,612.4,173.31,286.65,605.27,200.14,301.18,1237.56,2025.39,1316.84,497.94,656.61,305.9,1329.59,622.98,546.11,400.11,2470.63,348.98,121.76,229.09,548.14,136.15,205.14,13.28,239.92,101.37,23.05,47.56,115.23],
				        			     2008:[844.59,227.88,513.81,166.04,273.3,500.81,182.7,244.47,939.34,1626.13,1052.03,431.27,506.98,281.96,1104.95,512.42,526.88,340.07,2057.45,282.96,95.6,191.21,453.63,104.81,195.48,15.08,193.27,93.8,19.96,38.85,89.79],
				        			     2007:[821.5,183.44,467.97,134.12,191.01,410.43,153.03,225.81,958.06,1365.71,981.42,366.57,511.5,225.96,953.69,447.44,409.65,301.8,2029.77,239.45,67.19,196.06,376.84,93.19,193.59,13.24,153.98,83.52,16.98,29.49,91.28],
				        			     2006:[658.3,156.64,397.14,117.01,136.5,318.54,131.01,194.7,773.61,1017.91,794.41,281.98,435.22,184.67,786.51,348.7,294.73,254.81,1722.07,192.2,44.45,158.2,336.2,80.24,165.92,11.92,125.2,73.21,15.17,25.53,68.9],
				        			     2005:[493.73,122.67,330.87,106,98.75,256.77,112.29,163.34,715.97,799.73,688.86,231.66,331.8,171.88,664.9,298.19,217.17,215.63,1430.37,165.05,38.2,143.88,286.23,76.38,148.69,10.02,108.62,63.78,14.1,22.97,55.79],
				        			     2004:[436.11,106.14,231.08,95.1,73.81,203.1,97.93,137.74,666.3,534.17,587.83,188.28,248.44,167.2,473.27,236.44,204.8,191.5,1103.75,122.52,30.64,129.12,264.3,68.3,116.54,5.8,95.9,56.84,13,20.78,53.55],
				        			     2003:[341.88,92.31,185.19,78.73,61.05,188.49,91.99,127.2,487.82,447.47,473.16,162.63,215.84,138.02,418.21,217.58,176.8,186.49,955.66,100.93,25.14,113.69,231.72,59.86,103.79,4.35,83.9,48.09,11.41,16.85,47.84],
				        			     2002:[298.02,73.04,140.89,65.83,51.48,130.94,76.11,118.7,384.86,371.09,360.63,139.18,188.09,125.27,371.13,199.31,145.17,165.29,808.16,82.83,21.45,90.48,210.82,53.49,95.68,3.42,77.68,41.52,9.74,13.46,43.04]
				        			 });

				        			 dataMap.dataFinancial = dataFormatter({
				        			     //max : 3200,
				        			     2011:[2215.41,756.5,746.01,519.32,447.46,755.57,207.65,370.78,2277.4,2600.11,2730.29,503.85,862.41,357.44,1640.41,868.2,674.57,501.09,2916.13,445.37,105.24,704.66,868.15,297.27,456.23,31.7,432.11,145.05,62.56,134.18,288.77],
				        			     2010:[1863.61,572.99,615.42,448.3,346.44,639.27,190.12,304.59,1950.96,2105.92,2326.58,396.17,767.58,241.49,1361.45,697.68,561.27,463.16,2658.76,384.53,78.12,496.56,654.7,231.51,375.08,27.08,384.75,100.54,54.53,97.87,225.2],
				        			     2009:[1603.63,461.2,525.67,361.64,291.1,560.2,180.83,227.54,1804.28,1596.98,1899.33,359.6,612.2,165.1,1044.9,499.92,479.11,402.57,2283.29,336.82,65.73,389.97,524.63,194.44,351.74,23.17,336.21,88.27,45.63,75.54,198.87],
				        			     2008:[1519.19,368.1,420.74,290.91,219.09,455.07,147.24,177.43,1414.21,1298.48,1653.45,313.81,497.65,130.57,880.28,413.83,393.05,334.32,1972.4,249.01,47.33,303.01,411.14,151.55,277.66,22.42,287.16,72.49,36.54,64.8,171.97],
				        			     2007:[1302.77,288.17,347.65,218.73,148.3,386.34,126.03,155.48,1209.08,1054.25,1251.43,223.85,385.84,101.34,734.9,302.31,337.27,260.14,1705.08,190.73,34.43,247.46,359.11,122.25,168.55,11.51,231.03,61.6,27.67,51.05,149.22],
				        			     2006:[982.37,186.87,284.04,169.63,108.21,303.41,100.75,74.17,825.2,653.25,906.37,166.01,243.9,79.75,524.94,219.72,174.99,204.72,899.91,129.14,16.37,213.7,299.5,89.43,143.62,6.44,152.25,50.51,23.69,36.99,99.25],
				        			     2005:[840.2,147.4,213.47,135.07,72.52,232.85,83.63,35.03,675.12,492.4,686.32,127.05,186.12,69.55,448.36,181.74,127.32,162.37,661.81,91.93,13.16,185.18,262.26,73.67,130.5,7.57,127.58,44.73,20.36,32.25,80.34],
				        			     2004:[713.79,136.97,209.1,110.29,55.89,188.04,77.17,32.2,612.45,440.5,523.49,94.1,171,65.1,343.37,170.82,118.85,118.64,602.68,74,11.56,162.38,236.5,60.3,118.4,5.4,90.1,42.99,19,27.92,70.3],
				        			     2003:[635.56,112.79,199.87,118.48,55.89,145.38,73.15,32.2,517.97,392.11,451.54,87.45,150.09,64.31,329.71,165.11,107.31,99.35,534.28,61.59,10.68,147.04,206.24,48.01,105.48,4.74,77.87,42.31,17.98,24.8,64.92],
				        			     2002:[561.91,76.86,179.6,124.1,48.39,137.18,75.45,31.6,485.25,368.86,347.53,81.85,138.28,76.51,310.07,158.77,96.95,92.43,454.65,35.86,10.08,134.52,183.13,41.45,102.39,2.81,67.3,42.08,16.75,21.45,52.18]
				        			 });


				        			 echartCol7Option = {
				        			     baseOption: {
				        			         timeline: {
				        			             // y: 0,
				        			             axisType: 'category',
				        			             // realtime: false,
				        			             // loop: false,
				        			             autoPlay: true,
				        			             // currentIndex: 2,
				        			             playInterval: 1000,
				        			             // controlStyle: {
				        			             //     position: 'left'
				        			             // },
				        			             data: [
				        			                 '2002-01-01','2003-01-01','2004-01-01',
				        			                 {
				        			                     value: '2005-01-01',
				        			                     tooltip: {
				        			                         formatter: '{b} GDP达到一个高度'
				        			                     },
				        			                     symbol: 'diamond',
				        			                     symbolSize: 16
				        			                 },
				        			                 '2006-01-01', '2007-01-01','2008-01-01','2009-01-01','2010-01-01',
				        			                 {
				        			                     value: '2011-01-01',
				        			                     tooltip: {
				        			                         formatter: function (params) {
				        			                             return params.name + 'GDP达到又一个高度';
				        			                         }
				        			                     },
				        			                     symbol: 'diamond',
				        			                     symbolSize: 18
				        			                 },
				        			             ],
				        			             label: {
				        			                 formatter : function(s) {
				        			                     return (new Date(s)).getFullYear();
				        			                 }
				        			             }
				        			         },
				        			         title: {
				        			             subtext: '数据来自国家统计局'
				        			         },
				        			         tooltip: {},
				        			         legend: {
				        			             x: 'right',
				        			             data: ['第一产业', '第二产业', '第三产业', 'GDP', '金融', '房地产'],
				        			             selected: {
				        			                 'GDP': false, '金融': false, '房地产': false
				        			             }
				        			         },
				        			         calculable : true,
				        			         grid: {
				        			             top: 80,
				        			             bottom: 100
				        			         },
				        			         xAxis: [
				        			             {
				        			                 'type':'category',
				        			                 'axisLabel':{'interval':0},
				        			                 'data':[
				        			                     '北京','\n天津','河北','\n山西','内蒙古','\n辽宁','吉林','\n黑龙江',
				        			                     '上海','\n江苏','浙江','\n安徽','福建','\n江西','山东','\n河南',
				        			                     '湖北','\n湖南','广东','\n广西','海南','\n重庆','四川','\n贵州',
				        			                     '云南','\n西藏','陕西','\n甘肃','青海','\n宁夏','新疆'
				        			                 ],
				        			                 splitLine: {show: false}
				        			             }
				        			         ],
				        			         yAxis: [
				        			             {
				        			                 type: 'value',
				        			                 name: 'GDP（亿元）',
				        			                 // max: 53500
				        			                 max: 30000
				        			             }
				        			         ],
				        			         series: [
				        			             {name: 'GDP', type: 'bar'},
				        			             {name: '金融', type: 'bar'},
				        			             {name: '房地产', type: 'bar'},
				        			             {name: '第一产业', type: 'bar'},
				        			             {name: '第二产业', type: 'bar'},
				        			             {name: '第三产业', type: 'bar'},
				        			             {
				        			                 name: 'GDP占比',
				        			                 type: 'pie',
				        			                 center: ['75%', '35%'],
				        			                 radius: '28%'
				        			             }
				        			         ]
				        			     },
				        			     options: [
				        			         {
				        			             title: {text: '2002全国宏观经济指标'},
				        			             series: [
				        			                 {data: dataMap.dataGDP['2002']},
				        			                 {data: dataMap.dataFinancial['2002']},
				        			                 {data: dataMap.dataEstate['2002']},
				        			                 {data: dataMap.dataPI['2002']},
				        			                 {data: dataMap.dataSI['2002']},
				        			                 {data: dataMap.dataTI['2002']},
				        			                 {data: [
				        			                     {name: '第一产业', value: dataMap.dataPI['2002sum']},
				        			                     {name: '第二产业', value: dataMap.dataSI['2002sum']},
				        			                     {name: '第三产业', value: dataMap.dataTI['2002sum']}
				        			                 ]}
				        			             ]
				        			         },
				        			         {
				        			             title : {text: '2003全国宏观经济指标'},
				        			             series : [
				        			                 {data: dataMap.dataGDP['2003']},
				        			                 {data: dataMap.dataFinancial['2003']},
				        			                 {data: dataMap.dataEstate['2003']},
				        			                 {data: dataMap.dataPI['2003']},
				        			                 {data: dataMap.dataSI['2003']},
				        			                 {data: dataMap.dataTI['2003']},
				        			                 {data: [
				        			                     {name: '第一产业', value: dataMap.dataPI['2003sum']},
				        			                     {name: '第二产业', value: dataMap.dataSI['2003sum']},
				        			                     {name: '第三产业', value: dataMap.dataTI['2003sum']}
				        			                 ]}
				        			             ]
				        			         },
				        			         {
				        			             title : {text: '2004全国宏观经济指标'},
				        			             series : [
				        			                 {data: dataMap.dataGDP['2004']},
				        			                 {data: dataMap.dataFinancial['2004']},
				        			                 {data: dataMap.dataEstate['2004']},
				        			                 {data: dataMap.dataPI['2004']},
				        			                 {data: dataMap.dataSI['2004']},
				        			                 {data: dataMap.dataTI['2004']},
				        			                 {data: [
				        			                     {name: '第一产业', value: dataMap.dataPI['2004sum']},
				        			                     {name: '第二产业', value: dataMap.dataSI['2004sum']},
				        			                     {name: '第三产业', value: dataMap.dataTI['2004sum']}
				        			                 ]}
				        			             ]
				        			         },
				        			         {
				        			             title : {text: '2005全国宏观经济指标'},
				        			             series : [
				        			                 {data: dataMap.dataGDP['2005']},
				        			                 {data: dataMap.dataFinancial['2005']},
				        			                 {data: dataMap.dataEstate['2005']},
				        			                 {data: dataMap.dataPI['2005']},
				        			                 {data: dataMap.dataSI['2005']},
				        			                 {data: dataMap.dataTI['2005']},
				        			                 {data: [
				        			                     {name: '第一产业', value: dataMap.dataPI['2005sum']},
				        			                     {name: '第二产业', value: dataMap.dataSI['2005sum']},
				        			                     {name: '第三产业', value: dataMap.dataTI['2005sum']}
				        			                 ]}
				        			             ]
				        			         },
				        			         {
				        			             title : {text: '2006全国宏观经济指标'},
				        			             series : [
				        			                 {data: dataMap.dataGDP['2006']},
				        			                 {data: dataMap.dataFinancial['2006']},
				        			                 {data: dataMap.dataEstate['2006']},
				        			                 {data: dataMap.dataPI['2006']},
				        			                 {data: dataMap.dataSI['2006']},
				        			                 {data: dataMap.dataTI['2006']},
				        			                 {data: [
				        			                     {name: '第一产业', value: dataMap.dataPI['2006sum']},
				        			                     {name: '第二产业', value: dataMap.dataSI['2006sum']},
				        			                     {name: '第三产业', value: dataMap.dataTI['2006sum']}
				        			                 ]}
				        			             ]
				        			         },
				        			         {
				        			             title : {text: '2007全国宏观经济指标'},
				        			             series : [
				        			                 {data: dataMap.dataGDP['2007']},
				        			                 {data: dataMap.dataFinancial['2007']},
				        			                 {data: dataMap.dataEstate['2007']},
				        			                 {data: dataMap.dataPI['2007']},
				        			                 {data: dataMap.dataSI['2007']},
				        			                 {data: dataMap.dataTI['2007']},
				        			                 {data: [
				        			                     {name: '第一产业', value: dataMap.dataPI['2007sum']},
				        			                     {name: '第二产业', value: dataMap.dataSI['2007sum']},
				        			                     {name: '第三产业', value: dataMap.dataTI['2007sum']}
				        			                 ]}
				        			             ]
				        			         },
				        			         {
				        			             title : {text: '2008全国宏观经济指标'},
				        			             series : [
				        			                 {data: dataMap.dataGDP['2008']},
				        			                 {data: dataMap.dataFinancial['2008']},
				        			                 {data: dataMap.dataEstate['2008']},
				        			                 {data: dataMap.dataPI['2008']},
				        			                 {data: dataMap.dataSI['2008']},
				        			                 {data: dataMap.dataTI['2008']},
				        			                 {data: [
				        			                     {name: '第一产业', value: dataMap.dataPI['2008sum']},
				        			                     {name: '第二产业', value: dataMap.dataSI['2008sum']},
				        			                     {name: '第三产业', value: dataMap.dataTI['2008sum']}
				        			                 ]}
				        			             ]
				        			         },
				        			         {
				        			             title : {text: '2009全国宏观经济指标'},
				        			             series : [
				        			                 {data: dataMap.dataGDP['2009']},
				        			                 {data: dataMap.dataFinancial['2009']},
				        			                 {data: dataMap.dataEstate['2009']},
				        			                 {data: dataMap.dataPI['2009']},
				        			                 {data: dataMap.dataSI['2009']},
				        			                 {data: dataMap.dataTI['2009']},
				        			                 {data: [
				        			                     {name: '第一产业', value: dataMap.dataPI['2009sum']},
				        			                     {name: '第二产业', value: dataMap.dataSI['2009sum']},
				        			                     {name: '第三产业', value: dataMap.dataTI['2009sum']}
				        			                 ]}
				        			             ]
				        			         },
				        			         {
				        			             title : {text: '2010全国宏观经济指标'},
				        			             series : [
				        			                 {data: dataMap.dataGDP['2010']},
				        			                 {data: dataMap.dataFinancial['2010']},
				        			                 {data: dataMap.dataEstate['2010']},
				        			                 {data: dataMap.dataPI['2010']},
				        			                 {data: dataMap.dataSI['2010']},
				        			                 {data: dataMap.dataTI['2010']},
				        			                 {data: [
				        			                     {name: '第一产业', value: dataMap.dataPI['2010sum']},
				        			                     {name: '第二产业', value: dataMap.dataSI['2010sum']},
				        			                     {name: '第三产业', value: dataMap.dataTI['2010sum']}
				        			                 ]}
				        			             ]
				        			         },
				        			         {
				        			             title : {text: '2011全国宏观经济指标'},
				        			             series : [
				        			                 {data: dataMap.dataGDP['2011']},
				        			                 {data: dataMap.dataFinancial['2011']},
				        			                 {data: dataMap.dataEstate['2011']},
				        			                 {data: dataMap.dataPI['2011']},
				        			                 {data: dataMap.dataSI['2011']},
				        			                 {data: dataMap.dataTI['2011']},
				        			                 {data: [
				        			                     {name: '第一产业', value: dataMap.dataPI['2011sum']},
				        			                     {name: '第二产业', value: dataMap.dataSI['2011sum']},
				        			                     {name: '第三产业', value: dataMap.dataTI['2011sum']}
				        			                 ]}
				        			             ]
				        			         }
				        			     ]
				        			 };
				        			 
							         echartCol7.setOption(echartCol7Option);
							      
///饼装图-1
							         var echartPan = echarts.init(document.getElementById('echart-pan'));
							         echartPanOption = {
							        		    tooltip: {
							        		        trigger: 'item',
							        		        formatter: "{a} <br/>{b}: {c} ({d}%)"
							        		    },
							        		    legend: {
							        		        orient: 'vertical',
							        		        x: 'left',
							        		        data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
							        		    },
							        		    series: [
							        		        {
							        		            name:'访问来源',
							        		            type:'pie',
							        		            selectedMode: 'single',
							        		            radius: [0, '30%'],

							        		            label: {
							        		                normal: {
							        		                    position: 'inner'
							        		                }
							        		            },
							        		            labelLine: {
							        		                normal: {
							        		                    show: false
							        		                }
							        		            },
							        		            data:[
							        		                {value:335, name:'直达', selected:true},
							        		                {value:679, name:'营销广告'},
							        		                {value:1548, name:'搜索引擎'}
							        		            ]
							        		        },
							        		        {
							        		            name:'访问来源',
							        		            type:'pie',
							        		            radius: ['40%', '55%'],

							        		            data:[
							        		                {value:335, name:'直达'},
							        		                {value:310, name:'邮件营销'},
							        		                {value:234, name:'联盟广告'},
							        		                {value:135, name:'视频广告'},
							        		                {value:1048, name:'百度'},
							        		                {value:251, name:'谷歌'},
							        		                {value:147, name:'必应'},
							        		                {value:102, name:'其他'}
							        		            ]
							        		        }
							        		    ]
							        		};
							         echartPan.setOption(echartPanOption);
							  
///饼状图-2
							         var echartPan1 = echarts.init(document.getElementById('echart-pan1'));
							         echartPan1Option = {
							        		    title : {
							        		        text: '某站点用户访问来源',
							        		        subtext: '纯属虚构',
							        		        x:'center'
							        		    },
							        		    tooltip : {
							        		        trigger: 'item',
							        		        formatter: "{a} <br/>{b} : {c} ({d}%)"
							        		    },
							        		    legend: {
							        		        orient: 'vertical',
							        		        left: 'left',
							        		        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
							        		    },
							        		    series : [
							        		        {
							        		            name: '访问来源',
							        		            type: 'pie',
							        		            radius : '55%',
							        		            center: ['50%', '60%'],
							        		            data:[
							        		                {value:335, name:'直接访问'},
							        		                {value:310, name:'邮件营销'},
							        		                {value:234, name:'联盟广告'},
							        		                {value:135, name:'视频广告'},
							        		                {value:1548, name:'搜索引擎'}
							        		            ],
							        		            itemStyle: {
							        		                emphasis: {
							        		                    shadowBlur: 10,
							        		                    shadowOffsetX: 0,
							        		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
							        		                }
							        		            }
							        		        }
							        		    ]
							        		};
							         echartPan1.setOption(echartPan1Option);
							         
///雷达-1
							         var echartRadar = echarts.init(document.getElementById('echart-radar'));
							         echartRadarOption = {
							        		    title: {
							        		        text: '基础雷达图'
							        		    },
							        		    tooltip: {},
							        		    legend: {
							        		        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
							        		    },
							        		    radar: {
							        		        // shape: 'circle',
							        		        indicator: [
							        		           { name: '销售（sales）', max: 6500},
							        		           { name: '管理（Administration）', max: 16000},
							        		           { name: '信息技术（Information Techology）', max: 30000},
							        		           { name: '客服（Customer Support）', max: 38000},
							        		           { name: '研发（Development）', max: 52000},
							        		           { name: '市场（Marketing）', max: 25000}
							        		        ]
							        		    },
							        		    series: [{
							        		        name: '预算 vs 开销（Budget vs spending）',
							        		        type: 'radar',
							        		        // areaStyle: {normal: {}},
							        		        data : [
							        		            {
							        		                value : [4300, 10000, 28000, 35000, 50000, 19000],
							        		                name : '预算分配（Allocated Budget）'
							        		            },
							        		             {
							        		                value : [5000, 14000, 28000, 31000, 42000, 21000],
							        		                name : '实际开销（Actual Spending）'
							        		            }
							        		        ]
							        		    }]
							        		};
							         echartRadar.setOption(echartRadarOption);
							      
///雷达-2
							         var echartRadar1 = echarts.init(document.getElementById('echart-radar1'));
							         echartRadar1Option = {
							        		    title: {
							        		        text: '浏览器占比变化',
							        		        subtext: '纯属虚构',
							        		        x:'right',
							        		        y:'bottom'
							        		    },
							        		    tooltip: {
							        		        trigger: 'item',
							        		        backgroundColor : 'rgba(0,0,250,0.2)'
							        		    },
							        		    legend: {
							        		        data: (function (){
							        		            var list = [];
							        		            for (var i = 1; i <=28; i++) {
							        		                list.push(i + 2000);
							        		            }
							        		            return list;
							        		        })()
							        		    },
							        		    visualMap: {
							        		        color: ['red', 'yellow']
							        		    },
							        		    radar: {
							        		       indicator : [
							        		           { text: 'IE8-', max: 400},
							        		           { text: 'IE9+', max: 400},
							        		           { text: 'Safari', max: 400},
							        		           { text: 'Firefox', max: 400},
							        		           { text: 'Chrome', max: 400}
							        		        ]
							        		    },
							        		    series : (function (){
							        		        var series = [];
							        		        for (var i = 1; i <= 28; i++) {
							        		            series.push({
							        		                name:'浏览器（数据纯属虚构）',
							        		                type: 'radar',
							        		                symbol: 'none',
							        		                itemStyle: {
							        		                    normal: {
							        		                        lineStyle: {
							        		                          width:1
							        		                        }
							        		                    },
							        		                    emphasis : {
							        		                        areaStyle: {color:'rgba(0,250,0,0.3)'}
							        		                    }
							        		                },
							        		                data:[
							        		                  {
							        		                    value:[
							        		                        (40 - i) * 10,
							        		                        (38 - i) * 4 + 60,
							        		                        i * 5 + 10,
							        		                        i * 9,
							        		                        i * i /2
							        		                    ],
							        		                    name:i + 2000
							        		                  }
							        		                ]
							        		            });
							        		        }
							        		        return series;
							        		    })()
							        		};
							         echartRadar1.setOption(echartRadar1Option);
							         
///桑基-1
							         var echartSang = echarts.init(document.getElementById('echart-sang'));
							         echartSang.showLoading();
							         $.get('data/asset/data/product.json', function (data) {
							        	 echartSang.hideLoading();

							        	 echartSang.setOption(option = {
							                 title: {
							                     text: 'Sankey Diagram'
							                 },
							                 tooltip: {
							                     trigger: 'item',
							                     triggerOn: 'mousemove'

							                 },
							                 series: [
							                     {
							                         type: 'sankey',
							                         layout:'none',
							                         data: data.nodes,
							                         links: data.links,
							                         itemStyle: {
							                             normal: {
							                                 borderWidth: 1,
							                                 borderColor: '#aaa'
							                             }
							                         },
							                         lineStyle: {
							                             normal: {
							                                 curveness: 0.5
							                             }
							                         }
							                     }
							                 ]
							             });
							         });
							 
///漏斗-1
							         var echartFilter = echarts.init(document.getElementById('echart-filter'));
							         echarFilterOption = {
							        		    title: {
							        		        text: '漏斗图',
							        		        subtext: '纯属虚构'
							        		    },
							        		    tooltip: {
							        		        trigger: 'item',
							        		        formatter: "{a} <br/>{b} : {c}%"
							        		    },
							        		    toolbox: {
							        		        feature: {
							        		            dataView: {readOnly: false},
							        		            restore: {},
							        		            saveAsImage: {}
							        		        }
							        		    },
							        		    legend: {
							        		        data: ['展现','点击','访问','咨询','订单']
							        		    },
							        		    series: [
							        		        {
							        		            name: '预期',
							        		            type: 'funnel',
							        		            left: '10%',
							        		            width: '80%',
							        		            label: {
							        		                normal: {
							        		                    formatter: '{b}预期'
							        		                },
							        		                emphasis: {
							        		                    position:'inside',
							        		                    formatter: '{b}预期: {c}%'
							        		                }
							        		            },
							        		            labelLine: {
							        		                normal: {
							        		                    show: false
							        		                }
							        		            },
							        		            itemStyle: {
							        		                normal: {
							        		                    opacity: 0.7
							        		                }
							        		            },
							        		            data: [
							        		                {value: 60, name: '访问'},
							        		                {value: 40, name: '咨询'},
							        		                {value: 20, name: '订单'},
							        		                {value: 80, name: '点击'},
							        		                {value: 100, name: '展现'}
							        		            ]
							        		        },
							        		        {
							        		            name: '实际',
							        		            type: 'funnel',
							        		            left: '10%',
							        		            width: '80%',
							        		            maxSize: '80%',
							        		            label: {
							        		                normal: {
							        		                    position: 'inside',
							        		                    formatter: '{c}%',
							        		                    textStyle: {
							        		                        color: '#fff'
							        		                    }
							        		                },
							        		                emphasis: {
							        		                    position:'inside',
							        		                    formatter: '{b}实际: {c}%'
							        		                }
							        		            },
							        		            itemStyle: {
							        		                normal: {
							        		                    opacity: 0.5,
							        		                    borderColor: '#fff',
							        		                    borderWidth: 2
							        		                }
							        		            },
							        		            data: [
							        		                {value: 30, name: '访问'},
							        		                {value: 10, name: '咨询'},
							        		                {value: 5, name: '订单'},
							        		                {value: 50, name: '点击'},
							        		                {value: 80, name: '展现'}
							        		            ]
							        		        }
							        		    ]
							        		};

							         
///仪表盘-1
							         var echartBear = echarts.init(document.getElementById('echart-bear'));
							         echartBearOption = {
							        		    tooltip : {
							        		        formatter: "{a} <br/>{b} : {c}%"
							        		    },
							        		    toolbox: {
							        		        feature: {
							        		            restore: {},
							        		            saveAsImage: {}
							        		        }
							        		    },
							        		    series: [
							        		        {
							        		            name: '业务指标',
							        		            type: 'gauge',
							        		            detail: {formatter:'{value}%'},
							        		            data: [{value: 50, name: '完成率'}]
							        		        }
							        		    ]
							        		};

							        		setInterval(function () {
							        			echartBearOption.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
							        			echartBear.setOption(echartBearOption, true);
							        		},2000);
