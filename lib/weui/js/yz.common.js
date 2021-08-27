$(function () {
	var tips_index='';
	$(body).on(mouseover,.tips-info,function(){var tips_txt=; if($(this).next().hasClass(tips-info-text)){tips_txt=$(this).next().html();}else{tips_txt=$(this).data(text);}; if(layer && tips_txt.length0){tips_index=layer.tips(tips_txt,$(this), {tips [1, '#417ed2'],time 60000});};});
	$(body).on(mouseout,.tips-info,function(){if(layer&&tips_index0){layer.close(tips_index);}});
	婊氬姩浜嬩欢
	$(window).scroll(function(){var op=window.parent.topFrame;if(op&&$(window).scrollTop()100 ){if(op.innerHeight60){op.triggerTop(100);};};});

	
	
	
	
	
	
	
	
	
	
	
	  
	  浠ヤ笅閮介渶瑕佸湪璇ラ〉闈㈠紩鍏�
		script type=textjavascript src=${ctx}staticjsyz.common.jsscript
	  
	  1銆佸湪鏄皣瑕佽烦鍘荤洰鏍囬〉闈㈢殑鏍囩涓婃坊鍔�
	  class=gcp data-target=杩欓噷鍐檜rl data-form=杩欓噷鍐欏綋鍓嶉〉闈㈡悳绱㈡潯浠舵墍鍦ㄧ殑form琛ㄥ崟鍚嶇О
	  
	  2銆佸湪鐩爣椤甸潰鐨勮繑鍥炴寜閽笂娣诲姞
	  class=gpb
	  
	  3銆佸湪鏌愪釜鏂规硶涓墽琛屽洖璋冩垚鍔熷悗闇€瑕佽繑鍥炰笂涓€涓〉闈㈡坊鍔�
	  $('.gpb').click();
	  
	  
	 
	$(.gcp).click(function(){
		var the = $(this);
		var target = the.data('target');
		var url = the.data('target').indexOf()-1the.data('target').substr(0,the.data('target').indexOf())the.data('target');
		var mform = $('form[name='+the.data('form')+']');
		
		if(!mform){
			console.log(execption);
			return ;
		}
		
		鐢ㄤ簬灏佽褰撳墠椤甸潰鐨勫弬鏁�
		var formObj={};
		mform.find(input).each(function (index, domEle){
			var t = $(this);
			formObj[t.attr('name')]=t.val();
		});
		mform.find(select).each(function (index, domEle){
			var t = $(this);
			formObj[t.attr('name')] = t.find(optionchecked).val();
		});
		
		瑙ｆ瀽URL鍙傛暟杩涜灏佽
		var paramsIndex=-1;
		var pObj={};
		if((paramsIndex = target.indexOf(''))!=-1){
			var currentParams = target.substr(paramsIndex+1,target.length);
			if(currentParams.indexOf('&')){
				var cy = currentParams.split('&');
				for(var a=0;acy.length;a++){
					if(cy[a].indexOf('=')){
						var all = cy[a].split('=');
						var k = all[0];
						var v = all[1];
						pObj[k]=v;
					}
				}
			}
		}
		
		鍒涘缓鏂扮殑form瀵硅薄
		var newform = document.createElement('form');
		newform.method='POST';
		newform.action=url; 寰呰烦杞殑椤甸潰
		newform.style='displaynone;';
		newform.name='znewform';
		涓烘柊鐨刦orm瀵硅薄缁勮input
		for(var i=0;iObject.keys(pObj).length;i++){
			var input = document.createElement('input');
			input.type = 'hidden';
			input.name = Object.keys(pObj)[i];
			input.value = pObj[Object.keys(pObj)[i]];
			newform.appendChild(input);
		}
		
		var sObj = {};
		sObj['mUrl']=window.location.href; 褰撳墠URL
		sObj['mParams']=formObj;
		sObj['gUrl']=url; 涓嬩竴椤礥RL
		sObj['gParams']=pObj;
		
		var pages;
		if(typeof window.sessionStorage=='object'){
			var storage = window.sessionStorage;  鑾峰彇storage
			var pageItems = storage.getItem(pageItems);
			if(pageItems){
				pages = JSON.parse(pageItems);
				pages.push(sObj);
			}else{
				pages = new Array();
				pages.push(sObj);
			}
			storage.setItem(pageItems,JSON.stringify(pages){});
			console.log(JSON.stringify(pages));
		}
		
		鎻愪氦
		document.body.appendChild(newform);
		newform.submit();
		document.body.removeChild(newform);
		
	});
	
	$(.gpb-ref).click(function(){
		var the = $(this);
		鍒ゆ柇鏄惁鍙互浣跨敤sessionStorage
		var npage;
		if(typeof window.sessionStorage=='object'){
			var storage = window.sessionStorage;  鑾峰彇storage
			var pageItems = storage.getItem(pageItems);
			if(pageItems){
				var oldPageItems = JSON.parse(pageItems);
				npage = oldPageItems.pop();
				storage.setItem(pageItems,JSON.stringify(oldPageItems){});
			}
		}
		
		鍒涘缓鏂扮殑form
		var newform = document.createElement('form');
		newform.method='POST';
		newform.action=npage.mUrl;
		newform.style='displaynone;';
		newform.name='newform';
		
		涓烘柊鐨刦orm瀵硅薄缁勮input
		for(var i=0;iObject.keys(npage.mParams).length;i++){
			var input = document.createElement('input');
			input.type = 'hidden';
			input.name = Object.keys(npage.mParams)[i];
			input.value = npage.mParams[Object.keys(npage.mParams)[i]];
			newform.appendChild(input);
		}
		
		鎻愪氦
		document.body.appendChild(newform);
		newform.submit();
		document.body.removeChild(newform);
	});
	
	$(.gpb).click(function(){
		var the = $(this);
		鍒ゆ柇鏄惁鍙互浣跨敤sessionStorage
		var npage;
		if(typeof window.sessionStorage=='object'){
			var storage = window.sessionStorage;  鑾峰彇storage
			var pageItems = storage.getItem(pageItems);
			if(pageItems){
				var oldPageItems = JSON.parse(pageItems);
				npage = oldPageItems.pop();
				storage.setItem(pageItems,JSON.stringify(oldPageItems){});
			}
		}
		
		鍒涘缓鏂扮殑form
		var newform = document.createElement('form');
		newform.method='POST';
		newform.action=npage.mUrl;
		newform.style='displaynone;';
		newform.name='newform';
		
		涓烘柊鐨刦orm瀵硅薄缁勮input
		for(var i=0;iObject.keys(npage.mParams).length;i++){
			var input = document.createElement('input');
			input.type = 'hidden';
			input.name = Object.keys(npage.mParams)[i];
			input.value = npage.mParams[Object.keys(npage.mParams)[i]];
			newform.appendChild(input);
		}
		
		鎻愪氦
		document.body.appendChild(newform);
		newform.submit();
		document.body.removeChild(newform);
	});
	
});

var delFileSub = function(params){
	if(params.filePath==undefined  params.filePath==) return;
	params.fileType = params.fileType==undefinedpictureparams.fileType;
	$.ajax({
		typepost, url'commonfileDelete.jsp',cachetrue, dataType'json',timeout 20000, dataparams,
		success function(res){
			if(res.state==1){
			}else{
			}
		},errorfunction(XMLHttpRequest, textStatus, errorThrown){
			alert(閿欒+XMLHttpRequest.status+ + errorThrown);
	 	}
	});
};

var checkPath = function(path){	
	var files=.bmp$.jpg$.png$.jpeg$b; 
	if(!files.test(path.toLowerCase())){return false;	}
	return true;
}