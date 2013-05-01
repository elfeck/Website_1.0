$(document).ready(function() {
	$("#nl_1").click(function(event) {
		activate(document.getElementById("nl_1"), document.getElementById("ni_1"));
	});
	$("#nl_2").click(function(event) {
		activate(document.getElementById("nl_2"), document.getElementById("ni_2"));
	});
	$("#nl_3").click(function(event) {
		activate(document.getElementById("nl_3"), document.getElementById("ni_3"));
	});
	$("#nl_4").click(function(event) {
		activate(document.getElementById("nl_4"), document.getElementById("ni_4"));
	});
	$("#nl_5").click(function(event) {
		activate(document.getElementById("nl_5"), document.getElementById("ni_5"));
	});
	$("#nl_6").click(function(event) {
		activate(document.getElementById("nl_6"), document.getElementById("ni_6"));
	});
});

var activate = function(navi_link, navi_img) {
	$(navi_link).removeClass("navi_link_inactive");
	$(navi_link).addClass("navi_link_active");
	
	$(navi_img).removeClass("navi_img_inactive");
	$(navi_img).addClass("navi_img_active");
};

var deactive = function(navi_link, navi_img) {
	$(navi_link).removeClass("navi_link_active");
	$(navi_link).addClass("navi_link_inactive");
	
	$(navi_img).removeClass("navi_img_active");
	$(navi_img).addClass("navi_img_inactive");
};