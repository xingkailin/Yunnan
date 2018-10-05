new Vue({
	el: '#main',
	data: {
		mainheight : '100%',
		color: ['#2D89EF', '#00A300', '#99B433', '#B91D47', '#DA532C', '#034B8D', '#00BBE2', '#AA57AE', '#19AC5B', '#00AADE', '#66C010', '#603CBA'],
		workData : processData
	},
	created : function(){
		var	browserHeight = document.body.offsetHeight;
		var headerH = 148 + 12;
		var footerH = 52 + 12;
		var contentHeight = browserHeight - (headerH+footerH);
		this['mainheight'] = contentHeight;
	},
	methods : {
		//切换办事流程数据
		changePage : function(level1Index,level2Index){
			location.href='workDetail.html?level1='+level1Index+'&level2='+level2Index;
		}
	}
});