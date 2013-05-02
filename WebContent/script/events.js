var listElements = new Array(7);

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
		listElement.lightOff();
	});
	$(listElement.getLinkElementString()).on("mouseleave", function(event) {
		listElement.lightOn();
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
		$(this.getLinkElementString()).removeClass("navi_link_inactive");
		$(this.getImgElementString()).removeClass("navi_img_inactive");
		$(this.getLinkElementString()).addClass("navi_link_active");
		$(this.getImgElementString()).addClass("navi_img_active");
		this.activated = true;
	};
	this.deactivate = function deactivate() {
		$(this.getLinkElementString()).removeClass("navi_link_active");
		$(this.getImgElementString()).removeClass("navi_img_active");
		$(this.getLinkElementString()).addClass("navi_link_inactive");
		$(this.getImgElementString()).addClass("navi_img_inactive");
	};
	this.lightOn = function lightOn() {
		$(this.getLinkElementString()).removeClass("navi_link_dark");
		$(this.getLinkElementString()).addClass("navi_link_light");
	};
	this.lightOff = function lightOff() {
		$(this.getLinkElementString()).removeClass("navi_link_light");
		$(this.getLinkElementString()).addClass("navi_link_dark");
	};
};