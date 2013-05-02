var listElements = new Array(6);

$(document).ready(function() {
	for(var i = 0; i < listElements.length; i++) {
		listElements[i] = new ListElement(i + 1);
		register(listElements[i]);
	}
	listElements[0].activated = true;
});

function register(listElement) {
	$(listElement.getLinkElementString()).on("click", function(event) {
		listElement.activate();
	});
	$(listElement.getLinkElementString()).on("mouseenter", function(event) {
		//TODO
	});
	$(listElement.getLinkElementString()).on("mouseleave", function(event) {
		//TODO
	});
};

function ListElement(index) {
	this.index = index;
	this.activated = false;
		
	this.getLinkElementString = function getLinkElementString() {
		return "#nl_" + this.index;
	};
	this.getImgElementString = function getImgElementString() {
		return "#ni_" + this.index;
	};
	this.getLinkElement = function getLinkElement() {
		return document.getElementById(this.getLinkElementString());
	};
	this.getImgElement = function getImgElement() {			
		return document.getElementById(this.getImgElementString());
	};
	this.activate = function activate() {
		for(var i = 0; i < listElements.length; i++) {
			if(listElements[i].activated) {
				listElements[i].activated = false;
				listElements[i].deactivate();
			}
		}
		$(this.getLinkElementString()).attr("class", "navi_link_active");
		$(this.getImgElementString()).attr("class", "navi_img_active");
		this.activated = true;
	};
	this.deactivate = function deactivate() {
		$(this.getLinkElementString()).attr("class", "navi_link_inactive");
		$(this.getImgElementString()).attr("class", "navi_img_inactive");
	};
};