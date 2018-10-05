new Vue({
	el: '#main',
	data: {
		mainheight : '100%',
		officeData : co_office,
		totalGroup : [],//所有处室分组（5组）
		totalGroupIndex : 0,//分组当中的第几组
		currentOfficeGroup : [],//当前分组处室职能数据，五个
		pageParam : {
			index : 0,
			name : ''
		}, //页面传过来的参数
		currentOffice : {},//当前处室职能
		currentGroupIndex : 0, //当前数据在分组中的索引
	},
	created : function(){
		var self = this;
		var	browserHeight = document.body.offsetHeight;
		var headerH = 148 + 12;
		var footerH = 52 + 12;
		var contentHeight = browserHeight - (headerH+footerH);
		self['mainheight'] = contentHeight;
		//获取参数
		self['pageParam']['index'] = Number(self.getParams()['index']);
		self['pageParam']['name'] = self.getParams()['name'];
		//查找分组数据
		self.getCurrentOfficeGroup(self['pageParam']['index'],self['pageParam']['name']);
	},
	methods : {
		//获取url参数
		getParams : function(){
			var params = {};
			var paramStr = location.search;
			if(paramStr){
				var urlArray = paramStr.split('?')[1].split('&');
				for(var i = 0;i < urlArray.length;i++){
					params[urlArray[i].split('=')[0]] = decodeURI(urlArray[i].split('=')[1]);
				}
			}
			return JSON.stringify(params) == "{}" ? null : params;
		},
		//获取当前处室职能
		getCurrentOfficeGroup : function(index,name){
			var self = this;
			//数据分组（0-4:一组、5-9：二组、10-14：三组、15-19：三组、20-24：四组）
			self['totalGroup'].push(self['officeData'].slice(0,5));
			self['totalGroup'].push(self['officeData'].slice(5,10));
			self['totalGroup'].push(self['officeData'].slice(10,15));
			self['totalGroup'].push(self['officeData'].slice(15,20));
			self['totalGroup'].push(self['officeData'].slice(20,25));
			if(index >= 0 && index <= 4){
				self['currentOfficeGroup'] = self['officeData'].slice(0,5);
				self['totalGroupIndex'] = 0;
			}else if(index >= 5 && index <= 9){
				self['currentOfficeGroup'] = self['officeData'].slice(5,10);
				self['totalGroupIndex'] = 1;
			}else if(index >= 10 && index <= 14){
				self['currentOfficeGroup'] = self['officeData'].slice(10,15);
				self['totalGroupIndex'] = 2;
			}else if(index >= 15 && index <= 19){
				self['currentOfficeGroup'] = self['officeData'].slice(15,20);
				self['totalGroupIndex'] = 3;
			}else if(index >= 20 && index <= 24){
				self['currentOfficeGroup'] = self['officeData'].slice(20,25);
				self['totalGroupIndex'] = 4;
			}
			//当前数据在分组中的索引
			for(var i = 0;i < self['currentOfficeGroup'].length;i++){
				if(self['currentOfficeGroup'][i]['name'].trim() == name){
					self['currentGroupIndex'] = i;
					self['currentOffice'] = self['currentOfficeGroup'][i];
					break;
				}
			}
		},
		//切换科室数据
		changeData : function(identify){
			var self = this;
			if(identify.__proto__.constructor == Number){
				self['currentGroupIndex'] = identify;
				self['currentOffice'] = self['currentOfficeGroup'][identify];
			}else if(identify == '-'){
				if(self['totalGroupIndex'] != 0){
					self['totalGroupIndex']-= 1;
					self['currentOffice'] = self['totalGroup'][self['totalGroupIndex']][0];
					self['currentOfficeGroup'] = self['totalGroup'][self['totalGroupIndex']];
					self['currentGroupIndex'] = 0;
				}
			}else if(identify == '+'){
				if(self['totalGroupIndex'] != 4){
					self['totalGroupIndex']+= 1;
					self['currentOffice'] = self['totalGroup'][self['totalGroupIndex']][0];
					self['currentOfficeGroup'] = self['totalGroup'][self['totalGroupIndex']];
					self['currentGroupIndex'] = 0;
				}
			}
		}
	}
});