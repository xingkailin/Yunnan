//头部组件
Vue.component('i-header',{
    template : '\
               <header>\
				<div class="header-btns">\
					<div class="btn-index" @click="backIndex">\
						<div class="btn-text">首页</div>\
					</div>\
					<div class="btn-back" @click="window.history.back()">\
						<div class="btn-text">返回</div>\
					</div>\
				</div>\
			</header>\
			',
    props : ['isLogin','commentItemId','commentType','commentAction'],
    methods : {
        //跳转首页
        backIndex : function(){
        	location.href = 'index.html';
        }
    }
});

//底部组件
Vue.component('i-footer',{
   template : '<footer>{{footerContent}}</footer>',
   props : ['footerContent'],
});