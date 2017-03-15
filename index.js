
function setTextAll(selector,text){
	var myArray = document.querySelectorAll(selector);
	myArray.forEach(function(item,yy,iii){
		item.innerHTML = text;
	});
};

setTextAll("p","New text")
