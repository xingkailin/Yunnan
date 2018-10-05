var app = new Vue({
	el: '#main',
	data: {
		mainheight : '100%',
		workData : processData,
		level1Index : 0,//一级分类索引
		title : '',//标题
		level2Index : 0, //二级分类索引
		leftLists : [], //左侧类目
		rightContent : {} //当前二级分类数
	},
	created : function(){
		var	browserHeight = document.body.offsetHeight;
		var headerH = 148;
		var footerH = 52;
		var contentHeight = browserHeight - (148+52);
		var self = this;
		self['mainheight'] = contentHeight;
		self['level1Index'] = self.getParams()['level1'];
		self['level2Index'] = self.getParams()['level2'] != 'null' ? self.getParams()['level2'] : 0;
		self['title'] = self['workData'][self['level1Index']]['title'];
		//得到左侧列表
		for(var i = 0; i < self['workData'][self['level1Index']]['level2'].length;i++){
			self['leftLists'].push(self['workData'][self['level1Index']]['level2'][i]['title']);
			if(i == self['level2Index']){
				self['rightContent'] = self['workData'][self['level1Index']]['level2'][i];
			}
		}
		//组织表格数据
		
	},
	methods : {
		//获取url参数
		getParams : function(){
			var params = {};
			var paramStr = location.search;
			if(paramStr){
				var urlArray = paramStr.split('?')[1].split('&');
				for(var i = 0;i < urlArray.length;i++){
					params[urlArray[i].split('=')[0]] = urlArray[i].split('=')[1];
				}
			}
			return JSON.stringify(params) == "{}" ? null : params;
		},
		//切换二级分类数据
		changeLevel2 : function(level2Index){
			var self = this;
			self['level2Index'] = level2Index;
			for(var i = 0; i < self['workData'][self['level1Index']]['level2'].length;i++){
				if(i == self['level2Index']){
					self['rightContent'] = self['workData'][self['level1Index']]['level2'][i];
				}
			}
		}
	}
});