new Vue({
	el: '#main',
	data: {
		mainheight : '100%',
		color: ['#2D89EF', '#00A300', '#99B433', '#B91D47', '#DA532C', '#034B8D', '#00BBE2', '#AA57AE', '#19AC5B', '#00AADE', '#66C010', '#603CBA'],
		officeData : co_office
	},
	created : function(){
		var self = this;
		var	browserHeight = document.body.offsetHeight;
		var headerH = 148 + 12;
		var footerH = 52 + 12;
		var contentHeight = browserHeight - (headerH+footerH);
		this['mainheight'] = contentHeight;
	},
	methods : {
		//办公室跳转
		officeDesc : function(index,identify){
			var name = identify.trim();
			location.href='officeDetail.html?index='+index+'&name='+name;
		},
		//去掉文字中的空格
		trimAll : function(str){
			var result;
		   	result = str.replace(/\s/g,"");
		    return result;
		}
	}
});

