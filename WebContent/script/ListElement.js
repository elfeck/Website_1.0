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
		if (!this.activated) {
			for ( var i = 0; i < listElements.length; i++) {
				if (listElements[i].activated) {
					listElements[i].deactivate();
				}
			}
			$(this.getLinkElementString()).removeClass("navi_link_inactive");
			$(this.getImgElementString()).removeClass("navi_img_inactive");
			$(this.getLinkElementString()).addClass("navi_link_active");
			$(this.getImgElementString()).addClass("navi_img_active");
			// element fadeIn
			this.activated = true;
		}
	};
	this.deactivate = function deactivate() {
		if (this.activated) {
			$(this.getLinkElementString()).removeClass("navi_link_active");
			$(this.getImgElementString()).removeClass("navi_img_active");
			$(this.getLinkElementString()).addClass("navi_link_inactive");
			$(this.getImgElementString()).addClass("navi_img_inactive");
			// element fadeOut
			this.activated = false;
			this.highlightOff();
		}
	};
	this.highlightOn = function highlightOn() {
		$(this.getLinkElementString()).removeClass("navi_highlightOff");
		$(this.getLinkElementString()).addClass("navi_highlightOn");
	};
	this.highlightOff = function highlightOff() {
		if (!this.activated) {
			$(this.getLinkElementString()).removeClass("navi_highlightOn");
			$(this.getLinkElementString()).addClass("navi_highlightOff");
		}
	};
};