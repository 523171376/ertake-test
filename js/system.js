function $(selector){
	var nodeLi = document.querySelectorAll(selector);
	if(nodeLi && nodeLi.length>1){
		return nodeLi;
	}else if(nodeLi.length==1){
		return nodeLi[0];
	}
	return undefined;
}
if(HTMLElement){
	HTMLElement.prototype.html = function(){
		if(arguments[0]){
			this.innerHTML = arguments[0];
		}
		return this.innerHTML;
	}
	HTMLElement.prototype.bindClick = function(fn, capture){
        if (addEventListener) {
            this.addEventListener("click", function(e) {
                fn.call(this, e);
            }, capture);
        } else if (attachEvent) {
            this.attachEvent("onclick", function(e) {
                fn.call(this, e);
            });
        } 
	}
}
NodeList.prototype.html = function(){
	var str ='';
	this.forEach(function(v,i){
		str += v.innerHTML + ',';
	});
	str = str.substr(0,str.length-1);
	return str;
}