function setSelector(selector,text){
	var text;
	var tag = document.querySelector(selector);
	tag.innerText = text;
}
setSelector("p","Hello world")



