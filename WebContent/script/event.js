var listElements = new Array(7);

$(document).ready(function() {
	for ( var i = 0; i < listElements.length; i++) {
		listElements[i] = new ListElement(i);
		register(listElements[i]);
	}
	init();
});

function init() {
	listElements[0].activate();
	listElements[0].highlightOn();
}

function register(listElement) {
	$(listElement.getLinkElementString()).on("click", function(event) {
		listElement.activate();
	});
	$(listElement.getLinkElementString()).on("mouseenter", function(event) {
		// listElement.highlightOn();
	});
	$(listElement.getLinkElementString()).on("mouseleave", function(event) {
		// listElement.highlightOff();
	});
};

/*
 * $(content).hide().appendTo(parent).fadeIn(200); $(ID).fadeOut(200, function() {
 * $(this).remove(); });
 */